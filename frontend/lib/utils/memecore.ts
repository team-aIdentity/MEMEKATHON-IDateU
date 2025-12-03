// MemeCore 네트워크 관련 유틸리티

import { MEMECORE_NETWORK, MEMECORE_TESTNET_INFO } from './wallet';

/**
 * MemeCore 테스트넷 정보 가져오기
 */
export function getMemeCoreTestnetInfo() {
  return MEMECORE_TESTNET_INFO;
}

/**
 * Faucet URL 가져오기
 */
export function getFaucetUrl(): string {
  return MEMECORE_TESTNET_INFO.faucet;
}

/**
 * 블록 탐색기에서 주소 보기
 */
export function getExplorerAddressUrl(address: string): string {
  return `${MEMECORE_TESTNET_INFO.blockExplorer}address/${address}`;
}

/**
 * 블록 탐색기에서 트랜잭션 보기
 */
export function getExplorerTxUrl(txHash: string): string {
  return `${MEMECORE_TESTNET_INFO.blockExplorer}tx/${txHash}`;
}

/**
 * MemeCore 네트워크가 올바르게 연결되었는지 확인
 */
export function isMemeCoreNetwork(chainId: number | null): boolean {
  return chainId === MEMECORE_NETWORK.chainId;
}

/**
 * 네트워크 정보를 사용자 친화적인 형식으로 표시
 */
export function formatNetworkInfo() {
  return {
    name: MEMECORE_TESTNET_INFO.name,
    chainId: MEMECORE_TESTNET_INFO.chainId,
    symbol: MEMECORE_NETWORK.nativeCurrency.symbol,
    explorer: MEMECORE_TESTNET_INFO.blockExplorer,
    faucet: MEMECORE_TESTNET_INFO.faucet,
  };
}

