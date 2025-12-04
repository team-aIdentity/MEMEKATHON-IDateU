"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, Lock as LockIcon, Star as LucideStarIcon } from "lucide-react";
import { toast } from "sonner";
import { useWallet } from "@/lib/hooks";
import { getTokenBalance } from "@/lib/utils/wallet";
import svgPaths from "@/lib/imports/svg-7r31iljoey";
const imgGroup19821 = "/assets/memecore.png";
const imgItem1 = "/assets/Item Icon.png";
const imgItem2 = "/assets/Back Button.png";
const imgItem3 = "/assets/Item Icon 3.png";
const imgItem4 = "/assets/Item Icon 4.png";

interface ItemStoreProps {
  walletConnected: boolean;
  onConnectWallet: () => void;
  onPurchase: (itemId: string, price: number) => void;
  userItems: {
    unlimitedLikes: boolean;
    rewind: boolean;
    superLike: boolean;
    hideOnChain: boolean;
  };
  memeXConnected?: boolean;
}

interface CoinBalanceIconProps {
  balance?: string | null;
}

function CoinBalanceIcon({ balance }: CoinBalanceIconProps) {
  // 잔액 포맷팅 (소수점 2자리까지)
  const formatBalance = (bal: string | null | undefined): string => {
    if (!bal) return "0";
    const num = parseFloat(bal);
    if (isNaN(num)) return "0";
    // 소수점이 있으면 2자리까지, 없으면 정수로 표시
    return num % 1 === 0 ? num.toString() : num.toFixed(2);
  };

  return (
    <div
      className="bg-[#55b7fd] box-border content-stretch flex gap-[6px] items-center px-[12px] py-[6px] relative rounded-[16px] shrink-0"
      data-name="Coin Balance"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#eaf6ff] border-solid inset-0 pointer-events-none rounded-[16px]"
      />
      <div className="relative shrink-0 size-[20px]" data-name="Group 1982 1">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgGroup19821}
        />
      </div>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.8px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">
        {formatBalance(balance)}
      </p>
    </div>
  );
}

function Crown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Crown">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Crown">
          <path d="M24 24H0V0H24V24Z" stroke="transparent" />
          <path
            d={svgPaths.p166a700}
            id="Vector"
            stroke="#FFD700"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M5 21H19"
            id="Vector_2"
            stroke="#FFD700"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function StarIcon() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Star">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g id="Star">
          <path d="M40 40H0V0H40V40Z" stroke="transparent" />
          <path
            d={svgPaths.p171cc500}
            id="Vector"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.33333"
          />
        </g>
      </svg>
    </div>
  );
}

function RotateCcwIcon() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Rotate Ccw">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g id="Rotate Ccw">
          <path d="M40 40H0V0H40V40Z" stroke="transparent" />
          <path
            d={svgPaths.pcafbb00}
            id="Vector"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.33333"
          />
          <path
            d="M5 5V13.3333H13.3333"
            id="Vector_2"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.33333"
          />
        </g>
      </svg>
    </div>
  );
}

function ZapIcon() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Zap">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g id="Zap">
          <path d="M40 40H0V0H40V40Z" stroke="transparent" />
          <path
            d={svgPaths.p3fa7440}
            id="Vector"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.33333"
          />
        </g>
      </svg>
    </div>
  );
}

function GiftIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Gift">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Gift">
          <path d="M20 20H0V0H20V20Z" stroke="transparent" />
          <path
            d={svgPaths.pc4ad940}
            id="Vector"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d="M10 6.66667V17.5"
            id="Vector_2"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d={svgPaths.p24a96bc0}
            id="Vector_3"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d={svgPaths.pf0c73c0}
            id="Vector_4"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
        </g>
      </svg>
    </div>
  );
}

export default function ItemStore({
  walletConnected,
  onConnectWallet,
  onPurchase,
  userItems,
  memeXConnected = false,
}: ItemStoreProps) {
  const { address, isConnected } = useWallet();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{
    id: string;
    name: string;
  } | null>(null);
  const [tokenBalance, setTokenBalance] = useState<string | null>(null);
  const [isLoadingBalance, setIsLoadingBalance] = useState(false);

  // 토큰 컨트랙트 주소 (환경변수에서 가져오기, 추후 제공 예정)
  const tokenContractAddress =
    process.env.NEXT_PUBLIC_TOKEN_CONTRACT_ADDRESS || "";

  // MemeX 연동 및 지갑 연결 시 토큰 잔액 조회
  useEffect(() => {
    const fetchTokenBalance = async () => {
      // MemeX 연동되어 있고, 지갑이 연결되어 있으며, 토큰 컨트랙트 주소가 있을 때만 조회
      if (
        memeXConnected &&
        walletConnected &&
        isConnected &&
        address &&
        tokenContractAddress
      ) {
        setIsLoadingBalance(true);
        try {
          const balance = await getTokenBalance(tokenContractAddress, address);
          setTokenBalance(balance);
        } catch (error) {
          console.error("토큰 잔액 조회 실패:", error);
          setTokenBalance(null);
        } finally {
          setIsLoadingBalance(false);
        }
      } else {
        setTokenBalance(null);
      }
    };

    fetchTokenBalance();
  }, [
    memeXConnected,
    walletConnected,
    isConnected,
    address,
    tokenContractAddress,
  ]);

  // 구매하기 버튼 클릭 시 결제 방식 선택 모달 표시
  const handlePurchaseClick = (itemId: string, itemName: string) => {
    setSelectedItem({ id: itemId, name: itemName });
    setShowPaymentModal(true);
  };

  // 원화 결제 (인앱 결제)
  const handleKRWPayment = async () => {
    if (!selectedItem) return;

    try {
      toast.loading("원화 결제 처리 중...", { id: "payment" });

      // TODO: 실제 인앱 결제 API 연동
      // 현재는 모의 구현
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // 결제 성공 시 아이템 활성화
      toast.success(`${selectedItem.name} 구매 완료! 🎉`, { id: "payment" });

      // 부모 컴포넌트에 구매 완료 알림
      onPurchase(selectedItem.id, 0);

      setShowPaymentModal(false);
      setSelectedItem(null);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "결제에 실패했습니다.",
        { id: "payment" }
      );
    }
  };

  // 토큰 결제 (MemeX Wallet)
  const handleTokenPayment = async () => {
    if (!selectedItem) return;

    // MemeX 연동 확인
    if (!memeXConnected) {
      toast.error("MemeX 연동이 필요합니다. 프로필에서 MemeX를 연결해주세요.", {
        description:
          "프로필 설정에서 MemeX를 연동한 후 토큰 결제를 이용할 수 있습니다.",
        duration: 4000,
      });
      setShowPaymentModal(false);
      return;
    }

    // 지갑 연결 확인
    if (!walletConnected) {
      toast.error("먼저 MemeX Wallet을 연결해주세요!");
      onConnectWallet();
      setShowPaymentModal(false);
      return;
    }

    try {
      toast.loading("토큰 결제 처리 중...", { id: "payment" });

      // TODO: 실제 토큰 결제 로직 구현
      // 현재는 모의 구현
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success(`${selectedItem.name} 구매 완료! 🎉`, { id: "payment" });

      // 부모 컴포넌트에 구매 완료 알림
      onPurchase(selectedItem.id, 0);

      setShowPaymentModal(false);
      setSelectedItem(null);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "구매 중 오류가 발생했습니다.",
        { id: "payment" }
      );
    }
  };

  const handlePremiumSubscribe = () => {
    if (!walletConnected) {
      toast.error("먼저 MemeX Wallet을 연결해주세요!");
      onConnectWallet();
      return;
    }

    toast.success("프리미엄 구독이 시작되었습니다! 🎉");
  };

  const handleClaimOffer = () => {
    toast.success("특별 혜택이 적용되었습니다! 🎁");
  };

  return (
    <div
      className="bg-[#f8f9fa] content-stretch flex flex-col items-start relative size-full"
      data-name="Dating Item Shop"
    >
      {/* Header */}
      <div
        className="bg-white box-border content-stretch flex flex-col h-[80px] items-center px-[20px] py-[16px] relative shrink-0 w-full"
        data-name="Header"
      >
        <div
          aria-hidden="true"
          className="absolute border-[#e9ecef] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
        />
        <div
          className="content-stretch flex items-center justify-between relative shrink-0 w-full"
          data-name="Header Content"
        >
          <button
            className="relative shrink-0 size-[24px]"
            data-name="Chevron Left"
          >
            <ChevronLeft className="size-6 text-[#6C757D]" />
          </button>
          <p className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[21.6px] not-italic relative shrink-0 text-[#212529] text-[18px] text-nowrap whitespace-pre">
            아이템 상점
          </p>
          {memeXConnected && walletConnected ? (
            <CoinBalanceIcon
              balance={isLoadingBalance ? "..." : tokenBalance}
            />
          ) : (
            <CoinBalanceIcon balance={null} />
          )}
        </div>
      </div>

      {/* Premium Banner */}
      <div
        className="box-border content-stretch flex flex-col h-[120px] items-center justify-center p-[20px] relative shrink-0 w-full"
        data-name="Premium Banner"
        style={{
          background: "linear-gradient(135deg, #6B21A8 0%, #9333EA 100%)",
        }}
      >
        <div
          className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full"
          data-name="Premium Content"
        >
          <div
            className="content-stretch flex gap-[8px] items-center relative shrink-0"
            data-name="Premium Title"
          >
            <Crown />
            <p className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">
              프리미엄 구독
            </p>
          </div>
          <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16.8px] not-italic opacity-90 relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">
            무제한 좋아요, 슈퍼 좋아요, 되돌리기!
          </p>
          <button
            onClick={handlePremiumSubscribe}
            className="bg-[gold] content-stretch flex h-[36px] items-center justify-center relative rounded-[18px] shrink-0 w-[140px] hover:opacity-90 transition-opacity"
            data-name="Premium Button"
          >
            <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[16.8px] not-italic relative shrink-0 text-[#2a88c8] text-[14px] text-nowrap whitespace-pre">
              구독하기
            </p>
          </button>
        </div>
      </div>

      {/* Items Section */}
      <div
        className="bg-white box-border content-stretch flex flex-col gap-[20px] items-start p-[20px] relative shrink-0 w-full"
        data-name="Items Section"
      >
        {/* Section Title */}
        <div
          className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full"
          data-name="Section Title"
        >
          <p className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[21.6px] relative shrink-0 text-[#212529] text-[18px] w-full">
            아이템 구매
          </p>
          <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16.8px] relative shrink-0 text-[#6c757d] text-[14px] w-full">
            더 많은 매칭 기회를 얻어보세요!
          </p>
        </div>

        {/* Items Grid */}
        <div
          className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
          data-name="Items Grid"
        >
          {/* Row 1 */}
          <div
            className="content-stretch flex items-start justify-center gap-[20px] relative shrink-0 w-full"
            data-name="Row 1"
          >
            {/* Super Like Item */}
            <button
              onClick={() => handlePurchaseClick("super_like", "슈퍼 좋아요")}
              className="bg-white box-border content-stretch flex flex-col h-[216px] items-center p-[19px] relative rounded-[12px] shrink-0 w-[180px] hover:shadow-lg transition-shadow"
              data-name="Super Like Item"
            >
              <div
                aria-hidden="true"
                className="absolute border border-[#e9ecef] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.02)]"
              />
              <div
                className="bg-[#eaf6ff] content-stretch flex flex-col items-center justify-center relative rounded-[40px] shrink-0 size-[72px]"
                data-name="Item Icon"
              >
                <img src={imgItem1} alt="Super Like" className="w-full h-full object-contain p-2" />
              </div>
              <div
                className="box-border content-stretch flex flex-col gap-[8px] items-center px-0 py-[5px] relative shrink-0 w-full"
                data-name="Item Info"
              >
                <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[19.2px] not-italic relative shrink-0 text-[#212529] text-[15px] text-center w-full">
                  슈퍼 좋아요
                </p>
                <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16.8px] not-italic relative shrink-0 text-[#6c757d] text-[14px] text-center w-full">
                  5개
                </p>
                <div
                  className="bg-[#55b7fd] relative rounded-[16px] shrink-0 w-full"
                  data-name="Price"
                >
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="box-border content-stretch flex items-center justify-center px-[12px] py-[6px] relative w-full">
                      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[14.4px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">
                        구매하기
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </button>

            {/* Rewind Item */}
            <button
              onClick={() => handlePurchaseClick("rewind", "되돌리기")}
              className="bg-white box-border content-stretch flex flex-col h-[216px] items-center p-[19px] relative rounded-[12px] shrink-0 w-[180px] hover:shadow-lg transition-shadow"
              data-name="Rewind Item"
            >
              <div
                aria-hidden="true"
                className="absolute border border-[#e9ecef] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.02)]"
              />
              <div
                className="bg-[#fff3e0] box-border content-stretch flex flex-col items-center justify-center px-0 py-[5px] relative rounded-[40px] shrink-0 size-[72px] overflow-visible"
                data-name="Item Icon 2"
              >
                <img src={imgItem2} alt="Rewind" className="w-[150%] h-[150%] object-contain" />
              </div>
              <div
                className="box-border content-stretch flex flex-col gap-[8px] items-center px-0 py-[5px] relative shrink-0 w-full"
                data-name="Item Info 2"
              >
                <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[19.2px] not-italic relative shrink-0 text-[#212529] text-[15px] text-center w-full">
                  되돌리기
                </p>
                <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16.8px] not-italic relative shrink-0 text-[#6c757d] text-[14px] text-center w-full">
                  3개
                </p>
                <div
                  className="bg-[#55b7fd] relative rounded-[16px] shrink-0 w-full"
                  data-name="Price 2"
                >
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="box-border content-stretch flex items-center justify-center px-[12px] py-[6px] relative w-full">
                      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[14.4px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">
                        구매하기
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>

          {/* Row 2 */}
          <div
            className="content-stretch flex items-start justify-center gap-[20px] relative shrink-0 w-full"
            data-name="Row 2"
          >
            {/* Boost Item */}
            <button
              onClick={() => handlePurchaseClick("boost", "부스트")}
              className="bg-white box-border content-stretch flex flex-col h-[216px] items-center p-[19px] relative rounded-[12px] shrink-0 w-[180px] hover:shadow-lg transition-shadow"
              data-name="Boost Item"
            >
              <div
                aria-hidden="true"
                className="absolute border border-[#e9ecef] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.02)]"
              />
              <div
                className="bg-[#e91e63] box-border content-stretch flex flex-col items-center justify-center px-0 py-[5px] relative rounded-[40px] shrink-0 size-[72px]"
                data-name="Item Icon 3"
              >
                <ZapIcon />
              </div>
              <div
                className="box-border content-stretch flex flex-col gap-[8px] items-center px-0 py-[5px] relative shrink-0 w-full"
                data-name="Item Info 3"
              >
                <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[19.2px] not-italic relative shrink-0 text-[#212529] text-[16px] text-center w-full">
                  부스트
                </p>
                <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16.8px] not-italic relative shrink-0 text-[#6c757d] text-[14px] text-center w-full">
                  30분간
                </p>
                <div
                  className="bg-[#55b7fd] relative rounded-[16px] shrink-0 w-full"
                  data-name="Price 3"
                >
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="box-border content-stretch flex items-center justify-center px-[12px] py-[6px] relative w-full">
                      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[14.4px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">
                        구매하기
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </button>

            {/* Ad Removal Item */}
            <button
              onClick={() => handlePurchaseClick("ad_removal", "광고 제거")}
              className="bg-white box-border content-stretch flex flex-col h-[216px] items-center p-[19px] relative rounded-[12px] shrink-0 w-[180px] hover:shadow-lg transition-shadow"
              data-name="Coin Package"
            >
              <div
                aria-hidden="true"
                className="absolute border border-[#e9ecef] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.02)]"
              />
              <div
                className="bg-[#ffd700] box-border content-stretch flex flex-col items-center justify-center px-0 py-[5px] relative rounded-[40px] shrink-0 size-[72px]"
                data-name="Item Icon 4"
              >
                <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16.8px] not-italic relative shrink-0 text-[24px] text-center text-nowrap text-white whitespace-pre">
                  AD
                </p>
              </div>
              <div
                className="box-border content-stretch flex flex-col gap-[8px] items-center px-0 py-[5px] relative shrink-0 w-full"
                data-name="Item Info 4"
              >
                <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[19.2px] not-italic relative shrink-0 text-[#212529] text-[16px] text-center w-full">
                  광고 제거
                </p>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16.8px] not-italic relative shrink-0 text-[#6c757d] text-[14px] text-center w-full">
                  1 Month
                </p>
                <div
                  className="bg-[#55b7fd] relative rounded-[16px] shrink-0 w-full"
                  data-name="Price 4"
                >
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="box-border content-stretch flex items-center justify-center px-[12px] py-[6px] relative w-full">
                      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[14.4px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">
                        구매하기
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Special Offers */}
        <div
          className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full"
          data-name="Special Offers"
        >
          <button
            onClick={handleClaimOffer}
            className="h-[80px] relative rounded-[12px] shrink-0 w-full hover:opacity-90 transition-opacity"
            data-name="Special Banner"
            style={{
              background: "linear-gradient(135deg, #FF6B9D 0%, #55B7FD 100%)",
            }}
          >
            <div className="flex flex-row items-center size-full">
              <div className="box-border content-stretch flex h-[80px] items-center p-[20px] relative w-full">
                <div
                  className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0"
                  data-name="Offer Content"
                >
                  <div
                    className="content-stretch flex gap-[8px] items-center relative shrink-0"
                    data-name="Offer Title"
                  >
                    <GiftIcon />
                    <p className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[19.2px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">
                      특별 혜택!
                    </p>
                  </div>
                  <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[16.8px] not-italic opacity-90 relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">
                    첫 구매 시 20% 할인!
                  </p>
                </div>
                <div
                  className="bg-white content-stretch flex h-[32px] items-center justify-center relative rounded-[16px] shrink-0 w-[80px]"
                  data-name="Claim Button"
                >
                  <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[14.4px] not-italic relative shrink-0 text-[#ff6b9d] text-[12px] text-nowrap whitespace-pre">
                    받기
                  </p>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* 결제 방식 선택 모달 */}
      {showPaymentModal && selectedItem && (
        <div className="absolute bg-[rgba(0,0,0,0.75)] h-full left-0 overflow-clip top-0 w-full z-50">
          <div className="absolute h-[320px] left-0 top-[399px] w-full">
            <div className="absolute bg-white h-[320px] left-1/2 top-0 translate-x-[-50%] w-full" />

            {/* 안내 텍스트 */}
            <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[16.8px] left-[calc(50%-0.5px)] not-italic text-[#535353] text-[16px] text-center text-nowrap top-[25px] translate-x-[-50%] whitespace-pre">
              매칭 시 IDATE 토큰을 소모합니다.
            </p>

            {/* 토큰 결제 버튼 */}
            <button
              onClick={handleTokenPayment}
              className="absolute bg-[#1976d2] h-[54px] left-1/2 rounded-[10px] shadow-[0px_0px_3px_0px_rgba(0,0,0,0.08),0px_2px_3px_0px_rgba(0,0,0,0.17)] top-[93px] translate-x-[-50%] w-[286px] hover:bg-[#1565c0] transition-colors"
            >
              <div className="absolute bg-[#1976d2] box-border content-stretch flex gap-[15px] items-start left-1/2 p-[15px] rounded-[10px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">
                  90 TOKEN 결제
                </p>
              </div>
            </button>

            {/* 원화 결제 버튼 */}
            <button
              onClick={handleKRWPayment}
              className="absolute bg-[#e91e63] h-[54px] left-1/2 rounded-[10px] shadow-[0px_0px_3px_0px_rgba(0,0,0,0.08),0px_2px_3px_0px_rgba(0,0,0,0.17)] top-[167px] translate-x-[-50%] w-[286px] hover:bg-[#c2185b] transition-colors"
            >
              <div className="absolute bg-[#e91e63] box-border content-stretch flex gap-[15px] items-start left-1/2 p-[15px] rounded-[10px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">
                  9,900 KRW 결제
                </p>
              </div>
            </button>

            {/* 취소하기 버튼 */}
            <button
              onClick={() => {
                setShowPaymentModal(false);
                setSelectedItem(null);
              }}
              className="absolute bg-white h-[54px] left-1/2 rounded-[10px] shadow-[0px_0px_3px_0px_rgba(0,0,0,0.08),0px_2px_3px_0px_rgba(0,0,0,0.17)] top-[241px] translate-x-[-50%] w-[286px] hover:bg-gray-50 transition-colors flex items-center justify-center"
            >
              <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] text-[20px] text-[rgba(0,0,0,0.54)] text-nowrap whitespace-pre">
                취소하기
              </p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
