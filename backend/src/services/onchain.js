// On-chain service for DIDRegistry and ItemPayment contracts
import { ethers } from "ethers";

// Contract ABIs (minimal, only required functions)
const DID_REGISTRY_ABI = [
  "function registerOrUpdateDID(bytes32 userCommit, bool isAdult, uint8 gender, bytes32 countryCommit) external",
  "function didOf(bytes32 userCommit) view returns (bool isAdult, uint8 gender, bytes32 countryCommit, uint64 issuedAt)",
  "function issuer() view returns (address)",
  "event DIDRegistered(bytes32 indexed userCommit, bool isAdult, uint8 gender, bytes32 countryCommit)",
];

const ITEM_PAYMENT_ABI = [
  "function itemPrice(uint8 itemId) view returns (uint256)",
  "function buyItem(uint8 itemId) external payable",
  "event ItemPurchased(address indexed buyer, uint8 indexed itemId, uint256 price)",
];

// Configuration from environment
const RPC_URL = process.env.RPC_URL || "https://rpc.formicarium.memecore.net";
const CHAIN_ID = parseInt(process.env.CHAIN_ID || "43521", 10);
const DID_REGISTRY_ADDRESS = process.env.DID_REGISTRY_ADDRESS || "0x526764626f9b83B5A2FcDac5Dbd921E3b7d24E21";
const ITEM_PAYMENT_ADDRESS = process.env.ITEM_PAYMENT_ADDRESS || "0x91B6Ff86A7f065343BcCdfFf3cDE193443C9F9f2";
const ISSUER_PRIVATE_KEY = process.env.ISSUER_PRIVATE_KEY;

// Provider and Wallet setup
let provider = null;
let wallet = null;
let didRegistry = null;
let itemPayment = null;

/**
 * Initialize blockchain connections
 */
function initializeProvider() {
  if (provider) return;

  try {
    provider = new ethers.JsonRpcProvider(RPC_URL, {
      chainId: CHAIN_ID,
      name: "formicarium-testnet",
    });

    console.log(`[onchain] Connected to RPC: ${RPC_URL} (chainId: ${CHAIN_ID})`);

    // Initialize wallet if private key is available
    if (ISSUER_PRIVATE_KEY && ISSUER_PRIVATE_KEY !== "your_private_key_here") {
      wallet = new ethers.Wallet(ISSUER_PRIVATE_KEY, provider);
      console.log(`[onchain] Issuer wallet: ${wallet.address}`);

      // Initialize contracts with signer
      didRegistry = new ethers.Contract(DID_REGISTRY_ADDRESS, DID_REGISTRY_ABI, wallet);
      itemPayment = new ethers.Contract(ITEM_PAYMENT_ADDRESS, ITEM_PAYMENT_ABI, wallet);
    } else {
      console.warn("[onchain] ISSUER_PRIVATE_KEY not set - running in read-only mode");
      // Initialize contracts with provider only (read-only)
      didRegistry = new ethers.Contract(DID_REGISTRY_ADDRESS, DID_REGISTRY_ABI, provider);
      itemPayment = new ethers.Contract(ITEM_PAYMENT_ADDRESS, ITEM_PAYMENT_ABI, provider);
    }
  } catch (error) {
    console.error("[onchain] Failed to initialize provider:", error.message);
    throw error;
  }
}

/**
 * Ensure provider is initialized
 */
function ensureInitialized() {
  if (!provider) {
    initializeProvider();
  }
}

/**
 * Register or update DID on-chain
 * @param {Object} params
 * @param {string} params.userCommit - bytes32 hex string
 * @param {boolean} params.isAdult
 * @param {number} params.gender - 0: unknown, 1: male, 2: female, 3: other
 * @param {string} params.countryCommit - bytes32 hex string
 * @returns {Promise<{txHash: string, success: boolean}>}
 */
export async function registerOrUpdateDIDOnChain({ userCommit, isAdult, gender, countryCommit }) {
  ensureInitialized();

  console.log("[onchain] registerOrUpdateDID", { userCommit, isAdult, gender, countryCommit });

  // Check if wallet is available (need private key for write operations)
  if (!wallet) {
    console.warn("[onchain] No wallet configured - returning mock response");
    return {
      txHash: null,
      success: false,
      mock: true,
      error: "ISSUER_PRIVATE_KEY not configured",
    };
  }

  try {
    // Ensure userCommit and countryCommit are proper bytes32
    const userCommitBytes32 = ethers.zeroPadValue(userCommit.startsWith("0x") ? userCommit : `0x${userCommit}`, 32);
    const countryCommitBytes32 = ethers.zeroPadValue(
      countryCommit.startsWith("0x") ? countryCommit : `0x${countryCommit}`,
      32
    );

    console.log("[onchain] Sending transaction...", {
      userCommit: userCommitBytes32,
      isAdult,
      gender,
      countryCommit: countryCommitBytes32,
    });

    const tx = await didRegistry.registerOrUpdateDID(userCommitBytes32, isAdult, gender, countryCommitBytes32);

    console.log("[onchain] Transaction sent:", tx.hash);

    // Wait for transaction confirmation
    const receipt = await tx.wait();
    console.log("[onchain] Transaction confirmed:", receipt.hash, "Block:", receipt.blockNumber);

    return {
      txHash: receipt.hash,
      blockNumber: receipt.blockNumber,
      success: true,
    };
  } catch (error) {
    console.error("[onchain] registerOrUpdateDID failed:", error.message);

    // Return error details for debugging
    return {
      txHash: null,
      success: false,
      error: error.message,
      code: error.code,
    };
  }
}

/**
 * Get DID info from chain
 * @param {string} userCommit - bytes32 hex string
 */
export async function getDIDInfo(userCommit) {
  ensureInitialized();

  try {
    const userCommitBytes32 = ethers.zeroPadValue(userCommit.startsWith("0x") ? userCommit : `0x${userCommit}`, 32);
    const info = await didRegistry.didOf(userCommitBytes32);

    return {
      isAdult: info.isAdult,
      gender: Number(info.gender),
      countryCommit: info.countryCommit,
      issuedAt: Number(info.issuedAt),
      exists: Number(info.issuedAt) > 0,
    };
  } catch (error) {
    console.error("[onchain] getDIDInfo failed:", error.message);
    return null;
  }
}

/**
 * Get item price from ItemPayment contract
 * @param {number} itemId
 */
export async function getItemPrice(itemId) {
  ensureInitialized();

  try {
    const price = await itemPayment.itemPrice(itemId);
    return {
      priceWei: price.toString(),
      priceEther: ethers.formatEther(price),
    };
  } catch (error) {
    console.error("[onchain] getItemPrice failed:", error.message);
    return null;
  }
}

/**
 * Check if issuer wallet is properly configured and has the issuer role
 */
export async function checkIssuerStatus() {
  ensureInitialized();

  try {
    const contractIssuer = await didRegistry.issuer();
    const isConfigured = !!wallet;
    const isIssuer = wallet ? contractIssuer.toLowerCase() === wallet.address.toLowerCase() : false;

    let balance = null;
    if (wallet) {
      const balanceWei = await provider.getBalance(wallet.address);
      balance = ethers.formatEther(balanceWei);
    }

    return {
      contractIssuer,
      walletAddress: wallet?.address || null,
      isConfigured,
      isIssuer,
      balance,
    };
  } catch (error) {
    console.error("[onchain] checkIssuerStatus failed:", error.message);
    return {
      error: error.message,
      isConfigured: !!wallet,
      isIssuer: false,
    };
  }
}

// Initialize on module load
try {
  initializeProvider();
} catch (error) {
  console.error("[onchain] Initial setup failed:", error.message);
}
