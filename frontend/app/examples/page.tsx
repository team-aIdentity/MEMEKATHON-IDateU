/**
 * MemeX API 사용 예시 페이지
 * 
 * 이 페이지는 API 클라이언트의 사용 예시를 보여줍니다.
 * 실제 프로덕션에서는 이 파일을 삭제하거나 수정하여 사용하세요.
 */

'use client';

import { useState, useEffect } from 'react';
import { useMemeXApi } from '@/lib/hooks/use-memex-api';
import { useAuth } from '@/lib/hooks/use-auth';
import type { MyUserInfoOutput, GetHomeFeedOutputV3 } from '@/lib/types/api';

export default function ExamplesPage() {
  const api = useMemeXApi();
  const { isAuthenticated, login, logout } = useAuth();
  const [userInfo, setUserInfo] = useState<MyUserInfoOutput | null>(null);
  const [posts, setPosts] = useState<GetHomeFeedOutputV3 | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 사용자 정보 조회 예시
  const fetchUserInfo = async () => {
    if (!isAuthenticated) {
      setError('로그인이 필요합니다.');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const data = await api.getMyInfo();
      setUserInfo(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : '사용자 정보를 불러오는데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  // 최신 게시물 조회 예시
  const fetchLatestPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.getLatestPosts({ limit: 10, cursor: 0 });
      setPosts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : '게시물을 불러오는데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  // 게시물 좋아요 예시
  const handleLikePost = async (postId: number) => {
    if (!isAuthenticated) {
      setError('로그인이 필요합니다.');
      return;
    }

    try {
      const result = await api.likePost(postId);
      console.log('Like result:', result);
      // 게시물 목록 새로고침
      await fetchLatestPosts();
    } catch (err) {
      setError(err instanceof Error ? err.message : '좋아요 처리에 실패했습니다.');
    }
  };

  // 사용자 검색 예시
  const handleSearchUsers = async (keyword: string) => {
    if (!keyword.trim()) return;

    setLoading(true);
    try {
      const results = await api.searchUsers(keyword);
      console.log('Search results:', results);
    } catch (err) {
      setError(err instanceof Error ? err.message : '검색에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">MemeX API 사용 예시</h1>

      {/* 인증 상태 */}
      <div className="mb-8 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">인증 상태</h2>
        <p className="mb-2">로그인 상태: {isAuthenticated ? '✅ 로그인됨' : '❌ 로그인 필요'}</p>
        <div className="space-x-2">
          <button
            onClick={() => {
              const token = prompt('액세스 토큰을 입력하세요:');
              if (token) login(token);
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            로그인 (토큰 입력)
          </button>
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            로그아웃
          </button>
        </div>
      </div>

      {/* 에러 메시지 */}
      {error && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      {/* 사용자 정보 예시 */}
      <div className="mb-8 p-4 border rounded-lg">
        <h2 className="text-xl font-semibold mb-4">1. 사용자 정보 조회</h2>
        <button
          onClick={fetchUserInfo}
          disabled={loading || !isAuthenticated}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-400"
        >
          내 정보 가져오기
        </button>
        {userInfo && (
          <div className="mt-4 p-4 bg-gray-50 rounded">
            <pre className="text-sm overflow-auto">
              {JSON.stringify(userInfo, null, 2)}
            </pre>
          </div>
        )}
      </div>

      {/* 게시물 조회 예시 */}
      <div className="mb-8 p-4 border rounded-lg">
        <h2 className="text-xl font-semibold mb-4">2. 최신 게시물 조회</h2>
        <button
          onClick={fetchLatestPosts}
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          최신 게시물 가져오기
        </button>
        {posts && (
          <div className="mt-4">
            <p className="mb-2">총 {posts.contents.length}개의 게시물</p>
            <div className="space-y-4">
              {posts.contents.map((post) => (
                <div key={post.id} className="p-4 bg-gray-50 rounded">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">
                      {post.postMeta.creator.displayName}
                    </span>
                    <button
                      onClick={() => handleLikePost(post.id)}
                      disabled={!isAuthenticated}
                      className="px-3 py-1 bg-pink-500 text-white rounded text-sm hover:bg-pink-600 disabled:bg-gray-400"
                    >
                      ❤️ {post.socialMeta.likeCount}
                    </button>
                  </div>
                  <p className="text-gray-700">{post.value}</p>
                  <div className="mt-2 text-sm text-gray-500">
                    좋아요: {post.socialMeta.likeCount} | 
                    댓글: {post.socialMeta.replyCount} | 
                    조회: {post.socialMeta.viewCount}
                  </div>
                </div>
              ))}
            </div>
            {posts.nextCursor && (
              <p className="mt-4 text-sm text-gray-500">
                다음 커서: {posts.nextCursor}
              </p>
            )}
          </div>
        )}
      </div>

      {/* 사용자 검색 예시 */}
      <div className="mb-8 p-4 border rounded-lg">
        <h2 className="text-xl font-semibold mb-4">3. 사용자 검색</h2>
        <input
          type="text"
          placeholder="사용자 이름 검색..."
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearchUsers(e.currentTarget.value);
            }
          }}
          className="w-full px-4 py-2 border rounded mb-2"
        />
        <p className="text-sm text-gray-500">
          Enter 키를 눌러 검색하세요. 결과는 콘솔에 출력됩니다.
        </p>
      </div>

      {/* 로딩 상태 */}
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <p className="text-lg">로딩 중...</p>
          </div>
        </div>
      )}
    </div>
  );
}

