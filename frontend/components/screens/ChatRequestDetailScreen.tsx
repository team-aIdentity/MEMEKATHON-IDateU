'use client';
import { useState } from "react";
import { ChevronLeft, MoreVertical } from "lucide-react";
import svgPaths from "@/lib/imports/svg-gsd7x7ade6";

interface ChatRequestDetail {
  id: string;
  name: string;
  avatarColor: string;
  avatarInitial: string;
  message: string;
  time: string;
}

interface ChatRequestDetailScreenProps {
  chatRequestDetail: ChatRequestDetail;
  onBack: () => void;
  onStartChat: () => void;
}

function SendIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <g clipPath="url(#clip0_3_1202)">
            <path d={svgPaths.p7de2100} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p31491280} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_3_1202">
            <path d="M0 0H20V20H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function ChatRequestDetailScreen({
  chatRequestDetail,
  onBack,
  onStartChat,
}: ChatRequestDetailScreenProps) {
  const [inputValue, setInputValue] = useState('');
  const [chatStarted, setChatStarted] = useState(false);
  
  const { name, avatarColor, avatarInitial, message, time } = chatRequestDetail;

  const handleStartChatClick = () => {
    setChatStarted(true);
    onStartChat();
  };

  return (
    <div className="bg-[#f8f9fa] content-stretch flex flex-col items-start relative size-full">
      {/* Chat Header */}
      <div className="bg-white box-border content-stretch flex flex-col h-[80px] items-center px-[20px] py-[16px] relative shrink-0 w-full border-b border-[#e9ecef]">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          {/* User Info */}
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
            <button onClick={onBack} className="size-[24px]">
              <ChevronLeft className="size-6 text-[#6C757D]" />
            </button>
            
            <div 
              className="content-stretch flex flex-col items-center justify-center rounded-[20px] shrink-0 size-[40px]"
              style={{ backgroundColor: avatarColor }}
            >
              <p className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[19.2px] text-[16px] text-white">
                {avatarInitial}
              </p>
            </div>
            
            <div className="content-stretch flex flex-col gap-[2px] items-start">
              <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[19.2px] text-[#212529] text-[16px]">
                {name}
              </p>
              <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[14.4px] text-[#28a745] text-[12px]">
                온라인
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
            <button>
              <MoreVertical className="size-6 text-[#6C757D]" />
            </button>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto w-full px-[16px] py-[16px] relative">
        {/* Match Notification */}
        <div className="flex items-center justify-center mb-6">
          <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[16.8px] text-[12px] text-black">
            상대방이 슈퍼 좋아요를 보냈습니다.
          </p>
        </div>

        {/* Received Message */}
        <div className="content-stretch flex gap-[8px] items-start w-full mb-4">
          <div 
            className="content-stretch flex flex-col items-center justify-center rounded-[16px] shrink-0 size-[32px]"
            style={{ backgroundColor: avatarColor }}
          >
            <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[14.4px] text-[12px] text-white">
              {avatarInitial}
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start max-w-[70%]">
            <div className="bg-white box-border content-stretch flex items-start px-[16px] py-[12px] rounded-bl-[16px] rounded-br-[16px] rounded-tl-[4px] rounded-tr-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06)]">
              <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[19.6px] text-[#212529] text-[14px]">
                {message}
              </p>
            </div>
            <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[13.2px] text-[#6c757d] text-[11px]">
              {time}
            </p>
          </div>
        </div>

        {/* Chat Started Notification - Only show after chat starts */}
        {chatStarted && (
          <div className="flex items-center justify-center mt-6 mb-4">
            <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[16.8px] text-[12px] text-black">
              상대방과 대화가 시작되었습니다.
            </p>
          </div>
        )}

        {/* Start Chat Button - Only show before chat starts */}
        {!chatStarted && (
          <div className="flex items-center justify-center mt-8">
            <button
              onClick={handleStartChatClick}
              className="bg-[#1976d2] h-[54px] w-[286px] rounded-[10px] shadow-[0px_0px_3px_0px_rgba(0,0,0,0.08),0px_2px_3px_0px_rgba(0,0,0,0.17)] flex items-center justify-center hover:bg-[#1565c0] transition-colors"
            >
              <p className="font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium text-[20px] text-white">
                대화 시작하기
              </p>
            </button>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="bg-white box-border content-stretch flex flex-col h-[80px] items-center p-[16px] relative shrink-0 w-full border-t border-[#e9ecef]">
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
          {/* Input Field */}
          <div className="basis-0 bg-[#f8f9fa] grow h-[48px] rounded-[24px] border border-[#e9ecef]">
            <div className="flex flex-row items-center size-full">
              <div className="box-border content-stretch flex h-[48px] items-center px-[16px] py-0 relative w-full">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="메시지를 입력하세요..."
                  className="w-full bg-transparent font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16.8px] text-[#212529] text-[14px] outline-none placeholder:text-[#6c757d]"
                />
              </div>
            </div>
          </div>

          {/* Send Button */}
          <button
            className="bg-[#1976d2] content-stretch flex items-center justify-center rounded-[24px] shrink-0 size-[48px] hover:bg-[#1565c0] transition-colors"
          >
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
  );
}