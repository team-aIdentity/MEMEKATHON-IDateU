# MemeX Public API 요약

## 🔐 인증 방식

### JWT Bearer Token
대부분의 API는 JWT 토큰 기반 인증을 사용합니다.
```
Authorization: Bearer <access_token>
```

### 보안 스키마
- `authorization`: JWT Bearer Token (필수)
- `authorizations`: JWT Bearer Token (선택)
- `apiKey`: x-api-key 헤더

## 📍 주요 엔드포인트 카테고리

### 1. 사용자 관련 (`/public/v1/user`)

#### 현재 사용자 정보
- `GET /public/v1/user` - 내 정보 조회
- `PATCH /public/v1/user` - 내 정보 수정

#### 특정 사용자 정보
- `GET /public/v1/user/{username}/{usernametag}` - 사용자 정보 조회
- `GET /public/v1/user/{username}/{usernametag}/posts` - 사용자 게시물
- `GET /public/v1/user/{username}/{usernametag}/followers` - 팔로워 목록
- `GET /public/v1/user/{username}/{usernametag}/following` - 팔로잉 목록
- `GET /public/v1/user/{username}/{usernametag}/replies` - 답글 목록
- `GET /public/v1/user/{username}/{usernametag}/like-posts` - 좋아요한 게시물
- `GET /public/v1/user/{username}/{usernametag}/trade-history` - 거래 내역
- `GET /public/v1/user/{username}/{usernametag}/holders/{count}` - 홀더 목록
- `GET /public/v1/user/{username}/{usernametag}/hold-tokens` - 보유 토큰 목록
- `GET /public/v1/user/{username}/{usernametag}/sponsors` - 스폰서 목록
- `PATCH /public/v1/user/{username}/{usernametag}/toggle-follow` - 팔로우/언팔로우

### 2. 게시물 관련 (`/public/v1/post`)

#### 피드 조회
- `GET /public/v1/post/latest` - 최신 게시물
- `GET /public/v1/post/feed?type={type}` - 타입별 피드
- `GET /public/v1/post/follow` - 팔로잉 사용자 피드

#### 게시물 상세
- `GET /public/v1/post/{contentId}` - 특정 게시물 조회
- `DELETE /public/v1/post/{contentId}` - 게시물 삭제
- `PATCH /public/v1/post/{contentId}/pin` - 게시물 고정
- `PATCH /public/v1/post/{contentId}/like` - 좋아요 토글

### 3. 검색 관련 (`/public/v1/search`)

- `GET /public/v1/search/post?search={term}&take={count}` - 게시물 검색
- `GET /public/v1/search/hashTag?search={term}` - 해시태그 검색
- `GET /public/v1/search/user?keyword={keyword}` - 사용자 검색

### 4. 가격 관련 (`/public/v1/price`)

- `GET /public/v1/price/latest/{chainId}/{tokenAddress}` - 최신 가격
- `GET /public/v1/price/chart/{chainId}/{tokenAddress}/{interval}/{startTime}/{endTime}` - 가격 차트

### 5. 포인트 관련 (`/public/v1/point`)

- `GET /public/v1/point` - 내 포인트 조회
- `GET /public/v1/point/history/{username}/{usernametag}` - 포인트 히스토리

### 6. MemeX 스테이킹 (블록체인 함수 스펙)

#### 조회 함수 (View)
- `GET /depositBalanceOf?account={address}` - 총 예금 잔액
- `GET /unlockBalanceOf?account={address}` - 출금 가능 잔액
- `GET /getLockedInfosLength?owner={address}` - 잠금 정보 개수
- `GET /getLockedInfos?owner={address}&length={count}` - 잠금 정보 목록

#### 쓰기 함수 (Write - 실제로는 스마트 컨트랙트 호출)
- `POST /deposit` - 예금 및 잠금
- `POST /withdraw` - 출금

### 7. MemeX DEX 연결 (블록체인 함수 스펙)

#### 조회 함수 (View)
- `GET /getPrice?token={address}` - 토큰 가격
- `GET /connectFee` - 연결 수수료
- `GET /swapMin` - 최소 스왑 금액

#### 쓰기 함수 (Write - 실제로는 스마트 컨트랙트 호출)
- `POST /swapSingleBuy` - ETH → 토큰 스왑
- `POST /swapSingleSell` - 토큰 → ETH 스왑

### 8. MemeX 판매 (블록체인 함수 스펙)

#### 조회 함수 (View)
- `GET /getSaleTokenPrice?token={address}` - 판매 가격
- `GET /getSaleTokenInfo?token={address}` - 판매 정보
- `GET /estimateBuyAmountOut?token={address}&amountIn={amount}` - 구매 예상 출력
- `GET /estimateSellAmountOut?token={address}&amountIn={amount}` - 판매 예상 출력
- `GET /getDonatedAmount?token={address}&user={address}` - 기부 금액
- `GET /getTotalDonationAmount?token={address}` - 총 기부 금액

#### 쓰기 함수 (Write - 실제로는 스마트 컨트랙트 호출)
- `POST /buyToken` - 토큰 구매
- `POST /sellToken` - 토큰 판매
- `POST /donateDeposit` - 기부 입금
- `POST /donateWithdraw` - 기부 출금

### 9. 헬스 체크

- `GET /health` - 헬스 체크
- `GET /health/readiness` - 준비 상태 체크

### 10. 해커톤 전용

- `GET /public/v1/memekathon/mock-user-data` - 목업 사용자 데이터 (3000명)

## 📊 주요 데이터 구조

### 사용자 정보 (MyUserInfoOutput)
```typescript
{
  userType: "OFFICIAL" | "GENERAL" | "INFLUENCER" | "REPORTER" | "REPORTMANAGER" | "X_USER" | "X_LOCK_USER",
  profileImageUrl: string,
  displayName: string,
  userName: string,
  userNameTag: string | null,
  bio: string | null,
  tokenAddress: string,
  tokenSymbol: string,
  walletAddress: string | null,
  following: number,
  followers: number,
  // ... 기타 필드
}
```

### 게시물 (FeedPost)
```typescript
{
  id: number,
  value: string,
  body: PostBody[],
  imageSrc: string[],
  contentType: "POST" | "REPLY",
  socialMeta: {
    likeCount: number,
    repostCount: number,
    replyCount: number,
    viewCount: number,
    liked: boolean,
    isFollow: boolean,
    isRePosted: boolean
  },
  postMeta: {
    creator: UserInfo,
    createdAt: string,
    updatedAt: string
  }
}
```

## ⚠️ 주의사항

1. **블록체인 함수 스펙**: MemeX Staking, DEX Connector, Sale 관련 엔드포인트는 실제 API가 아닌 스마트 컨트랙트 함수의 ABI 스펙입니다. 실제 호출은 블록체인을 통해 이루어집니다.

2. **페이징**: 대부분의 목록 조회 API는 `cursor` 기반 페이징을 사용합니다.

3. **인증**: 일부 엔드포인트는 선택적 인증을 지원하지만, 대부분은 인증이 필요합니다.

4. **에러 처리**: API는 표준 HTTP 상태 코드를 사용하며, 에러 응답은 `ErrorResponse` 스키마를 따릅니다.

## 🔗 참고 링크

- [Swagger UI](https://insectarium-public-api.memex.xyz/protected/api/guide)
- [MemeCore 개발 가이드](https://docs.memecore.com/developer-guide/quickstart)

