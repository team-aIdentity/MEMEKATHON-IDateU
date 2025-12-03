// MemeX API 클라이언트

import { apiRequest, buildQueryString } from '@/lib/utils/api-client';
import type {
  MyUserInfoOutput,
  EditUserInfoInput,
  EditUserInfoOutput,
  GetUsersFollowOutput,
  ChangeUserRelationOutput,
  GetHomeFeedOutputV3,
  GetFollowingUsersFeedOutputV3,
  GetSpecificPostOutputV3,
  SetPinOutput,
  SetLikeOutPut,
  SearchHashTagAndUserOutput,
  GetAutocompleteMentionOutput,
  GetUsersPointResponseDto,
  PointHistoryPagingDto,
  GetChainTokenLatestPriceResponseDto,
  GetChainTokenPricesResponseDto,
  GetUsersTrades,
  GetUsersTokenHoldersOutputV2,
  GetUserHoldOutput,
  UserHoldSortOrder,
  UserHoldSortBy,
  GetUserSponsorOutput,
  MockUserData,
  PaginationParams,
  PointType,
} from '@/lib/types/api';

/**
 * MemeX API 클라이언트
 */
export class MemeXApi {
  private baseUrl: string;

  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl || process.env.NEXT_PUBLIC_API_BASE_URL || 'https://insectarium-public-api.memex.xyz';
  }

  // ============ 사용자 관련 API ============

  /**
   * 현재 사용자 정보 조회
   */
  async getMyInfo(): Promise<MyUserInfoOutput> {
    return apiRequest<MyUserInfoOutput>('/public/v1/user', {
      method: 'GET',
      requiresAuth: true,
    });
  }

  /**
   * 사용자 정보 수정
   */
  async editMyInfo(data: EditUserInfoInput): Promise<EditUserInfoOutput> {
    const formData = new FormData();
    if (data.displayName) formData.append('displayName', data.displayName);
    if (data.bio) formData.append('bio', data.bio);
    if (data.location) formData.append('location', data.location);
    if (data.website) formData.append('website', data.website);

    return apiRequest<EditUserInfoOutput>('/public/v1/user', {
      method: 'PATCH',
      body: formData,
      requiresAuth: true,
    });
  }

  /**
   * 특정 사용자 정보 조회
   */
  async getUserInfo(username: string, usernametag?: string): Promise<MyUserInfoOutput> {
    const path = usernametag 
      ? `/public/v1/user/${username}/${usernametag}`
      : `/public/v1/user/${username}`;
    
    return apiRequest<MyUserInfoOutput>(path, {
      method: 'GET',
      requiresAuth: true,
    });
  }

  /**
   * 사용자 게시물 조회
   */
  async getUserPosts(
    username: string,
    usernametag?: string,
    params?: PaginationParams & { rePostCursor?: number }
  ) {
    const path = usernametag 
      ? `/public/v1/user/${username}/${usernametag}/posts`
      : `/public/v1/user/${username}/posts`;
    
    const query = buildQueryString(params || {});
    return apiRequest(`${path}${query}`, {
      method: 'GET',
    });
  }

  /**
   * 팔로우/언팔로우 토글
   */
  async toggleFollow(username: string, usernametag?: string): Promise<ChangeUserRelationOutput> {
    const path = usernametag 
      ? `/public/v1/user/${username}/${usernametag}/toggle-follow`
      : `/public/v1/user/${username}/toggle-follow`;
    
    return apiRequest<ChangeUserRelationOutput>(path, {
      method: 'PATCH',
      requiresAuth: true,
    });
  }

  /**
   * 팔로워 목록 조회
   */
  async getFollowers(username: string, usernametag?: string): Promise<GetUsersFollowOutput[]> {
    const path = usernametag 
      ? `/public/v1/user/${username}/${usernametag}/followers`
      : `/public/v1/user/${username}/followers`;
    
    return apiRequest<GetUsersFollowOutput[]>(path, {
      method: 'GET',
      requiresAuth: true,
    });
  }

  /**
   * 팔로잉 목록 조회
   */
  async getFollowing(username: string, usernametag?: string): Promise<GetUsersFollowOutput[]> {
    const path = usernametag 
      ? `/public/v1/user/${username}/${usernametag}/following`
      : `/public/v1/user/${username}/following`;
    
    return apiRequest<GetUsersFollowOutput[]>(path, {
      method: 'GET',
      requiresAuth: true,
    });
  }

  /**
   * 사용자 답글 조회
   */
  async getReplies(
    username: string,
    usernametag?: string,
    params?: PaginationParams
  ) {
    const path = usernametag 
      ? `/public/v1/user/${username}/${usernametag}/replies`
      : `/public/v1/user/${username}/replies`;
    
    const query = buildQueryString(params || {});
    return apiRequest(`${path}${query}`, {
      method: 'GET',
      requiresAuth: true,
    });
  }

  /**
   * 사용자가 좋아요한 게시물 조회
   */
  async getLikePosts(
    username: string,
    usernametag?: string,
    params?: PaginationParams
  ) {
    const path = usernametag 
      ? `/public/v1/user/${username}/${usernametag}/like-posts`
      : `/public/v1/user/${username}/like-posts`;
    
    const query = buildQueryString(params || {});
    return apiRequest(`${path}${query}`, {
      method: 'GET',
      requiresAuth: true,
    });
  }

  /**
   * 사용자 거래 내역 조회
   */
  async getTradeHistory(username: string, usernametag?: string): Promise<GetUsersTrades[]> {
    const path = usernametag 
      ? `/public/v1/user/${username}/${usernametag}/trade-history`
      : `/public/v1/user/${username}/trade-history`;
    
    return apiRequest<GetUsersTrades[]>(path, {
      method: 'GET',
    });
  }

  /**
   * 토큰 홀더 목록 조회
   */
  async getHolders(username: string, count: number, usernametag?: string): Promise<GetUsersTokenHoldersOutputV2> {
    const path = usernametag 
      ? `/public/v1/user/${username}/${usernametag}/holders/${count}`
      : `/public/v1/user/${username}/holders/${count}`;
    
    return apiRequest<GetUsersTokenHoldersOutputV2>(path, {
      method: 'GET',
    });
  }

  /**
   * 보유 토큰 목록 조회
   */
  async getHoldTokens(
    username: string,
    usernametag?: string,
    params?: {
      sortOrder?: UserHoldSortOrder;
      sortBy?: UserHoldSortBy;
    }
  ): Promise<GetUserHoldOutput[]> {
    const path = usernametag 
      ? `/public/v1/user/${username}/${usernametag}/hold-tokens`
      : `/public/v1/user/${username}/hold-tokens`;
    
    const query = buildQueryString(params || {});
    return apiRequest<GetUserHoldOutput[]>(`${path}${query}`, {
      method: 'GET',
    });
  }

  /**
   * 스폰서 목록 조회
   */
  async getSponsors(username: string, usernametag?: string): Promise<GetUserSponsorOutput[]> {
    const path = usernametag 
      ? `/public/v1/user/${username}/${usernametag}/sponsors`
      : `/public/v1/user/${username}/sponsors`;
    
    return apiRequest<GetUserSponsorOutput[]>(path, {
      method: 'GET',
    });
  }

  // ============ 게시물 관련 API ============

  /**
   * 최신 게시물 조회
   */
  async getLatestPosts(params?: PaginationParams): Promise<GetHomeFeedOutputV3> {
    const query = buildQueryString(params || {});
    return apiRequest<GetHomeFeedOutputV3>(`/public/v1/post/latest${query}`, {
      method: 'GET',
    });
  }

  /**
   * 피드 게시물 조회
   */
  async getFeed(type: number, params?: PaginationParams): Promise<GetHomeFeedOutputV3> {
    const queryParams = { type, ...params };
    const query = buildQueryString(queryParams);
    return apiRequest<GetHomeFeedOutputV3>(`/public/v1/post/feed${query}`, {
      method: 'GET',
    });
  }

  /**
   * 팔로잉 사용자 피드 조회
   */
  async getFollowingFeed(params?: PaginationParams): Promise<GetFollowingUsersFeedOutputV3> {
    const query = buildQueryString(params || {});
    return apiRequest<GetFollowingUsersFeedOutputV3>(`/public/v1/post/follow${query}`, {
      method: 'GET',
      requiresAuth: true,
    });
  }

  /**
   * 특정 게시물 조회
   */
  async getPost(
    contentId: number,
    params?: {
      withOutThreads?: boolean;
      replyLimit?: number;
      replyCursor?: number;
    }
  ): Promise<GetSpecificPostOutputV3> {
    const query = buildQueryString(params || {});
    return apiRequest<GetSpecificPostOutputV3>(`/public/v1/post/${contentId}${query}`, {
      method: 'GET',
    });
  }

  /**
   * 게시물 삭제
   */
  async deletePost(contentId: number): Promise<{ isSuccess: boolean }> {
    return apiRequest<{ isSuccess: boolean }>(`/public/v1/post/${contentId}`, {
      method: 'DELETE',
      requiresAuth: true,
    });
  }

  /**
   * 게시물 고정
   */
  async pinPost(contentId: number): Promise<SetPinOutput> {
    return apiRequest<SetPinOutput>(`/public/v1/post/${contentId}/pin`, {
      method: 'PATCH',
      requiresAuth: true,
    });
  }

  /**
   * 게시물 좋아요 토글
   */
  async likePost(contentId: number): Promise<SetLikeOutPut> {
    return apiRequest<SetLikeOutPut>(`/public/v1/post/${contentId}/like`, {
      method: 'PATCH',
      requiresAuth: true,
    });
  }

  // ============ 검색 관련 API ============

  /**
   * 게시물 검색
   */
  async searchPosts(search: string, take: number, cursor?: number) {
    const query = buildQueryString({ search, take, cursor });
    return apiRequest(`/public/v1/search/post${query}`, {
      method: 'GET',
    });
  }

  /**
   * 해시태그 및 사용자 검색
   */
  async searchHashTagAndUser(search: string): Promise<SearchHashTagAndUserOutput> {
    const query = buildQueryString({ search });
    return apiRequest<SearchHashTagAndUserOutput>(`/public/v1/search/hashTag${query}`, {
      method: 'GET',
    });
  }

  /**
   * 사용자 검색 (멘션 자동완성)
   */
  async searchUsers(keyword: string): Promise<GetAutocompleteMentionOutput[]> {
    const query = buildQueryString({ keyword });
    return apiRequest<GetAutocompleteMentionOutput[]>(`/public/v1/search/user${query}`, {
      method: 'GET',
    });
  }

  // ============ 포인트 관련 API ============

  /**
   * 내 포인트 조회
   */
  async getMyPoint(): Promise<GetUsersPointResponseDto> {
    return apiRequest<GetUsersPointResponseDto>('/public/v1/point', {
      method: 'GET',
      requiresAuth: true,
    });
  }

  /**
   * 포인트 히스토리 조회
   */
  async getPointHistory(
    username: string,
    usernametag?: string,
    params?: PaginationParams & {
      order?: 'asc' | 'desc';
      types?: PointType[];
    }
  ): Promise<PointHistoryPagingDto> {
    const path = usernametag 
      ? `/public/v1/point/history/${username}/${usernametag}`
      : `/public/v1/point/history/${username}`;
    
    const query = buildQueryString(params || {});
    return apiRequest<PointHistoryPagingDto>(`${path}${query}`, {
      method: 'GET',
      requiresAuth: true,
    });
  }

  // ============ 가격 관련 API ============

  /**
   * 최신 토큰 가격 조회
   */
  async getLatestPrice(chainId: number, tokenAddress: string): Promise<GetChainTokenLatestPriceResponseDto> {
    return apiRequest<GetChainTokenLatestPriceResponseDto>(
      `/public/v1/price/latest/${chainId}/${tokenAddress}`,
      {
        method: 'GET',
      }
    );
  }

  /**
   * 토큰 가격 차트 조회
   */
  async getPriceChart(
    chainId: number,
    tokenAddress: string,
    interval: string,
    startTime: string,
    endTime: string
  ): Promise<GetChainTokenPricesResponseDto> {
    return apiRequest<GetChainTokenPricesResponseDto>(
      `/public/v1/price/chart/${chainId}/${tokenAddress}/${interval}/${startTime}/${endTime}`,
      {
        method: 'GET',
      }
    );
  }

  // ============ 해커톤 전용 API ============

  /**
   * 목업 사용자 데이터 조회 (3000명)
   */
  async getMockUserData(): Promise<MockUserData[]> {
    return apiRequest<MockUserData[]>('/public/v1/memekathon/mock-user-data', {
      method: 'GET',
    });
  }

  // ============ 헬스 체크 ============

  /**
   * 헬스 체크
   */
  async healthCheck(): Promise<void> {
    return apiRequest<void>('/health', {
      method: 'GET',
    });
  }

  /**
   * 준비 상태 체크
   */
  async readinessCheck(): Promise<void> {
    return apiRequest<void>('/health/readiness', {
      method: 'GET',
    });
  }
}

// 싱글톤 인스턴스 export
export const memexApi = new MemeXApi();

