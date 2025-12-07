"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, MapPin, Camera, Plus } from "lucide-react";
const imgMemeIcon = "/assets/MemeX.png";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useDID } from "@/lib/hooks";

interface ProfileSettingsProps {
  onBack: () => void;
  onLogout: () => void;
  onConnectMemeX?: () => void;
  memeXConnected?: boolean;
}

// 국가 코드를 국가명으로 변환하는 함수
function getCountryName(countryCode: string): string {
  const countryMap: Record<string, string> = {
    KR: "대한민국",
    US: "미국",
    JP: "일본",
    CN: "중국",
    GB: "영국",
    FR: "프랑스",
    DE: "독일",
    // 필요시 더 추가
  };
  return countryMap[countryCode] || countryCode;
}

export default function ProfileSettings({
  onBack,
  onLogout,
  onConnectMemeX,
  memeXConnected,
}: ProfileSettingsProps) {
  const { userInfo: didUserInfo } = useDID();
  
  // DID에서 나이와 성별, 국적 가져오기 (localStorage에 저장된 초기 설정값 사용)
  const getAgeFromDID = (): number | null => {
    if (typeof window === 'undefined') return null;
    const birthYear = localStorage.getItem('user_birth_year');
    if (!birthYear) return null;
    const currentYear = new Date().getFullYear();
    const age = currentYear - parseInt(birthYear, 10);
    return isNaN(age) ? null : age;
  };

  const getGenderFromDID = (): string => {
    if (typeof window === 'undefined') return 'Unknown';
    const gender = localStorage.getItem('user_gender');
    if (!gender) return 'Unknown';
    return gender.charAt(0).toUpperCase() + gender.slice(1); // Capitalize
  };

  const getCountryFromDID = (): string => {
    if (typeof window === 'undefined') return "미설정";
    const countryCode = localStorage.getItem('user_country');
    if (!countryCode) return "미설정";
    return getCountryName(countryCode);
  };

  // 초기값: localStorage에서 불러오거나 빈 값
  const [name, setName] = useState("");
  const [country, setCountry] = useState(""); 
  const [bio, setBio] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [userAge, setUserAge] = useState<number | null>(null);
  const [userGender, setUserGender] = useState<string>("Unknown");

  // 컴포넌트 마운트 시 localStorage에서 프로필 불러오기 및 DID 정보 설정
  useEffect(() => {
    const storedProfile = typeof window !== 'undefined' ? localStorage.getItem('user_profile') : null;
    if (storedProfile) {
      try {
        const profile = JSON.parse(storedProfile);
        setName(profile.name || "");
        setBio(profile.bio || "");
        setInterests(profile.interests || []);
      } catch (e) {
        console.error("Failed to parse stored profile:", e);
      }
    }
    
    // DID 정보(localStorage)에서 국적, 나이, 성별 설정
    setCountry(getCountryFromDID());
    setUserAge(getAgeFromDID());
    setUserGender(getGenderFromDID());
  }, []);

  const handleSave = () => {
    if (!name.trim()) {
      toast.error("이름을 입력해주세요.");
      return;
    }
    
    const profileData = {
      name: name.trim(),
      bio: bio.trim(),
      interests: interests,
    };
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('user_profile', JSON.stringify(profileData));
    }
    
    toast.success("프로필이 저장되었습니다!");
  };

  const handleMemeXConnect = () => {
    if (onConnectMemeX) {
      onConnectMemeX();
    }
  };

  const handleRemoveInterest = (interest: string) => {
    setInterests(interests.filter((i) => i !== interest));
  };

  const handleAddInterest = () => {
    const newInterest = prompt('관심사를 입력해주세요:');
    if (newInterest && newInterest.trim()) {
      const trimmedInterest = newInterest.trim();
      if (!interests.includes(trimmedInterest)) {
        setInterests([...interests, trimmedInterest]);
      } else {
        toast.error('이미 추가된 관심사입니다.');
      }
    }
  };

  const getInterestColor = (index: number) => {
    const colors = [
      { bg: "#fff3e0", text: "#f57c00", border: "#f57c00" },
      { bg: "#e8f5e8", text: "#2e7d32", border: "#2e7d32" },
      { bg: "#e3f2fd", text: "#1976d2", border: "#1976d2" },
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="bg-[#f8f9fa] content-stretch flex flex-col items-start relative size-full overflow-auto">
      {/* Header */}
      <div className="bg-white box-border content-stretch flex flex-col h-[60px] items-center px-[20px] py-[16px] relative shrink-0 w-full border-b border-[#e9ecef]">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <button onClick={onBack} className="size-[24px]">
            <ChevronLeft className="size-6 text-[#6C757D]" />
          </button>

          <p className="absolute font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[21.6px] left-1/2 -translate-x-1/2 text-[#212529] text-[18px]">
            프로필 편집
          </p>

          <button
            onClick={handleSave}
            className="bg-[#2a88c8] content-stretch flex h-[30px] items-center justify-center rounded-[18px] w-[60px]"
          >
            <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[16.8px] text-[12px] text-white">
              저장
            </p>
          </button>
        </div>
      </div>

      {/* Profile Photo Section */}
      <div className="bg-white box-border content-stretch flex flex-col h-[245px] items-center justify-center p-[20px] relative shrink-0 w-full border-b border-[#e9ecef]">
        {/* Photo Container */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[calc(50%-42.5px)] -translate-y-1/2 rounded-[60px] size-[120px]">
          <div className="absolute inset-0 rounded-[60px] bg-gradient-to-br from-pink-400 to-cyan-400 flex items-center justify-center">
            <img
              alt="MemeX Icon"
              className="absolute max-w-none size-[80px] rounded-full"
              src={imgMemeIcon}
            />
          </div>

          {/* Edit Photo Button */}
          <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-[84px] rounded-[18px] size-[36px] top-[84px] border border-[#e9ecef]">
            <Camera className="size-[20px] text-[#6C757D]" />
          </div>
        </div>

        {/* Age & Gender Badge */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[150px]">
          <div className="bg-[#2a88c8] h-[40px] rounded-[35px] px-6 flex items-center justify-center">
            <p className="font-['Noto_Sans:Bold',sans-serif] font-bold text-[16px] text-white whitespace-nowrap">
              {userAge ? `${userAge}세` : '나이 미상'} | {userGender}
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white box-border content-stretch flex flex-col gap-[20px] items-start p-[20px] relative shrink-0 w-full">
        {/* Basic Info */}
        <div className="content-stretch flex flex-col gap-[16px] items-start w-full">
          {/* Name Field */}
          <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
            <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[16.8px] text-[#212529] text-[14px]">
              이름
            </p>
            <div className="bg-[#f8f9fa] h-[48px] rounded-[8px] w-full border border-[#e9ecef]">
              <div className="flex flex-row items-center size-full px-[16px]">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="이름을 입력해주세요"
                  className="w-full bg-transparent font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[#212529] text-[16px] outline-none placeholder:text-[#6C757D]"
                />
              </div>
            </div>
          </div>

          {/* Location Field - 읽기 전용 */}
          <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
            <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[16.8px] text-[#212529] text-[14px]">
              국적
            </p>
            <div className="bg-[#e9ecef] h-[48px] rounded-[8px] w-full border border-[#e9ecef] cursor-not-allowed">
              <div className="flex flex-row items-center justify-between size-full px-[16px]">
                <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[#6C757D] text-[16px]">
                  {country}
                </p>
                <MapPin className="size-[20px] text-[#6C757D]" />
              </div>
            </div>
            <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[#6C757D] text-[12px]">
              국적, 나이, 성별은 초기 DID 설정(KYC)을 따르며 변경할 수 없습니다.
            </p>
          </div>
        </div>

        {/* Bio Section */}
        <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
          <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[16.8px] text-[#212529] text-[14px]">
            자기소개
          </p>
          <div className="bg-[#f8f9fa] min-h-[96px] rounded-[8px] w-full border border-[#e9ecef]">
            <div className="flex flex-col items-start size-full px-[16px] py-[12px]">
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="자기소개를 입력해주세요"
                className="w-full bg-transparent font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[#212529] text-[14px] leading-[21px] outline-none resize-none placeholder:text-[#6C757D]"
                rows={3}
              />
            </div>
          </div>
        </div>

        {/* Interests Section */}
        <div className="content-stretch flex flex-col gap-[12px] items-start w-full">
          <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[16.8px] text-[#212529] text-[14px]">
            관심사
          </p>
          <div className="content-start flex flex-wrap gap-[8px] items-start w-full">
            {interests.map((interest, index) => {
              const colors = getInterestColor(index);
              return (
                <button
                  key={interest}
                  onClick={() => handleRemoveInterest(interest)}
                  className="box-border content-stretch flex items-center justify-between gap-2 px-[12px] py-[8px] rounded-[16px]"
                  style={{ backgroundColor: colors.bg }}
                >
                  <p
                    className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[14.4px] text-[12px]"
                    style={{ color: colors.text }}
                  >
                    {interest}
                  </p>
                  <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
                    <path
                      d="M10.5 3.5L3.5 10.5"
                      stroke={colors.border}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.16667"
                    />
                    <path
                      d="M3.5 3.5L10.5 10.5"
                      stroke={colors.border}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.16667"
                    />
                  </svg>
                </button>
              );
            })}
            <button 
              onClick={handleAddInterest}
              className="bg-[#f8f9fa] box-border content-stretch flex items-center px-[12px] py-[8px] rounded-[16px] border border-[#e9ecef] hover:bg-[#e9ecef] transition-colors"
            >
              <Plus className="size-[16px] text-[#6C757D]" />
            </button>
          </div>
        </div>
      </div>

        {/* MemeX Button */}
        <div className="flex flex-col gap-4 px-[37px] py-6 w-full">
          <Button
            onClick={handleMemeXConnect}
            className={`w-full h-[54px] rounded-[10px] shadow-[0px_0px_3px_0px_rgba(0,0,0,0.08),0px_2px_3px_0px_rgba(0,0,0,0.17)] ${
              memeXConnected
                ? "bg-green-600 hover:bg-green-700"
                : "bg-[#0c041e] hover:bg-[#1a0a30]"
            }`}
          >
            <div className="flex items-center gap-3">
              <img alt="MemeX" className="size-[20px]" src={imgMemeIcon} />
              <p className="font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium text-[20px] text-white">
                {memeXConnected ? "MemeX 연동 해제" : "MemeX 연동"}
              </p>
            </div>
          </Button>

        {memeXConnected && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] text-[14px] text-green-700 text-center">
              🎉 커뮤니티를 사용할 수 있습니다!
            </p>
          </div>
        )}

        <Button
          variant="outline"
          onClick={onLogout}
          className="w-full h-[54px] bg-white rounded-[10px] shadow-[0px_0px_3px_0px_rgba(0,0,0,0.08),0px_2px_3px_0px_rgba(0,0,0,0.17)]"
        >
          <p className="font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium text-[20px] text-[rgba(0,0,0,0.54)]">
            로그아웃
          </p>
        </Button>
      </div>
    </div>
  );
}
