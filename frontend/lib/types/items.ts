// 유료 아이템 관련 타입 정의

/**
 * 아이템 타입
 */
export type ItemType = 
  | 'unlimited_likes'      // 좋아요 무한
  | 'profile_rewind'       // 프로필 되돌리기
  | 'super_like'           // 슈퍼 좋아요 (먼저 말 걸기)
  | 'hide_onchain_record'; // 온체인 기록 숨기기

/**
 * 아이템 정보
 */
export interface ItemInfo {
  /** 아이템 ID */
  itemId: string;
  /** 아이템 타입 */
  type: ItemType;
  /** 아이템 이름 */
  name: string;
  /** 아이템 설명 */
  description: string;
  /** 아이템 아이콘 URL */
  iconUrl?: string;
  /** 가격 (MemeCore 토큰) */
  price: string;
  /** 가격 (USD) */
  priceUsd?: number;
  /** 구매 가능 여부 */
  isAvailable: boolean;
}

/**
 * 사용자 아이템 소유권 (Entitlement)
 */
export interface ItemEntitlement {
  /** 소유권 ID */
  entitlementId: string;
  /** 아이템 정보 */
  item: ItemInfo;
  /** 활성화 여부 */
  isActive: boolean;
  /** 구매 일시 */
  purchasedAt: string;
  /** 만료 일시 (null이면 무제한) */
  expiresAt: string | null;
  /** 사용 횟수 (제한이 있는 경우) */
  usageCount?: number;
  /** 최대 사용 횟수 */
  maxUsageCount?: number;
}

/**
 * 결제 요청
 */
export interface PaymentRequest {
  /** 아이템 ID */
  itemId: string;
  /** 결제할 토큰 주소 */
  tokenAddress: string;
  /** 결제할 토큰 수량 */
  amount: string;
  /** 지갑 주소 */
  walletAddress: string;
}

/**
 * 결제 응답
 */
export interface PaymentResponse {
  /** 결제 성공 여부 */
  success: boolean;
  /** 트랜잭션 해시 */
  txHash?: string;
  /** 소유권 정보 */
  entitlement?: ItemEntitlement;
  /** 에러 메시지 */
  error?: string;
}

/**
 * 결제 상태
 */
export type PaymentStatus = 
  | 'pending'      // 대기 중
  | 'processing'   // 처리 중
  | 'completed'    // 완료
  | 'failed';      // 실패

/**
 * 결제 내역
 */
export interface PaymentHistory {
  /** 결제 ID */
  paymentId: string;
  /** 아이템 정보 */
  item: ItemInfo;
  /** 결제 금액 */
  amount: string;
  /** 결제 토큰 심볼 */
  tokenSymbol: string;
  /** 결제 상태 */
  status: PaymentStatus;
  /** 트랜잭션 해시 */
  txHash?: string;
  /** 결제 일시 */
  paidAt: string;
}

/**
 * 아이템 사용 요청
 */
export interface UseItemRequest {
  /** 아이템 타입 */
  itemType: ItemType;
  /** 타겟 ID (프로필 되돌리기 등에서 사용) */
  targetId?: string;
}

/**
 * 아이템 사용 응답
 */
export interface UseItemResponse {
  /** 사용 성공 여부 */
  success: boolean;
  /** 남은 사용 횟수 */
  remainingCount?: number;
  /** 에러 메시지 */
  error?: string;
}

