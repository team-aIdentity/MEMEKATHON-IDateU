# 시스템 아키텍처 문서

## 개요

DID 기반 Social-Fi 데이팅 앱의 전체 시스템 아키텍처를 설명합니다.

## 핵심 개념

> "DID 기반으로 스캠 없는 데이팅앱을 만들고, 매칭 기록만 온체인에 저장하며, 유료 아이템 결제 및 커뮤니티는 MemeX 생태계와 연동한다."

## 시스템 아키텍처 다이어그램

```
┌─────────────────────────────────────────────────────────────────┐
│                        Backend DB                                │
│  ┌─────────┐                                                    │
│  │  User   │ ────┐                                              │
│  └─────────┘     │                                              │
│                   ▼                                              │
│            ┌──────────┐                                         │
│            │   KYC    │                                         │
│            └──────────┘                                         │
│                   │                                              │
│                   ▼                                              │
│     VC DATA (나이, 성별, 주소)                                   │
└─────────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│                            DID                                   │
│                                                                   │
│  온체인 CA = 고유값 DID USER DATA                                 │
│  ─────────────────────────────────                               │
│                                                                   │
│  ┌─────────────────────────────────────────────┐                 │
│  │  DID (분산 신원 인증)                       │                 │
│  │                                             │                 │
│  │  발급자 Issuer ──► User ──► VC ──► 검증자  │                 │
│  │  (Issuer)         (Wallet)  (검증가능)     │                 │
│  └─────────────────────────────────────────────┘                 │
└─────────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│                          OnChain                                 │
│                                                                   │
│  신원 인증된 온체인기록 유저 정보 데이터                          │
│  = 유저의 DID 온체인 지갑 (AA WALLET)                            │
│                                                                   │
│  온체인 CA 기반 카운터팩추얼 주소 생성 (User Wallet)             │
│         │                                                         │
│         ▼                                                         │
│  온체인 활동시 (트랜잭션) 카운터팩추얼 주소 기반                  │
│  Wallet 자동 배포/활성화                                         │
│                                                                   │
│  = 주소 같음                                                      │
│                                                                   │
│  User ◄───► User                                                 │
│  매칭시 매칭 정보 온체인 데이터 등록                              │
└─────────────────────────────────────────────────────────────────┘
```

## 주요 기술 요소

### 1. DID 기반 신원 인증

#### 프로세스
1. **앱 회원가입**: 구글/트위터 소셜 로그인
2. **KYC**: 발행받은 VC에서 다음 3개만 필터링
   - 성별
   - 만 19세 여부
   - 거주 국가
3. **온체인 Commit 저장**: 
   ```typescript
   {
     userCommit: string;      // 고유값
     isAdult19: boolean;      // 만 19세 여부
     genderFlag: string;      // 성별 플래그
     countryCommit: string;  // 국가 Commit
   }
   ```

#### 특징
- ✅ DID는 지갑 기능 없음 → 오직 "신원 증명 전용"
- ✅ 실제 지갑/토큰 정보와 연결 X
- ✅ 사용자는 온체인 서명 필요 X

### 2. 온체인 매칭 기록 (Social-Fi 데이터)

#### 프로세스
1. 매칭이 성사되면
2. 백엔드 서버가 `MatchRecord` 컨트랙트에 `matchEvent` 기록
3. 기록 내용:
   ```typescript
   {
     userA_commit: string;
     userB_commit: string;
     timestamp: number;
   }
   ```

#### 특징
- ✅ 유저의 실제 지갑/토큰 정보와 연결 X
- ✅ 사용자는 온체인 서명 필요 X
- ✅ 목적:
  - 앱 신뢰도 강화
  - 여성 사용자 보호
  - "신중한 데이팅" 컨셉 강화

### 3. 유료 아이템 BM (Business Model)

#### 아이템 종류
- 좋아요 무한
- 프로필 되돌리기
- 슈퍼 좋아요 (먼저 말 걸기)
- 온체인 기록 숨기기

#### 활성화 방식
1. 결제 성공시 → 서버의 `itemEntitlement` DB에 저장
2. 즉시 UI에 반영

### 4. 결제 시스템 = MemeX 지갑 + MemeCore 토큰

#### 프로세스
1. **지갑 연결**: 
   - DID Wallet은 결제에 관여 X
   - 유저는 커뮤니티 또는 설정 화면에서 MemeX Wallet(예: MetaMask) 연결

2. **결제 방식**:
   - MemeCore ERC-20 토큰으로 `ItemPaymentContract`에 결제
   - 성공 이벤트 → Backend가 아이템 활성화

#### 특징
- ✅ 완전한 Web3 결제
- ✅ 데이팅 UX는 Web2처럼 자연스럽게 유지

### 5. 커뮤니티 = MemeX Zone

#### 기능
- MemeX Public API 연동
- MemeX Score (게이지) 표시
- 밈 트렌드/콘테스트/캠페인 참여
- InfoFi 기반 분석 기능도 확장 가능

#### 사용 조건
- MemeX Wallet 연결한 유저만 참여 가능

## 기술 아키텍처 흐름

1. **유저 로그인** (구글/트위터)
2. **KYC** → VC 발급 → VC에서 3개 필드만 Commit으로 온체인 저장
3. **실제 앱 활동(매칭)**은 백엔드 → 온체인 기록
4. **유저 구매/결제**는 MemeX Wallet + MemeCore로 진행
5. **아이템 활성화**는 Backend DB에서 관리
6. **커뮤니티 기능**은 MemeX API 기반으로 제공

## 데이터 흐름

### 사용자 등록 흐름
```
소셜 로그인 → KYC → VC 발급 → 필터링 → 온체인 Commit 저장 → DID 생성
```

### 매칭 흐름
```
좋아요 → 매칭 성사 → Backend 처리 → MatchRecord 컨트랙트에 기록 → 온체인 저장
```

### 결제 흐름
```
아이템 선택 → MemeX Wallet 연결 → MemeCore 토큰 결제 → 
ItemPaymentContract → Backend 이벤트 수신 → itemEntitlement DB 저장 → UI 반영
```

## 프론트엔드 구조

### 주요 컴포넌트
- **DID 인증**: `useDID` Hook
- **지갑 연결**: `useWallet` Hook
- **매칭**: `useMatching` Hook
- **아이템**: `useItems` Hook
- **MemeX API**: `useMemeXApi` Hook

### 타입 정의
- `lib/types/did.ts`: DID 관련 타입
- `lib/types/matching.ts`: 매칭 관련 타입
- `lib/types/items.ts`: 아이템 관련 타입
- `lib/types/wallet.ts`: 지갑 관련 타입
- `lib/types/api.ts`: MemeX API 타입

## 백엔드 API (예상)

### DID 관련
- `POST /api/auth/social/{provider}`: 소셜 로그인
- `POST /api/did/create`: DID 생성 (VC 데이터 제출)
- `GET /api/did/status`: DID 인증 상태 확인

### 매칭 관련
- `POST /api/matching/like`: 좋아요/매칭 요청
- `GET /api/matching`: 매칭 목록 조회
- `GET /api/matching/{matchId}`: 특정 매칭 정보
- `GET /api/matching/stats`: 매칭 통계
- `GET /api/matching/{matchId}/onchain`: 온체인 기록 조회

### 아이템 관련
- `GET /api/items`: 아이템 목록 조회
- `GET /api/items/entitlements`: 내 소유권 조회
- `POST /api/items/purchase`: 아이템 구매
- `POST /api/items/use`: 아이템 사용
- `GET /api/items/payments`: 결제 내역 조회

## 스마트 컨트랙트 (예상)

### MatchRecord 컨트랙트
```solidity
contract MatchRecord {
    struct MatchEvent {
        bytes32 userACommit;
        bytes32 userBCommit;
        uint256 timestamp;
    }
    
    event MatchRecorded(
        bytes32 indexed userACommit,
        bytes32 indexed userBCommit,
        uint256 timestamp
    );
    
    function recordMatch(
        bytes32 userACommit,
        bytes32 userBCommit
    ) external;
}
```

### ItemPaymentContract
```solidity
contract ItemPaymentContract {
    event ItemPurchased(
        address indexed user,
        string indexed itemId,
        uint256 amount,
        address token
    );
    
    function purchaseItem(
        string memory itemId,
        address token,
        uint256 amount
    ) external;
}
```

## 보안 고려사항

1. **DID Commit 값**: 해시화하여 개인정보 보호
2. **온체인 기록**: 민감한 정보는 저장하지 않음
3. **결제**: 스마트 컨트랙트를 통한 안전한 결제
4. **인증**: JWT + DID 이중 인증

## 확장 가능성

1. **추가 DID 검증**: 더 많은 VC 필드 활용 가능
2. **다양한 결제 수단**: 다른 토큰/체인 지원
3. **커뮤니티 확장**: MemeX 생태계와의 더 깊은 통합
4. **분석 기능**: 온체인 데이터 기반 분석

## 참고 문서

- [MemeX API 문서](./API_SUMMARY.md)
- [MemeCore 개발 가이드](./MEMECORE_GUIDE.md)
- [프론트엔드 README](../frontend/README.md)

