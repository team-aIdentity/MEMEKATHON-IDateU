'use client';
import { useState } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";
import { toast } from "sonner";
import svgPaths from "@/lib/imports/svg-2upy61fujl";
const imgPhotoArea = "/assets/5e9bf40e5037ae3c728ad4ad794aee13dde133b3.png";
const imgReturn = "/assets/31e63e0f7160a1271600a165358c72dff0ca15b1.png";

interface Profile {
  id: string;
  name: string;
  age: number;
  bio: string;
  interests: string[];
  image: string;
  location: string;
  gender: string;
}

interface MatchingScreenProps {
  onOpenStore: () => void;
  onOpenProfile: (profile: Profile) => void;
  userItems: {
    unlimitedLikes: boolean;
    rewind: boolean;
    superLike: boolean;
  };
}

const SAMPLE_PROFILES: Profile[] = [
  {
    id: '1',
    name: 'Malt',
    age: 21,
    bio: '',
    interests: ['카페투어', '영화감상', '여행'],
    image: imgPhotoArea,
    location: 'Thailand',
    gender: '남성',
  },
  {
    id: '2',
    name: 'Sarah',
    age: 26,
    bio: '',
    interests: ['독서', '요가', '음악'],
    image: 'woman portrait nature',
    location: 'Seoul',
    gender: '여성',
  },
  {
    id: '3',
    name: 'Emma',
    age: 24,
    bio: '',
    interests: ['미술', '요리', '산책'],
    image: 'woman artist',
    location: 'Busan',
    gender: '여성',
  },
  {
    id: '4',
    name: 'Jessica',
    age: 28,
    bio: '',
    interests: ['운동', '러닝', '건강'],
    image: 'fitness woman',
    location: 'Incheon',
    gender: '여성',
  },
  {
    id: '5',
    name: 'Lisa',
    age: 25,
    bio: '',
    interests: ['게임', '테크', '애니'],
    image: 'woman technology',
    location: 'Daegu',
    gender: '여성',
  },
];

function SlidersHorizontal() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Sliders Horizontal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Sliders Horizontal">
          <path d="M24 24H0V0H24V24Z" stroke="transparent" />
          <path d="M21 4H14" id="Vector" stroke="#6C757D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 4H3" id="Vector_2" stroke="#6C757D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M21 12H12" id="Vector_3" stroke="#6C757D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8 12H3" id="Vector_4" stroke="#6C757D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M21 20H16" id="Vector_5" stroke="#6C757D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 20H3" id="Vector_6" stroke="#6C757D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M14 2V6" id="Vector_7" stroke="#6C757D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8 10V14" id="Vector_8" stroke="#6C757D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 18V22" id="Vector_9" stroke="#6C757D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function MapPin() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Map Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Map Pin">
          <path d="M16 16H0V0H16V16Z" stroke="transparent" />
          <path d={svgPaths.p14548f00} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Heart() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Heart">
          <path d="M24 24H0V0H24V24Z" stroke="transparent" />
          <path d={svgPaths.p1dff4600} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Star() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Star">
          <path d="M24 24H0V0H24V24Z" stroke="transparent" />
          <path d={svgPaths.p9b81900} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function X() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="X">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="X">
          <path d="M24 24H0V0H24V24Z" stroke="transparent" />
          <path d="M18 6L6 18" id="Vector" stroke="#E91E63" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M6 6L18 18" id="Vector_2" stroke="#E91E63" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

interface SwipeableCardProps {
  profile: Profile;
  onSwipe: (direction: 'left' | 'right') => void;
  onSwipeSuper: () => void;
  onProfileClick: () => void;
}

function SwipeableCard({ profile, onSwipe, onSwipeSuper, onProfileClick }: SwipeableCardProps) {
  const motionX = useMotionValue(0);
  const motionY = useMotionValue(0);
  
  const rotate = useTransform(motionX, [-200, 0, 200], [-25, 0, 25]);
  const likeOpacity = useTransform(motionX, [0, 100], [0, 1]);
  const nopeOpacity = useTransform(motionX, [-100, 0], [1, 0]);

  const handleDragEnd = (_event: any, info: any) => {
    const swipeThreshold = 100;
    
    if (Math.abs(info.offset.x) > swipeThreshold) {
      if (info.offset.x > 0) {
        onSwipe('right');
      } else {
        onSwipe('left');
      }
    }
  };

  return (
    <motion.div
      className="bg-white box-border content-stretch flex flex-col h-[540px] items-start overflow-clip relative rounded-[16px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.06)] shrink-0 w-full max-w-[340px] cursor-grab active:cursor-grabbing"
      style={{
        x: motionX,
        y: motionY,
        rotate,
      }}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.7}
      onDragEnd={handleDragEnd}
      whileTap={{ cursor: 'grabbing' }}
      data-name="Main Card"
    >
      {/* LIKE indicator */}
      <motion.div 
        className="absolute top-[50px] left-[35px] z-10 border-4 border-green-500 rounded-lg px-5 py-3 rotate-[-15deg]"
        style={{ opacity: likeOpacity }}
      >
        <span className="text-green-500 font-bold text-4xl">LIKE</span>
      </motion.div>

      {/* NOPE indicator */}
      <motion.div 
        className="absolute top-[50px] right-[35px] z-10 border-4 border-red-500 rounded-lg px-5 py-3 rotate-[15deg]"
        style={{ opacity: nopeOpacity }}
      >
        <span className="text-red-500 font-bold text-4xl">NOPE</span>
      </motion.div>

      {/* Photo Area */}
      <div 
        className="content-stretch flex flex-col h-[360px] items-center justify-center overflow-clip relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full cursor-pointer" 
        data-name="Photo Area"
        onClick={onProfileClick}
      >
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-tl-[16px] rounded-tr-[16px]">
          <div className="absolute bg-gradient-to-l from-[#acd5f2] inset-0 rounded-tl-[16px] rounded-tr-[16px] to-[#2985c6]" />
          {profile.id === '1' ? (
            <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-tl-[16px] rounded-tr-[16px] size-full" src={profile.image} />
          ) : (
            <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-tl-[16px] rounded-tr-[16px] size-full" src={`https://source.unsplash.com/340x360/?${profile.image}`} />
          )}
        </div>
        
        {/* Photo Overlay */}
        <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Photo Overlay">
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col items-start justify-between p-[20px] relative size-full">
              <div className="h-[17px] shrink-0 w-full" data-name="User Info" />
              
              {/* Name */}
              <p className="absolute font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[28.8px] left-[20px] not-italic text-[24px] text-white top-[286px] w-[280px]">
                {profile.name}, {profile.age}
              </p>
              
              {/* Location */}
              <div className="absolute content-stretch flex gap-[4px] items-center left-[20px] top-[325px] w-[280px]" data-name="Location">
                <MapPin />
                <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16.8px] not-italic opacity-90 relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">
                  {profile.location} | {profile.gender}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="bg-white box-border content-stretch flex flex-col gap-[16px] h-[180px] items-start p-[20px] relative shrink-0 w-full" data-name="Card Content">
        {/* Bio Section */}
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Bio Section">
          <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[14.4px] not-italic relative shrink-0 text-[#6c757d] text-[12px] w-full">
            관심사
          </p>
          
          {/* Tags */}
          <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Tags">
            {profile.interests.map((interest, index) => {
              const colors = [
                { bg: '#fff3e0', text: '#f57c00' },
                { bg: '#e8f5e8', text: '#2e7d32' },
                { bg: '#e3f2fd', text: '#1976d2' },
              ];
              const color = colors[index % colors.length];
              
              return (
                <div 
                  key={interest}
                  className="box-border content-stretch flex items-center px-[12px] py-[6px] relative rounded-[16px] shrink-0"
                  style={{ backgroundColor: color.bg }}
                >
                  <p 
                    className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[14.4px] not-italic relative shrink-0 text-[12px] text-nowrap whitespace-pre"
                    style={{ color: color.text }}
                  >
                    {interest}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="content-stretch flex gap-[20px] items-center justify-center relative shrink-0 w-full" data-name="Action Buttons">
          {/* Like Button */}
          <div className="bg-[#e91e63] box-border content-stretch flex items-center justify-center relative rounded-[30px] shadow-[0px_2px_8px_0px_rgba(233,30,99,0.19)] shrink-0 size-[60px]" data-name="Like Button">
            <Heart />
          </div>

          {/* Super Like Button */}
          <div className="bg-[#00bcd4] box-border content-stretch flex items-center justify-center relative rounded-[30px] shadow-[0px_2px_8px_0px_rgba(0,188,212,0.19)] shrink-0 size-[60px]" data-name="Super Like Button">
            <Star />
          </div>

          {/* Rewind Button */}
          <div className="bg-[#ffecba] box-border content-stretch flex items-center justify-center relative rounded-[30px] shadow-[0px_2px_8px_0px_rgba(0,188,212,0.19)] shrink-0 size-[60px]" data-name="Super Like Button">
            <div className="relative shrink-0 size-[25px]" data-name="Return">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgReturn} />
            </div>
          </div>

          {/* Pass Button */}
          <div className="bg-white content-stretch flex items-center justify-center relative rounded-[30px] shrink-0 size-[60px]" data-name="Pass Button">
            <div aria-hidden="true" className="absolute border-2 border-[#e9ecef] border-solid inset-0 pointer-events-none rounded-[30px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)]" />
            <X />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function MatchingScreen({ onOpenStore, onOpenProfile, userItems }: MatchingScreenProps) {
  const [profiles] = useState(SAMPLE_PROFILES);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dailyLikes, setDailyLikes] = useState(5);
  const [previousProfile, setPreviousProfile] = useState<Profile | null>(null);

  const currentProfile = profiles[currentIndex];

  const handleSwipe = (direction: 'left' | 'right') => {
    if (!currentProfile) return;

    if (direction === 'right' && !userItems.unlimitedLikes && dailyLikes <= 0) {
      toast.error('Daily likes limit reached! Get unlimited likes in the store.');
      onOpenStore();
      return;
    }

    setPreviousProfile(currentProfile);
    
    if (direction === 'right') {
      setDailyLikes(prev => userItems.unlimitedLikes ? prev : prev - 1);
      toast.success(`You liked ${currentProfile.name}!`);
      
      if (Math.random() > 0.7) {
        setTimeout(() => {
          toast.success(`It's a match with ${currentProfile.name}! 🎉`, {
            description: 'Match record will be saved on-chain',
          });
        }, 500);
      }
    } else if (direction === 'left') {
      toast(`Passed ${currentProfile.name}`);
    }

    setCurrentIndex(prev => prev + 1);
  };

  if (!currentProfile) {
    return (
      <div className="bg-[#f8f9fa] content-stretch flex flex-col items-start relative size-full" data-name="Dating Match Page">
        {/* Header */}
        <div className="bg-white box-border content-stretch flex flex-col h-[60px] items-center justify-center px-[20px] py-[16px] relative shrink-0 w-[360px]" data-name="Header">
          <div aria-hidden="true" className="absolute border-[#e9ecef] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header Content">
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#212529] text-[20px] text-nowrap whitespace-pre">MATCH</p>
            <SlidersHorizontal />
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <div className="text-center space-y-4">
            <h2 className="text-gray-600">No more profiles nearby</h2>
            <p className="text-gray-400">Check back later for new matches!</p>
            <button 
              onClick={() => setCurrentIndex(0)}
              className="bg-[#2982c5] text-white px-6 py-2 rounded-lg hover:opacity-90"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f8f9fa] content-stretch flex flex-col items-start relative size-full" data-name="Dating Match Page">
      {/* Header */}
      <div className="bg-white box-border content-stretch flex flex-col h-[60px] items-center justify-center px-[20px] py-[16px] relative shrink-0 w-full" data-name="Header">
        <div aria-hidden="true" className="absolute border-[#e9ecef] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header Content">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#212529] text-[20px] text-nowrap whitespace-pre">MATCH</p>
          <SlidersHorizontal />
        </div>
      </div>

      {/* Card Stack Area */}
      <div className="box-border content-stretch flex flex-col flex-1 items-center justify-center px-[10px] py-[20px] relative shrink-0 w-full" data-name="Card Stack Area">
        <SwipeableCard 
          profile={currentProfile}
          onSwipe={handleSwipe}
          onSwipeSuper={() => {}}
          onProfileClick={() => onOpenProfile(currentProfile)}
        />
      </div>
    </div>
  );
}