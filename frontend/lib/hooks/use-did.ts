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
      // TODO: 백엔드 API가 구현되면 실제 API 호출로 변경
    // 환경변수 NEXT_PUBLIC_USE_MOCK_API=false로 설정하면 실제 API 호출 시도
    const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK_API !== 'false';
    
    if (USE_MOCK) {
      // 모의 응답: VC 데이터로부터 DID 생성
      const mockUserInfo: DIDUserInfo = {
        did: `did:memecore:mock_${Date.now()}`,
        commit: {
          userCommit: `commit_${Date.now()}`,
          isAdult19: vcData.isAdult19,
          genderFlag: vcData.gender === 'M' ? 1 : 0,
          countryCommit: `country_${vcData.country}`,
        },
        issuer: 'mock_issuer',
        issuedAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(), // 1년 후
      };

      // 로컬 스토리지에 저장
      if (typeof window !== 'undefined') {
        localStorage.setItem('mock_did_auth', JSON.stringify(mockUserInfo));
      }

      setAuthState({
        isAuthenticated: true,
        userInfo: mockUserInfo,
        isLoading: false,
      });

      return mockUserInfo;
    }

    // 실제 API 호출 (백엔드 구현 후 사용)
    const userInfo = await apiRequest<DIDUserInfo>('/api/did/create', {
      method: 'POST',
      body: vcData,
      requiresAuth: true,
    });

    setAuthState({
      isAuthenticated: true,
      userInfo,
      isLoading: false,
    });

    return userInfo;
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

