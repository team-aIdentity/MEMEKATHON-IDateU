"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shield, CheckCircle } from "lucide-react";

interface ProfileSetupProps {
  onComplete: (profile: {
    name: string;
    gender: string;
    birthYear: number;
    country: string;
  }) => void;
}

export default function ProfileSetup({ onComplete }: ProfileSetupProps) {
  const [step, setStep] = useState<"info" | "kyc">("info");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [country, setCountry] = useState("");

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("kyc");
  };

  const handleKycSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete({
      name,
      gender,
      birthYear: parseInt(birthYear),
      country,
    });
  };

  const currentYear = new Date().getFullYear();
  const isAdult = birthYear ? currentYear - parseInt(birthYear) >= 19 : false;

  if (step === "info") {
    return (
      <div className="bg-gradient-to-b from-[#2982c5] to-[#1e6ba8] min-h-screen flex items-center justify-center p-6">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Create Your Profile</CardTitle>
            <CardDescription>
              Let's get started with some basic information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleInfoSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="birthYear">Birth Year</Label>
                <Input
                  id="birthYear"
                  type="number"
                  value={birthYear}
                  onChange={(e) => setBirthYear(e.target.value)}
                  placeholder="YYYY"
                  min="1900"
                  max={currentYear}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={!name || !birthYear}
              >
                Continue to KYC Verification
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-[#2982c5] to-[#1e6ba8] min-h-screen flex items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Shield className="size-6 text-[#2982c5]" />
            <CardTitle>DID Verification</CardTitle>
          </div>
          <CardDescription>
            Verify your identity for a scam-free experience. Only minimal data
            is stored on-chain.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleKycSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Select value={gender} onValueChange={setGender} required>
                <SelectTrigger id="gender">
                  <SelectValue placeholder="Select your gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Select value={country} onValueChange={setCountry} required>
                <SelectTrigger id="country">
                  <SelectValue placeholder="Select your country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="KR">South Korea</SelectItem>
                  <SelectItem value="US">United States</SelectItem>
                  <SelectItem value="JP">Japan</SelectItem>
                  <SelectItem value="CN">China</SelectItem>
                  <SelectItem value="UK">United Kingdom</SelectItem>
                  <SelectItem value="SG">Singapore</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-2">
              <div className="flex items-center gap-2">
                {isAdult ? (
                  <>
                    <CheckCircle className="size-5 text-green-600" />
                    <p className="text-green-700">Age verification: 19+ ✓</p>
                  </>
                ) : (
                  <p className="text-red-600">
                    You must be 19 or older to use this service
                  </p>
                )}
              </div>
              <p className="text-blue-800">
                Only your gender, age verification (19+), and country commit
                hash will be stored on-chain.
              </p>
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={!gender || !country || !isAdult}
            >
              Complete Verification
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
