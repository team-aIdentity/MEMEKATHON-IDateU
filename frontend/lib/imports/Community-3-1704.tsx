import svgPaths from "./svg-o2dwi6a20j";
import imgOnlineShop from "figma:asset/5cc1579c1da4864762ce97bb8106cc77383220ef.png";
import img20251126130011 from "figma:asset/9dd53a9d4c11c8113726ff5aabb8e34803880c80.png";
import imgEllipse23 from "figma:asset/da38860f270f0b8d3e1ef1847cad9deb77e63636.png";

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
      <div className="absolute left-[232px] size-[30px] top-[calc(50%+1px)] translate-y-[-50%]" data-name="Online Shop">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgOnlineShop} />
        </div>
      </div>
      <div className="absolute h-[26.667px] left-1/2 top-[calc(50%+0.33px)] translate-x-[-50%] translate-y-[-50%] w-[24px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 27">
          <path d={svgPaths.p21687bf0} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

export default function Community() {
  return (
    <div className="bg-[#0c041e] relative size-full" data-name="Community">
      <Frame />
      <div className="absolute h-[526px] left-0 top-0 w-[360px]" data-name="스크린샷 2025-11-26 오후 1.30.01 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[123.17%] left-0 max-w-none top-[-0.02%] w-full" src={img20251126130011} />
        </div>
      </div>
      <div className="absolute left-[calc(50%-145px)] size-[38px] top-[52px] translate-x-[-50%]" data-name="Ellipse 2.3">
        <img alt="" className="block max-w-none size-full" height="38" src={imgEllipse23} width="38" />
      </div>
      <div className="absolute left-[calc(50%-146px)] size-[38px] top-[154px] translate-x-[-50%]" data-name="Ellipse 2.3">
        <img alt="" className="block max-w-none size-full" height="38" src={imgEllipse23} width="38" />
      </div>
    </div>
  );
}