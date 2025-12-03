import svgPaths from "./svg-7r31iljoey";
import imgGroup19821 from "figma:asset/bfb6afceb17ebc389318e23e1835442a8eb11117.png";
import imgOnlineShop from "figma:asset/edbb20b04b39ed60a889e4b7b02d93e1ad98ac99.png";

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

function CoinBalance() {
  return (
    <div className="bg-[#55b7fd] box-border content-stretch flex gap-[6px] items-center px-[12px] py-[6px] relative rounded-[16px] shrink-0" data-name="Coin Balance">
      <div aria-hidden="true" className="absolute border border-[#eaf6ff] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="relative shrink-0 size-[20px]" data-name="Group 1982 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGroup19821} />
      </div>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.8px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">120</p>
    </div>
  );
}

function HeaderContent() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header Content">
      <ChevronLeft />
      <p className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[21.6px] not-italic relative shrink-0 text-[#212529] text-[18px] text-nowrap whitespace-pre">아이템 상점</p>
      <CoinBalance />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-[80px] items-center px-[20px] py-[16px] relative shrink-0 w-[360px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e9ecef] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <HeaderContent />
    </div>
  );
}

function Crown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Crown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Crown">
          <path d="M24 24H0V0H24V24Z" stroke="var(--stroke-0, #FFD700)" />
          <path d={svgPaths.p166a700} id="Vector" stroke="var(--stroke-0, #FFD700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M5 21H19" id="Vector_2" stroke="var(--stroke-0, #FFD700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function PremiumTitle() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Premium Title">
      <Crown />
      <p className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">프리미엄 구독</p>
    </div>
  );
}

function PremiumButton() {
  return (
    <div className="bg-[gold] content-stretch flex h-[36px] items-center justify-center relative rounded-[18px] shrink-0 w-[140px]" data-name="Premium Button">
      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[16.8px] not-italic relative shrink-0 text-[#2a88c8] text-[14px] text-nowrap whitespace-pre">구독하기</p>
    </div>
  );
}

function PremiumContent() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Premium Content">
      <PremiumTitle />
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16.8px] not-italic opacity-90 relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">무제한 좋아요, 슈퍼 좋아요, 되돌리기!</p>
      <PremiumButton />
    </div>
  );
}

function PremiumBanner() {
  return (
    <div className="box-border content-stretch flex flex-col h-[120px] items-center justify-center p-[20px] relative shrink-0 w-[360px]" data-name="Premium Banner">
      <PremiumContent />
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Section Title">
      <p className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[21.6px] relative shrink-0 text-[#212529] text-[18px] w-full">아이템 구매</p>
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16.8px] relative shrink-0 text-[#6c757d] text-[14px] w-full">더 많은 매칭 기회를 얻어보세요!</p>
    </div>
  );
}

function Star() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Star">
          <path d="M40 40H0V0H40V40Z" stroke="var(--stroke-0, white)" />
          <path d={svgPaths.p171cc500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function ItemIcon() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[40px] shrink-0 size-[60px]" data-name="Item Icon">
      <Star />
    </div>
  );
}

function Price() {
  return (
    <div className="bg-[#55b7fd] relative rounded-[16px] shrink-0 w-full" data-name="Price">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[12px] py-[6px] relative w-full">
          <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[14.4px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">구매하기</p>
        </div>
      </div>
    </div>
  );
}

function ItemInfo() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-center px-0 py-[5px] relative shrink-0 w-full" data-name="Item Info">
      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[19.2px] not-italic relative shrink-0 text-[#212529] text-[15px] text-center w-full">슈퍼 좋아요</p>
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16.8px] not-italic relative shrink-0 text-[#6c757d] text-[14px] text-center w-full">5개</p>
      <Price />
    </div>
  );
}

function SuperLikeItem() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-[180px] items-center p-[16px] relative rounded-[12px] shrink-0 w-[150px]" data-name="Super Like Item">
      <div aria-hidden="true" className="absolute border border-[#e9ecef] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.02)]" />
      <ItemIcon />
      <ItemInfo />
    </div>
  );
}

function RotateCcw() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Rotate Ccw">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Rotate Ccw">
          <path d="M40 40H0V0H40V40Z" stroke="var(--stroke-0, white)" />
          <path d={svgPaths.pcafbb00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M5 5V13.3333H13.3333" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function ItemIcon1() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center px-0 py-[5px] relative rounded-[40px] shrink-0 size-[60px]" data-name="Item Icon 2">
      <RotateCcw />
    </div>
  );
}

function Price1() {
  return (
    <div className="bg-[#55b7fd] relative rounded-[16px] shrink-0 w-full" data-name="Price 2">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[12px] py-[6px] relative w-full">
          <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[14.4px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">구매하기</p>
        </div>
      </div>
    </div>
  );
}

function ItemInfo1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-center px-0 py-[5px] relative shrink-0 w-full" data-name="Item Info 2">
      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[19.2px] not-italic relative shrink-0 text-[#212529] text-[15px] text-center w-full">되돌리기</p>
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16.8px] not-italic relative shrink-0 text-[#6c757d] text-[14px] text-center w-full">3개</p>
      <Price1 />
    </div>
  );
}

function RewindItem() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-[180px] items-center p-[16px] relative rounded-[12px] shrink-0 w-[150px]" data-name="Rewind Item">
      <div aria-hidden="true" className="absolute border border-[#e9ecef] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.02)]" />
      <ItemIcon1 />
      <ItemInfo1 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Row 1">
      <SuperLikeItem />
      <RewindItem />
    </div>
  );
}

function Zap() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Zap">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Zap">
          <path d="M40 40H0V0H40V40Z" stroke="var(--stroke-0, white)" />
          <path d={svgPaths.p3fa7440} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function ItemIcon2() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center px-0 py-[5px] relative rounded-[40px] shrink-0 size-[60px]" data-name="Item Icon 3">
      <Zap />
    </div>
  );
}

function Price2() {
  return (
    <div className="bg-[#55b7fd] relative rounded-[16px] shrink-0 w-full" data-name="Price 3">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[12px] py-[6px] relative w-full">
          <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[14.4px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">구매하기</p>
        </div>
      </div>
    </div>
  );
}

function ItemInfo2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-center px-0 py-[5px] relative shrink-0 w-full" data-name="Item Info 3">
      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[19.2px] not-italic relative shrink-0 text-[#212529] text-[16px] text-center w-full">부스트</p>
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16.8px] not-italic relative shrink-0 text-[#6c757d] text-[14px] text-center w-full">30분간</p>
      <Price2 />
    </div>
  );
}

function BoostItem() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-[180px] items-center p-[16px] relative rounded-[12px] shrink-0 w-[150px]" data-name="Boost Item">
      <div aria-hidden="true" className="absolute border border-[#e9ecef] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.02)]" />
      <ItemIcon2 />
      <ItemInfo2 />
    </div>
  );
}

function ItemIcon3() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center px-0 py-[5px] relative rounded-[40px] shrink-0 size-[60px]" data-name="Item Icon 4">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16.8px] not-italic relative shrink-0 text-[20px] text-center text-nowrap text-white whitespace-pre">AD</p>
    </div>
  );
}

function Price3() {
  return (
    <div className="bg-[#55b7fd] relative rounded-[16px] shrink-0 w-full" data-name="Price 4">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[12px] py-[6px] relative w-full">
          <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[14.4px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">구매하기</p>
        </div>
      </div>
    </div>
  );
}

function ItemInfo3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-center px-0 py-[5px] relative shrink-0 w-full" data-name="Item Info 4">
      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[19.2px] not-italic relative shrink-0 text-[#212529] text-[16px] text-center w-full">광고 제거</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16.8px] not-italic relative shrink-0 text-[#6c757d] text-[14px] text-center w-full">1 Month</p>
      <Price3 />
    </div>
  );
}

function CoinPackage() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-[180px] items-center p-[16px] relative rounded-[12px] shrink-0 w-[150px]" data-name="Coin Package">
      <div aria-hidden="true" className="absolute border border-[#e9ecef] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.02)]" />
      <ItemIcon3 />
      <ItemInfo3 />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Row 2">
      <BoostItem />
      <CoinPackage />
    </div>
  );
}

function ItemsGrid() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Items Grid">
      <Row />
      <Row1 />
    </div>
  );
}

function Gift() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Gift">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Gift">
          <path d="M20 20H0V0H20V20Z" stroke="var(--stroke-0, white)" />
          <path d={svgPaths.pc4ad940} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 6.66667V17.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p24a96bc0} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pf0c73c0} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function OfferTitle() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Offer Title">
      <Gift />
      <p className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[19.2px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">특별 혜택!</p>
    </div>
  );
}

function OfferContent() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Offer Content">
      <OfferTitle />
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[16.8px] not-italic opacity-90 relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">첫 구매 시 20% 할인!</p>
    </div>
  );
}

function ClaimButton() {
  return (
    <div className="bg-white content-stretch flex h-[32px] items-center justify-center relative rounded-[16px] shrink-0 w-[80px]" data-name="Claim Button">
      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[14.4px] not-italic relative shrink-0 text-[#ff6b9d] text-[12px] text-nowrap whitespace-pre">받기</p>
    </div>
  );
}

function SpecialBanner() {
  return (
    <div className="h-[80px] relative rounded-[12px] shrink-0 w-full" data-name="Special Banner">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[80px] items-center p-[20px] relative w-full">
          <OfferContent />
          <ClaimButton />
        </div>
      </div>
    </div>
  );
}

function SpecialOffers() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Special Offers">
      <SpecialBanner />
    </div>
  );
}

function ItemsSection() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[20px] items-start p-[20px] relative shrink-0 w-[360px]" data-name="Items Section">
      <SectionTitle />
      <ItemsGrid />
      <SpecialOffers />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute h-[31px] left-[102px] top-[20px] w-[29px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 31">
        <g id="Group 1920">
          <path clipRule="evenodd" d={svgPaths.p18b3dd80} fill="var(--fill-0, #99A3B0)" fillRule="evenodd" id="Shape" />
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
        <g clipPath="url(#clip0_7_2204)" id="Profile">
          <path clipRule="evenodd" d={svgPaths.paabf300} fill="var(--fill-0, #99A3B0)" fillRule="evenodd" id="Shape" />
        </g>
        <defs>
          <clipPath id="clip0_7_2204">
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
    <div className="absolute bg-[#0c041e] h-[70px] left-0 overflow-clip top-[780px] w-[360px]">
      <Group1 />
      <Profile />
      <Group />
      <div className="absolute h-[26.667px] left-1/2 top-[calc(50%+0.33px)] translate-x-[-50%] translate-y-[-50%] w-[24px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 27">
          <path d={svgPaths.p21687bf0} fill="var(--fill-0, #99A3B0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute left-[232px] size-[30px] top-[21px]" data-name="Online Shop">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgOnlineShop} />
      </div>
    </div>
  );
}

export default function DatingItemShop() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex flex-col items-start relative size-full" data-name="Dating Item Shop">
      <Header />
      <PremiumBanner />
      <ItemsSection />
      <Frame />
    </div>
  );
}