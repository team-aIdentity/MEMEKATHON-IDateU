import express from "express";
import auth from "../middleware/auth.js";
import { checkIssuerStatus, getDIDInfo } from "../services/onchain.js";

const router = express.Router();

// GET /me/did-status
router.get("/me/did-status", auth, async (req, res) => {
  const u = req.user;

  // Check on-chain status if DID is registered
  let onchainInfo = null;
  if (u.did_commit) {
    onchainInfo = await getDIDInfo(u.did_commit);
  }

  res.json({
    did_registered: Boolean(u.did_commit),
    did_commit: u.did_commit,
    is_adult: u.is_adult,
    gender: u.gender,
    country_code: u.country_code,
    onchain_status: u.did_commit ? "submitted" : "none",
    onchain_info: onchainInfo,
  });
});

// GET /status/chain - Check blockchain connection status
router.get("/status/chain", async (req, res) => {
  try {
    const status = await checkIssuerStatus();
    res.json({
      ok: true,
      network: {
        name: "Formicarium Testnet",
        chainId: parseInt(process.env.CHAIN_ID || "43521", 10),
        rpcUrl: process.env.RPC_URL || "https://rpc.formicarium.memecore.net",
      },
      contracts: {
        didRegistry: process.env.DID_REGISTRY_ADDRESS || "0x526764626f9b83B5A2FcDac5Dbd921E3b7d24E21",
        itemPayment: process.env.ITEM_PAYMENT_ADDRESS || "0x91B6Ff86A7f065343BcCdfFf3cDE193443C9F9f2",
      },
      issuer: status,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      error: error.message,
    });
  }
});

export default router;
