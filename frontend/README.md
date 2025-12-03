# MEMEKATHON Frontend

MemeCore 체인 블록체인 해커톤을 위한 MEMEX API 기반 Social-Fi 데이팅 앱 프론트엔드입니다.

## 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **API Client**: Custom MemeX API Client

## 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경 변수 설정

`.env.local` 파일을 생성하고 다음을 추가하세요:

```env
NEXT_PUBLIC_API_BASE_URL=https://insectarium-public-api.memex.xyz
```

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 4. MemeCore 테스트넷 설정

프로젝트는 MemeCore 테스트넷(**Insectarium Testnet**)에 연결되도록 설정되어 있습니다.

- **체인 ID**: 43522
- **RPC**: https://rpc.insectarium.memecore.net
- **Faucet**: https://faucet.memecore.com/insectarium

테스트넷 정보는 [http://localhost:3000/testnet-info](http://localhost:3000/testnet-info)에서 확인할 수 있습니다.

## 프로젝트 구조

```
frontend/
├── app/                    # Next.js App Router
│   ├── examples/           # API 사용 예시 페이지
│   ├── testnet-info/       # 테스트넷 정보 페이지
│   └── ...
├── lib/
│   ├── api/                # API 클라이언트
│   │   ├── memex-api.ts    # MemeX API 클라이언트
│   │   └── README.md       # API 사용 가이드
│   ├── hooks/              # React Hooks
│   │   ├── use-memex-api.ts # API Hook
│   │   ├── use-auth.ts     # 인증 Hook
│   │   ├── use-did.ts      # DID 인증 Hook
│   │   ├── use-wallet.ts   # 지갑 연결 Hook
│   │   ├── use-items.ts    # 아이템 관리 Hook
│   │   ├── use-matching.ts # 매칭 Hook
│   │   └── index.ts        # 통합 export
│   ├── types/              # TypeScript 타입 정의
│   │   ├── api.ts          # API 타입
│   │   ├── did.ts          # DID 타입
│   │   ├── matching.ts     # 매칭 타입
│   │   ├── items.ts        # 아이템 타입
│   │   ├── wallet.ts       # 지갑 타입
│   │   └── index.ts        # 통합 export
│   └── utils/              # 유틸리티 함수
│       ├── api-client.ts   # API 클라이언트 유틸
│       ├── did.ts          # DID 유틸
│       ├── wallet.ts       # 지갑 유틸
│       └── memecore.ts     # MemeCore 네트워크 유틸
└── public/                 # 정적 파일
```

## 주요 기능

### API 클라이언트

- MemeX Public API와의 통신을 위한 완전한 타입 안전 클라이언트
- JWT 기반 인증 지원
- 에러 처리 및 재시도 로직

### React Hooks

- `useMemeXApi`: API 호출을 위한 편리한 Hook
- `useAuth`: 인증 상태 관리 Hook
- `useDID`: DID 인증 관리 Hook
- `useWallet`: 지갑 연결 및 MemeCore 네트워크 관리 Hook
- `useItems`: 유료 아이템 관리 Hook
- `useMatching`: 매칭 기능 관리 Hook

### 타입 안정성

- 모든 API 응답에 대한 완전한 TypeScript 타입 정의
- 컴파일 타임 타입 체크

### MemeCore 네트워크 통합

- Insectarium Testnet 자동 연결
- 지갑 네트워크 전환 지원
- 테스트넷 정보 및 Faucet 링크 제공

## 사용 예시

### 기본 API 호출

```typescript
import { memexApi } from "@/lib/api/memex-api";

// 사용자 정보 조회
const userInfo = await memexApi.getMyInfo();

// 게시물 조회
const posts = await memexApi.getLatestPosts({ limit: 20 });
```

### 지갑 연결

```typescript
import { useWallet } from "@/lib/hooks";

function WalletComponent() {
  const { connect, address, isConnectedToMemeCore, switchToMemeCore } =
    useWallet();

  return (
    <div>
      {!address ? (
        <button onClick={connect}>지갑 연결</button>
      ) : !isConnectedToMemeCore ? (
        <button onClick={switchToMemeCore}>MemeCore 네트워크로 전환</button>
      ) : (
        <p>연결됨: {address}</p>
      )}
    </div>
  );
}
```

### DID 인증

```typescript
import { useDID } from "@/lib/hooks";

function DIDComponent() {
  const { socialLogin, submitVCData, isAuthenticated } = useDID();

  const handleLogin = async () => {
    const response = await socialLogin("google");
    // KYC 후 VC 데이터 제출
    await submitVCData({
      gender: "M",
      isAdult19: true,
      country: "KR",
    });
  };

  return <button onClick={handleLogin}>DID 인증</button>;
}
```

자세한 사용법은 [API 사용 가이드](./lib/api/README.md)를 참조하세요.

## MemeCore 테스트넷

### 네트워크 정보

- **체인 ID**: 43522
- **네트워크 이름**: Insectarium Testnet
- **RPC URL**: https://rpc.insectarium.memecore.net
- **블록 탐색기**: (TBD)
- **Faucet**: https://faucet.memecore.com/insectarium

### 테스트 토큰 받기

1. [Faucet](https://faucet.memecore.com/insectarium)에 접속
2. 지갑 주소 입력
3. 테스트 토큰 요청
4. 지갑에서 확인

## 빌드

```bash
npm run build
```

## 배포

프로젝트는 Vercel에 배포할 수 있습니다:

```bash
npm run build
```

또는 Vercel CLI를 사용:

```bash
vercel
```

## 참고 문서

- [MemeX API 문서](../../docs/API_SUMMARY.md)
- [MemeCore 개발 가이드](../../docs/MEMECORE_GUIDE.md)
- [시스템 아키텍처](../../docs/ARCHITECTURE.md)
- [API 클라이언트 사용 가이드](./lib/api/README.md)
