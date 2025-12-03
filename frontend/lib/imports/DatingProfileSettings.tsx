import svgPaths from "./svg-6r72zhfdvj";
import imgPhotoContainer from "figma:asset/9a8e77382af614360fcd56ae19b7c04505c6581f.png";

function ChevronLeft() {
  return (
    <div className="absolute left-[20px] size-[24px] top-[16px]" data-name="Chevron Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Chevron Left">
          <path d="M24 24H0V0H24V24Z" stroke="var(--stroke-0, #6C757D)" />
          <path d="M15 18L9 12L15 6" id="Vector" stroke="var(--stroke-0, #6C757D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-[60px] items-center px-[20px] py-[16px] relative shrink-0 w-[360px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e9ecef] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <ChevronLeft />
    </div>
  );
}

function PhotoContainer() {
  return (
    <div className="absolute left-[120px] rounded-[60px] size-[120px] top-[calc(50%-42.5px)] translate-y-[-50%]" data-name="Photo Container">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[60px]">
        <div className="absolute inset-0 rounded-[60px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[60px] size-full" src={imgPhotoContainer} />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[105px] top-[150px]">
      <div className="absolute bg-[#e91e63] h-[40px] left-1/2 rounded-[35px] top-[150px] translate-x-[-50%] w-[150px]" />
      <p className="absolute font-['Noto_Sans:Bold',sans-serif] font-bold leading-[normal] left-[124px] text-[16px] text-nowrap text-white top-[159px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        2004 | Female
      </p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute h-[12px] left-[162px] top-[3px] w-[12.387px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 12">
        <g id="Group 46">
          <path d={svgPaths.pa580e70} id="Rectangle 24" stroke="var(--stroke-0, #2B89C8)" strokeWidth="1.5" />
          <rect height="8.17744" id="Rectangle 25" rx="2.25" stroke="var(--stroke-0, #2B89C8)" strokeWidth="1.5" width="8.17735" x="3.45974" y="0.75" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[93px] top-[202px]">
      <p className="absolute font-['Noto_Sans:Bold',sans-serif] font-bold leading-[normal] left-0 text-[#494949] text-[12px] text-nowrap top-0 whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        0x877c199...1f8dAdD63F75
      </p>
      <Group1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[93px] top-[202px]">
      <Group3 />
    </div>
  );
}

function ProfilePhotoSection() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-[245px] items-center justify-center p-[20px] relative shrink-0 w-[360px]" data-name="Profile Photo Section">
      <div aria-hidden="true" className="absolute border-[#e9ecef] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <PhotoContainer />
      <Group />
      <Group2 />
    </div>
  );
}

function NameInput() {
  return (
    <div className="bg-[#f8f9fa] h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="Name Input">
      <div aria-hidden="true" className="absolute border border-[#e9ecef] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[48px] items-center px-[16px] py-0 relative w-full">
          <p className="basis-0 font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[19.2px] min-h-px min-w-px not-italic relative shrink-0 text-[#212529] text-[16px]">은지</p>
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
          <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#212529] text-[14px] w-full">안녕하세요! 카페투어와 영화감상을 좋아하는 지수입니다. 새로운 사람들과의 만남을 기대하고 있어요 😊</p>
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
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[14.4px] not-italic relative shrink-0 text-[#f57c00] text-[12px] text-nowrap whitespace-pre">카페투어</p>
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
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[14.4px] not-italic relative shrink-0 text-[#2e7d32] text-[12px] text-nowrap whitespace-pre">영화감상</p>
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
    <div className="bg-white box-border content-stretch flex flex-col gap-[20px] h-[760px] items-start p-[20px] relative shrink-0 w-[360px]" data-name="Form Section">
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

function Frame() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[15px] items-start left-[calc(50%-0.5px)] p-[15px] rounded-[10px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <p className="font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[20px] text-[rgba(0,0,0,0.54)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        신고하기
      </p>
    </div>
  );
}

function ContinueWithGoogleCentreFixed() {
  return (
    <div className="absolute bg-white h-[54px] left-1/2 rounded-[10px] shadow-[0px_0px_3px_0px_rgba(0,0,0,0.08),0px_2px_3px_0px_rgba(0,0,0,0.17)] top-[741px] translate-x-[-50%] w-[286px]" data-name="Continue with Google / Centre / Fixed">
      <Frame />
    </div>
  );
}

function Frame1() {
  return <div className="absolute bg-[#0c041e] box-border content-stretch flex gap-[15px] items-start left-[calc(50%-0.5px)] p-[15px] rounded-[10px] top-1/2 translate-x-[-50%] translate-y-[-50%]" />;
}

function ContinueWithGoogleCentreFixed1() {
  return (
    <div className="absolute bg-[#0c041e] h-[54px] left-[calc(50%+1px)] rounded-[10px] shadow-[0px_0px_3px_0px_rgba(0,0,0,0.08),0px_2px_3px_0px_rgba(0,0,0,0.17)] top-[815px] translate-x-[-50%] w-[286px]" data-name="Continue with Google / Centre / Fixed">
      <Frame1 />
    </div>
  );
}

export default function DatingProfileSettings() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex flex-col items-start relative size-full" data-name="Dating Profile Settings">
      <Header />
      <Content />
      <ContinueWithGoogleCentreFixed />
      <ContinueWithGoogleCentreFixed1 />
      <p className="absolute font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] left-[143px] text-[20px] text-nowrap text-white top-[830px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        차단하기
      </p>
    </div>
  );
}