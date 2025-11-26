# MEMEKATHON - Social-Fi 데이팅 앱

밈코어(MemeCore) 체인 블록체인 해커톤을 위한 MEMEX API 기반 Social-Fi 데이팅 앱 프로젝트입니다.

## 📚 개발 문서

### MemeX Public API

- **API 엔드포인트**: https://insectarium-public-api.memex.xyz
- **Swagger 문서**: https://insectarium-public-api.memex.xyz/protected/api/guide
- **API 스펙 파일**: `memex-api-spec.json`

### MemeCore 개발 가이드

- **Quickstart**: https://docs.memecore.com/developer-guide/quickstart

## 🔑 주요 API 기능

### 1. 사용자 관리 (User Management)

- 사용자 정보 조회/수정
- 팔로우/언팔로우
- 팔로워/팔로잉 목록
- 사용자 검색

### 2. 게시물 관리 (Post Management)

- 게시물 작성/조회/삭제
- 피드 조회 (최신, 팔로잉, 특정 타입)
- 좋아요/리포스트
- 댓글/답글
- 해시태그 검색

### 3. 토큰 관련 (Token Features)

- 토큰 가격 조회
- 가격 차트 데이터
- 토큰 홀더 정보
- 거래 내역
- 스테이킹 기능

### 4. 포인트 시스템 (Point System)

- 포인트 조회 (xPoint, mPoint)
- 포인트 히스토리

### 5. MemeX 스테이킹 (Staking)

- 예금 잔액 조회
- 잠금 정보 조회
- 입금/출금

### 6. MemeX DEX 연결 (DEX Connector)

- 토큰 가격 조회
- 연결 수수료 조회
- 최소 스왑 금액 조회
- ETH ↔ 토큰 스왑

### 7. MemeX 판매 (Sale)

- 토큰 구매/판매
- 기부 입금/출금
- 판매 정보 조회

## 🛠 기술 스택 (예정)

- **Frontend**: React Native / React (웹)
- **Backend**: Node.js / Express (또는 Next.js)
- **Blockchain**: MemeCore Network
- **Wallet**: Web3 지갑 연동
- **API**: MemeX Public API

## 📋 프로젝트 구조

```
MEMEKATHON/
├── README.md
├── memex-api-spec.json          # MemeX API 스펙
├── docs/                         # 문서
│   ├── API_SUMMARY.md           # API 요약 문서
│   ├── MEMECORE_GUIDE.md        # MemeCore 개발 가이드
│   └── DEVELOPMENT_NOTES.md     # 개발 노트
└── frontend/                     # 프론트엔드 (Next.js)
    ├── app/                      # Next.js App Router
    │   ├── examples/             # API 사용 예시 페이지
    │   └── ...
    ├── lib/                      # 라이브러리
    │   ├── api/                  # API 클라이언트
    │   │   ├── memex-api.ts     # MemeX API 클라이언트
    │   │   └── README.md        # API 사용 가이드
    │   ├── hooks/                # React Hooks
    │   │   ├── use-memex-api.ts # API Hook
    │   │   └── use-auth.ts      # 인증 Hook
    │   ├── types/                # TypeScript 타입
    │   │   └── api.ts           # API 타입 정의
    │   └── utils/                # 유틸리티
    │       └── api-client.ts    # API 클라이언트 유틸
    └── ...
```

## 🚀 시작하기

### 프론트엔드 개발

1. 프론트엔드 디렉토리로 이동

```bash
cd frontend
```

2. 의존성 설치

```bash
npm install
```

3. 환경 변수 설정
   `.env.local` 파일을 생성하고 다음을 추가:

```env
NEXT_PUBLIC_API_BASE_URL=https://insectarium-public-api.memex.xyz
```

4. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

5. API 사용 예시 확인
   [http://localhost:3000/examples](http://localhost:3000/examples)에서 API 사용 예시를 확인할 수 있습니다.

자세한 내용은 [frontend/README.md](./frontend/README.md)를 참조하세요.

## 📝 주요 기능

### ✅ 구현 완료 (프론트엔드)

- [x] MemeX API 클라이언트 (완전한 타입 안전성)
- [x] DID 인증 관련 타입 및 Hook
- [x] 매칭 관련 타입 및 Hook
- [x] 유료 아이템 관련 타입 및 Hook
- [x] 지갑 연결 관련 타입 및 Hook
- [x] 인증 상태 관리 Hook

### 🚧 개발 예정 (백엔드/스마트 컨트랙트)

- [ ] DID 기반 신원 인증 시스템
- [ ] 온체인 매칭 기록 (MatchRecord 컨트랙트)
- [ ] 아이템 결제 시스템 (ItemPaymentContract)
- [ ] KYC 및 VC 발급 프로세스
- [ ] 소셜 로그인 연동
- [ ] 채팅 기능
- [ ] MemeCore 네트워크 통합

## 🔐 인증

API는 JWT 기반 인증을 사용합니다:

- `Authorization: Bearer <token>` 헤더 필요
- 일부 엔드포인트는 선택적 인증 지원

## 📡 API 개발 가이드

이 프로젝트에서 사용하는 API는 크게 두 가지로 구분됩니다:

### 1. MemeX Public API (외부 API)

**목적**: 커뮤니티 기능, 소셜 피드, 토큰 정보 등 MemeX 생태계 기능 제공

**Base URL**: `https://insectarium-public-api.memex.xyz`

**인증**: JWT Bearer Token

#### 사용하는 주요 엔드포인트

##### 사용자 관련

- `GET /public/v1/user` - 현재 사용자 정보 조회
- `GET /public/v1/user/{username}/{usernametag}` - 특정 사용자 정보 조회
- `PATCH /public/v1/user/{username}/{usernametag}/toggle-follow` - 팔로우/언팔로우
- `GET /public/v1/user/{username}/{usernametag}/followers` - 팔로워 목록
- `GET /public/v1/user/{username}/{usernametag}/following` - 팔로잉 목록

##### 게시물 관련

- `GET /public/v1/post/latest` - 최신 게시물 조회
- `GET /public/v1/post/feed?type={type}` - 타입별 피드 조회
- `GET /public/v1/post/follow` - 팔로잉 사용자 피드
- `GET /public/v1/post/{contentId}` - 특정 게시물 조회
- `PATCH /public/v1/post/{contentId}/like` - 좋아요 토글

##### 검색 관련

- `GET /public/v1/search/user?keyword={keyword}` - 사용자 검색
- `GET /public/v1/search/post?search={term}&take={count}` - 게시물 검색
- `GET /public/v1/search/hashTag?search={term}` - 해시태그 검색

##### 가격 관련

- `GET /public/v1/price/latest/{chainId}/{tokenAddress}` - 최신 토큰 가격
- `GET /public/v1/price/chart/{chainId}/{tokenAddress}/{interval}/{startTime}/{endTime}` - 가격 차트

##### 포인트 관련

- `GET /public/v1/point` - 내 포인트 조회
- `GET /public/v1/point/history/{username}/{usernametag}` - 포인트 히스토리

##### 해커톤 전용

- `GET /public/v1/memekathon/mock-user-data` - 목업 사용자 데이터 (3000명)

**구현 상태**: ✅ 완료 (프론트엔드 클라이언트 구현 완료)

**사용 위치**:

- 커뮤니티 기능 (MemeX Zone)
- 사용자 프로필 표시
- 소셜 피드
- 토큰 정보 표시

**참고 문서**: [API_SUMMARY.md](./docs/API_SUMMARY.md)

---

### 2. 백엔드 API (자체 개발 필요)

**목적**: DID 인증, 매칭, 아이템 결제 등 앱 핵심 기능 제공

**Base URL**: `/api` (백엔드 서버 URL 설정 필요)

**인증**: JWT Bearer Token (MemeX API와 동일한 토큰 사용 가능)

#### 2.1 DID 인증 API

**목적**: DID 기반 신원 인증 및 KYC 처리

##### 엔드포인트

- `POST /api/auth/social/{provider}` - 소셜 로그인 (google, twitter)

  - **Request**: `{ provider: 'google' | 'twitter' }`
  - **Response**: `{ accessToken, refreshToken?, user: { id, email, name, picture } }`

- `POST /api/did/create` - DID 생성 (VC 데이터 제출)

  - **Request**: `{ gender: string, isAdult19: boolean, country: string }`
  - **Response**: `{ did, commit: { userCommit, isAdult19, genderFlag, countryCommit }, issuer, issuedAt }`

- `GET /api/did/status` - DID 인증 상태 확인
  - **Response**: `{ did, commit, issuer, issuedAt, expiresAt }`

**구현 상태**: 🚧 개발 예정 (타입 및 Hook 준비 완료)

**사용 위치**:

- 회원가입/로그인 플로우
- KYC 인증
- 신원 인증 상태 확인

---

#### 2.2 매칭 API

**목적**: 사용자 매칭 및 온체인 매칭 기록 관리

##### 엔드포인트

- `POST /api/matching/like` - 좋아요/매칭 요청

  - **Request**: `{ targetUserId: number, likeType?: 'normal' | 'super' }`
  - **Response**: `{ isMatched: boolean, matchInfo?, message: string }`

- `GET /api/matching` - 매칭 목록 조회

  - **Query**: `?page={number}&limit={number}&status={status}`
  - **Response**: `MatchInfo[]`

- `GET /api/matching/{matchId}` - 특정 매칭 정보 조회

  - **Response**: `MatchInfo`

- `GET /api/matching/stats` - 매칭 통계

  - **Response**: `{ totalMatches, activeMatches, onChainRecordedMatches, averageResponseTime? }`

- `GET /api/matching/{matchId}/onchain` - 온체인 매칭 기록 조회
  - **Response**: `{ matchEventId, userACommit, userBCommit, timestamp, txHash, blockNumber }`

**구현 상태**: 🚧 개발 예정 (타입 및 Hook 준비 완료)

**사용 위치**:

- 데이팅 매칭 기능
- 매칭 목록 화면
- 매칭 상세 화면
- 온체인 기록 확인

**온체인 연동**:

- 매칭 성사 시 `MatchRecord` 컨트랙트에 자동 기록
- 사용자는 온체인 서명 불필요 (백엔드에서 처리)

---

#### 2.3 아이템 결제 API

**목적**: 유료 아이템 구매 및 소유권 관리

##### 엔드포인트

- `GET /api/items` - 아이템 목록 조회

  - **Response**: `ItemInfo[]` (unlimited_likes, profile_rewind, super_like, hide_onchain_record)

- `GET /api/items/entitlements` - 내 아이템 소유권 조회

  - **Response**: `ItemEntitlement[]`

- `POST /api/items/purchase` - 아이템 구매

  - **Request**: `{ itemId: string, tokenAddress: string, amount: string, walletAddress: string }`
  - **Response**: `{ success: boolean, txHash?, entitlement?, error? }`

- `POST /api/items/use` - 아이템 사용

  - **Request**: `{ itemType: ItemType, targetId?: string }`
  - **Response**: `{ success: boolean, remainingCount?, error? }`

- `GET /api/items/payments` - 결제 내역 조회
  - **Response**: `PaymentHistory[]`

**구현 상태**: 🚧 개발 예정 (타입 및 Hook 준비 완료)

**사용 위치**:

- 아이템 상점
- 아이템 구매 플로우
- 아이템 사용 (좋아요 무한, 프로필 되돌리기 등)
- 결제 내역

**결제 프로세스**:

1. 사용자가 MemeX Wallet 연결
2. 아이템 선택 및 결제 요청
3. MemeCore 토큰으로 `ItemPaymentContract`에 결제
4. 결제 성공 이벤트 → Backend가 `itemEntitlement` DB에 저장
5. UI 즉시 반영

---

#### 2.4 채팅 API (선택사항)

**목적**: 매칭된 사용자 간 1:1 채팅

##### 엔드포인트 (예상)

- `GET /api/chat/conversations` - 대화 목록 조회
- `GET /api/chat/{conversationId}/messages` - 메시지 조회
- `POST /api/chat/{conversationId}/messages` - 메시지 전송
- `GET /api/chat/{conversationId}` - 대화 정보 조회

**구현 상태**: 📋 계획 단계

---

### 3. 스마트 컨트랙트 (온체인)

**목적**: 매칭 기록 및 아이템 결제를 온체인에 저장

#### 3.1 MatchRecord 컨트랙트

**목적**: 매칭 성사 시 온체인에 기록

**주요 함수**:

- `recordMatch(bytes32 userACommit, bytes32 userBCommit)` - 매칭 기록
- `getMatchRecord(bytes32 userACommit, bytes32 userBCommit)` - 매칭 기록 조회

**이벤트**:

- `MatchRecorded(bytes32 indexed userACommit, bytes32 indexed userBCommit, uint256 timestamp)`

**구현 상태**: 🚧 개발 예정

**호출 방식**: 백엔드에서 자동 호출 (사용자 서명 불필요)

---

#### 3.2 ItemPaymentContract

**목적**: 아이템 결제를 온체인에 기록

**주요 함수**:

- `purchaseItem(string memory itemId, address token, uint256 amount)` - 아이템 구매

**이벤트**:

- `ItemPurchased(address indexed user, string indexed itemId, uint256 amount, address token)`

**구현 상태**: 🚧 개발 예정

**호출 방식**: 사용자 지갑에서 직접 호출 (Web3 트랜잭션)

---

## 🔄 API 통합 흐름

### 사용자 등록 흐름

```
1. 소셜 로그인 (POST /api/auth/social/{provider})
   ↓
2. KYC 완료 후 VC 데이터 제출 (POST /api/did/create)
   ↓
3. DID 생성 및 온체인 Commit 저장
   ↓
4. MemeX API 토큰 발급 (선택사항)
```

### 매칭 흐름

```
1. 사용자 좋아요 (POST /api/matching/like)
   ↓
2. 매칭 성사 시
   ↓
3. 백엔드가 MatchRecord 컨트랙트에 기록 (자동)
   ↓
4. 매칭 정보 반환 (GET /api/matching/{matchId})
```

### 아이템 구매 흐름

```
1. 아이템 선택 (GET /api/items)
   ↓
2. 결제 요청 (POST /api/items/purchase)
   ↓
3. 사용자 지갑에서 ItemPaymentContract 호출
   ↓
4. 결제 성공 이벤트 → Backend가 소유권 저장
   ↓
5. 아이템 활성화 (GET /api/items/entitlements)
```

---

## 📚 API 문서 참고

- **MemeX Public API**: [API_SUMMARY.md](./docs/API_SUMMARY.md)
- **Swagger 문서**: https://insectarium-public-api.memex.xyz/protected/api/guide
- **프론트엔드 API 클라이언트**: [frontend/lib/api/README.md](./frontend/lib/api/README.md)
- **시스템 아키텍처**: [ARCHITECTURE.md](./docs/ARCHITECTURE.md)

## 📖 API 사용 예시

### 사용자 정보 조회

```bash
GET /public/v1/user
Authorization: Bearer <token>
```

### 게시물 피드 조회

```bash
GET /public/v1/post/feed?type=1&limit=20&cursor=0
Authorization: Bearer <token>
```

### 토큰 가격 조회

```bash
GET /public/v1/price/latest/{chainId}/{tokenAddress}
```

## 🏗 아키텍처

자세한 시스템 아키텍처는 [아키텍처 문서](./docs/ARCHITECTURE.md)를 참조하세요.

### 핵심 개념

- **DID 기반 신원 인증**: KYC → VC → 온체인 Commit 저장
- **온체인 매칭 기록**: 매칭 성사 시 MatchRecord 컨트랙트에 기록
- **유료 아이템**: MemeCore 토큰으로 결제, Backend DB에서 관리
- **커뮤니티**: MemeX API 기반으로 제공

## 📄 라이선스

해커톤 프로젝트
