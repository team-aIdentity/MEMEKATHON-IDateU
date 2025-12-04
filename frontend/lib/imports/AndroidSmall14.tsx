import svgPaths from "./svg-uw8als81a3";
import imgFavorite from "figma:asset/8afcb3be85c8721ba3cd276ff9ac83cb470e929b.png";

function LogoGoogleg48Dp() {
  return (
    <div className="absolute left-[0.5px] size-[23px] top-[0.5px]" data-name="logo googleg 48dp">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="logo googleg 48dp">
          <path clipRule="evenodd" d={svgPaths.p15d7be00} fill="var(--fill-0, #4285F4)" fillRule="evenodd" id="Shape" />
          <path clipRule="evenodd" d={svgPaths.p1f2f62f0} fill="var(--fill-0, #34A853)" fillRule="evenodd" id="Shape_2" />
          <path clipRule="evenodd" d={svgPaths.p2f8c9600} fill="var(--fill-0, #FBBC05)" fillRule="evenodd" id="Shape_3" />
          <path clipRule="evenodd" d={svgPaths.p14f01400} fill="var(--fill-0, #EA4335)" fillRule="evenodd" id="Shape_4" />
          <g id="Shape_5"></g>
        </g>
      </svg>
    </div>
  );
}

function GoogleLogo() {
  return (
    <div className="bg-white relative shrink-0 size-[24px]" data-name="Google Logo">
      <LogoGoogleg48Dp />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[15px] items-start left-[calc(50%-0.5px)] p-[15px] rounded-[10px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <GoogleLogo />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[20px] text-[rgba(0,0,0,0.54)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sign In with Google
      </p>
    </div>
  );
}

function ContinueWithGoogleCentreFixed() {
  return (
    <div className="absolute bg-white h-[54px] left-1/2 rounded-[10px] shadow-[0px_0px_3px_0px_rgba(0,0,0,0.08),0px_2px_3px_0px_rgba(0,0,0,0.17)] top-[449px] translate-x-[-50%] w-[286px]" data-name="Continue with Google / Centre / Fixed">
      <Frame />
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="absolute left-[36.5px] size-[24px] top-[15px]" data-name="Social Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Social Icons">
          <path d={svgPaths.p38a22b70} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[54px] left-[37px] top-[523px] w-[286px]">
      <div className="absolute bg-black h-[54px] left-0 rounded-[10px] top-0 w-[286px]" />
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[normal] left-[80px] text-[20px] text-nowrap text-white top-[calc(50%-11px)] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sign In with Google
      </p>
      <SocialIcons />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[37px] top-[449px]">
      <ContinueWithGoogleCentreFixed />
      <Frame1 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[120px] top-[89px]">
      <div className="absolute left-[120px] size-[120px] top-[89px]" data-name="Favorite">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgFavorite} />
      </div>
      <div className="absolute h-[28px] left-[161.33px] top-[141.67px] w-[44.667px]">
        <div className="absolute inset-[-14.29%_-8.96%_-20.58%_-8.96%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53 38">
            <path d={svgPaths.p1eccc440} id="Vector 4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="8" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function AndroidSmall() {
  return (
    <div className="bg-[#2982c5] relative size-full" data-name="Android Small - 14">
      <p className="absolute font-['Jaldi:Bold',sans-serif] leading-[100px] left-[calc(50%-108px)] not-italic text-[#ffffe5] text-[80px] text-nowrap top-[calc(50%-128px)] whitespace-pre">IDateU</p>
      <Group />
      <Group1 />
    </div>
  );
}