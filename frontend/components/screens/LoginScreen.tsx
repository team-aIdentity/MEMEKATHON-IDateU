'use client';
import svgPaths from "@/lib/imports/svg-uw8als81a3";
const imgLogo = "/assets/IDateU_logo.png";

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

function SocialIcons() {
  return (
    <div className="size-[24px]" data-name="Social Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Social Icons">
          <path d={svgPaths.p38a22b70} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

interface LoginScreenProps {
  onLogin: (provider: 'google' | 'twitter') => void;
}

export default function LoginScreen({ onLogin }: LoginScreenProps) {
  return (
    <div className="bg-[#2982c5] relative size-full min-h-screen flex flex-col items-center justify-center p-6">
      {/* Logo Section */}
      <div className="flex flex-col items-center mb-16">
        <div className="size-[120px] mb-4 relative">
          <img alt="IDateU Logo" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgLogo} />
        </div>
        <h1 className="font-['Jaldi:Bold',sans-serif] not-italic text-[#ffffe5] text-[80px] leading-[100px] text-nowrap">IDateU</h1>
      </div>

      {/* Login Buttons */}
      <div className="flex flex-col gap-6 w-full max-w-[286px]">
        {/* Google Login Button */}
        <button
          onClick={() => onLogin('google')}
          className="bg-white box-border flex gap-[15px] items-center justify-center p-[15px] rounded-[10px] h-[54px] shadow-[0px_0px_3px_0px_rgba(0,0,0,0.08),0px_2px_3px_0px_rgba(0,0,0,0.17)] hover:shadow-lg transition-shadow"
        >
          <GoogleLogo />
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] text-[20px] text-[rgba(0,0,0,0.54)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Sign In with Google
          </p>
        </button>

        {/* Twitter/X Login Button */}
        <button
          onClick={() => onLogin('twitter')}
          className="bg-black flex gap-[15px] items-center justify-center p-[15px] rounded-[10px] h-[54px] hover:bg-gray-800 transition-colors"
        >
          <SocialIcons />
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] text-[20px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Sign In with X
          </p>
        </button>
      </div>
    </div>
  );
}
