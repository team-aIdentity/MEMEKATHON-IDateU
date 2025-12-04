import svgPaths from "./svg-3n1yf5fccv";
import imgOnlineShop from "figma:asset/5cc1579c1da4864762ce97bb8106cc77383220ef.png";

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

function SaveButton() {
  return (
    <div className="bg-[#2a88c8] content-stretch flex h-[30px] items-center justify-center relative rounded-[18px] shrink-0 w-[60px]" data-name="Save Button">
      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[16.8px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">저장</p>
    </div>
  );
}

function HeaderContent() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header Content">
      <ChevronLeft />
      <SaveButton />
      <p className="absolute font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[21.6px] left-[calc(50%-43px)] not-italic text-[#212529] text-[18px] text-nowrap top-[4px] whitespace-pre">프로필 편집</p>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-[60px] items-center px-[20px] py-[16px] relative shrink-0 w-[360px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e9ecef] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <HeaderContent />
    </div>
  );
}

function Camera() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Camera">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Camera">
          <path d="M20 20H0V0H20V20Z" stroke="var(--stroke-0, #6C757D)" />
          <path d={svgPaths.p18350d00} id="Vector" stroke="var(--stroke-0, #6C757D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p380a7500} id="Vector_2" stroke="var(--stroke-0, #6C757D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function EditPhotoButton() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-[84px] rounded-[18px] size-[36px] top-[84px]" data-name="Edit Photo Button">
      <div aria-hidden="true" className="absolute border border-[#e9ecef] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Camera />
    </div>
  );
}

function PhotoContainer() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[120px] rounded-[60px] size-[120px] top-[calc(50%-42.5px)] translate-y-[-50%]" data-name="Photo Container">
      <p className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[38.4px] not-italic relative shrink-0 text-[32px] text-nowrap text-white whitespace-pre">동호</p>
      <EditPhotoButton />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[105px] top-[150px]">
      <div className="absolute bg-[#2a88c8] h-[40px] left-1/2 rounded-[35px] top-[150px] translate-x-[-50%] w-[150px]" />
      <p className="absolute font-['Noto_Sans:Bold',sans-serif] font-bold leading-[normal] left-[124px] text-[16px] text-nowrap text-white top-[159px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>{`1997 |   Male`}</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute h-[12px] left-[162px] top-[3px] w-[12.387px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 12">
        <g id="Group 46">
          <path d={svgPaths.pa580e70} id="Rectangle 24" stroke="var(--stroke-0, #2A88C8)" strokeWidth="1.5" />
          <rect height="8.17744" id="Rectangle 25" rx="2.25" stroke="var(--stroke-0, #2A88C8)" strokeWidth="1.5" width="8.17735" x="3.45974" y="0.75" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[93px] top-[202px]">
      <p className="absolute font-['Noto_Sans:Bold',sans-serif] font-bold leading-[normal] left-0 text-[#494949] text-[12px] text-nowrap top-0 whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        0x877c199...1f8dAdD63F75
      </p>
      <Group2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[93px] top-[202px]">
      <Group5 />
    </div>
  );
}

function ProfilePhotoSection() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-[245px] items-center justify-center p-[20px] relative shrink-0 w-[360px]" data-name="Profile Photo Section">
      <div aria-hidden="true" className="absolute border-[#e9ecef] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <PhotoContainer />
      <Group1 />
      <Group4 />
    </div>
  );
}

function NameInput() {
  return (
    <div className="bg-[#f8f9fa] h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="Name Input">
      <div aria-hidden="true" className="absolute border border-[#e9ecef] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[48px] items-center px-[16px] py-0 relative w-full">
          <p className="basis-0 font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[19.2px] min-h-px min-w-px not-italic relative shrink-0 text-[#212529] text-[16px]">지동호</p>
        </div>
      </div>
    </div>
  );
}

function NameField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Name Field">
      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[16.8px] not-italic relative shrink-0 text-[#212529] text-[14px] w-full">이름</p>
      <NameInput />
    </div>
  );
}

function MapPin() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Map Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Map Pin">
          <path d="M20 20H0V0H20V20Z" stroke="var(--stroke-0, #6C757D)" />
          <path d={svgPaths.p26ddc800} id="Vector" stroke="var(--stroke-0, #6C757D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p35ba4680} id="Vector_2" stroke="var(--stroke-0, #6C757D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function LocationInput() {
  return (
    <div className="bg-[#f8f9fa] h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="Location Input">
      <div aria-hidden="true" className="absolute border border-[#e9ecef] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[48px] items-center justify-between px-[16px] py-0 relative w-full">
          <p className="basis-0 font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[19.2px] min-h-px min-w-px not-italic relative shrink-0 text-[#212529] text-[16px]">대한민국</p>
          <MapPin />
        </div>
      </div>
    </div>
  );
}

function LocationField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Location Field">
      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[16.8px] not-italic relative shrink-0 text-[#212529] text-[14px] w-full">국적</p>
      <LocationInput />
    </div>
  );
}

function BasicInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Basic Info">
      <NameField />
      <LocationField />
    </div>
  );
}

function BioInput() {
  return (
    <div className="bg-[#f8f9fa] h-[96px] relative rounded-[8px] shrink-0 w-full" data-name="Bio Input">
      <div aria-hidden="true" className="absolute border border-[#e9ecef] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[96px] items-start px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#212529] text-[14px] w-full">헬스를 좋아하는 헬창입니다.</p>
        </div>
      </div>
    </div>
  );
}

function BioSection() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Bio Section">
      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[16.8px] not-italic relative shrink-0 text-[#212529] text-[14px] w-full">자기소개</p>
      <BioInput />
    </div>
  );
}

function X() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="X">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="X">
          <path d="M14 14H0V0H14V14Z" stroke="var(--stroke-0, #F57C00)" />
          <path d="M10.5 3.5L3.5 10.5" id="Vector" stroke="var(--stroke-0, #F57C00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M3.5 3.5L10.5 10.5" id="Vector_2" stroke="var(--stroke-0, #F57C00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Interest() {
  return (
    <div className="bg-[#fff3e0] box-border content-stretch flex items-center justify-between px-[12px] py-[8px] relative rounded-[16px] shrink-0" data-name="Interest 1">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[14.4px] not-italic relative shrink-0 text-[#f57c00] text-[12px] text-nowrap whitespace-pre">헬스</p>
      <X />
    </div>
  );
}

function X1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="X">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="X">
          <path d="M14 14H0V0H14V14Z" stroke="var(--stroke-0, #2E7D32)" />
          <path d="M10.5 3.5L3.5 10.5" id="Vector" stroke="var(--stroke-0, #2E7D32)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M3.5 3.5L10.5 10.5" id="Vector_2" stroke="var(--stroke-0, #2E7D32)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Interest1() {
  return (
    <div className="bg-[#e8f5e8] box-border content-stretch flex items-center justify-between px-[12px] py-[8px] relative rounded-[16px] shrink-0" data-name="Interest 2">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[14.4px] not-italic relative shrink-0 text-[#2e7d32] text-[12px] text-nowrap whitespace-pre">싸이클</p>
      <X1 />
    </div>
  );
}

function X2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="X">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="X">
          <path d="M14 14H0V0H14V14Z" stroke="var(--stroke-0, #1976D2)" />
          <path d="M10.5 3.5L3.5 10.5" id="Vector" stroke="var(--stroke-0, #1976D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M3.5 3.5L10.5 10.5" id="Vector_2" stroke="var(--stroke-0, #1976D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Interest2() {
  return (
    <div className="bg-[#e3f2fd] box-border content-stretch flex items-center justify-between px-[12px] py-[8px] relative rounded-[16px] shrink-0" data-name="Interest 3">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[14.4px] not-italic relative shrink-0 text-[#1976d2] text-[12px] text-nowrap whitespace-pre">여행</p>
      <X2 />
    </div>
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Plus">
          <path d="M16 16H0V0H16V16Z" stroke="var(--stroke-0, #6C757D)" />
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #6C757D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, #6C757D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function AddInterest() {
  return (
    <div className="bg-[#f8f9fa] box-border content-stretch flex items-center px-[12px] py-[8px] relative rounded-[16px] shrink-0" data-name="Add Interest">
      <div aria-hidden="true" className="absolute border border-[#e9ecef] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Plus />
    </div>
  );
}

function InterestTags() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Interest Tags">
      <Interest />
      <Interest1 />
      <Interest2 />
      <AddInterest />
    </div>
  );
}

function InterestsSection() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Interests Section">
      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[16.8px] not-italic relative shrink-0 text-[#212529] text-[14px] w-full">관심사</p>
      <InterestTags />
    </div>
  );
}

function FormSection() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[20px] h-[664px] items-start p-[20px] relative shrink-0 w-[360px]" data-name="Form Section">
      <BasicInfo />
      <BioSection />
      <InterestsSection />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col h-[560px] items-start relative shrink-0 w-[360px]" data-name="Content">
      <ProfilePhotoSection />
      <FormSection />
    </div>
  );
}

function Group3() {
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
        <g clipPath="url(#clip0_3_971)" id="Profile">
          <path clipRule="evenodd" d={svgPaths.paabf300} fill="var(--fill-0, white)" fillRule="evenodd" id="Shape" />
        </g>
        <defs>
          <clipPath id="clip0_3_971">
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

function Frame3() {
  return (
    <div className="absolute bg-[#0c041e] h-[70px] left-0 overflow-clip top-[900px] w-[360px]">
      <Group3 />
      <Profile />
      <Group />
      <div className="absolute h-[26.667px] left-1/2 top-[calc(50%+0.33px)] translate-x-[-50%] translate-y-[-50%] w-[24px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 27">
          <path d={svgPaths.p21687bf0} fill="var(--fill-0, #99A3B0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute left-[232px] size-[30px] top-[calc(50%+1px)] translate-y-[-50%]" data-name="Online Shop">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgOnlineShop} />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return <div className="absolute bg-[#0c041e] box-border content-stretch flex gap-[15px] items-start left-[calc(50%-0.5px)] p-[15px] rounded-[10px] top-1/2 translate-x-[-50%] translate-y-[-50%]" />;
}

function ContinueWithGoogleCentreFixed() {
  return (
    <div className="absolute bg-[#0c041e] h-[54px] left-1/2 rounded-[10px] shadow-[0px_0px_3px_0px_rgba(0,0,0,0.08),0px_2px_3px_0px_rgba(0,0,0,0.17)] top-[741px] translate-x-[-50%] w-[286px]" data-name="Continue with Google / Centre / Fixed">
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[15px] items-start left-[calc(50%-0.5px)] p-[15px] rounded-[10px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <p className="font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[20px] text-[rgba(0,0,0,0.54)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        로그아웃
      </p>
    </div>
  );
}

function ContinueWithGoogleCentreFixed1() {
  return (
    <div className="absolute bg-white h-[54px] left-1/2 rounded-[10px] shadow-[0px_0px_3px_0px_rgba(0,0,0,0.08),0px_2px_3px_0px_rgba(0,0,0,0.17)] top-[816px] translate-x-[-50%] w-[286px]" data-name="Continue with Google / Centre / Fixed">
      <Frame2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[20px] left-1/2 top-[calc(50%+283px)] translate-x-[-50%] translate-y-[-50%] w-[76px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76 20">
        <g clipPath="url(#clip0_3_962)" id="Frame">
          <path d={svgPaths.p4c92280} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_3_962">
            <rect fill="white" height="20" width="76" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function DatingProfileSettings() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex flex-col items-start relative size-full" data-name="Dating Profile Settings">
      <Header />
      <Content />
      <Frame3 />
      <ContinueWithGoogleCentreFixed />
      <ContinueWithGoogleCentreFixed1 />
      <div className="absolute h-[20px] left-[77px] top-[758px] w-[18px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
          <path d={svgPaths.p11fdbf00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <Frame />
    </div>
  );
}