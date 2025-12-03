"use client";
import { useState } from "react";
import {
  TrendingUp,
  Trophy,
  Sparkles,
  Wallet,
  Users,
  MessageSquare,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

interface CommunityProps {
  walletConnected: boolean;
  onConnectWallet: () => void;
}

interface MemePost {
  id: string;
  author: string;
  content: string;
  image: string;
  likes: number;
  comments: number;
  timestamp: string;
}

interface Contest {
  id: string;
  title: string;
  prize: string;
  endDate: string;
  participants: number;
}

const SAMPLE_POSTS: MemePost[] = [
  {
    id: "1",
    author: "MemeLord",
    content: "When your DID verification finally goes through 😂",
    image: "meme success",
    likes: 234,
    comments: 45,
    timestamp: "2h ago",
  },
  {
    id: "2",
    author: "CryptoQueen",
    content: "First date funded with MemeCore tokens? Goals! 💎",
    image: "cryptocurrency couple",
    likes: 189,
    comments: 32,
    timestamp: "5h ago",
  },
  {
    id: "3",
    author: "BlockchainBae",
    content: "Matched with someone who also loves Web3 🚀",
    image: "technology love",
    likes: 312,
    comments: 67,
    timestamp: "1d ago",
  },
];

const SAMPLE_CONTESTS: Contest[] = [
  {
    id: "1",
    title: "Best Dating Meme Contest",
    prize: "1000 MC",
    endDate: "Dec 15, 2024",
    participants: 156,
  },
  {
    id: "2",
    title: "Success Story Campaign",
    prize: "500 MC",
    endDate: "Dec 20, 2024",
    participants: 89,
  },
];

export default function Community({
  walletConnected,
  onConnectWallet,
}: CommunityProps) {
  const [memeXScore] = useState(750); // Mock score out of 1000

  if (!walletConnected) {
    return (
      <div className="flex flex-col h-full bg-gray-50">
        <div className="bg-gradient-to-r from-[#2982c5] to-[#1e6ba8] text-white p-6">
          <h1 className="mb-2">MemeX Community</h1>
          <p className="text-blue-100">Connect with the community</p>
        </div>

        <div className="flex-1 flex items-center justify-center p-6">
          <Card className="w-full max-w-md">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Wallet className="size-6 text-[#2982c5]" />
                <CardTitle>Connect Your Wallet</CardTitle>
              </div>
              <CardDescription>
                Access the MemeX community by connecting your MemeX wallet
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-700">
                  <Users className="size-5 text-[#2982c5]" />
                  <span>Join community discussions</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Trophy className="size-5 text-[#2982c5]" />
                  <span>Participate in contests</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <TrendingUp className="size-5 text-[#2982c5]" />
                  <span>Track your MemeX Score</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Sparkles className="size-5 text-[#2982c5]" />
                  <span>Access exclusive campaigns</span>
                </div>
              </div>
              <Button onClick={onConnectWallet} className="w-full bg-[#2982c5]">
                <Wallet className="size-5 mr-2" />
                Connect MemeX Wallet
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2982c5] to-[#1e6ba8] text-white p-6 space-y-4">
        <div>
          <h1 className="mb-2">MemeX Community</h1>
          <p className="text-blue-100">Engage, compete, and earn rewards</p>
        </div>

        {/* MemeX Score */}
        <Card className="bg-white/10 border-white/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Sparkles className="size-5 text-yellow-300" />
                <span className="text-white">MemeX Score</span>
              </div>
              <span className="text-white">{memeXScore}/1000</span>
            </div>
            <Progress value={memeXScore / 10} className="bg-white/20" />
            <p className="text-blue-100 mt-2">
              Earn points by participating in community activities
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="feed" className="flex-1 flex flex-col">
        <div className="bg-white border-b px-4">
          <TabsList className="w-full">
            <TabsTrigger value="feed" className="flex-1">
              Feed
            </TabsTrigger>
            <TabsTrigger value="contests" className="flex-1">
              Contests
            </TabsTrigger>
            <TabsTrigger value="trending" className="flex-1">
              Trending
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="feed" className="flex-1 mt-0">
          <ScrollArea className="h-full">
            <div className="p-4 space-y-4">
              {SAMPLE_POSTS.map((post) => (
                <Card key={post.id}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <ImageWithFallback
                        src={`https://source.unsplash.com/50x50/?avatar,person`}
                        alt={post.author}
                        className="size-10 rounded-full"
                      />
                      <div>
                        <CardTitle className="text-base">
                          {post.author}
                        </CardTitle>
                        <CardDescription>{post.timestamp}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p>{post.content}</p>
                    <ImageWithFallback
                      src={`https://source.unsplash.com/400x300/?${post.image}`}
                      alt="Post content"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <div className="flex items-center gap-4 pt-2">
                      <Button variant="ghost" size="sm">
                        <Heart className="size-4 mr-2" />
                        {post.likes}
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MessageSquare className="size-4 mr-2" />
                        {post.comments}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="contests" className="flex-1 mt-0">
          <ScrollArea className="h-full">
            <div className="p-4 space-y-4">
              {SAMPLE_CONTESTS.map((contest) => (
                <Card
                  key={contest.id}
                  className="border-orange-200 bg-orange-50"
                >
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Trophy className="size-5 text-orange-600" />
                      <CardTitle>{contest.title}</CardTitle>
                    </div>
                    <CardDescription>Ends {contest.endDate}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Prize Pool:</span>
                      <Badge
                        variant="secondary"
                        className="bg-orange-600 text-white"
                      >
                        {contest.prize}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Participants:</span>
                      <span>{contest.participants}</span>
                    </div>
                    <Button className="w-full bg-orange-600 hover:bg-orange-700">
                      Join Contest
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="trending" className="flex-1 mt-0">
          <ScrollArea className="h-full">
            <div className="p-4 space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="size-5 text-[#2982c5]" />
                    <CardTitle>Trending Topics</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  {[
                    "#DIDDating",
                    "#Web3Love",
                    "#MemeCoreTokens",
                    "#OnChainMatching",
                    "#SocialFi",
                  ].map((tag, index) => (
                    <div
                      key={tag}
                      className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                    >
                      <span className="text-[#2982c5]">{tag}</span>
                      <Badge variant="outline">
                        {Math.floor(Math.random() * 500) + 100}K posts
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
                <CardHeader>
                  <CardTitle>InfoFi Analytics</CardTitle>
                  <CardDescription>
                    Community insights powered by MemeX
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Active Users Today</span>
                      <span className="text-[#2982c5]">2,547</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Matches This Week</span>
                      <span className="text-[#2982c5]">1,234</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Tokens Circulated</span>
                      <span className="text-[#2982c5]">45.6K MC</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
}
