'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Upload, Camera } from "lucide-react";
import { toast } from "sonner";

interface KYCResult {
  gender: string;
  isAdult19: boolean;
  country: string;
}

interface KYCSetupProps {
  onComplete: (vcData: KYCResult) => void;
}

export default function KYCSetup({ onComplete }: KYCSetupProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    gender: '',
    birthYear: '',
    country: '',
    over19: false,
    idDocument: null as File | null,
    faceVerified: false,
  });

  const handleNext = () => {
    if (step === 1 && !formData.gender) {
      toast.error('성별을 선택해주세요');
      return;
    }
    if (step === 2 && !formData.birthYear) {
      toast.error('생년월일을 입력해주세요');
      return;
    }
    if (step === 3 && !formData.country) {
      toast.error('거주 국가를 선택해주세요');
      return;
    }
    if (step === 4 && !formData.idDocument) {
      toast.error('신분증을 업로드해주세요');
      return;
    }
    if (step === 5 && !formData.faceVerified) {
      toast.error('얼굴 인증을 완료해주세요');
      return;
    }
    
    if (step < 5) {
      setStep(step + 1);
    } else {
      // Check if user is over 19
      const currentYear = new Date().getFullYear();
      const age = currentYear - parseInt(formData.birthYear, 10);
      
      if (Number.isNaN(age)) {
        toast.error('올바른 출생 연도를 입력해주세요');
        return;
      }

      if (age < 19) {
        toast.error('만 19세 이상만 이용 가능합니다');
        return;
      }
      
      const vcData: KYCResult = {
        gender: formData.gender === '남성' ? 'M' : 'F',
        isAdult19: true,
        country: formData.country === '대한민국' ? 'KR' : formData.country === '미국' ? 'US' : formData.country === '일본' ? 'JP' : formData.country === '중국' ? 'CN' : 'KR',
      };
      
      // Save initial profile data from KYC
      if (typeof window !== 'undefined') {
        localStorage.setItem('user_birth_year', formData.birthYear);
        localStorage.setItem('user_gender', vcData.gender === 'M' ? 'male' : 'female');
        localStorage.setItem('user_country', vcData.country);
      }

      setFormData({ ...formData, over19: true });
      toast.success('KYC 인증이 완료되었습니다! 🎉');
      setTimeout(() => {
        onComplete(vcData);
      }, 1000);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleIdUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // TODO: API Integration - Upload ID document to verification service
      // Example: await uploadIdDocument(file);
      
      setFormData({ ...formData, idDocument: file });
      toast.success('신분증이 업로드되었습니다');
    }
  };

  const handleFaceVerification = () => {
    // TODO: API Integration - Start face verification process
    // Example: 
    // const result = await startFaceVerification();
    // if (result.success) {
    //   setFormData({ ...formData, faceVerified: true });
    //   toast.success('얼굴 인증이 완료되었습니다');
    // }
    
    // Temporary simulation
    setTimeout(() => {
      setFormData({ ...formData, faceVerified: true });
      toast.success('얼굴 인증이 완료되었습니다');
    }, 1500);
  };

  return (
    <div className="bg-[#f8f9fa] content-stretch flex flex-col items-start relative size-full">
      {/* Header */}
      <div className="bg-white box-border content-stretch flex flex-col h-[60px] items-center px-[20px] py-[16px] relative shrink-0 w-full border-b border-[#e9ecef]">
        {step > 1 && (
          <button onClick={handleBack} className="absolute left-[20px] size-[24px] top-[16px]">
            <ChevronLeft className="size-6 text-[#6C757D]" />
          </button>
        )}
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] text-[#212529] text-[20px]">
          KYC 인증
        </p>
      </div>

      {/* Progress Indicator */}
      <div className="w-full bg-white px-[20px] py-[16px] border-b border-[#e9ecef]">
        <div className="flex items-center justify-center gap-2">
          {[1, 2, 3, 4, 5].map((num) => (
            <div
              key={num}
              className={`h-2 flex-1 rounded-full transition-all ${
                num <= step ? 'bg-[#1976D2]' : 'bg-[#e9ecef]'
              }`}
            />
          ))}
        </div>
        <p className="text-center text-[#6c757d] text-[14px] mt-3">
          Step {step} of 5
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-[20px] w-full">
        <div className="w-full max-w-[400px] space-y-6">
          {step === 1 && (
            <div className="space-y-4">
              <div className="text-center space-y-2 mb-8">
                <h2 className="font-['Inter:Bold',sans-serif] text-[24px] text-[#212529]">
                  성별을 선택해주세요
                </h2>
                <p className="text-[#6c757d] text-[14px]">
                  DID 기반 신원 인증을 위해 필요합니다
                </p>
              </div>
              
              <button
                onClick={() => setFormData({ ...formData, gender: '남성' })}
                className={`w-full h-[60px] rounded-[12px] border-2 transition-all ${
                  formData.gender === '남성'
                    ? 'border-[#1976D2] bg-[#E3F2FD]'
                    : 'border-[#e9ecef] bg-white'
                }`}
              >
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] text-[#212529]">
                  남성
                </p>
              </button>

              <button
                onClick={() => setFormData({ ...formData, gender: '여성' })}
                className={`w-full h-[60px] rounded-[12px] border-2 transition-all ${
                  formData.gender === '여성'
                    ? 'border-[#1976D2] bg-[#E3F2FD]'
                    : 'border-[#e9ecef] bg-white'
                }`}
              >
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] text-[#212529]">
                  여성
                </p>
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="text-center space-y-2 mb-8">
                <h2 className="font-['Inter:Bold',sans-serif] text-[24px] text-[#212529]">
                  생년월일을 입력해주세요
                </h2>
                <p className="text-[#6c757d] text-[14px]">
                  만 19세 이상만 이용 가능합니다
                </p>
              </div>
              
              <div className="space-y-2">
                <label className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#212529]">
                  출생 연도
                </label>
                <input
                  type="number"
                  placeholder="예: 2004"
                  value={formData.birthYear}
                  onChange={(e) => setFormData({ ...formData, birthYear: e.target.value })}
                  className="w-full h-[56px] px-[16px] rounded-[12px] border-2 border-[#e9ecef] bg-white text-[16px] focus:border-[#1976D2] focus:outline-none transition-colors"
                  min="1900"
                  max={new Date().getFullYear()}
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="text-center space-y-2 mb-8">
                <h2 className="font-['Inter:Bold',sans-serif] text-[24px] text-[#212529]">
                  거주 국가를 선택해주세요
                </h2>
                <p className="text-[#6c757d] text-[14px]">
                  국가별 서비스 제공을 위해 필요합니다
                </p>
              </div>
              
              <div className="space-y-3">
                {['대한민국', '미국', '일본', '중국', '기타'].map((country) => (
                  <button
                    key={country}
                    onClick={() => setFormData({ ...formData, country })}
                    className={`w-full h-[56px] rounded-[12px] border-2 transition-all ${
                      formData.country === country
                        ? 'border-[#1976D2] bg-[#E3F2FD]'
                        : 'border-[#e9ecef] bg-white'
                    }`}
                  >
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#212529]">
                      {country}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <div className="text-center space-y-2 mb-8">
                <h2 className="font-['Inter:Bold',sans-serif] text-[24px] text-[#212529]">
                  신분증을 업로드해주세요
                </h2>
                <p className="text-[#6c757d] text-[14px]">
                  신원 인증을 위해 필요합니다
                </p>
              </div>
              
              <div className="space-y-4">
                <label className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#212529]">
                  신분증 사진 업로드
                </label>
                
                {!formData.idDocument ? (
                  <label className="w-full h-[200px] rounded-[12px] border-2 border-dashed border-[#e9ecef] bg-white flex flex-col items-center justify-center cursor-pointer hover:border-[#1976D2] transition-all">
                    <Upload className="size-[48px] text-[#6c757d] mb-2" />
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#212529]">
                      파일 선택
                    </p>
                    <p className="text-[#6c757d] text-[12px] mt-1">
                      이미지 파일을 업로드하세요
                    </p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleIdUpload}
                      className="hidden"
                    />
                  </label>
                ) : (
                  <div className="w-full h-[200px] rounded-[12px] border-2 border-[#1976D2] bg-[#E3F2FD] flex flex-col items-center justify-center">
                    <div className="size-[64px] rounded-full bg-[#1976D2] flex items-center justify-center mb-3">
                      <svg className="size-[32px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#212529]">
                      업로드 완료
                    </p>
                    <p className="text-[#6c757d] text-[12px] mt-1">
                      {formData.idDocument.name}
                    </p>
                    <button
                      onClick={() => setFormData({ ...formData, idDocument: null })}
                      className="mt-3 text-[#1976D2] text-[14px] underline"
                    >
                      다시 업로드
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-4">
              <div className="text-center space-y-2 mb-8">
                <h2 className="font-['Inter:Bold',sans-serif] text-[24px] text-[#212529]">
                  얼굴 인증을 완료해주세요
                </h2>
                <p className="text-[#6c757d] text-[14px]">
                  신원 인증을 위해 필요합니다
                </p>
              </div>
              
              <div className="space-y-2">
                <label className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#212529]">
                  얼굴 인증
                </label>
                <button
                  onClick={handleFaceVerification}
                  className={`w-full h-[56px] rounded-[12px] border-2 transition-all ${
                    formData.faceVerified
                      ? 'border-[#1976D2] bg-[#E3F2FD]'
                      : 'border-[#e9ecef] bg-white'
                  }`}
                >
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#212529]">
                    {formData.faceVerified ? '인증 완료' : '인증 시작'}
                  </p>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Button */}
      <div className="w-full px-[20px] pb-[30px]">
        <Button
          onClick={handleNext}
          className="w-full h-[56px] bg-[#1976D2] hover:bg-[#1565C0] rounded-[12px] shadow-[0px_2px_8px_0px_rgba(25,118,210,0.19)]"
        >
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] text-white">
            {step === 5 ? '인증 완료' : '다음'}
          </p>
        </Button>
      </div>
    </div>
  );
}