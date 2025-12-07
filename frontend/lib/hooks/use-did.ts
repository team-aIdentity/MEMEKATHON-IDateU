// DID 인증 관련 Hook

import { useState, useEffect, useCallback } from 'react';
import type { DIDAuthState, DIDUserInfo, SocialProvider, SocialLoginResponse } from '@/lib/types/did';
import { apiRequest } from '@/lib/utils/api-client';

/**
 * DID 인증 상태를 관리하는 Hook
 */
export function useDID() {
  const [authState, setAuthState] = useState<DIDAuthState>({
    isAuthenticated: false,
    userInfo: null,
    isLoading: true,
  });

  // 초기 로드 시 DID 인증 상태 확인
  useEffect(() => {
    checkDIDAuth();
  }, []);

  /**
   * DID 인증 상태 확인
   */
  const checkDIDAuth = useCallback(async () => {
      // TODO: 백엔드 API가 구현되면 실제 API 호출로 변경
    // 환경변수 NEXT_PUBLIC_USE_MOCK_API=false로 설정하면 실제 API 호출 시도
    const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK_API !== 'false';
    
    if (USE_MOCK) {
      // 모의 응답: 로컬 스토리지에서 인증 상태 확인
      // 'mock_did_auth'는 KYC 완료 시 저장됨
      const storedAuth = typeof window !== 'undefined' ? localStorage.getItem('mock_did_auth') : null;
      if (storedAuth) {
        try {
          const userInfo = JSON.parse(storedAuth);
          setAuthState({
            isAuthenticated: true,
            userInfo,
            isLoading: false,
          });
          return;
        } catch {
          // 파싱 실패 시 인증되지 않은 것으로 처리
        }
      }
      setAuthState({
        isAuthenticated: false,
        userInfo: null,
        isLoading: false,
      });
      return;
    }

    // 실제 API 호출 (백엔드 구현 후 사용)
    try {
      const userInfo = await apiRequest<DIDUserInfo>('/api/did/status', {
        method: 'GET',
        requiresAuth: true,
      });

      setAuthState({
        isAuthenticated: true,
        userInfo,
        isLoading: false,
      });
    } catch (error) {
      setAuthState({
        isAuthenticated: false,
        userInfo: null,
        isLoading: false,
      });
    }
  }, []);

  /**
   * 소셜 로그인
   */
  const socialLogin = useCallback(async (provider: SocialProvider): Promise<SocialLoginResponse> => {
    // TODO: 백엔드 API가 구현되면 실제 API 호출로 변경
    // 현재는 개발 모드에서 모의 응답 반환
    // 환경변수 NEXT_PUBLIC_USE_MOCK_API=false로 설정하면 실제 API 호출 시도
    const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK_API !== 'false';
    
    if (USE_MOCK) {
      // 모의 응답 반환 (개발/데모용)
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            accessToken: `mock_token_${provider}_${Date.now()}`,
            user: {
              id: 'mock_user_123',
              email: `${provider}@example.com`,
              name: `${provider} User`,
              picture: `https://api.dicebear.com/7.x/avataaars/svg?seed=${provider}`,
            },
          });
        }, 500); // 0.5초 지연으로 실제 API 호출처럼 시뮬레이션
      });
    }

    // 실제 API 호출 (백엔드 구현 후 사용)
    try {
      const response = await apiRequest<SocialLoginResponse>(`/api/auth/social/${provider}`, {
        method: 'POST',
      });
      return response;
    } catch (error) {
      // API 호출 실패 시 에러를 그대로 전달
      throw error;
    }
  }, []);

  /**
   * KYC 완료 후 VC 데이터 제출
   */
  const submitVCData = useCallback(async (vcData: {
    gender: string;
    isAdult19: boolean;
    country: string;
  }): Promise<DIDUserInfo> => {
    try {
      // 백엔드 API URL 가져오기
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL || 'http://localhost:4000';
      
      // 출생년도 계산 (만 19세 이상이므로 최소 19년 전)
      const currentYear = new Date().getFullYear();
      const birthYear = currentYear - 20; // 예시로 20년 전으로 설정 (실제로는 KYC에서 받아야 함)
      
      // localStorage에서 출생년도 가져오기
      let birthYearStr = '';
      if (typeof window !== 'undefined') {
        const storedBirthYear = localStorage.getItem('user_birth_year');
        if (storedBirthYear) {
          birthYearStr = storedBirthYear;
        } else {
          birthYearStr = birthYear.toString();
        }
      }
      
      // birthdate 형식: YYYY-MM-DD (1월 1일로 설정)
      const birthdate = `${birthYearStr}-01-01`;
      
      // 백엔드 서버 연결 확인 (옵셔널 - 실패해도 계속 진행)
      try {
        const healthCheck = await fetch(`${backendUrl}/health`, {
          method: 'GET',
          signal: AbortSignal.timeout(2000), // 2초 타임아웃
        });
        if (healthCheck.ok) {
          console.log('[submitVCData] 백엔드 서버 연결 확인됨');
        }
      } catch (healthError: any) {
        console.warn('[submitVCData] 백엔드 서버 연결 확인 실패 (계속 진행):', healthError.message);
        // 연결 실패해도 계속 진행 (실제 API 호출에서 에러 처리)
      }
      
      // 백엔드 사용자 ID 가져오기 또는 생성
      let userId = '';
      if (typeof window !== 'undefined') {
        // localStorage에서 사용자 ID 가져오기
        userId = localStorage.getItem('backend_user_id') || '';
        
        // 사용자 ID가 없으면 소셜 로그인을 통해 생성
        if (!userId) {
          try {
            console.log('[submitVCData] 백엔드 사용자 생성 시도...', {
              url: `${backendUrl}/auth/social/callback`,
            });
            const socialResponse = await fetch(`${backendUrl}/auth/social/callback`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                provider: 'google', // 기본값
                social_id: `mock_${Date.now()}`,
              }),
              signal: AbortSignal.timeout(10000), // 10초 타임아웃
            });
            
            if (socialResponse.ok) {
              const socialResult = await socialResponse.json();
              userId = socialResult.user._id || socialResult.user.id;
              localStorage.setItem('backend_user_id', userId);
              console.log('[submitVCData] 백엔드 사용자 생성 성공:', userId);
            } else {
              const errorText = await socialResponse.text();
              console.error('[submitVCData] 소셜 로그인 실패:', {
                status: socialResponse.status,
                statusText: socialResponse.statusText,
                body: errorText,
              });
            }
          } catch (err: any) {
            console.error('[submitVCData] 소셜 로그인 에러:', err);
            // 사용자 생성 실패해도 계속 진행 (백엔드가 사용자 없이도 처리할 수 있는 경우)
          }
        }
      }
      
      // 백엔드 API 형식에 맞게 변환
      const backendData = {
        gender: vcData.gender === 'M' ? 'male' : vcData.gender === 'F' ? 'female' : 'other',
        birthdate: birthdate,
        country: vcData.country,
      };
      
      console.log('[submitVCData] 백엔드 API 호출:', {
        url: `${backendUrl}/kyc/submit`,
        userId,
        data: backendData,
      });
      
      // 백엔드 API 호출 (x-user-id 헤더 필요)
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };
      
      if (userId) {
        headers['x-user-id'] = userId;
      }
      
      console.log('[submitVCData] KYC 제출 요청 전송...', {
        url: `${backendUrl}/kyc/submit`,
        method: 'POST',
        headers,
        body: backendData,
      });
      
      let response: Response;
      try {
        response = await fetch(`${backendUrl}/kyc/submit`, {
          method: 'POST',
          headers,
          body: JSON.stringify(backendData),
          signal: AbortSignal.timeout(30000), // 30초 타임아웃
        });
      } catch (fetchError: any) {
        console.error('[submitVCData] Fetch 에러 상세:', {
          name: fetchError?.name,
          message: fetchError?.message,
          stack: fetchError?.stack,
          error: fetchError,
        });
        
        // 네트워크 에러인 경우
        if (fetchError?.name === 'TypeError' && fetchError?.message?.includes('Failed to fetch')) {
          const errorMsg = `백엔드 서버에 연결할 수 없습니다. 
            
확인 사항:
1. 백엔드 서버가 실행 중인지 확인: ${backendUrl}/health
2. 브라우저 콘솔에서 CORS 에러가 있는지 확인
3. 네트워크 연결을 확인해주세요

백엔드 URL: ${backendUrl}`;
          console.error('[submitVCData]', errorMsg);
          throw new Error(errorMsg);
        }
        
        if (fetchError?.name === 'AbortError') {
          throw new Error('요청 시간이 초과되었습니다. 네트워크 연결을 확인해주세요.');
        }
        
        throw fetchError;
      }
      
      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
        } catch {
          errorData = { error: response.statusText || `HTTP ${response.status}` };
        }
        console.error('[submitVCData] KYC 제출 실패:', {
          status: response.status,
          statusText: response.statusText,
          error: errorData,
        });
        throw new Error(errorData.error || `KYC 제출 실패: ${response.status}`);
      }
      
      const result = await response.json();
      console.log('[submitVCData] 백엔드 응답:', result);
      
      // 백엔드 응답을 DIDUserInfo 형식으로 변환
      const userInfo: DIDUserInfo = {
        did: `did:memecore:${result.user.did_commit || result.user.id}`,
        commit: {
          userCommit: result.user.did_commit || `0x${result.user.id}`,
          isAdult19: result.user.is_adult || vcData.isAdult19,
          genderFlag: result.user.gender || (vcData.gender === 'M' ? 1 : 0),
          countryCommit: `country_${result.user.country_code || vcData.country}`,
        },
        issuer: 'backend_issuer',
        issuedAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
      };
      
      // 온체인 등록 결과 확인
      if (result.onchain && result.onchain.txHash) {
        console.log('[submitVCData] 온체인 등록 성공:', result.onchain);
        userInfo.onchainTxHash = result.onchain.txHash;
      }
      
      // 로컬 스토리지에 저장
      if (typeof window !== 'undefined') {
        localStorage.setItem('mock_did_auth', JSON.stringify(userInfo));
      }
      
      setAuthState({
        isAuthenticated: true,
        userInfo,
        isLoading: false,
      });
      
      return userInfo;
    } catch (error: any) {
      console.error('[submitVCData] KYC 제출 실패:', error);
      throw error;
    }
  }, []);

  /**
   * DID 인증 해제
   */
  const logout = useCallback(() => {
    // 로컬 스토리지에서 모의 인증 정보 제거
    if (typeof window !== 'undefined') {
      localStorage.removeItem('mock_did_auth');
      localStorage.removeItem('memex_access_token');
    }

    setAuthState({
      isAuthenticated: false,
      userInfo: null,
      isLoading: false,
    });
  }, []);

  return {
    ...authState,
    socialLogin,
    submitVCData,
    logout,
    refresh: checkDIDAuth,
  };
}

