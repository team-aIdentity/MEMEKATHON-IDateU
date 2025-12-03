'use client';

import { useState } from "react";
import { Heart, MessageCircle, ShoppingBag, Users, Settings, Wallet } from "lucide-react";
import MatchingScreen from "./MatchingScreen";
import MatchList from "./MatchList";
import ChatScreen from "./ChatScreen";
import ChatRequestDetailScreen from "./ChatRequestDetailScreen";
import ItemStore from "./ItemStore";
import CommunityScreen from "./CommunityScreen";
import ProfileDetail from "./ProfileDetail";
import ProfileSettings from "./ProfileSettings";
import { toast } from "sonner";
import { useWallet } from "@/lib/hooks";
import { useMemeXApi } from "@/lib/hooks";

type Screen = 'matching' | 'matches' | 'chat' | 'chat-request' | 'store' | 'community' | 'settings' | 'profile';

interface Profile {
  id: string;
  name: string;
  age: number;
  bio: string;
  interests: string[];
  image: string;
  location: string;
  gender: string;
}

interface UserItems {
  unlimitedLikes: boolean;
  rewind: boolean;
  superLike: boolean;
  hideOnChain: boolean;
}

interface ChatRequestDetail {
  id: string;
  name: string;
  avatarColor: string;
  avatarInitial: string;
  message: string;
  time: string;
}

export default function MainApp() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('matching');
  const [selectedMatchId, setSelectedMatchId] = useState<string | null>(null);
  const [chatRequestDetail, setChatRequestDetail] = useState<ChatRequestDetail | null>(null);
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [walletConnected, setWalletConnected] = useState(false);
  const [memeXConnected, setMemeXConnected] = useState(false);
  const [userItems, setUserItems] = useState<UserItems>({
    unlimitedLikes: false,
    rewind: false,
    superLike: false,
    hideOnChain: false,
  });

  const { connect, isConnected: walletIsConnected } = useWallet();

  const handleConnectWallet = async () => {
    try {
      await connect();
      setWalletConnected(true);
      toast.success('MemeX Wallet connected successfully! 🎉');
    } catch (error) {
      toast.error('지갑 연결에 실패했습니다');
      console.error('Wallet connection error:', error);
    }
  };

  const memeXApi = useMemeXApi();

  const handleConnectMemeX = async () => {
    try {
      // MemeX API 연결 확인 (예: 사용자 정보 조회)
      await memeXApi.getMyInfo();
      setMemeXConnected(true);
      toast.success('MemeX Zone에 연결되었습니다! 🚀', {
        description: '이제 커뮤니티를 사용할 수 있습니다.',
      });
      // Automatically navigate to community screen after connection
      setCurrentScreen('community');
    } catch (error) {
      toast.error('MemeX 연결에 실패했습니다. 로그인이 필요합니다.');
      console.error('MemeX connection error:', error);
    }
  };

  const handlePurchase = (itemId: string, price: number) => {
    // Simulate purchase
    const itemMap: Record<string, keyof UserItems> = {
      unlimited_likes: 'unlimitedLikes',
      rewind: 'rewind',
      super_like: 'superLike',
      hide_onchain: 'hideOnChain',
    };

    const itemKey = itemMap[itemId];
    if (itemKey) {
      setUserItems(prev => ({ ...prev, [itemKey]: true }));
    }
  };

  const handleSelectMatch = (matchId: string) => {
    setSelectedMatchId(matchId);
    setChatRequestDetail(null);
    setCurrentScreen('chat');
  };

  const handleSelectChatRequest = (request: ChatRequestDetail) => {
    setChatRequestDetail(request);
    setSelectedMatchId(null);
    setCurrentScreen('chat-request');
  };

  const handleBackFromChat = () => {
    setCurrentScreen('matches');
    setSelectedMatchId(null);
    setChatRequestDetail(null);
  };

  const handleBackFromChatRequest = () => {
    setCurrentScreen('matches');
    setChatRequestDetail(null);
  };

  const handleStartChat = () => {
    if (chatRequestDetail) {
      setSelectedMatchId(chatRequestDetail.id);
      // chatRequestDetail은 ChatScreen에서 사용하기 위해 유지
      setCurrentScreen('chat');
      toast.success('대화가 시작되었습니다! 💬');
    }
  };

  const handleOpenProfile = (profile: Profile) => {
    setSelectedProfile(profile);
    setCurrentScreen('profile');
  };

  const handleBackFromProfile = () => {
    setCurrentScreen('matching');
    setSelectedProfile(null);
  };

  const handleLogout = () => {
    toast.success('로그아웃 되었습니다');
    window.location.reload();
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'matching':
        return (
          <MatchingScreen
            onOpenStore={() => setCurrentScreen('store')}
            onOpenProfile={handleOpenProfile}
            userItems={userItems}
          />
        );
      case 'matches':
        return <MatchList onSelectMatch={handleSelectMatch} onSelectChatRequest={handleSelectChatRequest} />;
      case 'chat':
        return selectedMatchId ? (
          <ChatScreen 
            matchId={selectedMatchId} 
            onBack={handleBackFromChat}
            chatRequestDetail={chatRequestDetail || undefined}
          />
        ) : (
          <MatchList onSelectMatch={handleSelectMatch} onSelectChatRequest={handleSelectChatRequest} />
        );
      case 'chat-request':
        return chatRequestDetail ? (
          <ChatRequestDetailScreen
            chatRequestDetail={chatRequestDetail}
            onBack={handleBackFromChatRequest}
            onStartChat={handleStartChat}
          />
        ) : (
          <MatchingScreen
            onOpenStore={() => setCurrentScreen('store')}
            onOpenProfile={handleOpenProfile}
            userItems={userItems}
          />
        );
      case 'store':
        return (
          <ItemStore
            walletConnected={walletConnected}
            onConnectWallet={handleConnectWallet}
            onPurchase={handlePurchase}
            userItems={userItems}
            memeXConnected={memeXConnected}
          />
        );
      case 'community':
        return (
          <CommunityScreen
            isMemeXConnected={memeXConnected}
            onConnectMemeX={handleConnectMemeX}
          />
        );
      case 'profile':
        return selectedProfile ? (
          <ProfileDetail profile={selectedProfile} onBack={handleBackFromProfile} />
        ) : (
          <MatchingScreen
            onOpenStore={() => setCurrentScreen('store')}
            onOpenProfile={handleOpenProfile}
            userItems={userItems}
          />
        );
      case 'settings':
        return <ProfileSettings onBack={() => setCurrentScreen('matching')} onLogout={handleLogout} onConnectMemeX={handleConnectMemeX} memeXConnected={memeXConnected} />;
      default:
        return <MatchingScreen onOpenStore={() => setCurrentScreen('store')} onOpenProfile={handleOpenProfile} userItems={userItems} />;
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-white shadow-lg">
      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {renderScreen()}
      </div>

      {/* Bottom Navigation - Figma Style */}
      {currentScreen !== 'chat' && currentScreen !== 'chat-request' && currentScreen !== 'profile' && currentScreen !== 'settings' && (
        <nav className="bg-[#0c041e] flex items-center justify-around h-[70px] shrink-0">
          <button
            onClick={() => setCurrentScreen('matching')}
            className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
              currentScreen === 'matching' ? 'text-white' : 'text-[#99A3B0]'
            }`}
          >
            <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>

          <button
            onClick={() => setCurrentScreen('matches')}
            className="flex flex-col items-center justify-center flex-1 h-full transition-colors text-[#99A3B0] relative"
          >
            <Heart className="size-6" />
            <div className="absolute top-[18px] right-[calc(50%-18px)] size-[13px] bg-[#dd3562] rounded-full" />
          </button>

          <button
            onClick={() => setCurrentScreen('community')}
            className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
              currentScreen === 'community' ? 'text-white' : 'text-[#99A3B0]'
            }`}
          >
            <svg className="size-6" fill="currentColor" viewBox="0 0 24 27">
              <path d="M24 5.926V0H18V5.926H15V8.88867H9V5.92667H6V0H0V5.926H3V8.88867H6V11.852H9V14.8147H6V17.778H3V20.7407H0V26.6667H6V20.7407H9V17.778H15V20.7407H18V26.6667H24V20.7407H21V17.778H18V14.8147H15V11.852H18V8.88867H21V5.92667L24 5.926Z" />
            </svg>
          </button>

          <button
            onClick={() => setCurrentScreen('store')}
            className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
              currentScreen === 'store' ? 'text-white' : 'text-[#99A3B0]'
            }`}
          >
            <ShoppingBag className="size-6" />
          </button>

          <button
            onClick={() => setCurrentScreen('settings')}
            className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
              currentScreen === 'settings' ? 'text-white' : 'text-[#99A3B0]'
            }`}
          >
            <Settings className="size-6" />
          </button>
        </nav>
      )}
    </div>
  );
}