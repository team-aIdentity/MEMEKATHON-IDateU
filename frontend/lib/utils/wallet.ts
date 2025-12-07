// 지갑 관련 유틸리티 함수

import type { MemeCoreNetwork, TokenInfo } from '@/lib/types/wallet';

/**
 * MemeCore 테스트넷 네트워크 설정
 * Formicarium Testnet
 */
export const MEMECORE_NETWORK: MemeCoreNetwork = {
  chainId: 43521,
  chainName: 'Formicarium Testnet',
  nativeCurrency: {
    name: 'MemeCore',
    symbol: 'M',
    decimals: 18,
  },
  rpcUrls: [
    'https://rpc.formicarium.memecore.net',
  ],
  blockExplorerUrls: [
    'https://formicarium.memecorescan.io/',
  ],
};

/**
 * MemeCore 테스트넷 추가 정보
 */
export const MEMECORE_TESTNET_INFO = {
  name: 'Formicarium Testnet',
  chainId: 43521,
  rpcUrl: 'https://rpc.formicarium.memecore.net',
  wsUrl: 'wss://ws.formicarium.memecore.net',
  blockExplorer: 'https://formicarium.memecorescan.io/',
  faucet: 'https://faucet.memecore.com/formicarium',
};

/**
 * 지갑에 MemeCore 네트워크 추가
 */
export async function addMemeCoreNetwork(): Promise<boolean> {
  if (typeof window === 'undefined' || !window.ethereum) {
    throw new Error('MetaMask가 설치되어 있지 않습니다.');
  }

  try {
    // 먼저 현재 체인 ID 확인
    const currentChainId = await getChainId();
    if (currentChainId === MEMECORE_NETWORK.chainId) {
      // 이미 올바른 네트워크에 연결되어 있음
      return true;
    }

    // chainId를 0x 접두사가 있는 16진수 문자열로 변환
    // 43521 (10진수) = 0xAA21 (16진수)
    const chainIdHex = `0x${MEMECORE_NETWORK.chainId.toString(16)}`;
    console.log(`네트워크 추가: chainId ${MEMECORE_NETWORK.chainId} → ${chainIdHex}`);
    
    // 네트워크 추가 시도 (chainId를 올바른 형식으로 변환)
    await window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [{
        ...MEMECORE_NETWORK,
        chainId: chainIdHex,
      }],
    });
    return true;
  } catch (error: any) {
    // 에러 코드 확인
    const errorCode = error?.code;
    const errorMessage = error?.message || String(error);
    
    // 4902: 네트워크가 이미 추가되어 있음 (정상)
    // 4001: 사용자가 요청을 거부함
    if (errorCode === 4902) {
      // 네트워크는 이미 추가되어 있으므로 네트워크 전환 시도
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: `0x${MEMECORE_NETWORK.chainId.toString(16)}` }],
        });
        return true;
      } catch (switchError: any) {
        console.warn('네트워크 전환 실패:', switchError);
        return false;
      }
    }
    
    if (errorCode === 4001) {
      console.warn('사용자가 네트워크 추가를 거부했습니다.');
      return false;
    }
    
    console.error('네트워크 추가 실패:', errorMessage, error);
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
 * ItemPayment 컨트랙트 ABI
 */
const ITEM_PAYMENT_ABI = [
  {
    inputs: [{ name: 'itemId', type: 'uint8' }],
    name: 'buyItem',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [{ name: 'itemId', type: 'uint8' }],
    name: 'itemPrice',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'feeReceiver',
    outputs: [{ name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
] as const;

/**
 * 토큰 잔액 조회 (ERC-20)
 * 메타마스크 연결을 확인하고 메타마스크를 통해 조회
 */
export async function getTokenBalance(
  tokenAddress: string,
  walletAddress: string
): Promise<string> {
  // 메타마스크 연결 확인
  if (typeof window === 'undefined' || !window.ethereum) {
    throw new Error('MetaMask가 설치되어 있지 않습니다.');
  }

  try {
    console.log('[getTokenBalance] 시작:', { tokenAddress, walletAddress });
    
    // ethers.js를 동적으로 import
    const { ethers } = await import('ethers');
    
    // 메타마스크를 통해 Provider 생성 (연결된 네트워크 사용)
    const provider = new ethers.BrowserProvider(window.ethereum);
    console.log('[getTokenBalance] MetaMask Provider 생성 완료');
    
    // 현재 네트워크 확인
    const network = await provider.getNetwork();
    console.log('[getTokenBalance] 현재 네트워크:', {
      chainId: network.chainId.toString(),
      name: network.name,
    });
    
    // 체인 ID 43521인지 확인
    if (Number(network.chainId) !== MEMECORE_NETWORK.chainId) {
      console.warn('[getTokenBalance] 체인 ID 불일치:', {
        현재: Number(network.chainId),
        필요: MEMECORE_NETWORK.chainId,
      });
      // 네트워크 전환 시도는 하지 않고 에러만 로깅
    }
    
    // 컨트랙트 인스턴스 생성
    const contract = new ethers.Contract(tokenAddress, ERC20_ABI, provider);
    console.log('[getTokenBalance] 컨트랙트 인스턴스 생성 완료');
    
    // decimals 조회
    const decimals = await contract.decimals();
    console.log('[getTokenBalance] decimals:', decimals);
    
    // 잔액 조회
    const balance = await contract.balanceOf(walletAddress);
    console.log('[getTokenBalance] raw balance:', balance.toString());
    
    // 포맷된 잔액 반환
    const formattedBalance = ethers.formatUnits(balance, decimals);
    console.log('[getTokenBalance] formatted balance:', formattedBalance);
    
    return formattedBalance;
  } catch (error: any) {
    // 에러 상세 정보 로깅
    const errorInfo = {
      message: error?.message || 'Unknown error',
      code: error?.code || 'N/A',
      name: error?.name || 'Error',
      stack: error?.stack || 'No stack trace',
      reason: error?.reason || 'N/A',
      data: error?.data || 'N/A',
      fullError: error,
    };
    
    console.error('[getTokenBalance] 오류 상세:', errorInfo);
    console.error('[getTokenBalance] 원본 에러:', error);
    
    // 에러를 다시 throw하여 상위에서 처리할 수 있도록 함
    throw error;
  }
}

/**
 * ItemPayment 컨트랙트를 통해 아이템 구매 (네이티브 토큰 M 전송)
 */
export async function purchaseItemWithToken(
  itemPaymentAddress: string,
  itemId: number,
  amountInToken: number // 토큰 개수 (예: 90)
): Promise<string> {
  // 메타마스크 연결 확인
  if (typeof window === 'undefined' || !window.ethereum) {
    throw new Error('MetaMask가 설치되어 있지 않습니다.');
  }

  try {
    console.log('[purchaseItemWithToken] 시작:', {
      itemPaymentAddress,
      itemId,
      amountInToken,
    });

    // ethers.js를 동적으로 import
    const { ethers } = await import('ethers');

    // 메타마스크를 통해 Provider 생성
    let provider = new ethers.BrowserProvider(window.ethereum);
    
    // 현재 네트워크 확인
    let network = await provider.getNetwork();
    console.log('[purchaseItemWithToken] 현재 네트워크:', {
      chainId: network.chainId.toString(),
      name: network.name,
    });
    
    // 체인 ID 43521인지 확인
    if (Number(network.chainId) !== MEMECORE_NETWORK.chainId) {
      console.log('[purchaseItemWithToken] 네트워크 전환 필요:', {
        현재: Number(network.chainId),
        필요: MEMECORE_NETWORK.chainId,
      });
      
      // 네트워크 전환 시도
      try {
        const chainIdHex = `0x${MEMECORE_NETWORK.chainId.toString(16)}`;
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: chainIdHex }],
        });
        console.log('[purchaseItemWithToken] 네트워크 전환 성공');
        
        // 네트워크 전환 후 Provider 재생성 (중요!)
        provider = new ethers.BrowserProvider(window.ethereum);
        
        // 잠시 대기 후 네트워크 확인
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // 네트워크 전환 후 다시 네트워크 확인
        network = await provider.getNetwork();
        console.log('[purchaseItemWithToken] 전환 후 네트워크:', {
          chainId: network.chainId.toString(),
          name: network.name,
        });
        
        if (Number(network.chainId) !== MEMECORE_NETWORK.chainId) {
          throw new Error('네트워크 전환에 실패했습니다. 수동으로 전환해주세요.');
        }
      } catch (switchError: any) {
        // 4902: 네트워크가 추가되지 않음
        if (switchError?.code === 4902) {
          // 네트워크 추가 시도
          try {
            const chainIdHex = `0x${MEMECORE_NETWORK.chainId.toString(16)}`;
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [{
                ...MEMECORE_NETWORK,
                chainId: chainIdHex,
              }],
            });
            console.log('[purchaseItemWithToken] 네트워크 추가 성공');
            
            // 네트워크 추가 후 Provider 재생성
            provider = new ethers.BrowserProvider(window.ethereum);
            await new Promise(resolve => setTimeout(resolve, 500));
          } catch (addError: any) {
            throw new Error(
              `네트워크 추가 실패: ${addError?.message || '알 수 없는 오류'}. MetaMask에서 수동으로 Formicarium Testnet을 추가해주세요.`
            );
          }
        } else if (switchError?.code === 4001) {
          throw new Error('네트워크 전환이 취소되었습니다.');
        } else if (switchError?.code === 'NETWORK_ERROR' && switchError?.message?.includes('43522 => 43521')) {
          // 네트워크 전환은 성공했지만 Provider가 이전 네트워크를 참조하는 경우
          console.log('[purchaseItemWithToken] 네트워크 전환 완료, Provider 재생성');
          provider = new ethers.BrowserProvider(window.ethereum);
          await new Promise(resolve => setTimeout(resolve, 500));
          network = await provider.getNetwork();
          console.log('[purchaseItemWithToken] 재생성 후 네트워크:', {
            chainId: network.chainId.toString(),
            name: network.name,
          });
        } else {
          throw new Error(
            `네트워크 전환 실패: ${switchError?.message || '알 수 없는 오류'}. MetaMask에서 수동으로 Formicarium Testnet으로 전환해주세요.`
          );
        }
      }
    }
    
    const signer = await provider.getSigner();
    const signerAddress = await signer.getAddress();
    console.log('[purchaseItemWithToken] Signer 생성 완료:', signerAddress);

    // ItemPayment 컨트랙트 인스턴스 생성 (읽기용)
    const contractRead = new ethers.Contract(
      itemPaymentAddress,
      ITEM_PAYMENT_ABI,
      provider
    );
    console.log('[purchaseItemWithToken] 컨트랙트 인스턴스 생성 완료');

    // 컨트랙트에서 실제 가격 조회
    console.log('[purchaseItemWithToken] 컨트랙트에서 가격 조회 중...');
    let contractPrice: bigint;
    try {
      contractPrice = await contractRead.itemPrice(itemId);
      console.log('[purchaseItemWithToken] 컨트랙트 가격 조회 성공:', {
        itemId,
        priceWei: contractPrice.toString(),
        priceEther: ethers.formatEther(contractPrice),
      });
    } catch (priceError: any) {
      console.error('[purchaseItemWithToken] 가격 조회 실패:', priceError);
      throw new Error(
        `아이템 가격을 조회할 수 없습니다. 컨트랙트가 올바르게 배포되었는지 확인해주세요. (itemId: ${itemId})`
      );
    }

    // 가격이 0이면 에러
    if (contractPrice === 0n) {
      throw new Error(
        `아이템 ${itemId}의 가격이 컨트랙트에 설정되지 않았습니다. 관리자에게 문의해주세요.`
      );
    }

    // 컨트랙트 가격과 프론트엔드 가격 비교 (경고만, 실제로는 컨트랙트 가격 사용)
    const frontendPriceInWei = ethers.parseEther(amountInToken.toString());
    if (contractPrice !== frontendPriceInWei) {
      console.warn('[purchaseItemWithToken] 가격 불일치:', {
        컨트랙트가격: ethers.formatEther(contractPrice),
        프론트엔드가격: amountInToken,
      });
      // 컨트랙트 가격을 우선 사용
      const contractPriceInToken = parseFloat(ethers.formatEther(contractPrice));
      console.log('[purchaseItemWithToken] 컨트랙트 가격으로 전송:', contractPriceInToken);
    }

    // 컨트랙트에서 조회한 가격 사용
    const amountInWei = contractPrice;
    const actualAmountInToken = parseFloat(ethers.formatEther(contractPrice));
    console.log('[purchaseItemWithToken] 실제 전송 금액:', {
      token: actualAmountInToken,
      wei: amountInWei.toString(),
    });

    // 잔액 확인
    const balance = await provider.getBalance(signerAddress);
    console.log('[purchaseItemWithToken] 현재 잔액:', {
      wei: balance.toString(),
      ether: ethers.formatEther(balance),
    });
    
    if (balance < amountInWei) {
      throw new Error(
        `잔액이 부족합니다. 필요: ${actualAmountInToken} M, 보유: ${ethers.formatEther(balance)} M`
      );
    }

    // 쓰기용 컨트랙트 인스턴스 생성 (signer 사용)
    const contractWrite = new ethers.Contract(
      itemPaymentAddress,
      ITEM_PAYMENT_ABI,
      signer
    );

    // buyItem 함수 호출 (네이티브 토큰 전송)
    console.log('[purchaseItemWithToken] buyItem 호출 시작...');
    const tx = await contractWrite.buyItem(itemId, {
      value: amountInWei,
    });
    console.log('[purchaseItemWithToken] 트랜잭션 전송:', tx.hash);

    // 트랜잭션 대기
    const receipt = await tx.wait();
    console.log('[purchaseItemWithToken] 트랜잭션 완료:', {
      hash: receipt.hash,
      blockNumber: receipt.blockNumber,
    });

    return receipt.hash;
  } catch (error: any) {
    // 에러 상세 정보 로깅
    const errorInfo = {
      message: error?.message || 'Unknown error',
      code: error?.code || 'N/A',
      name: error?.name || 'Error',
      stack: error?.stack || 'No stack trace',
      reason: error?.reason || 'N/A',
      data: error?.data || 'N/A',
      transaction: error?.transaction || 'N/A',
      receipt: error?.receipt || 'N/A',
      fullError: error,
      errorString: String(error),
      errorJSON: JSON.stringify(error, Object.getOwnPropertyNames(error)),
    };
    
    console.error('[purchaseItemWithToken] 오류 상세:', errorInfo);
    console.error('[purchaseItemWithToken] 원본 에러:', error);
    console.error('[purchaseItemWithToken] 에러 타입:', typeof error);
    console.error('[purchaseItemWithToken] 에러 키:', Object.keys(error || {}));
    
    throw error;
  }
}

/**
 * 네이티브 토큰 잔액 조회 (메타마스크를 통해 조회)
 */
export async function getNativeBalance(walletAddress: string): Promise<string> {
  // 메타마스크 연결 확인
  if (typeof window === 'undefined' || !window.ethereum) {
    throw new Error('MetaMask가 설치되어 있지 않습니다.');
  }

  try {
    console.log('[getNativeBalance] 시작:', { walletAddress });
    
    // ethers.js를 동적으로 import
    const { ethers } = await import('ethers');
    
    // 메타마스크를 통해 Provider 생성
    const provider = new ethers.BrowserProvider(window.ethereum);
    console.log('[getNativeBalance] MetaMask Provider 생성 완료');
    
    // 네이티브 토큰 잔액 조회
    const balance = await provider.getBalance(walletAddress);
    console.log('[getNativeBalance] raw balance:', balance.toString());
    
    return balance.toString();
  } catch (error: any) {
    console.error('[getNativeBalance] 오류:', {
      message: error?.message,
      code: error?.code,
      error,
    });
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

