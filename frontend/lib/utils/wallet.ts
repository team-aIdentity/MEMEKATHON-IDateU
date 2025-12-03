// 지갑 관련 유틸리티 함수

import type { MemeCoreNetwork, TokenInfo } from '@/lib/types/wallet';

/**
 * MemeCore 테스트넷 네트워크 설정
 * Insectarium Testnet (Formicarium Testnet)
 */
export const MEMECORE_NETWORK: MemeCoreNetwork = {
  chainId: 43522,
  chainName: 'Insectarium Testnet',
  nativeCurrency: {
    name: 'MemeCore',
    symbol: 'M',
    decimals: 18,
  },
  rpcUrls: [
    'https://rpc.insectarium.memecore.net',
  ],
  blockExplorerUrls: [
    'https://insectarium.memecorescan.io/',
  ],
};

/**
 * MemeCore 테스트넷 추가 정보
 */
export const MEMECORE_TESTNET_INFO = {
  name: 'Insectarium Testnet',
  chainId: 43522,
  rpcUrl: 'https://rpc.insectarium.memecore.net',
  wsUrl: 'wss://ws.insectarium.memecore.net',
  blockExplorer: 'https://insectarium.memecorescan.io/',
  faucet: 'https://faucet.memecore.com/insectarium',
};

/**
 * 지갑에 MemeCore 네트워크 추가
 */
export async function addMemeCoreNetwork(): Promise<boolean> {
  if (typeof window === 'undefined' || !window.ethereum) {
    throw new Error('MetaMask가 설치되어 있지 않습니다.');
  }

  try {
    await window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [MEMECORE_NETWORK],
    });
    return true;
  } catch (error) {
    console.error('네트워크 추가 실패:', error);
    return false;
  }
}

/**
 * 지갑 연결
 */
export async function connectWallet(): Promise<string | null> {
  if (typeof window === 'undefined' || !window.ethereum) {
    throw new Error('MetaMask가 설치되어 있지 않습니다.');
  }

  try {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    return accounts[0] || null;
  } catch (error) {
    console.error('지갑 연결 실패:', error);
    return null;
  }
}

/**
 * 현재 연결된 지갑 주소 가져오기
 */
export async function getCurrentWalletAddress(): Promise<string | null> {
  if (typeof window === 'undefined' || !window.ethereum) {
    return null;
  }

  try {
    const accounts = await window.ethereum.request({
      method: 'eth_accounts',
    });
    return accounts[0] || null;
  } catch (error) {
    console.error('지갑 주소 조회 실패:', error);
    return null;
  }
}

/**
 * 네트워크 ID 가져오기
 */
export async function getChainId(): Promise<number | null> {
  if (typeof window === 'undefined' || !window.ethereum) {
    return null;
  }

  try {
    const chainId = await window.ethereum.request({
      method: 'eth_chainId',
    });
    return parseInt(chainId, 16);
  } catch (error) {
    console.error('체인 ID 조회 실패:', error);
    return null;
  }
}

/**
 * ERC-20 토큰 ABI (balanceOf만 포함)
 */
const ERC20_ABI = [
  {
    constant: true,
    inputs: [{ name: '_owner', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', type: 'uint256' }],
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', type: 'uint8' }],
    type: 'function',
  },
] as const;

/**
 * 토큰 잔액 조회 (ERC-20)
 */
export async function getTokenBalance(
  tokenAddress: string,
  walletAddress: string
): Promise<string> {
  if (typeof window === 'undefined' || !window.ethereum) {
    throw new Error('MetaMask가 설치되어 있지 않습니다.');
  }

  try {
    // ethers.js를 동적으로 import
    const { ethers } = await import('ethers');
    
    // Provider 생성
    const provider = new ethers.BrowserProvider(window.ethereum);
    
    // 컨트랙트 인스턴스 생성
    const contract = new ethers.Contract(tokenAddress, ERC20_ABI, provider);
    
    // 잔액 조회
    const balance = await contract.balanceOf(walletAddress);
    
    // decimals 조회
    const decimals = await contract.decimals();
    
    // 포맷된 잔액 반환 (소수점 제거)
    const formattedBalance = ethers.formatUnits(balance, decimals);
    
    return formattedBalance;
  } catch (error) {
    console.error('토큰 잔액 조회 실패:', error);
    throw error;
  }
}

/**
 * 토큰 전송 (ERC-20)
 */
export async function sendToken(
  tokenAddress: string,
  to: string,
  amount: string
): Promise<string> {
  if (typeof window === 'undefined' || !window.ethereum) {
    throw new Error('MetaMask가 설치되어 있지 않습니다.');
  }

  // 실제로는 Web3 라이브러리를 사용하여 전송
  // 여기서는 예시 구조만 제공
  
  throw new Error('구현 필요: Web3 라이브러리 연동');
}

/**
 * 네이티브 토큰 잔액 조회
 */
export async function getNativeBalance(walletAddress: string): Promise<string> {
  if (typeof window === 'undefined' || !window.ethereum) {
    throw new Error('MetaMask가 설치되어 있지 않습니다.');
  }

  try {
    const balance = await window.ethereum.request({
      method: 'eth_getBalance',
      params: [walletAddress, 'latest'],
    });
    return balance;
  } catch (error) {
    console.error('잔액 조회 실패:', error);
    throw error;
  }
}

// Window 타입 확장
declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: any[] }) => Promise<any>;
      on: (event: string, callback: (...args: any[]) => void) => void;
      removeListener: (event: string, callback: (...args: any[]) => void) => void;
    };
  }
}

