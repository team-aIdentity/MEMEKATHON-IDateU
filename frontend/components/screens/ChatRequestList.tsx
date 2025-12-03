'use client';
import { useState } from "react";
import svgPaths from "@/lib/imports/svg-tq1kyofd9x";

interface ChatRequest {
  id: string;
  name: string;
  avatar: string;
  message: string;
  time: string;
  unread: number;
  isOnline: boolean;
  color: string;
}

interface ChatRequestListProps {
  onChatSelect: (request: ChatRequest) => void;
  onTabChange: (tab: 'my' | 'sent' | 'received') => void;
}

const SAMPLE_SENT_REQUESTS: ChatRequest[] = [
  {
    id: '1',
    name: '칼린',
    avatar: '칼',
    message: '상대방에게 좋아요를 보냈습니다.',
    time: '2분 전',
    unread: 1,
    isOnline: true,
    color: '#E91E63',
  },
  {
    id: '2',
    name: '지민',
    avatar: '지',
    message: '상대방에게 좋아요를 보냈습니다.',
    time: '1시간 전',
    unread: 0,
    isOnline: false,
    color: '#4CAF50',
  },
];

const SAMPLE_RECEIVED_REQUESTS: ChatRequest[] = [
  {
    id: '3',
    name: '혜선',
    avatar: '혜',
    message: '안녕하세요! 프로필 보고 연락드려요 😊',
    time: '오후 2:30',
    unread: 1,
    isOnline: true,
    color: '#E91E63',
  },
];

function Check() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path d={svgPaths.p39be50} stroke="#1976D2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      </svg>
    </div>
  );
}

export default function ChatRequestList({ onChatSelect, onTabChange }: ChatRequestListProps) {
  const [activeTab, setActiveTab] = useState<'my' | 'sent' | 'received'>('sent');

  const handleTabChange = (tab: 'my' | 'sent' | 'received') => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  const requests = activeTab === 'sent' ? SAMPLE_SENT_REQUESTS : SAMPLE_RECEIVED_REQUESTS;

  return (
    <div className="bg-[#f8f9fa] content-stretch flex flex-col items-start relative size-full">
      {/* Tab Buttons */}
      <div className="absolute left-[20px] top-[20px] flex gap-[10px] z-10">
        {/* 내 채팅 */}
        <button
          onClick={() => handleTabChange('my')}
          className="bg-white border-[#1976d2] border-[1.5px] border-solid h-[30px] rounded-[10px] w-[60px] flex items-center justify-center"
        >
          <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[13.2px] text-[#1976d2] text-[12px]">
            내 채팅
          </p>
        </button>

        {/* 보낸 요청 */}
        <button
          onClick={() => handleTabChange('sent')}
          className={`h-[30px] rounded-[10px] w-[60px] border-[1.5px] border-solid border-[#1976d2] flex items-center justify-center ${
            activeTab === 'sent' ? 'bg-[#1976d2]' : 'bg-white'
          }`}
        >
          <p className={`font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[13.2px] text-[12px] ${
            activeTab === 'sent' ? 'text-white' : 'text-[#1976d2]'
          }`}>
            보낸 요청
          </p>
        </button>

        {/* 받은 요청 */}
        <button
          onClick={() => handleTabChange('received')}
          className={`h-[30px] rounded-[10px] w-[60px] border-[1.5px] border-solid border-[#1976d2] flex items-center justify-center ${
            activeTab === 'received' ? 'bg-[#1976d2]' : 'bg-white'
          }`}
        >
          <p className={`font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[13.2px] text-[12px] ${
            activeTab === 'received' ? 'text-white' : 'text-[#1976d2]'
          }`}>
            받은 요청
          </p>
        </button>
      </div>

      {/* Request List */}
      <div className="w-full pt-[70px] overflow-y-auto">
        {requests.map((request) => (
          <button
            key={request.id}
            onClick={() => onChatSelect(request)}
            className="bg-white box-border content-stretch flex flex-col h-[80px] items-center px-[20px] py-[16px] w-full border-b border-[#f8f9fa] hover:bg-gray-50 transition-colors"
          >
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
              {/* Avatar Container */}
              <div className="content-stretch flex flex-col items-start relative shrink-0 size-[48px]">
                {/* Avatar */}
                <div 
                  className="content-stretch flex flex-col items-center justify-center relative rounded-[24px] shrink-0 size-[48px]"
                  style={{ backgroundColor: request.color }}
                >
                  <p className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[21.6px] text-[18px] text-white">
                    {request.avatar}
                  </p>
                </div>

                {/* Online Indicator */}
                {request.isOnline && (
                  <div className="absolute bg-[#28a745] left-[34px] rounded-[7px] size-[14px] top-[34px] border-2 border-white" />
                )}
              </div>

              {/* Chat Details */}
              <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative shrink-0">
                {/* Name Row */}
                <div className="content-stretch flex items-center justify-between w-full">
                  <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[19.2px] text-[16px] text-[#212529]">
                    {request.name}
                  </p>
                  <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[14.4px] text-[#6c757d] text-[12px]">
                    {request.time}
                  </p>
                </div>

                {/* Message Row */}
                <div className="content-stretch flex items-center justify-between w-full">
                  <p className="basis-0 font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[16.8px] min-h-px min-w-px text-[#6c757d] text-[14px] text-left">
                    {request.message}
                  </p>
                  
                  {/* Unread Badge or Check */}
                  {request.unread > 0 ? (
                    <div className="bg-[#1976d2] content-stretch flex flex-col items-center justify-center rounded-[10px] shrink-0 size-[20px] ml-2">
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[13.2px] text-[11px] text-white">
                        {request.unread}
                      </p>
                    </div>
                  ) : (
                    <Check />
                  )}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}