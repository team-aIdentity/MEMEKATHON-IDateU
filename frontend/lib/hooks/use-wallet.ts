// 지갑 연결 관련 Hook

import { useState, useEffect, useCallback } from 'react';
import type { WalletConnectionState, WalletInfo, TokenBalance } from '@/lib/types/wallet';
import {
  connectWallet,
  getCurrentWalletAddress,
  getChainId,
  addMemeCoreNetwork,
  getNativeBalance,
  MEMECORE_NETWORK,
} from '@/lib/utils/wallet';
import { isMemeCoreNetwork } from '@/lib/utils/memecore';

/**
 * 지갑 연결 상태를 관리하는 Hook
 */
export function useWallet() {
  const [connectionState, setConnectionState] = useState<WalletConnectionState>({
    isConnected: false,
    address: null,
    walletType: null,
    isConnecting: false,
    chainId: null,
  });

  // 초기 로드 시 지갑 연결 상태 확인
  useEffect(() => {
    checkWalletConnection();
    
    // 지갑 이벤트 리스너 등록
    if (typeof window !== 'undefined' && window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', handleChainChanged);

      return () => {
        window.ethereum?.removeListener('accountsChanged', handleAccountsChanged);
        window.ethereum?.removeListener('chainChanged', handleChainChanged);
      };
    }
  }, []);

  /**
   * 지갑 연결 상태 확인
   */
  const checkWalletConnection = useCallback(async () => {
    try {
      const address = await getCurrentWalletAddress();
      const chainId = await getChainId();

      setConnectionState({
        isConnected: !!address,
        address,
        walletType: address ? 'metamask' : null,
        isConnecting: false,
        chainId,
      });
    } catch (error) {
      setConnectionState({
        isConnected: false,
        address: null,
        walletType: null,
        isConnecting: false,
        chainId: null,
      });
    }
  }, []);

  /**
   * 지갑 연결
   */
  const connect = useCallback(async () => {
    setConnectionState(prev => ({ ...prev, isConnecting: true }));

    try {
      // MemeCore 네트워크 추가 시도
      await addMemeCoreNetwork();

      const address = await connectWallet();
      const chainId = await getChainId();

      setConnectionState({
        isConnected: !!address,
        address,
        walletType: address ? 'metamask' : null,
        isConnecting: false,
        chainId,
      });

      return address;
    } catch (error) {
      setConnectionState(prev => ({
        ...prev,
        isConnecting: false,
      }));
      throw error;
    }
  }, []);

  /**
   * 지갑 연결 해제
   */
  const disconnect = useCallback(() => {
    setConnectionState({
      isConnected: false,
      address: null,
      walletType: null,
      isConnecting: false,
      chainId: null,
    });
  }, []);

  /**
   * 계정 변경 핸들러
   */
  const handleAccountsChanged = useCallback((accounts: string[]) => {
    if (accounts.length === 0) {
      disconnect();
    } else {
      checkWalletConnection();
    }
  }, [disconnect, checkWalletConnection]);

  /**
   * 체인 변경 핸들러
   */
  const handleChainChanged = useCallback(() => {
    checkWalletConnection();
  }, [checkWalletConnection]);

  /**
   * MemeCore 네트워크로 전환
   */
  const switchToMemeCore = useCallback(async () => {
    try {
      await addMemeCoreNetwork();
      await checkWalletConnection();
    } catch (error) {
      throw error;
    }
  }, [checkWalletConnection]);

  /**
   * MemeCore 네트워크 연결 여부 확인
   */
  const isConnectedToMemeCore = isMemeCoreNetwork(connectionState.chainId);

  return {
    ...connectionState,
    connect,
    disconnect,
    switchToMemeCore,
    refresh: checkWalletConnection,
    isConnectedToMemeCore,
  };
}

