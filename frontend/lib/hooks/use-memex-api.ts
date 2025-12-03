// MemeX API React Hook

import { useCallback } from 'react';
import { memexApi } from '@/lib/api/memex-api';
import type {
  MyUserInfoOutput,
  EditUserInfoInput,
  GetHomeFeedOutputV3,
  GetFollowingUsersFeedOutputV3,
  GetSpecificPostOutputV3,
  PaginationParams,
} from '@/lib/types/api';

/**
 * MemeX API를 사용하기 위한 React Hook
 */
export function useMemeXApi() {
  // ============ 사용자 관련 ============
  const getMyInfo = useCallback(async (): Promise<MyUserInfoOutput> => {
    return memexApi.getMyInfo();
  }, []);

  const editMyInfo = useCallback(async (data: EditUserInfoInput) => {
    return memexApi.editMyInfo(data);
  }, []);

  const getUserInfo = useCallback(async (username: string, usernametag?: string) => {
    return memexApi.getUserInfo(username, usernametag);
  }, []);

  const toggleFollow = useCallback(async (username: string, usernametag?: string) => {
    return memexApi.toggleFollow(username, usernametag);
  }, []);

  const getFollowers = useCallback(async (username: string, usernametag?: string) => {
    return memexApi.getFollowers(username, usernametag);
  }, []);

  const getFollowing = useCallback(async (username: string, usernametag?: string) => {
    return memexApi.getFollowing(username, usernametag);
  }, []);

  // ============ 게시물 관련 ============
  const getLatestPosts = useCallback(async (params?: PaginationParams): Promise<GetHomeFeedOutputV3> => {
    return memexApi.getLatestPosts(params);
  }, []);

  const getFeed = useCallback(async (type: number, params?: PaginationParams): Promise<GetHomeFeedOutputV3> => {
    return memexApi.getFeed(type, params);
  }, []);

  const getFollowingFeed = useCallback(async (params?: PaginationParams): Promise<GetFollowingUsersFeedOutputV3> => {
    return memexApi.getFollowingFeed(params);
  }, []);

  const getPost = useCallback(async (
    contentId: number,
    params?: {
      withOutThreads?: boolean;
      replyLimit?: number;
      replyCursor?: number;
    }
  ): Promise<GetSpecificPostOutputV3> => {
    return memexApi.getPost(contentId, params);
  }, []);

  const deletePost = useCallback(async (contentId: number) => {
    return memexApi.deletePost(contentId);
  }, []);

  const pinPost = useCallback(async (contentId: number) => {
    return memexApi.pinPost(contentId);
  }, []);

  const likePost = useCallback(async (contentId: number) => {
    return memexApi.likePost(contentId);
  }, []);

  // ============ 검색 관련 ============
  const searchPosts = useCallback(async (search: string, take: number, cursor?: number) => {
    return memexApi.searchPosts(search, take, cursor);
  }, []);

  const searchHashTagAndUser = useCallback(async (search: string) => {
    return memexApi.searchHashTagAndUser(search);
  }, []);

  const searchUsers = useCallback(async (keyword: string) => {
    return memexApi.searchUsers(keyword);
  }, []);

  // ============ 포인트 관련 ============
  const getMyPoint = useCallback(async () => {
    return memexApi.getMyPoint();
  }, []);

  const getPointHistory = useCallback(async (
    username: string,
    usernametag?: string,
    params?: PaginationParams & {
      order?: 'asc' | 'desc';
      types?: ('xPoint' | 'mPoint')[];
    }
  ) => {
    return memexApi.getPointHistory(username, usernametag, params);
  }, []);

  // ============ 가격 관련 ============
  const getLatestPrice = useCallback(async (chainId: number, tokenAddress: string) => {
    return memexApi.getLatestPrice(chainId, tokenAddress);
  }, []);

  const getPriceChart = useCallback(async (
    chainId: number,
    tokenAddress: string,
    interval: string,
    startTime: string,
    endTime: string
  ) => {
    return memexApi.getPriceChart(chainId, tokenAddress, interval, startTime, endTime);
  }, []);

  // ============ 해커톤 전용 ============
  const getMockUserData = useCallback(async () => {
    return memexApi.getMockUserData();
  }, []);

  return {
    // 사용자
    getMyInfo,
    editMyInfo,
    getUserInfo,
    toggleFollow,
    getFollowers,
    getFollowing,
    // 게시물
    getLatestPosts,
    getFeed,
    getFollowingFeed,
    getPost,
    deletePost,
    pinPost,
    likePost,
    // 검색
    searchPosts,
    searchHashTagAndUser,
    searchUsers,
    // 포인트
    getMyPoint,
    getPointHistory,
    // 가격
    getLatestPrice,
    getPriceChart,
    // 해커톤
    getMockUserData,
  };
}

