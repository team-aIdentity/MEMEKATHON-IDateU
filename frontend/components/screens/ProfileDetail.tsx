"use client";
import { ChevronLeft, MapPin } from "lucide-react";
const imgPhotoContainer = "/assets/basic-profile.png";
import { Button } from "@/components/ui/button";

interface ProfileDetailProps {
  profile: {
    id: string;
    name: string;
    age: number;
    bio: string;
    interests: string[];
    image: string;
    location: string;
    gender: string;
  };
  onBack: () => void;
}

export default function ProfileDetail({ profile, onBack }: ProfileDetailProps) {
  const getInterestColor = (index: number) => {
    const colors = [
      { bg: "#fff3e0", text: "#f57c00", border: "#f57c00" }, // 카페투어
      { bg: "#e8f5e8", text: "#2e7d32", border: "#2e7d32" }, // 영화감상
      { bg: "#e3f2fd", text: "#1976d2", border: "#1976d2" }, // 여행
    ];
    return colors[index % colors.length];
  };

  const birthYear = new Date().getFullYear() - profile.age;
  const genderText = profile.gender === "여성" ? "Female" : "Male";

  return (
    <div className="bg-[#f8f9fa] content-stretch flex flex-col items-start relative size-full overflow-auto">
      {/* Header */}
      <div className="bg-white box-border content-stretch flex flex-col h-[60px] items-center px-[20px] py-[16px] relative shrink-0 w-full border-b border-[#e9ecef]">
        <button
          onClick={onBack}
          className="absolute left-[20px] size-[24px] top-[16px]"
        >
          <ChevronLeft className="size-6 text-[#6C757D]" />
        </button>
      </div>

      {/* Profile Photo Section */}
      <div className="bg-white box-border content-stretch flex flex-col h-[245px] items-center justify-center p-[20px] relative shrink-0 w-full border-b border-[#e9ecef]">
        {/* Photo Container */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[calc(50%-42.5px)] -translate-y-1/2 rounded-[60px] size-[120px]">
          <div className="absolute inset-0 rounded-[60px]">
            {profile.id === "1" || profile.id === "2" ? (
              <img
                alt={profile.name}
                className="absolute max-w-none object-cover rounded-[60px] size-full"
                src={profile.image}
              />
            ) : (
              <img
                alt={profile.name}
                className="absolute max-w-none object-cover rounded-[60px] size-full"
                src={`https://source.unsplash.com/120x120/?${profile.image}`}
              />
            )}
          </div>
        </div>

        {/* Age & Gender Badge */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[150px]">
          <div className="bg-[#e91e63] h-[40px] rounded-[35px] px-6 flex items-center justify-center">
            <p className="font-['Noto_Sans:Bold',sans-serif] font-bold text-[16px] text-white whitespace-nowrap">
              {birthYear} | {genderText}
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white box-border content-stretch flex flex-col gap-[20px] items-start p-[20px] relative shrink-0 w-full">
        {/* Name Field */}
        <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
          <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[16.8px] text-[#212529] text-[14px]">
            이름
          </p>
          <div className="bg-[#f8f9fa] h-[48px] rounded-[8px] w-full border border-[#e9ecef]">
            <div className="flex flex-row items-center size-full px-[16px]">
              <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[#212529] text-[16px]">
                {profile.name}
              </p>
            </div>
          </div>
        </div>

        {/* Location Field */}
        <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
          <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[16.8px] text-[#212529] text-[14px]">
            국적
          </p>
          <div className="bg-[#f8f9fa] h-[48px] rounded-[8px] w-full border border-[#e9ecef]">
            <div className="flex flex-row items-center justify-between size-full px-[16px]">
              <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[#212529] text-[16px]">
                {profile.location}
              </p>
              <MapPin className="size-[20px] text-[#6C757D]" />
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
          <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[16.8px] text-[#212529] text-[14px]">
            자기소개
          </p>
          <div className="bg-[#f8f9fa] min-h-[96px] rounded-[8px] w-full border border-[#e9ecef]">
            <div className="flex flex-col items-start size-full px-[16px] py-[12px]">
              <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[#212529] text-[14px] leading-[21px]">
                안녕하세요! 카페투어와 영화감상을 좋아하는 {profile.name}입니다.
                새로운 사람들과의 만남을 기대하고 있어요 😊
              </p>
            </div>
          </div>
        </div>

        {/* Interests Section */}
        <div className="content-stretch flex flex-col gap-[12px] items-start w-full">
          <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[16.8px] text-[#212529] text-[14px]">
            관심사
          </p>
          <div className="content-start flex flex-wrap gap-[8px] items-start w-full">
            {profile.interests.map((interest, index) => {
              const colors = getInterestColor(index);
              return (
                <div
                  key={interest}
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
                </div>
              );
            })}
            <div className="bg-[#f8f9fa] box-border content-stretch flex items-center px-[12px] py-[8px] rounded-[16px] border border-[#e9ecef]">
              <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                <path
                  d="M3.33333 8H12.6667"
                  stroke="#6C757D"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.33333"
                />
                <path
                  d="M8 3.33333V12.6667"
                  stroke="#6C757D"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.33333"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-4 px-[37px] py-6 w-full">
        <Button
          variant="outline"
          className="w-full h-[54px] bg-white rounded-[10px] shadow-[0px_0px_3px_0px_rgba(0,0,0,0.08),0px_2px_3px_0px_rgba(0,0,0,0.17)]"
        >
          <p className="font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium text-[20px] text-[rgba(0,0,0,0.54)]">
            신고하기
          </p>
        </Button>

        <Button className="w-full h-[54px] bg-[#0c041e] rounded-[10px] shadow-[0px_0px_3px_0px_rgba(0,0,0,0.08),0px_2px_3px_0px_rgba(0,0,0,0.17)]">
          <p className="font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium text-[20px] text-white">
            차단하기
          </p>
        </Button>
      </div>
    </div>
  );
}
