// DID (Decentralized Identifier) 관련 타입 정의

/**
 * VC (Verifiable Credential) 데이터
 * KYC에서 발급받은 VC에서 필터링된 데이터
 */
export interface VCFilteredData {
  /** 성별 (예: "M", "F", "OTHER") */
  gender: string;
  /** 만 19세 여부 */
  isAdult19: boolean;
  /** 거주 국가 (예: "KR", "US") */
  country: string;
}

/**
 * 온체인 Commit 값
 * VC 데이터를 해시화하여 온체인에 저장
 */
export interface OnChainCommit {
  /** 사용자 Commit 값 (고유값) */
  userCommit: string;
  /** 만 19세 여부 */
  isAdult19: boolean;
  /** 성별 플래그 */
  genderFlag: string;
  /** 국가 Commit 값 */
  countryCommit: string;
}

/**
 * DID 사용자 정보
 */
export interface DIDUserInfo {
  /** DID 식별자 */
  did: string;
  /** 온체인 Commit 정보 */
  commit: OnChainCommit;
  /** VC 발급자 정보 */
  issuer?: {
    name: string;
    did: string;
  };
  /** VC 발급 일시 */
  issuedAt?: string;
  /** VC 만료 일시 */
  expiresAt?: string;
}

/**
 * DID 인증 상태
 */
export interface DIDAuthState {
  /** DID 인증 완료 여부 */
  isAuthenticated: boolean;
  /** DID 사용자 정보 */
  userInfo: DIDUserInfo | null;
  /** 인증 진행 중 여부 */
  isLoading: boolean;
}

/**
 * 소셜 로그인 제공자
 */
export type SocialProvider = 'google' | 'twitter';

/**
 * 소셜 로그인 응답
 */
export interface SocialLoginResponse {
  /** 액세스 토큰 */
  accessToken: string;
  /** 리프레시 토큰 */
  refreshToken?: string;
  /** 사용자 기본 정보 */
  user: {
    id: string;
    email?: string;
    name?: string;
    picture?: string;
  };
}

