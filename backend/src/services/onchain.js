// On-chain DID registration using DIDRegistry contract
import { ethers } from 'ethers';
import dotenv from 'dotenv';

dotenv.config();

// DIDRegistry ABI (registerOrUpdateDID 함수만 포함)
const DID_REGISTRY_ABI = [
  {
    inputs: [
      { name: 'userCommit', type: 'bytes32' },
      { name: 'isAdult', type: 'bool' },
      { name: 'gender', type: 'uint8' },
      { name: 'countryCommit', type: 'bytes32' },
    ],
    name: 'registerOrUpdateDID',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'issuer',
    outputs: [{ name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
];

/**
 * DID를 온체인에 등록/업데이트
 * @param {Object} params
 * @param {string} params.userCommit - bytes32 hex string (0x...)
 * @param {boolean} params.isAdult - 만 19세 여부
 * @param {number} params.gender - 0: unknown, 1: male, 2: female, 3: other
 * @param {string} params.countryCommit - bytes32 hex string (0x...)
 * @returns {Promise<{txHash: string, blockNumber?: number}>}
 */
export async function registerOrUpdateDIDOnChain({
  userCommit,
  isAdult,
  gender,
  countryCommit,
}) {
  try {
    console.log('[onchain] registerOrUpdateDID 시작:', {
      userCommit,
      isAdult,
      gender,
      countryCommit,
    });

    // 환경 변수 확인
    const didRegistryAddress = process.env.DID_REGISTRY_ADDRESS;
    const issuerPrivateKey = process.env.ISSUER_PRIVATE_KEY;
    const rpcUrl = process.env.RPC_URL || 'https://rpc.formicarium.memecore.net';

    if (!didRegistryAddress) {
      throw new Error('DID_REGISTRY_ADDRESS 환경 변수가 설정되지 않았습니다.');
    }

    if (!issuerPrivateKey) {
      throw new Error(
        'ISSUER_PRIVATE_KEY 환경 변수가 설정되지 않았습니다. Issuer 권한이 있는 지갑의 Private Key를 설정해주세요.'
      );
    }

    // Provider 생성 (Formicarium Testnet)
    const provider = new ethers.JsonRpcProvider(rpcUrl);
    console.log('[onchain] Provider 생성 완료:', rpcUrl);

    // Issuer 지갑 생성
    const wallet = new ethers.Wallet(issuerPrivateKey, provider);
    const issuerAddress = wallet.address;
    console.log('[onchain] Issuer 지갑 주소:', issuerAddress);

    // 컨트랙트 인스턴스 생성
    const contract = new ethers.Contract(didRegistryAddress, DID_REGISTRY_ABI, wallet);
    console.log('[onchain] 컨트랙트 인스턴스 생성 완료:', didRegistryAddress);

    // 컨트랙트의 issuer 확인
    const contractIssuer = await contract.issuer();
    console.log('[onchain] 컨트랙트 Issuer:', contractIssuer);
    
    if (contractIssuer.toLowerCase() !== issuerAddress.toLowerCase()) {
      throw new Error(
        `Issuer 주소가 일치하지 않습니다. 컨트랙트: ${contractIssuer}, 지갑: ${issuerAddress}`
      );
    }

    // 파라미터 변환 (hex string을 bytes32로 변환)
    // userCommit과 countryCommit은 이미 hex string (0x...)
    // ethers.js는 hex string을 자동으로 bytes32로 변환합니다
    const userCommitBytes32 = userCommit.startsWith('0x') ? userCommit : `0x${userCommit}`;
    const countryCommitBytes32 = countryCommit.startsWith('0x') ? countryCommit : `0x${countryCommit}`;

    console.log('[onchain] 트랜잭션 전송 준비:', {
      userCommit: userCommitBytes32,
      isAdult,
      gender,
      countryCommit: countryCommitBytes32,
    });

    // 트랜잭션 전송
    const tx = await contract.registerOrUpdateDID(
      userCommitBytes32,
      isAdult,
      gender,
      countryCommitBytes32
    );
    console.log('[onchain] 트랜잭션 전송됨:', tx.hash);

    // 트랜잭션 대기
    const receipt = await tx.wait();
    console.log('[onchain] 트랜잭션 완료:', {
      hash: receipt.hash,
      blockNumber: receipt.blockNumber,
      gasUsed: receipt.gasUsed.toString(),
    });

    return {
      txHash: receipt.hash,
      blockNumber: receipt.blockNumber,
      gasUsed: receipt.gasUsed.toString(),
    };
  } catch (error) {
    console.error('[onchain] DID 등록 실패:', error);
    throw error;
  }
}

