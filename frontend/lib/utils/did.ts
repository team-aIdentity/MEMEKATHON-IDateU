// DID 관련 유틸리티 함수

import type { VCFilteredData, OnChainCommit } from '@/lib/types/did';

/**
 * VC 데이터에서 온체인 Commit 값 생성
 * 실제로는 백엔드에서 처리하지만, 프론트엔드에서도 참고용으로 사용
 */
export function createOnChainCommit(vcData: VCFilteredData): OnChainCommit {
  // 실제로는 백엔드에서 해시화하여 생성
  // 여기서는 예시 구조만 제공
  const userCommit = hashData(`${vcData.gender}-${vcData.country}-${Date.now()}`);
  const countryCommit = hashData(vcData.country);

  return {
    userCommit,
    isAdult19: vcData.isAdult19,
    genderFlag: vcData.gender,
    countryCommit,
  };
}

/**
 * 간단한 해시 함수 (실제로는 백엔드에서 처리)
 */
function hashData(data: string): string {
  // 실제로는 SHA-256 등의 해시 함수 사용
  // 여기서는 예시용
  let hash = 0;
  for (let i = 0; i < data.length; i++) {
    const char = data.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return `0x${Math.abs(hash).toString(16).padStart(64, '0')}`;
}

/**
 * DID 인증 여부 확인
 */
export function isDIDAuthenticated(commit: OnChainCommit | null): boolean {
  return commit !== null && !!commit.userCommit;
}

/**
 * 성별 플래그 검증
 */
export function validateGenderFlag(genderFlag: string): boolean {
  const validGenders = ['M', 'F', 'OTHER'];
  return validGenders.includes(genderFlag);
}

/**
 * 만 19세 여부 확인
 */
export function isAdult19(isAdult19: boolean): boolean {
  return isAdult19 === true;
}

