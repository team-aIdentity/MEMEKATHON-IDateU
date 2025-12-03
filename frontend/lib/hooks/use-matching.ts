// 매칭 관련 Hook

import { useState, useCallback } from 'react';
import type {
  MatchInfo,
  MatchRequestParams,
  MatchResponse,
  MatchListParams,
  MatchStats,
} from '@/lib/types/matching';
import { apiRequest } from '@/lib/utils/api-client';

/**
 * 매칭 기능을 관리하는 Hook
 */
export function useMatching() {
  const [loading, setLoading] = useState(false);

  /**
   * 좋아요/매칭 요청
   */
  const sendLike = useCallback(async (params: MatchRequestParams): Promise<MatchResponse> => {
    setLoading(true);
    try {
      const response = await apiRequest<MatchResponse>('/api/matching/like', {
        method: 'POST',
        body: params,
        requiresAuth: true,
      });
      return response;
    } catch (error) {
      return {
        isMatched: false,
        message: error instanceof Error ? error.message : '매칭 요청 실패',
      };
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * 매칭 목록 조회
   */
  const getMatches = useCallback(async (params?: MatchListParams): Promise<MatchInfo[]> => {
    setLoading(true);
    try {
      const query = new URLSearchParams();
      if (params?.page) query.append('page', String(params.page));
      if (params?.limit) query.append('limit', String(params.limit));
      if (params?.status) query.append('status', params.status);

      const data = await apiRequest<MatchInfo[]>(
        `/api/matching?${query.toString()}`,
        {
          method: 'GET',
          requiresAuth: true,
        }
      );
      return data;
    } catch (error) {
      console.error('매칭 목록 조회 실패:', error);
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * 특정 매칭 정보 조회
   */
  const getMatch = useCallback(async (matchId: string): Promise<MatchInfo | null> => {
    setLoading(true);
    try {
      const data = await apiRequest<MatchInfo>(`/api/matching/${matchId}`, {
        method: 'GET',
        requiresAuth: true,
      });
      return data;
    } catch (error) {
      console.error('매칭 정보 조회 실패:', error);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * 매칭 통계 조회
   */
  const getMatchStats = useCallback(async (): Promise<MatchStats | null> => {
    try {
      const data = await apiRequest<MatchStats>('/api/matching/stats', {
        method: 'GET',
        requiresAuth: true,
      });
      return data;
    } catch (error) {
      console.error('매칭 통계 조회 실패:', error);
      return null;
    }
  }, []);

  return {
    loading,
    sendLike,
    getMatches,
    getMatch,
    getMatchStats,
  };
}

