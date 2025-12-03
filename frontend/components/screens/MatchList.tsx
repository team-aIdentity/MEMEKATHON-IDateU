'use client';
import { useState } from "react";
import svgPaths from "@/lib/imports/svg-vic7ynbm8k";
import ChatRequestList from "./ChatRequestList";

interface Match {
  id: string;
  name: string;
  initial: string;
  lastMessage: string;
  timestamp: string;
  unread?: number;
  isRead?: boolean;
  isOnline?: boolean;
  avatarColor: string;
  isArchived?: boolean;
}

interface MatchListProps {
  onSelectMatch: (matchId: string) => void;
  onSelectChatRequest?: (request: { id: string; name: string; avatarColor: string; avatarInitial: string; message: string; time: string }) => void;
}

const SAMPLE_MATCHES: Match[] = [
  {
    id: '1',
    name: '지수',
    initial: '지',
    lastMessage: '커피 한 잔 어떠세요?',
    timestamp: '2분 전',
    unread: 1,
    isOnline: true,
    avatarColor: '#FF6B9D',
  },
  {
    id: '2',
    name: '민지',
    initial: '민',
    lastMessage: '네 맞아요! 시간 되실 때 연락해주세요',
    timestamp: '1시간 전',
    isRead: true,
    avatarColor: '#9FE6C9',
  },
  {
    id: '3',
    name: '수빈',
    initial: '수',
    lastMessage: '사진 전송',
    timestamp: '어제',
    unread: 3,
    avatarColor: '#FFB4C7',
  },
  {
    id: '4',
    name: '은지',
    initial: '은',
    lastMessage: '안녕하세요! 반갑습니다',
    timestamp: '3일 전',
    avatarColor: '#C9A04B',
  },
  {
    id: '5',
    name: '서연',
    initial: '서',
    lastMessage: '좋은 하루 보내세요!',
    timestamp: '1주 전',
    isArchived: true,
    avatarColor: '#FF8A6B',
  },
];

function CheckIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path d={svgPaths.p39be50} stroke="#1976D2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      </svg>
    </div>
  );
}

export default function MatchList({ onSelectMatch, onSelectChatRequest }: MatchListProps) {
  const [activeTab, setActiveTab] = useState<'my' | 'sent' | 'received'>('my');

  // If sent or received tab is active, show ChatRequestList
  if (activeTab === 'sent' || activeTab === 'received') {
    return (
      <ChatRequestList 
        onChatSelect={(request) => {
          if (onSelectChatRequest) {
            onSelectChatRequest({
              id: request.id,
              name: request.name,
              avatarColor: request.color,
              avatarInitial: request.avatar,
              message: request.message,
              time: request.time,
            });
          }
        }}
        onTabChange={(tab) => setActiveTab(tab)}
      />
    );
  }

  return (
    <div className="bg-[#f8f9fa] content-stretch flex flex-col items-start relative size-full">
      {/* Tab Buttons */}
      <div className="absolute left-[20px] top-[20px] flex gap-[10px] z-10">
        <button
          onClick={() => setActiveTab('my')}
          className={`h-[30px] rounded-[10px] px-[12px] flex items-center justify-center ${
            activeTab === 'my'
              ? 'bg-[#1976d2] border-[#1976d2]'
              : 'bg-white border-[#1976d2]'
          } border-[1.5px] border-solid`}
        >
          <p className={`font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[13.2px] text-[12px] ${
            activeTab === 'my' ? 'text-white' : 'text-[#1976d2]'
          }`}>
            내 채팅
          </p>
        </button>
        
        <button
          onClick={() => setActiveTab('sent')}
          className={`h-[30px] rounded-[10px] px-[12px] flex items-center justify-center ${
            activeTab === 'sent'
              ? 'bg-[#1976d2] border-[#1976d2]'
              : 'bg-white border-[#1976d2]'
          } border-[1.5px] border-solid`}
        >
          <p className={`font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[13.2px] text-[12px] ${
            activeTab === 'sent' ? 'text-white' : 'text-[#1976d2]'
          }`}>
            보낸 요청
          </p>
        </button>
        
        <button
          onClick={() => setActiveTab('received')}
          className={`h-[30px] rounded-[10px] px-[12px] flex items-center justify-center ${
            activeTab === 'received'
              ? 'bg-[#1976d2] border-[#1976d2]'
              : 'bg-white border-[#1976d2]'
          } border-[1.5px] border-solid`}
        >
          <p className={`font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[13.2px] text-[12px] ${
            activeTab === 'received' ? 'text-white' : 'text-[#1976d2]'
          }`}>
            받은 요청
          </p>
        </button>
      </div>

      {/* Chat List */}
      <div className="w-full pt-[70px] overflow-y-auto">
        {SAMPLE_MATCHES.map((match, index) => (
          <button
            key={match.id}
            onClick={() => onSelectMatch(match.id)}
            className="bg-white box-border content-stretch flex flex-col h-[80px] items-center px-[20px] py-[16px] w-full border-b border-[#f8f9fa] hover:bg-gray-50 transition-colors"
          >
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
              {/* Avatar Container */}
              <div className="content-stretch flex flex-col items-start relative shrink-0 size-[48px]">
                {/* Avatar */}
                <div 
                  className="content-stretch flex flex-col items-center justify-center relative rounded-[24px] shrink-0 size-[48px]"
                  style={{ backgroundColor: match.avatarColor }}
                >
                  <p className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[21.6px] text-[18px] text-white">
                    {match.initial}
                  </p>
                </div>

                {/* Online Indicator */}
                {match.isOnline && (
                  <div className="absolute bg-[#28a745] left-[34px] rounded-[7px] size-[14px] top-[34px] border-2 border-white" />
                )}
              </div>

              {/* Chat Details */}
              <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative shrink-0">
                {/* Name Row */}
                <div className="content-stretch flex items-center justify-between w-full">
                  <p className={`font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[19.2px] text-[16px] ${
                    match.isArchived ? 'text-[#9e9e9e]' : 'text-[#212529]'
                  }`}>
                    {match.name}
                  </p>
                  <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[14.4px] text-[#6c757d] text-[12px]">
                    {match.timestamp}
                  </p>
                </div>

                {/* Message Row */}
                <div className="content-stretch flex items-center justify-between w-full">
                  <p className={`font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16.8px] text-[14px] flex-1 text-left ${
                    match.isArchived ? 'text-[#9e9e9e]' : 'text-[#6c757d]'
                  }`}>
                    {match.lastMessage}
                  </p>
                  
                  {/* Unread Badge */}
                  {match.unread && match.unread > 0 && (
                    <div className="bg-[#1976d2] content-stretch flex flex-col items-center justify-center rounded-[10px] shrink-0 size-[20px] ml-2">
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[13.2px] text-[11px] text-white">
                        {match.unread}
                      </p>
                    </div>
                  )}

                  {/* Read Check */}
                  {match.isRead && <CheckIcon />}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}