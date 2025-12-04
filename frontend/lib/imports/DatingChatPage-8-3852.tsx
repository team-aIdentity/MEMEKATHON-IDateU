import svgPaths from "./svg-sf6zsd2qtq";

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Chevron Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Chevron Left">
          <path d="M24 24H0V0H24V24Z" stroke="var(--stroke-0, #6C757D)" />
          <path d="M15 18L9 12L15 6" id="Vector" stroke="var(--stroke-0, #6C757D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Avatar() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Avatar">
      <p className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[19.2px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">지</p>
    </div>
  );
}

function NameInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 text-nowrap whitespace-pre" data-name="Name Info">
      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[19.2px] relative shrink-0 text-[#212529] text-[16px]">혜선</p>
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[14.4px] relative shrink-0 text-[#28a745] text-[12px]">온라인</p>
    </div>
  );
}

function UserInfo() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="User Info">
      <ChevronLeft />
      <Avatar />
      <NameInfo />
    </div>
  );
}

function MoreVertical() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="More Vertical">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="More Vertical">
          <path d="M24 24H0V0H24V24Z" stroke="var(--stroke-0, #6C757D)" />
          <path d={svgPaths.p3d96f400} id="Vector" stroke="var(--stroke-0, #6C757D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1a816e00} id="Vector_2" stroke="var(--stroke-0, #6C757D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1116500} id="Vector_3" stroke="var(--stroke-0, #6C757D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Actions">
      <MoreVertical />
    </div>
  );
}

function HeaderContent() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header Content">
      <UserInfo />
      <Actions />
    </div>
  );
}

function ChatHeader() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-[80px] items-center px-[20px] py-[16px] relative shrink-0 w-[360px]" data-name="Chat Header">
      <div aria-hidden="true" className="absolute border-[#e9ecef] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <HeaderContent />
    </div>
  );
}

function AvatarSmall() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Avatar Small">
      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[14.4px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">지</p>
    </div>
  );
}

function MessageBubbleReceived() {
  return (
    <div className="bg-white box-border content-stretch flex items-start px-[16px] py-[12px] relative rounded-bl-[16px] rounded-br-[16px] rounded-tl-[4px] rounded-tr-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06)] shrink-0" data-name="Message Bubble Received">
      <p className="basis-0 font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[19.6px] min-h-px min-w-px not-italic relative shrink-0 text-[#212529] text-[14px]">안녕하세요! 프로필 보고 연락드려요 😊</p>
    </div>
  );
}

function MessageContent() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Message Content">
      <MessageBubbleReceived />
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[13.2px] not-italic relative shrink-0 text-[#6c757d] text-[11px] text-nowrap whitespace-pre">오후 2:30</p>
    </div>
  );
}

function MessageBubble() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Message Bubble">
      <AvatarSmall />
      <MessageContent />
    </div>
  );
}

function MessageReceived() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[16px] top-[37px] w-[328px]" data-name="Message Received">
      <MessageBubble />
    </div>
  );
}

function MessagesArea() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] h-[480px] items-start p-[16px] relative shrink-0 w-[360px]" data-name="Messages Area">
      <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[16.8px] left-[calc(50%-89px)] not-italic text-[12px] text-black text-nowrap top-[10px] whitespace-pre">상대방이 슈퍼 좋아요를 보냈습니다.</p>
      <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[16.8px] left-[calc(50%-82px)] not-italic text-[12px] text-black text-nowrap top-[109px] whitespace-pre">상대방과 대화가 시작되었습니다.</p>
      <MessageReceived />
    </div>
  );
}

function InputField() {
  return (
    <div className="basis-0 bg-[#f8f9fa] grow h-[48px] min-h-px min-w-px relative rounded-[24px] shrink-0" data-name="Input Field">
      <div aria-hidden="true" className="absolute border border-[#e9ecef] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[48px] items-center px-[16px] py-0 relative w-full">
          <p className="basis-0 font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[16.8px] min-h-px min-w-px not-italic relative shrink-0 text-[#6c757d] text-[14px]">메시지를 입력하세요...</p>
        </div>
      </div>
    </div>
  );
}

function Send() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Send">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Send">
          <g clipPath="url(#clip0_3_1202)">
            <path d={svgPaths.p7de2100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p31491280} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
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

function SendButton() {
  return (
    <div className="bg-[#1976d2] content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="Send Button">
      <Send />
    </div>
  );
}

function MessageInput() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Message Input">
      <InputField />
      <SendButton />
    </div>
  );
}

function InputArea() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-[80px] items-center p-[16px] relative shrink-0 w-[360px]" data-name="Input Area">
      <div aria-hidden="true" className="absolute border-[#e9ecef] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <MessageInput />
    </div>
  );
}

export default function DatingChatPage() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex flex-col items-start relative size-full" data-name="Dating Chat Page">
      <ChatHeader />
      <MessagesArea />
      <InputArea />
    </div>
  );
}