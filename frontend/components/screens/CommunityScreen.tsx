'use client';
import { useState } from "react";
import { Search, Image as ImageIcon, MoreHorizontal } from "lucide-react";
const imgMemeIcon = "/assets/ca4e002f8159f6979025a13ce2c4d1869fc8a4ac.png";
const img20251126248121 = "/assets/6042139a0b353149933fc8e7fce4b7f23d8faabf.png";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

interface CommunityScreenProps {
  isMemeXConnected: boolean;
  onConnectMemeX: () => void;
}

// Onboarding Screen - Not connected
function CommunityOnboarding({ onConnect }: { onConnect: () => void }) {
  return (
    <div className="bg-[#0c041e] relative size-full" data-name="Community">
      {/* Background Image - Figma Design */}
      <div className="absolute h-[604px] left-0 top-0 w-full" data-name="Background">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img20251126248121} />
      </div>

      {/* What is MemeX Button */}
      <div className="absolute right-[20px] top-[20px] z-10">
        <button className="bg-[#4A9EFF] px-[20px] py-[10px] rounded-[20px]">
          <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Semi_Bold',sans-serif] font-semibold text-white text-[14px]">
            What is MemeX?
          </p>
        </button>
      </div>

      {/* Content Container */}
      <div className="absolute bottom-[110px] left-0 right-0 px-[30px] flex flex-col items-center z-10">
        {/* Title */}
        <h1 className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold text-white text-[48px] leading-[57.6px] mb-[16px] text-center">
          All for Memes
        </h1>
        
        {/* Description */}
        <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal text-white text-[16px] leading-[24px] mb-[32px] text-center max-w-[340px]">
          The most accessible meme coin social launchpad. Become a meme coin creator, a trader, and a community builder here.
        </p>
        
        {/* Sign in with Google Button */}
        <button 
          onClick={onConnect}
          className="bg-white w-full max-w-[300px] h-[50px] rounded-[25px] flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors"
        >
          <svg className="size-[20px]" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          <p className="font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium text-[rgba(0,0,0,0.54)] text-[16px]">
            Sign in with Google
          </p>
        </button>
      </div>
    </div>
  );
}

// Main Community Feed - Connected
function CommunityFeed() {
  const [activeTab, setActiveTab] = useState<'foryou' | 'latest' | 'following'>('foryou');
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-[#0c041e] relative size-full overflow-auto pb-[70px]" data-name="Community">
      {/* Header */}
      <div className="sticky top-0 bg-[#0c041e] z-10 border-b border-[#2f2f2f]">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-[16px] py-[12px]">
          {/* Profile Picture */}
          <div className="size-[40px] rounded-full overflow-hidden">
            <img alt="Profile" className="size-full object-cover" src={imgMemeIcon} />
          </div>

          {/* MemeX Logo */}
          <div className="flex items-center gap-2">
            <img alt="MemeX" className="size-[24px]" src={imgMemeIcon} />
          </div>

          {/* Search Icon */}
          <button className="size-[24px] text-white">
            <Search className="size-full" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex items-center">
          <button
            onClick={() => setActiveTab('foryou')}
            className={`flex-1 py-[16px] relative transition-colors ${
              activeTab === 'foryou' ? 'text-white' : 'text-[#71767b]'
            }`}
          >
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px]">
              For you
            </p>
            {activeTab === 'foryou' && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60px] h-[4px] bg-[#4A9EFF] rounded-full" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('latest')}
            className={`flex-1 py-[16px] relative transition-colors ${
              activeTab === 'latest' ? 'text-white' : 'text-[#71767b]'
            }`}
          >
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px]">
              Latest
            </p>
            {activeTab === 'latest' && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60px] h-[4px] bg-[#4A9EFF] rounded-full" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('following')}
            className={`flex-1 py-[16px] relative transition-colors ${
              activeTab === 'following' ? 'text-white' : 'text-[#71767b]'
            }`}
          >
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px]">
              Following
            </p>
            {activeTab === 'following' && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60px] h-[4px] bg-[#4A9EFF] rounded-full" />
            )}
          </button>
        </div>
      </div>

      {/* Tweet Input */}
      <div className="border-b border-[#2f2f2f] p-[16px]">
        <div className="flex gap-[12px]">
          <div className="size-[40px] rounded-full overflow-hidden shrink-0">
            <img alt="Profile" className="size-full object-cover" src={imgMemeIcon} />
          </div>
          
          <div className="flex-1">
            <input
              type="text"
              placeholder="What is happening?!"
              className="bg-transparent text-white text-[20px] w-full outline-none placeholder:text-[#71767b] font-['Inter:Regular',sans-serif]"
            />
            
            <div className="flex items-center justify-between mt-[12px]">
              <button className="text-[#4A9EFF]">
                <ImageIcon className="size-[20px]" />
              </button>
              
              <button className="bg-[#4A9EFF] px-[20px] py-[8px] rounded-full hover:bg-[#3D8DE8] transition-colors">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-[15px]">
                  Post
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pinned Label */}
      <div className="px-[16px] py-[8px] border-b border-[#2f2f2f]">
        <div className="flex items-center gap-[8px] text-[#71767b]">
          <svg className="size-[16px]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 4.5C7 3.12 8.12 2 9.5 2h5C15.88 2 17 3.12 17 4.5v5.26l4.38 4.38c.39.39.39 1.02 0 1.41L19 17.93V20c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2v-2.07l-2.38-2.38c-.39-.39-.39-1.02 0-1.41L7 9.76V4.5z"/>
          </svg>
          <p className="font-['Inter:Regular',sans-serif] text-[13px]">
            @MemeX pinned
          </p>
        </div>
      </div>

      {/* Pinned Tweet */}
      <div className="border-b border-[#2f2f2f] p-[16px]">
        <div className="flex gap-[12px]">
          {/* Profile Picture */}
          <div className="size-[40px] rounded-full overflow-hidden shrink-0 bg-white flex items-center justify-center">
            <img alt="MemeX" className="size-[30px]" src={imgMemeIcon} />
          </div>

          <div className="flex-1 min-w-0">
            {/* Header */}
            <div className="flex items-center justify-between mb-[4px]">
              <div className="flex items-center gap-[4px]">
                <p className="font-['Inter:Bold',sans-serif] font-bold text-white text-[15px]">
                  MemeX
                </p>
                <svg className="size-[18px]" viewBox="0 0 22 22" fill="none">
                  <circle cx="11" cy="11" r="11" fill="#1D9BF0"/>
                  <path d="M9.5 15.5L5.5 11.5L6.91 10.09L9.5 12.67L15.09 7.08L16.5 8.5L9.5 15.5Z" fill="white"/>
                </svg>
                <span className="text-[#71767b] text-[15px] font-['Inter:Regular',sans-serif]">
                  · Nov 17
                </span>
              </div>
              
              <button className="text-[#71767b] hover:text-white">
                <MoreHorizontal className="size-[20px]" />
              </button>
            </div>

            {/* Username */}
            <p className="text-[#71767b] text-[15px] mb-[8px] font-['Inter:Regular',sans-serif]">
              @MemeX #official
            </p>

            {/* Content */}
            <div className="text-white">
              <p className="font-['Inter:Regular',sans-serif] text-[15px] leading-[20px] mb-[4px]">
                🔥Introducing MemeX Creator Rewards Program
              </p>
              
              {showMore ? (
                <>
                  <p className="font-['Inter:Regular',sans-serif] text-[15px] leading-[20px] mt-[12px]">
                    MemeX is proud to introduce MemeX Creator Rewards Program, a revolutionary shift for our creators! Now it's time for meme creators and traders to
                  </p>
                  <button
                    onClick={() => setShowMore(false)}
                    className="text-[#4A9EFF] text-[15px] mt-[4px] font-['Inter:Regular',sans-serif]"
                  >
                    Show less
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setShowMore(true)}
                  className="text-[#4A9EFF] text-[15px] mt-[4px] font-['Inter:Regular',sans-serif]"
                >
                  Show more
                </button>
              )}

              {/* Image Card */}
              <div className="mt-[12px] rounded-[16px] overflow-hidden border border-[#2f2f2f]">
                <ImageWithFallback
                  alt="MemeX Creator Rewards"
                  className="w-full h-[200px] object-cover"
                  src="https://images.unsplash.com/photo-1552057426-c9b4e8b2aef1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW1lY29pbiUyMGNyeXB0b2N1cnJlbmN5JTIwcmV3YXJkc3xlbnwxfHx8fDE3NjQ1NjY1MDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                />
                <div className="bg-[#16181c] p-[12px]">
                  <p className="text-[#71767b] text-[13px] font-['Inter:Regular',sans-serif]">
                    memex.com
                  </p>
                  <p className="text-white text-[15px] font-['Inter:Semi_Bold',sans-serif] mt-[2px]">
                    MemeX Creator Rewards Program
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-around mt-[12px] text-[#71767b]">
              <button className="flex items-center gap-[8px] hover:text-[#4A9EFF] transition-colors">
                <svg className="size-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="text-[13px]">42</span>
              </button>

              <button className="flex items-center gap-[8px] hover:text-[#00ba7c] transition-colors">
                <svg className="size-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span className="text-[13px]">128</span>
              </button>

              <button className="flex items-center gap-[8px] hover:text-[#f91880] transition-colors">
                <svg className="size-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="text-[13px]">1.2K</span>
              </button>

              <button className="flex items-center gap-[8px] hover:text-[#4A9EFF] transition-colors">
                <svg className="size-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CommunityScreen({ isMemeXConnected, onConnectMemeX }: CommunityScreenProps) {
  if (!isMemeXConnected) {
    return <CommunityOnboarding onConnect={onConnectMemeX} />;
  }

  return <CommunityFeed />;
}