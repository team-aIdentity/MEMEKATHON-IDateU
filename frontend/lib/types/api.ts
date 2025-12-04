// MemeX API 타입 정의

// ============ 사용자 관련 ============
export type UserType = 
  | "OFFICIAL" 
  | "GENERAL" 
  | "INFLUENCER" 
  | "REPORTER" 
  | "REPORTMANAGER" 
  | "X_USER" 
  | "X_LOCK_USER";

export interface MyUserInfoOutput {
  userType: UserType;
  bannerImageUrl: string | null;
  profileImageUrl: string;
  displayName: string;
  tokenAddress: string;
  tokenSymbol: string;
  tokenImageUrl: string;
  tokenCexListed: boolean | null;
  userName: string;
  userNameTag: string | null;
  bio: string | null;
  totalDonationAmount: string;
  location: string | null;
  website: string | null;
  bondingCurve: {
    bodingCurveTotal: number;
    bondingCurveGoal: number;
    bondingCurveProgress: number;
    currentPrice: number;
    tokenImageUrl: string;
  };
  minted: string;
  following: number;
  followers: number;
  hold: number;
  sponsor: number;
  refCode: string | null;
  isFollow: boolean | null;
  isPreOrdered: boolean;
  isConnectTelegram: boolean;
  metaData: string;
  walletAddress: string | null;
}

export interface EditUserInfoInput {
  displayName?: string;
  bio?: string;
  location?: string;
  website?: string;
}

export interface EditUserInfoOutput {
  isSuccess: boolean;
}

export interface UserInfo {
  id: number;
  profileImageUrl: string;
  userName: string;
  userNameTag: string | null;
  displayName: string;
  userType: UserType;
  isPreOrdered: boolean;
}

export interface GetUsersFollowOutput {
  user: UserInfo;
  tokenCexListed: boolean | null;
  bondingCurveProgress: number | null;
  priceFluctuationRange: number | null;
  isFollow: boolean;
}

export interface ChangeUserRelationOutput {
  isSuccess: boolean;
  action: string;
}

// ============ 게시물 관련 ============
export interface PostBody {
  type: "text" | "hashtag" | "mention" | "return";
  value: string;
  metadata: MentionMetadata | null;
}

export interface MentionMetadata {
  userId: number;
  userName: string;
  userNameTag: string | null;
}

export interface SocialMeta {
  likeCount: number;
  repostCount: number;
  replyCount: number;
  viewCount: number;
  liked: boolean;
  isFollow: boolean;
  isRePosted: boolean;
}

export interface PostMeta {
  creator: {
    profileImageUrl: string;
    userName: string;
    userNameTag: string | null;
    displayName: string;
    userType: string;
    isPreOrdered: boolean;
  };
  createdAt: string;
  updatedAt: string;
  prevId: number | null;
  parentId: number | null;
}

export interface FeedPost {
  id: number;
  value: string;
  body: PostBody[];
  imageSrc: string[];
  contentType: "POST" | "REPLY";
  socialMeta: SocialMeta;
  postMeta: PostMeta;
  threads: Threads | null;
}

export interface Threads {
  upperThread: ThreadPost[];
  lowerThread: ThreadPost[];
}

export interface ThreadPost {
  id: number;
  value: string;
  body: PostBody[];
  imageSrc: string[];
  contentType: "POST" | "REPLY";
  threadIndex: number;
}

export interface GetHomeFeedOutputV3 {
  contents: FeedPost[];
  nextCursor: number | null;
  type: "AI" | "DB";
}

export interface GetFollowingUsersFeedOutputV3 {
  contents: FeedPost[];
  nextCursor: number | null;
  hasFollowing: boolean | null;
}

export interface GetSpecificPostOutputV3 {
  content: FeedPost;
  parent: FeedPost | null;
  replies: FeedPost[];
  replyCursor: number | null;
}

export interface SetPinOutput {
  isSuccess: boolean;
  state: "CREATED" | "REMOVED" | "UPDATED" | "FAILED";
}

export interface SetLikeOutPut {
  isSuccess: boolean;
  state: "CREATED" | "REMOVED" | "UPDATED" | "FAILED";
}

// ============ 검색 관련 ============
export interface SearchHashTagAndUserOutput {
  hashTags: string[];
  users: Array<{
    id: number;
    profileImageUrl: string;
    userName: string;
    userNameTag: string | null;
    displayName: string;
    userType: UserType;
    isPreOrdered: boolean;
    isFollow: boolean;
    bondingCurveProgress: number | null;
    priceFluctuationRange: number | null;
    isCexListed: boolean;
  }>;
}

export interface GetAutocompleteMentionOutput {
  user: UserInfo;
  tokenCexListed: boolean | null;
  bondingCurveProgress: number | null;
  priceFluctuationRange: number | null;
  isFollow: boolean;
}

// ============ 포인트 관련 ============
export interface GetUsersPointResponseDto {
  pointType: string;
  balance: string;
}

export type PointType = "xPoint" | "mPoint";

export type PointActionType = 
  | "EARN"
  | "STAKING_REWARD"
  | "USE"
  | "EXPIRE"
  | "CANCEL"
  | "REFUND"
  | "TRANSFER"
  | "LOCK"
  | "UNLOCK"
  | "BURN"
  | "TRADING_LEADER_REWARD"
  | "LOYAL_STAKER_BONUS";

export interface PointHistoryItemDto {
  id: number;
  type: PointType;
  changeAmount: string;
  actionType: PointActionType;
  createdAt: string;
}

export interface PointHistoryGroupDto {
  type: PointType;
  history: PointHistoryItemDto[];
}

export interface PointHistoryPagingDto {
  data: PointHistoryGroupDto[];
  nextCursor: number | null;
}

// ============ 가격 관련 ============
export interface GetChainTokenLatestPriceResponseDto {
  chainToken: GetChainTokenWithPriceResponseDto;
  timestamp: string;
  openPrice: string;
  closePrice: string;
  lowPrice: string;
  highPrice: string;
  volume: string;
  usdPrice: string;
}

export interface GetChainTokenWithPriceResponseDto {
  id: number;
  tokenAddress: string;
  ownerAddress: string;
  chainId: number;
  chain: {
    id: number;
    symbol: string;
    name: string;
  };
  name: string;
  symbol: string;
  totalSupply: string;
  initialPrice: string;
  targetPrice: string;
  priceNow: string;
  price24hAgo: string;
  usdPriceNow: string;
  usdPrice24hAgo: string;
  startBlockNumber: number;
  startedAt: string;
  insertedAt: string;
  isSaleComplete: boolean;
  totalSaleAmount: string;
  totalBuyVolume: string;
  totalSellVolume: string;
  totalBuyAmount: string;
  totalSellAmount: string;
  totalTradingVolume: string;
  totalTradingAmount: string;
  totalBuyVolume24h: string;
  totalSellVolume24h: string;
  totalBuyAmount24h: string;
  totalSellAmount24h: string;
  totalTradingVolume24h: string;
  totalTradingAmount24h: string;
  totalDexBuyVolume: string;
  totalDexSellVolume: string;
  totalDexBuyAmount: string;
  totalDexSellAmount: string;
}

export interface TokenPriceDetailsDto {
  timestamp: string;
  openPrice: string;
  closePrice: string;
  lowPrice: string;
  highPrice: string;
  volume: string;
}

export interface GetChainTokenPricesResponseDto {
  chainToken: GetChainTokenWithPriceResponseDto;
  totalElements: number;
  content: TokenPriceDetailsDto[];
  usdContent: TokenPriceDetailsDto[];
}

// ============ 거래 관련 ============
export interface GetUsersTrades {
  user: UserInfo;
  amountIn: string;
  amountOut: string;
  price: string;
  txHash: string;
  tradeType: string;
  tradeDate: string;
}

// ============ 토큰 홀더 관련 ============
export interface GetUsersTokenHoldersOutput {
  id: number;
  profileImage: string;
  displayName: string;
  address: string;
  percentage: number;
  nativeCurrency: number;
  tokenCexListed: boolean | null;
  userName: string;
  userNameTag: string | null;
}

export interface GetUsersTokenHoldersOutputV2 {
  count: number;
  holders: GetUsersTokenHoldersOutput[];
}

export type UserHoldSortOrder = "asc" | "desc";
export type UserHoldSortBy = 
  | "balance" 
  | "currentPrice" 
  | "currentUsdPrice" 
  | "totalValue" 
  | "totalUsdValue";

export interface GetUserHoldOutput {
  ownerId: number;
  tokenAddress: string;
  tokenSymbol: string;
  tokenName: string;
  tokenImageUrl: string;
  tokenCexListed: boolean | null;
  userName: string;
  userNameTag: string;
  userDisplayName: string;
  userWalletAddress: string;
  profileImageUrl: string;
  priceFluctuationRange: number;
  balance: number;
  currentPrice: string;
  totalValue: string;
  currentUsdPrice: string;
  totalUsdValue: string;
  bondingCurvePercentage: string;
  isSaleCompleted: boolean;
}

// ============ 스폰서 관련 ============
export interface GetUserSponsorOutput {
  userId: number;
  profileImage: string;
  displayName: string;
  userName: string;
  userNameTag: string | null;
  userType: UserType;
  isPreOrdered: boolean;
  totalAmount: number;
  vip: boolean;
  tokenCexListed: boolean | null;
}

// ============ 해커톤 전용 ============
export interface MockUserData {
  id: number;
  userName: string;
  displayName: string;
  userNameTag: string;
  accessToken: string;
  walletAddress: string;
  walletPrivateKey: string;
}

// ============ 에러 응답 ============
export interface ErrorResponse {
  error: string;
}

// ============ 페이징 파라미터 ============
export interface PaginationParams {
  cursor?: number;
  limit?: number;
  take?: number;
}

