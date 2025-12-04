// 인증 관련 Hook

import { useState, useEffect, useCallback } from 'react';
import { getAuthToken, setAuthToken, removeAuthToken } from '@/lib/utils/api-client';

export interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  isLoading: boolean;
}

/**
 * 인증 상태를 관리하는 Hook
 */
export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    token: null,
    isLoading: true,
  });

  // 초기 로드 시 토큰 확인
  useEffect(() => {
    const token = getAuthToken();
    setAuthState({
      isAuthenticated: !!token,
      token,
      isLoading: false,
    });
  }, []);

  // 로그인 (토큰 저장)
  const login = useCallback((token: string) => {
    setAuthToken(token);
    setAuthState({
      isAuthenticated: true,
      token,
      isLoading: false,
    });
  }, []);

  // 로그아웃 (토큰 제거)
  const logout = useCallback(() => {
    removeAuthToken();
    setAuthState({
      isAuthenticated: false,
      token: null,
      isLoading: false,
    });
  }, []);

  return {
    ...authState,
    login,
    logout,
  };
}

