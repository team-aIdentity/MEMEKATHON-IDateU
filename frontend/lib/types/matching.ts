// 매칭 관련 타입 정의

/**
 * 매칭 상태
 */
export type MatchStatus = 
  | 'pending'      // 대기 중
  | 'matched'      // 매칭 성사
  | 'rejected'     // 거절됨
  | 'expired';     // 만료됨

/**
 * 온체인 매칭 기록 (사용 안 함)
 * 기획 변경: 매칭 기록은 온체인에 저장하지 않음
 * @deprecated 매칭 기록은 백엔드 DB에만 저장됨
 */
export interface OnChainMatchRecord {
  /** 매칭 이벤트 ID */
  matchEventId: string;
  /** 사용자 A의 Commit 값 */
  userACommit: string;
  /** 사용자 B의 Commit 값 */
  userBCommit: string;
  /** 매칭 일시 (타임스탬프) */
  timestamp: number;
  /** 트랜잭션 해시 */
  txHash?: string;
  /** 블록 번호 */
  blockNumber?: number;
}

/**
 * 매칭 정보 (프론트엔드용)
 */
export interface MatchInfo {
  /** 매칭 ID */
  matchId: string;
  /** 매칭된 상대방 정보 */
  matchedUser: {
    /** 사용자 ID */
    userId: number;
    /** 사용자명 */
    userName: string;
    /** 표시명 */
    displayName: string;
    /** 프로필 이미지 */
    profileImageUrl: string;
    /** Commit 값 (신원 인증됨 표시용) */
    commit: string;
  };
  /** 매칭 상태 */
  status: MatchStatus;
  /** 매칭 일시 */
  matchedAt: string;
  /** 마지막 메시지 */
  lastMessage?: {
    content: string;
    timestamp: string;
  };
}

/**
 * 매칭 요청 파라미터
 */
export interface MatchRequestParams {
  /** 타겟 사용자 ID */
  targetUserId: number;
  /** 좋아요 타입 */
  likeType?: 'normal' | 'super';
}

/**
 * 매칭 응답
 */
export interface MatchResponse {
  /** 매칭 성사 여부 */
  isMatched: boolean;
  /** 매칭 정보 */
  matchInfo?: MatchInfo;
  /** 메시지 */
  message: string;
}

/**
 * 매칭 목록 조회 파라미터
 */
export interface MatchListParams {
  /** 페이지 번호 */
  page?: number;
  /** 페이지 크기 */
  limit?: number;
  /** 상태 필터 */
  status?: MatchStatus;
}

/**
 * 매칭 통계
 */
export interface MatchStats {
  /** 총 매칭 수 */
  totalMatches: number;
  /** 활성 매칭 수 */
  activeMatches: number;
  /** 평균 응답 시간 (분) */
  averageResponseTime?: number;
}

