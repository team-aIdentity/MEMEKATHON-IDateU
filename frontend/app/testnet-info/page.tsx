/**
 * MemeCore 테스트넷 정보 페이지
 * 개발 및 테스트 시 참고용
 */

"use client";

import { formatNetworkInfo, getFaucetUrl } from "@/lib/utils/memecore";
import { useWallet } from "@/lib/hooks/use-wallet";

export default function TestnetInfoPage() {
  const networkInfo = formatNetworkInfo();
  const {
    isConnected,
    address,
    chainId,
    isConnectedToMemeCore,
    connect,
    switchToMemeCore,
  } = useWallet();

  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">MemeCore 테스트넷 정보</h1>

      {/* 네트워크 정보 */}
      <div className="mb-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Insectarium Testnet</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="font-medium">네트워크 이름:</span>
            <span>{networkInfo.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">체인 ID:</span>
            <span className="font-mono">{networkInfo.chainId}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">네이티브 토큰:</span>
            <span>{networkInfo.symbol}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">RPC URL:</span>
            <span className="font-mono text-sm">
              https://rpc.insectarium.memecore.net
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">WebSocket:</span>
            <span className="font-mono text-sm">
              wss://ws.insectarium.memecore.net
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">블록 탐색기:</span>
            <a
              href={networkInfo.explorer}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {networkInfo.explorer}
            </a>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Faucet:</span>
            <a
              href={networkInfo.faucet}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {networkInfo.faucet}
            </a>
          </div>
        </div>
      </div>

      {/* 지갑 연결 상태 */}
      <div className="mb-8 p-6 bg-gray-50 border rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">지갑 연결 상태</h2>
        <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <span className="font-medium">연결 상태:</span>
            <span className={isConnected ? "text-green-600" : "text-red-600"}>
              {isConnected ? "✅ 연결됨" : "❌ 연결 안됨"}
            </span>
          </div>
          {address && (
            <div className="flex justify-between">
              <span className="font-medium">지갑 주소:</span>
              <span className="font-mono text-sm">{address}</span>
            </div>
          )}
          {chainId && (
            <div className="flex justify-between">
              <span className="font-medium">체인 ID:</span>
              <span className="font-mono">{chainId}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="font-medium">MemeCore 네트워크:</span>
            <span
              className={
                isConnectedToMemeCore ? "text-green-600" : "text-yellow-600"
              }
            >
              {isConnectedToMemeCore
                ? "✅ 올바른 네트워크"
                : "⚠️ 다른 네트워크"}
            </span>
          </div>
        </div>
        <div className="space-x-2">
          {!isConnected ? (
            <button
              onClick={connect}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              지갑 연결
            </button>
          ) : !isConnectedToMemeCore ? (
            <button
              onClick={switchToMemeCore}
              className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
            >
              MemeCore 네트워크로 전환
            </button>
          ) : (
            <div className="text-green-600 font-medium">
              ✅ MemeCore 테스트넷에 연결됨
            </div>
          )}
        </div>
      </div>

      {/* 개발 가이드 */}
      <div className="mb-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">개발 가이드</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>MetaMask 또는 다른 Web3 지갑을 설치하세요.</li>
          <li>지갑 연결 버튼을 클릭하여 지갑을 연결하세요.</li>
          <li>
            <a
              href={getFaucetUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Faucet
            </a>
            에서 테스트 토큰을 받으세요.
          </li>
          <li>MemeCore 네트워크가 자동으로 추가됩니다.</li>
          <li>체인 ID가 43522인지 확인하세요.</li>
        </ol>
      </div>

      {/* 중요 참고사항 */}
      <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-red-800">
          ⚠️ 중요 참고사항
        </h2>
        <ul className="list-disc list-inside space-y-2 text-red-700">
          <li>
            이것은 <strong>테스트넷</strong>입니다. 실제 가치가 있는 토큰이
            아닙니다.
          </li>
          <li>테스트넷 토큰은 Faucet에서 무료로 받을 수 있습니다.</li>
          <li>프로덕션 환경에서는 메인넷 정보를 사용해야 합니다.</li>
          <li>
            개인정보 보호정책: 체인에서 공개적으로 이용 가능한 데이터를 제외하고
            동의 없이 사용자 데이터를 기록, 저장 또는 추적하지 않습니다.
          </li>
        </ul>
      </div>
    </div>
  );
}
