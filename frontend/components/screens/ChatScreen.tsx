'use client';
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, MoreVertical } from "lucide-react";
import svgPaths from "@/lib/imports/svg-gsd7x7ade6";

interface ChatScreenProps {
  matchId: string;
  onBack: () => void;
  chatRequestDetail?: {
    id: string;
    name: string;
    avatarColor: string;
    avatarInitial: string;
    message: string;
    time: string;
  };
}

interface Message {
  id: string;
  text: string;
  time: string;
  isSent: boolean;
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

function TypingIndicator() {
  return (
    <div className="content-stretch flex gap-[8px] items-start w-full mb-4">
      <div className="content-stretch flex flex-col items-center justify-center rounded-[16px] shrink-0 size-[32px] bg-[#FF6B9D]">
        <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[14.4px] text-[12px] text-white">
          지
        </p>
      </div>
      <div className="bg-[#f1f3f4] box-border content-stretch flex items-center px-[16px] py-[12px] rounded-bl-[16px] rounded-br-[16px] rounded-tl-[4px] rounded-tr-[16px]">
        <div className="content-stretch flex gap-[4px] items-center">
          <div className="bg-[#9e9e9e] rounded-[3px] size-[6px] animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="bg-[#9e9e9e] opacity-60 rounded-[3px] size-[6px] animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="bg-[#9e9e9e] opacity-30 rounded-[3px] size-[6px] animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
}

export default function ChatScreen({ matchId, onBack, chatRequestDetail }: ChatScreenProps) {
  // 받은 요청에서 시작된 채팅인 경우 초기 메시지 설정
  const initialMessages: Message[] = chatRequestDetail
    ? [
        {
          id: '1',
          text: chatRequestDetail.message,
          time: chatRequestDetail.time,
          isSent: false,
        },
      ]
    : [
        {
          id: '1',
          text: '안녕하세요! 만나서 반가워요 !',
          time: '오후 2:30',
          isSent: false,
        },
        {
          id: '2',
          text: '안녕하세요! 저도 반가워요',
          time: '오후 2:32',
          isSent: true,
        },
        {
          id: '3',
          text: '커피 한 잔 어떠세요?',
          time: '오후 2:35',
          isSent: false,
        },
      ];

  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chatStarted, setChatStarted] = useState(!!chatRequestDetail);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 받은 요청에서 시작된 채팅인 경우 이름과 아바타 정보 사용
  const userName = chatRequestDetail?.name || '지수';
  const avatarInitial = chatRequestDetail?.avatarInitial || '지';
  const avatarColor = chatRequestDetail?.avatarColor || '#FF6B9D';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: inputValue,
        time: new Date().toLocaleTimeString('ko-KR', { hour: 'numeric', minute: '2-digit', hour12: true }),
        isSent: true,
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
      
      // Simulate typing indicator
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
      }, 2000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
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
                {userName}
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
        {/* Super Like Notification - 받은 요청에서 시작된 경우만 표시 */}
        {chatRequestDetail && (
          <div className="flex items-center justify-center mb-6">
            <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[16.8px] text-[12px] text-black">
              상대방이 슈퍼 좋아요를 보냈습니다.
            </p>
          </div>
        )}

        {/* Messages */}
        <div className="space-y-4">
          {/* 받은 요청에서 시작된 경우 초기 메시지 표시 */}
          {chatRequestDetail && messages.length > 0 && (
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
                    {messages[0].text}
                  </p>
                </div>
                <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[13.2px] text-[#6c757d] text-[11px]">
                  {messages[0].time}
                </p>
              </div>
            </div>
          )}

          {/* Chat Started Notification - 받은 요청에서 시작된 경우 메시지 아래에 표시 */}
          {chatRequestDetail && chatStarted && (
            <div className="flex items-center justify-center mb-6">
              <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[16.8px] text-[12px] text-black">
                상대방과 대화가 시작되었습니다.
              </p>
            </div>
          )}

          {/* 일반 메시지들 (받은 요청이 아닌 경우 또는 추가 메시지) */}
          {messages.map((message, index) => {
            // 받은 요청에서 시작된 경우 첫 번째 메시지는 이미 위에서 표시했으므로 스킵
            if (chatRequestDetail && index === 0) return null;
            
            return (
            <div key={message.id}>
              {!message.isSent ? (
                // Received Message
                <div className="content-stretch flex gap-[8px] items-start w-full">
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
                        {message.text}
                      </p>
                    </div>
                    <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[13.2px] text-[#6c757d] text-[11px]">
                      {message.time}
                    </p>
                  </div>
                </div>
              ) : (
                // Sent Message
                <div className="content-stretch flex gap-[8px] items-end justify-end w-full">
                  <div className="content-stretch flex flex-col gap-[4px] items-end max-w-[70%]">
                    <div className="bg-[#1976d2] box-border content-stretch flex items-start px-[16px] py-[12px] rounded-bl-[16px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[4px]">
                      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[19.6px] text-[14px] text-white">
                        {message.text}
                      </p>
                    </div>
                    <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[13.2px] text-[#6c757d] text-[11px] text-right">
                      {message.time}
                    </p>
                  </div>
                </div>
              )}
            </div>
            );
          })}

          {/* Typing Indicator */}
          {isTyping && <TypingIndicator />}
          
          <div ref={messagesEndRef} />
        </div>
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
                  onKeyPress={handleKeyPress}
                  placeholder="메시지를 입력하세요..."
                  className="w-full bg-transparent font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16.8px] text-[#212529] text-[14px] outline-none placeholder:text-[#6c757d]"
                />
              </div>
            </div>
          </div>

          {/* Send Button */}
          <button
            onClick={handleSend}
            className="bg-[#1976d2] content-stretch flex items-center justify-center rounded-[24px] shrink-0 size-[48px] hover:bg-[#1565c0] transition-colors"
          >
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
