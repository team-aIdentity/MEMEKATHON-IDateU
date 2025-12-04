// API 클라이언트 유틸리티

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://insectarium-public-api.memex.xyz';

export interface ApiRequestOptions {
  method?: 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT';
  headers?: Record<string, string>;
  body?: any;
  requiresAuth?: boolean;
}

export class ApiError extends Error {
  constructor(
    public status: number,
    public statusText: string,
    public data?: any
  ) {
    super(`API Error: ${status} ${statusText}`);
    this.name = 'ApiError';
  }
}

/**
 * API 요청을 수행하는 기본 함수
 */
export async function apiRequest<T>(
  endpoint: string,
  options: ApiRequestOptions = {}
): Promise<T> {
  const {
    method = 'GET',
    headers = {},
    body,
    requiresAuth = false,
  } = options;

  // URL 구성
  const url = endpoint.startsWith('http') 
    ? endpoint 
    : `${API_BASE_URL}${endpoint}`;

  // 헤더 구성
  const requestHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    ...headers,
  };

  // 인증 토큰 추가
  if (requiresAuth) {
    const token = getAuthToken();
    if (token) {
      requestHeaders['Authorization'] = `Bearer ${token}`;
    }
  }

  // 요청 옵션
  const requestOptions: RequestInit = {
    method,
    headers: requestHeaders,
  };

  // Body 추가 (GET이 아닌 경우)
  if (body && method !== 'GET') {
    if (body instanceof FormData) {
      // FormData인 경우 Content-Type 제거 (브라우저가 자동 설정)
      delete requestHeaders['Content-Type'];
      requestOptions.body = body;
    } else {
      requestOptions.body = JSON.stringify(body);
    }
  }

  try {
    const response = await fetch(url, requestOptions);

    // 응답이 성공이 아닌 경우 에러 처리
    if (!response.ok) {
      let errorData;
      try {
        errorData = await response.json();
      } catch {
        errorData = { error: response.statusText };
      }
      throw new ApiError(response.status, response.statusText, errorData);
    }

    // 응답이 비어있는 경우
    if (response.status === 204 || response.headers.get('content-length') === '0') {
      return {} as T;
    }

    // JSON 파싱
    const data = await response.json();
    return data as T;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(0, 'Network Error', { error: error instanceof Error ? error.message : 'Unknown error' });
  }
}

/**
 * 인증 토큰 가져오기 (localStorage 또는 다른 저장소에서)
 */
export function getAuthToken(): string | null {
  if (typeof window === 'undefined') {
    return null;
  }
  return localStorage.getItem('memex_access_token');
}

/**
 * 인증 토큰 저장하기
 */
export function setAuthToken(token: string): void {
  if (typeof window === 'undefined') {
    return;
  }
  localStorage.setItem('memex_access_token', token);
}

/**
 * 인증 토큰 제거하기
 */
export function removeAuthToken(): void {
  if (typeof window === 'undefined') {
    return;
  }
  localStorage.removeItem('memex_access_token');
}

/**
 * 쿼리 파라미터를 URL에 추가
 */
export function buildQueryString(params: Record<string, any>): string {
  const searchParams = new URLSearchParams();
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      if (Array.isArray(value)) {
        value.forEach((item) => searchParams.append(key, String(item)));
      } else {
        searchParams.set(key, String(value));
      }
    }
  });

  const queryString = searchParams.toString();
  return queryString ? `?${queryString}` : '';
}

