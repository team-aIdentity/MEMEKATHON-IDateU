# MemeX API 클라이언트 사용 가이드

## 설치 및 설정

### 1. 환경 변수 설정

프로젝트 루트에 `.env.local` 파일을 생성하고 다음을 추가하세요:

```env
NEXT_PUBLIC_API_BASE_URL=https://insectarium-public-api.memex.xyz
```

### 2. 인증 토큰 설정

인증이 필요한 API를 사용하기 전에 토큰을 설정해야 합니다:

```typescript
import { setAuthToken } from '@/lib/utils/api-client';

// 로그인 후 토큰 저장
setAuthToken('your-access-token');
```

## 사용 방법

### 방법 1: 직접 API 클라이언트 사용

```typescript
import { memexApi } from '@/lib/api/memex-api';

// 사용자 정보 조회
const userInfo = await memexApi.getMyInfo();

// 최신 게시물 조회
const posts = await memexApi.getLatestPosts({ limit: 20, cursor: 0 });

// 게시물 좋아요
const result = await memexApi.likePost(123);
```

### 방법 2: React Hook 사용

```typescript
import { useMemeXApi } from '@/lib/hooks/use-memex-api';

function MyComponent() {
  const api = useMemeXApi();

  useEffect(() => {
    const fetchData = async () => {
      const userInfo = await api.getMyInfo();
      const posts = await api.getLatestPosts({ limit: 20 });
    };
    fetchData();
  }, [api]);

  const handleLike = async (postId: number) => {
    await api.likePost(postId);
  };

  return <div>...</div>;
}
```

### 방법 3: 인증 Hook 사용

```typescript
import { useAuth } from '@/lib/hooks/use-auth';

function AuthComponent() {
  const { isAuthenticated, token, login, logout } = useAuth();

  const handleLogin = (token: string) => {
    login(token);
  };

  return (
    <div>
      {isAuthenticated ? (
        <button onClick={logout}>로그아웃</button>
      ) : (
        <button onClick={() => handleLogin('token')}>로그인</button>
      )}
    </div>
  );
}
```

## 주요 API 메서드

### 사용자 관련
- `getMyInfo()` - 현재 사용자 정보
- `getUserInfo(username, usernametag?)` - 특정 사용자 정보
- `editMyInfo(data)` - 사용자 정보 수정
- `toggleFollow(username, usernametag?)` - 팔로우/언팔로우
- `getFollowers(username, usernametag?)` - 팔로워 목록
- `getFollowing(username, usernametag?)` - 팔로잉 목록

### 게시물 관련
- `getLatestPosts(params?)` - 최신 게시물
- `getFeed(type, params?)` - 타입별 피드
- `getFollowingFeed(params?)` - 팔로잉 피드
- `getPost(contentId, params?)` - 특정 게시물
- `likePost(contentId)` - 좋아요 토글
- `pinPost(contentId)` - 게시물 고정
- `deletePost(contentId)` - 게시물 삭제

### 검색 관련
- `searchPosts(search, take, cursor?)` - 게시물 검색
- `searchHashTagAndUser(search)` - 해시태그/사용자 검색
- `searchUsers(keyword)` - 사용자 검색

### 포인트 관련
- `getMyPoint()` - 내 포인트 조회
- `getPointHistory(username, usernametag?, params?)` - 포인트 히스토리

### 가격 관련
- `getLatestPrice(chainId, tokenAddress)` - 최신 가격
- `getPriceChart(chainId, tokenAddress, interval, startTime, endTime)` - 가격 차트

## 에러 처리

```typescript
import { ApiError } from '@/lib/utils/api-client';

try {
  const data = await memexApi.getMyInfo();
} catch (error) {
  if (error instanceof ApiError) {
    console.error('API Error:', error.status, error.statusText);
    console.error('Error Data:', error.data);
  } else {
    console.error('Unknown Error:', error);
  }
}
```

## 타입 안정성

모든 API 응답은 TypeScript 타입이 정의되어 있어 타입 안정성을 보장합니다:

```typescript
import type { MyUserInfoOutput, FeedPost } from '@/lib/types/api';

const userInfo: MyUserInfoOutput = await memexApi.getMyInfo();
const posts: GetHomeFeedOutputV3 = await memexApi.getLatestPosts();
```

## 페이징 처리

대부분의 목록 API는 cursor 기반 페이징을 지원합니다:

```typescript
let cursor: number | undefined = undefined;
let hasMore = true;

while (hasMore) {
  const result = await memexApi.getLatestPosts({ limit: 20, cursor });
  // 데이터 처리
  cursor = result.nextCursor || undefined;
  hasMore = !!cursor;
}
```

