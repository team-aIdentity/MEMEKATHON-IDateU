// 유료 아이템 관련 Hook

import { useState, useEffect, useCallback } from 'react';
import type {
  ItemInfo,
  ItemEntitlement,
  PaymentRequest,
  PaymentResponse,
  PaymentHistory,
  UseItemRequest,
} from '@/lib/types/items';
import { apiRequest } from '@/lib/utils/api-client';

/**
 * 유료 아이템을 관리하는 Hook
 */
export function useItems() {
  const [items, setItems] = useState<ItemInfo[]>([]);
  const [entitlements, setEntitlements] = useState<ItemEntitlement[]>([]);
  const [loading, setLoading] = useState(false);

  // 아이템 목록 조회
  const fetchItems = useCallback(async () => {
    setLoading(true);
    try {
      const data = await apiRequest<ItemInfo[]>('/api/items', {
        method: 'GET',
      });
      setItems(data);
    } catch (error) {
      console.error('아이템 목록 조회 실패:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  // 내 아이템 소유권 조회
  const fetchMyEntitlements = useCallback(async () => {
    setLoading(true);
    try {
      const data = await apiRequest<ItemEntitlement[]>('/api/items/entitlements', {
        method: 'GET',
        requiresAuth: true,
      });
      setEntitlements(data);
    } catch (error) {
      console.error('소유권 조회 실패:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  // 아이템 구매
  const purchaseItem = useCallback(async (request: PaymentRequest): Promise<PaymentResponse> => {
    setLoading(true);
    try {
      const response = await apiRequest<PaymentResponse>('/api/items/purchase', {
        method: 'POST',
        body: request,
        requiresAuth: true,
      });

      if (response.success) {
        // 소유권 목록 새로고침
        await fetchMyEntitlements();
      }

      return response;
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : '구매 실패',
      };
    } finally {
      setLoading(false);
    }
  }, [fetchMyEntitlements]);

  // 아이템 사용
  const useItem = useCallback(async (request: UseItemRequest) => {
    try {
      const response = await apiRequest('/api/items/use', {
        method: 'POST',
        body: request,
        requiresAuth: true,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }, []);

  // 결제 내역 조회
  const fetchPaymentHistory = useCallback(async (): Promise<PaymentHistory[]> => {
    try {
      const data = await apiRequest<PaymentHistory[]>('/api/items/payments', {
        method: 'GET',
        requiresAuth: true,
      });
      return data;
    } catch (error) {
      console.error('결제 내역 조회 실패:', error);
      return [];
    }
  }, []);

  // 특정 아이템 소유 여부 확인
  const hasItem = useCallback((itemType: string): boolean => {
    return entitlements.some(
      (entitlement) =>
        entitlement.item.type === itemType &&
        entitlement.isActive &&
        (entitlement.expiresAt === null || new Date(entitlement.expiresAt) > new Date())
    );
  }, [entitlements]);

  // 초기 로드
  useEffect(() => {
    fetchItems();
    fetchMyEntitlements();
  }, [fetchItems, fetchMyEntitlements]);

  return {
    items,
    entitlements,
    loading,
    fetchItems,
    fetchMyEntitlements,
    purchaseItem,
    useItem,
    fetchPaymentHistory,
    hasItem,
  };
}

