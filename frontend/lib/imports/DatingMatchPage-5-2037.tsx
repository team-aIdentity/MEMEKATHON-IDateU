import svgPaths from "./svg-t429xd2x8n";
import imgPhotoArea from "figma:asset/5e9bf40e5037ae3c728ad4ad794aee13dde133b3.png";
import imgReturn from "figma:asset/31e63e0f7160a1271600a165358c72dff0ca15b1.png";
import imgOnlineShop from "figma:asset/5cc1579c1da4864762ce97bb8106cc77383220ef.png";

function SlidersHorizontal() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Sliders Horizontal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Sliders Horizontal">
          <path d="M24 24H0V0H24V24Z" stroke="var(--stroke-0, #6C757D)" />
          <path d="M21 4H14" id="Vector" stroke="var(--stroke-0, #6C757D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 4H3" id="Vector_2" stroke="var(--stroke-0, #6C757D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M21 12H12" id="Vector_3" stroke="var(--stroke-0, #6C757D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8 12H3" id="Vector_4" stroke="var(--stroke-0, #6C757D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M21 20H16" id="Vector_5" stroke="var(--stroke-0, #6C757D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 20H3" id="Vector_6" stroke="var(--stroke-0, #6C757D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M14 2V6" id="Vector_7" stroke="var(--stroke-0, #6C757D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8 10V14" id="Vector_8" stroke="var(--stroke-0, #6C757D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 18V22" id="Vector_9" stroke="var(--stroke-0, #6C757D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function HeaderContent() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header Content">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#212529] text-[20px] text-nowrap whitespace-pre">MATCH</p>
      <SlidersHorizontal />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-[60px] items-center justify-center px-[20px] py-[16px] relative shrink-0 w-[360px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e9ecef] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <HeaderContent />
    </div>
  );
}

function UserInfo() {
  return <div className="h-[17px] shrink-0 w-full" data-name="User Info" />;
}

function MapPin() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Map Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Map Pin">
          <path d="M16 16H0V0H16V16Z" stroke="var(--stroke-0, white)" />
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Location() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center left-[20px] top-[245px] w-[280px]" data-name="Location">
      <MapPin />
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16.8px] not-italic opacity-90 relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">대한민국 | 여성</p>
    </div>
  );
}

function PhotoOverlay() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Photo Overlay">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between p-[20px] relative size-full">
          <UserInfo />
          <p className="absolute font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[28.8px] left-[20px] not-italic text-[24px] text-white top-[206px] w-[280px]">은지, 22</p>
          <Location />
        </div>
      </div>
    </div>
  );
}

function PhotoArea() {
  return (
    <div className="content-stretch flex flex-col h-[280px] items-center justify-center overflow-clip relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-[320px]" data-name="Photo Area">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-tl-[16px] rounded-tr-[16px]">
        <div className="absolute bg-gradient-to-l from-[#acd5f2] inset-0 rounded-tl-[16px] rounded-tr-[16px] to-[#2985c6]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-tl-[16px] rounded-tr-[16px] size-full" src={imgPhotoArea} />
      </div>
      <PhotoOverlay />
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[#fff3e0] box-border content-stretch flex items-center px-[12px] py-[6px] relative rounded-[16px] shrink-0" data-name="Tag1">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[14.4px] not-italic relative shrink-0 text-[#f57c00] text-[12px] text-nowrap whitespace-pre">카페투어</p>
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[#e8f5e8] box-border content-stretch flex items-center px-[12px] py-[6px] relative rounded-[16px] shrink-0" data-name="Tag2">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[14.4px] not-italic relative shrink-0 text-[#2e7d32] text-[12px] text-nowrap whitespace-pre">영화감상</p>
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-[#e3f2fd] box-border content-stretch flex items-center px-[12px] py-[6px] relative rounded-[16px] shrink-0" data-name="Tag3">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[14.4px] not-italic relative shrink-0 text-[#1976d2] text-[12px] text-nowrap whitespace-pre">여행</p>
    </div>
  );
}

function Tags() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Tags">
      <Tag />
      <Tag1 />
      <Tag2 />
    </div>
  );
}

function BioSection() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Bio Section">
      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[14.4px] not-italic relative shrink-0 text-[#6c757d] text-[12px] w-full">관심사</p>
      <Tags />
    </div>
  );
}

function Heart() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Heart">
          <path d="M24 24H0V0H24V24Z" stroke="var(--stroke-0, white)" />
          <path d={svgPaths.p1dff4600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function LikeButton() {
  return (
    <div className="bg-[#e91e63] box-border content-stretch flex items-center justify-center relative rounded-[30px] shadow-[0px_2px_8px_0px_rgba(233,30,99,0.19)] shrink-0 size-[60px]" data-name="Like Button">
      <Heart />
    </div>
  );
}

function Star() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Star">
          <path d="M24 24H0V0H24V24Z" stroke="var(--stroke-0, white)" />
          <path d={svgPaths.p9b81900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SuperLikeButton() {
  return (
    <div className="bg-[#00bcd4] box-border content-stretch flex items-center justify-center relative rounded-[30px] shadow-[0px_2px_8px_0px_rgba(0,188,212,0.19)] shrink-0 size-[60px]" data-name="Super Like Button">
      <Star />
    </div>
  );
}

function SuperLikeButton1() {
  return (
    <div className="bg-[#ffecba] box-border content-stretch flex items-center justify-center relative rounded-[30px] shadow-[0px_2px_8px_0px_rgba(0,188,212,0.19)] shrink-0 size-[60px]" data-name="Super Like Button">
      <div className="relative shrink-0 size-[25px]" data-name="Return">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgReturn} />
      </div>
    </div>
  );
}

function X() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="X">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="X">
          <path d="M24 24H0V0H24V24Z" stroke="var(--stroke-0, #E91E63)" />
          <path d="M18 6L6 18" id="Vector" stroke="var(--stroke-0, #E91E63)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M6 6L18 18" id="Vector_2" stroke="var(--stroke-0, #E91E63)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function PassButton() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[30px] shrink-0 size-[60px]" data-name="Pass Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e9ecef] border-solid inset-0 pointer-events-none rounded-[30px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)]" />
      <X />
    </div>
  );
}

function ActionButtons() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-center relative shrink-0 w-full" data-name="Action Buttons">
      <LikeButton />
      <SuperLikeButton />
      <SuperLikeButton1 />
      <PassButton />
    </div>
  );
}

function CardContent() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] h-[160px] items-start p-[20px] relative shrink-0 w-[320px]" data-name="Card Content">
      <BioSection />
      <ActionButtons />
    </div>
  );
}

function MainCard() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-[440px] items-start overflow-clip relative rounded-[16px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.06)] shrink-0 w-[320px]" data-name="Main Card">
      <PhotoArea />
      <CardContent />
    </div>
  );
}

function CardStackArea() {
  return (
    <div className="box-border content-stretch flex flex-col h-[480px] items-center justify-center p-[20px] relative shrink-0 w-[360px]" data-name="Card Stack Area">
      <MainCard />
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
        <g clipPath="url(#clip0_5_1941)" id="Profile">
          <path clipRule="evenodd" d={svgPaths.paabf300} fill="var(--fill-0, #99A3B0)" fillRule="evenodd" id="Shape" />
        </g>
        <defs>
          <clipPath id="clip0_5_1941">
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
            <path d={svgPaths.p11b14100} id="Ellipse 1" stroke="var(--stroke-0, white)" strokeWidth="2.5" />
            <path d={svgPaths.p287c8e80} fill="var(--stroke-0, white)" id="Line 15" />
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

export default function DatingMatchPage() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex flex-col items-start relative size-full" data-name="Dating Match Page">
      <Header />
      <CardStackArea />
      <Frame />
    </div>
  );
}