import svgPaths from "./svg-vic7ynbm8k";
import imgOnlineShop from "figma:asset/5cc1579c1da4864762ce97bb8106cc77383220ef.png";

function UserAvatar() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="User Avatar">
      <p className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[21.6px] not-italic relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">지</p>
    </div>
  );
}

function OnlineIndicator() {
  return (
    <div className="absolute bg-[#28a745] left-[34px] rounded-[7px] size-[14px] top-[34px]" data-name="Online Indicator">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[7px]" />
    </div>
  );
}

function UserContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[48px]" data-name="User Container">
      <UserAvatar />
      <OnlineIndicator />
    </div>
  );
}

function NameRow() {
  return (
    <div className="content-stretch flex items-center justify-between not-italic relative shrink-0 text-nowrap w-full whitespace-pre" data-name="Name Row">
      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[19.2px] relative shrink-0 text-[#212529] text-[16px]">지수</p>
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[14.4px] relative shrink-0 text-[#6c757d] text-[12px]">2분 전</p>
    </div>
  );
}

function Unread() {
  return (
    <div className="bg-[#1976d2] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[20px]" data-name="Unread">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[13.2px] not-italic relative shrink-0 text-[11px] text-nowrap text-white whitespace-pre">1</p>
    </div>
  );
}

function MessageRow() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Message Row">
      <p className="basis-0 font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[16.8px] min-h-px min-w-px not-italic relative shrink-0 text-[#6c757d] text-[14px]">커피 한 잔 어떠세요?</p>
      <Unread />
    </div>
  );
}

function ChatDetails() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative shrink-0" data-name="Chat Details">
      <NameRow />
      <MessageRow />
    </div>
  );
}

function ChatRow() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Chat Row">
      <UserContainer />
      <ChatDetails />
    </div>
  );
}

function Chat() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[80px] items-center left-0 px-[20px] py-[16px] top-[70px] w-[360px]" data-name="Chat 1">
      <div aria-hidden="true" className="absolute border-[#f8f9fa] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <ChatRow />
    </div>
  );
}

function UserAvatar1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="User Avatar 2">
      <p className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[21.6px] not-italic relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">민</p>
    </div>
  );
}

function NameRow1() {
  return (
    <div className="content-stretch flex items-center justify-between not-italic relative shrink-0 text-nowrap w-full whitespace-pre" data-name="Name Row 2">
      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[19.2px] relative shrink-0 text-[#212529] text-[16px]">민지</p>
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[14.4px] relative shrink-0 text-[#6c757d] text-[12px]">1시간 전</p>
    </div>
  );
}

function Check() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Check">
          <path d="M16 16H0V0H16V16Z" stroke="var(--stroke-0, #1976D2)" />
          <path d={svgPaths.p39be50} id="Vector" stroke="var(--stroke-0, #1976D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function MessageRow1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Message Row 2">
      <p className="basis-0 font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[16.8px] min-h-px min-w-px not-italic relative shrink-0 text-[#6c757d] text-[14px]">네 맞아요! 시간 되실 때 연락해주세요</p>
      <Check />
    </div>
  );
}

function ChatDetails1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative shrink-0" data-name="Chat Details 2">
      <NameRow1 />
      <MessageRow1 />
    </div>
  );
}

function ChatRow1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Chat Row 2">
      <UserAvatar1 />
      <ChatDetails1 />
    </div>
  );
}

function Chat1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[80px] items-center left-0 px-[20px] py-[16px] top-[150px] w-[360px]" data-name="Chat 2">
      <div aria-hidden="true" className="absolute border-[#f8f9fa] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <ChatRow1 />
    </div>
  );
}

function UserAvatar2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="User Avatar 3">
      <p className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[21.6px] not-italic relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">수</p>
    </div>
  );
}

function NameRow2() {
  return (
    <div className="content-stretch flex items-center justify-between not-italic relative shrink-0 text-nowrap w-full whitespace-pre" data-name="Name Row 3">
      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[19.2px] relative shrink-0 text-[#212529] text-[16px]">수빈</p>
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[14.4px] relative shrink-0 text-[#6c757d] text-[12px]">어제</p>
    </div>
  );
}

function Unread1() {
  return (
    <div className="bg-[#1976d2] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[20px]" data-name="Unread 2">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[13.2px] not-italic relative shrink-0 text-[11px] text-nowrap text-white whitespace-pre">3</p>
    </div>
  );
}

function MessageRow2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Message Row 3">
      <p className="basis-0 font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[16.8px] min-h-px min-w-px not-italic relative shrink-0 text-[#6c757d] text-[14px]">사진 전송</p>
      <Unread1 />
    </div>
  );
}

function ChatDetails2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative shrink-0" data-name="Chat Details 3">
      <NameRow2 />
      <MessageRow2 />
    </div>
  );
}

function ChatRow2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Chat Row 3">
      <UserAvatar2 />
      <ChatDetails2 />
    </div>
  );
}

function Chat2() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[80px] items-center left-0 px-[20px] py-[16px] top-[230px] w-[360px]" data-name="Chat 3">
      <div aria-hidden="true" className="absolute border-[#f8f9fa] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <ChatRow2 />
    </div>
  );
}

function UserAvatar3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="User Avatar 4">
      <p className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[21.6px] not-italic relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">은</p>
    </div>
  );
}

function NameRow3() {
  return (
    <div className="content-stretch flex items-center justify-between not-italic relative shrink-0 text-nowrap w-full whitespace-pre" data-name="Name Row 4">
      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[19.2px] relative shrink-0 text-[#212529] text-[16px]">은지</p>
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[14.4px] relative shrink-0 text-[#6c757d] text-[12px]">3일 전</p>
    </div>
  );
}

function MessageRow3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Message Row 4">
      <p className="basis-0 font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[16.8px] min-h-px min-w-px not-italic relative shrink-0 text-[#6c757d] text-[14px]">안녕하세요! 반갑습니다</p>
    </div>
  );
}

function ChatDetails3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative shrink-0" data-name="Chat Details 4">
      <NameRow3 />
      <MessageRow3 />
    </div>
  );
}

function ChatRow3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Chat Row 4">
      <UserAvatar3 />
      <ChatDetails3 />
    </div>
  );
}

function Chat3() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[80px] items-center left-0 px-[20px] py-[16px] top-[310px] w-[360px]" data-name="Chat 4">
      <div aria-hidden="true" className="absolute border-[#f8f9fa] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <ChatRow3 />
    </div>
  );
}

function UserAvatar4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="User Avatar 5">
      <p className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[21.6px] not-italic relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">서</p>
    </div>
  );
}

function NameRow4() {
  return (
    <div className="content-stretch flex items-center justify-between not-italic relative shrink-0 text-nowrap w-full whitespace-pre" data-name="Name Row 5">
      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[19.2px] relative shrink-0 text-[#9e9e9e] text-[16px]">서연</p>
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[14.4px] relative shrink-0 text-[#6c757d] text-[12px]">1주 전</p>
    </div>
  );
}

function MessageRow4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Message Row 5">
      <p className="basis-0 font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[16.8px] min-h-px min-w-px not-italic relative shrink-0 text-[#9e9e9e] text-[14px]">좋은 하루 보내세요!</p>
    </div>
  );
}

function ChatDetails4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative shrink-0" data-name="Chat Details 5">
      <NameRow4 />
      <MessageRow4 />
    </div>
  );
}

function ChatRow4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Chat Row 5">
      <UserAvatar4 />
      <ChatDetails4 />
    </div>
  );
}

function Chat4() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[80px] items-center left-0 px-[20px] py-[16px] top-[390px] w-[360px]" data-name="Chat 5">
      <div aria-hidden="true" className="absolute border-[#f8f9fa] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <ChatRow4 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute h-[31px] left-[102px] top-[20px] w-[29px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 31">
        <g id="Group 1920">
          <path clipRule="evenodd" d={svgPaths.p18b3dd80} fill="var(--fill-0, white)" fillRule="evenodd" id="Shape" />
          <circle cx="22.5" cy="6.5" fill="var(--fill-0, #DD3562)" id="Oval" r="6.5" />
        </g>
      </svg>
    </div>
  );
}

function Profile() {
  return (
    <div className="absolute left-[298px] size-[26px] top-1/2 translate-y-[-50%]" data-name="Profile">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g clipPath="url(#clip0_3_410)" id="Profile">
          <path clipRule="evenodd" d={svgPaths.paabf300} fill="var(--fill-0, #99A3B0)" fillRule="evenodd" id="Shape" />
        </g>
        <defs>
          <clipPath id="clip0_3_410">
            <rect fill="white" height="26" width="26" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute left-[39px] size-[25px] top-[23px]">
      <div className="absolute bottom-[-5.07%] left-0 right-[-4.93%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
          <g id="Group 24">
            <path d={svgPaths.p11b14100} id="Ellipse 1" stroke="var(--stroke-0, #99A3B0)" strokeWidth="2.5" />
            <path d={svgPaths.p287c8e80} fill="var(--stroke-0, #99A3B0)" id="Line 15" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#0c041e] h-[70px] left-0 overflow-clip top-[570px] w-[360px]">
      <Group1 />
      <Profile />
      <Group />
      <div className="absolute left-[230px] size-[30px] top-[20px]" data-name="Online Shop">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgOnlineShop} />
      </div>
      <div className="absolute h-[26.667px] left-1/2 top-[calc(50%+0.33px)] translate-x-[-50%] translate-y-[-50%] w-[24px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 27">
          <path d={svgPaths.p21687bf0} fill="var(--fill-0, #99A3B0)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[20px] top-[20px]">
      <div className="absolute bg-[#1976d2] border-[#1976d2] border-[1.5px] border-solid h-[30px] left-[20px] rounded-[10px] top-[20px] w-[60px]" />
      <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[13.2px] left-[calc(50%-148px)] not-italic text-[12px] text-nowrap text-white top-[calc(50%-292px)] whitespace-pre">내 채팅</p>
    </div>
  );
}

export default function DatingChatMain() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex flex-col items-start relative size-full" data-name="Dating Chat Main">
      <Chat />
      <Chat1 />
      <Chat2 />
      <Chat3 />
      <Chat4 />
      <div className="absolute bg-white h-[30px] left-[90px] rounded-[10px] top-[20px] w-[60px]">
        <div aria-hidden="true" className="absolute border-[#1976d2] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      </div>
      <div className="absolute bg-white h-[30px] left-[160px] rounded-[10px] top-[20px] w-[60px]">
        <div aria-hidden="true" className="absolute border-[#1976d2] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      </div>
      <Frame />
      <Group2 />
      <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[13.2px] left-[96px] not-italic text-[#1976d2] text-[12px] text-nowrap top-[28px] whitespace-pre">{`보낸 요청 `}</p>
      <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[13.2px] left-[166px] not-italic text-[#1976d2] text-[12px] text-nowrap top-[28px] whitespace-pre">{`받은 요청 `}</p>
    </div>
  );
}