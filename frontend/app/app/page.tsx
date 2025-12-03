'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import MainApp from '@/components/screens/MainApp';
import { useAuth } from '@/lib/hooks';

export default function AppPage() {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      setShouldRedirect(true);
      router.push('/login');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">IDateU</h1>
          <p className="text-gray-600">로딩 중...</p>
        </div>
      </div>
    );
  }

  if (shouldRedirect || !isAuthenticated) {
    return null;
  }

  return <MainApp />;
}

