'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LoginScreen from '@/components/screens/LoginScreen';
import KYCSetup from '@/components/screens/KYCSetup';
import { useDID } from '@/lib/hooks';
import { toast } from 'sonner';

export default function LoginPage() {
  const router = useRouter();
  const [showKYC, setShowKYC] = useState(false);
  const { socialLogin, submitVCData } = useDID();

  const handleLogin = async (provider: 'google' | 'twitter') => {
    try {
      const response = await socialLogin(provider);
      
      // 로그인 성공 시 토큰 저장 (모의 토큰)
      if (response.accessToken && typeof window !== 'undefined') {
        localStorage.setItem('memex_access_token', response.accessToken);
      }
      
      // KYC 완료 여부 확인
      // 로컬 스토리지에서 DID 인증 상태 확인 ('mock_did_auth')
      // 로그아웃 시 이 값도 삭제되어야 함
      const hasDID = typeof window !== 'undefined' && localStorage.getItem('mock_did_auth');
      
      if (!hasDID) {
        toast.success('KYC 인증을 진행해주세요');
        setShowKYC(true);
      } else {
        toast.success('환영합니다! 🎉');
        router.push('/app');
      }
    } catch (error) {
      toast.error('로그인에 실패했습니다');
      console.error('Login error:', error);
    }
  };

  const handleKYCComplete = async (vcData: { gender: string; isAdult19: boolean; country: string }) => {
    try {
      await submitVCData(vcData);
      toast.success('KYC 인증이 완료되었습니다! 🎉');
      router.push('/app');
    } catch (error) {
      toast.error('KYC 인증에 실패했습니다');
      console.error('KYC error:', error);
    }
  };

  if (showKYC) {
    return <KYCSetup onComplete={handleKYCComplete} />;
  }

  return <LoginScreen onLogin={handleLogin} />;
}

