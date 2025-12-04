// 지갑 관련 타입 정의

/**
 * 지갑 타입
 */
export type WalletType = 'metamask' | 'walletconnect' | 'coinbase' | 'other';

/**
 * 지갑 연결 상태
 */
export interface WalletConnectionState {
  /** 연결 여부 */
  isConnected: boolean;
  /** 지갑 주소 */
  address: string | null;
  /** 지갑 타입 */
  walletType: WalletType | null;
  /** 연결 중 여부 */
  isConnecting: boolean;
  /** 네트워크 ID */
  chainId: number | null;
}

/**
 * MemeCore 네트워크 정보
 */
export interface MemeCoreNetwork {
  /** 체인 ID */
  chainId: number;
  /** 체인 이름 */
  chainName: string;
  /** 네이티브 통화 */
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  /** RPC URL */
  rpcUrls: string[];
  /** 블록 익스플로러 URL */
  blockExplorerUrls: string[];
}

/**
 * 토큰 정보
 */
export interface TokenInfo {
  /** 토큰 주소 */
  address: string;
  /** 토큰 심볼 */
  symbol: string;
  /** 토큰 이름 */
  name: string;
  /** 소수점 자릿수 */
  decimals: number;
  /** 로고 URL */
  logoUrl?: string;
  /** 가격 (USD) */
  priceUsd?: number;
}

/**
 * 토큰 잔액
 */
export interface TokenBalance {
  /** 토큰 정보 */
  token: TokenInfo;
  /** 잔액 (원시 값) */
  balance: string;
  /** 잔액 (포맷된 값) */
  balanceFormatted: string;
  /** USD 가치 */
  valueUsd?: number;
}

/**
 * 지갑 정보
 */
export interface WalletInfo {
  /** 지갑 주소 */
  address: string;
  /** 지갑 타입 */
  walletType: WalletType;
  /** 연결된 네트워크 */
  network: MemeCoreNetwork;
  /** 네이티브 토큰 잔액 */
  nativeBalance: TokenBalance;
  /** ERC-20 토큰 잔액 목록 */
  tokenBalances: TokenBalance[];
}

/**
 * 트랜잭션 요청
 */
export interface TransactionRequest {
  /** 대상 주소 */
  to: string;
  /** 전송할 값 (ETH) */
  value?: string;
  /** 데이터 */
  data?: string;
  /** 가스 한도 */
  gasLimit?: string;
  /** 가스 가격 */
  gasPrice?: string;
}

/**
 * 트랜잭션 응답
 */
export interface TransactionResponse {
  /** 트랜잭션 해시 */
  txHash: string;
  /** 블록 번호 */
  blockNumber?: number;
  /** 상태 (0: 실패, 1: 성공) */
  status?: number;
}

