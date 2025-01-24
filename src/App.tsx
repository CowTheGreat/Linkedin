import React, { useState } from "react";
import {
  MessageSquare,
  ThumbsUp,
  Share2,
  Send,
  Search,
  Bell,
  Home,
  Users,
  Briefcase,
  MessageCircle,
  User,
} from "lucide-react";
import Profile from "./Profile";

interface Post {
  id: number;
  author: string;
  role: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  timestamp: string;
  avatar: string;
}

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: "Sarah Chen",
      role: "Senior Software Engineer at Tech Co",
      content:
        "Just launched our new AI-powered feature! Really proud of what the team accomplished in just 6 weeks. #Innovation #TechLife",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop",
      likes: 234,
      comments: 45,
      timestamp: "2h ago",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop",
    },
    {
      id: 2,
      author: "Alex Thompson",
      role: "Product Manager at StartupX",
      content:
        "Looking for senior React developers to join our growing team! We offer remote-first culture, great benefits, and exciting projects. DM if interested!",
      likes: 156,
      comments: 28,
      timestamp: "4h ago",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop",
    },
    {
      id: 3,
      author: "Emily Davis",
      role: "Data Scientist at AI Innovations",
      content:
        "Excited to announce our breakthrough in neural network optimization! Our team's hard work paid off. #AI #DataScience",
      image:
        "https://images.unsplash.com/photo-1556742521-9d3463c3e2f1?w=800&auto=format&fit=crop",
      likes: 198,
      comments: 36,
      timestamp: "5h ago",
      avatar:
        "https://images.unsplash.com/photo-1505576835926-27d23a119968?w=150&auto=format&fit=crop",
    },
    {
      id: 4,
      author: "Michael Johnson",
      role: "Engineering Manager at TechBolt",
      content:
        "Just deployed our latest feature update! Kudos to the team for their dedication and hard work. #TechUpdates #Engineering",
      likes: 175,
      comments: 32,
      timestamp: "3h ago",
      avatar:
        "https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=150&auto=format&fit=crop",
    },
    {
      id: 5,
      author: "Jessica Smith",
      role: "UX Designer at DesignCraft",
      content:
        "Proud to unveil our new UI redesign! It's been a collaborative effort, and the results are stunning. #UXDesign #Creativity",
      image:
        "https://images.unsplash.com/photo-1521336572791-b0f4e53f45e0?w=800&auto=format&fit=crop",
      likes: 210,
      comments: 41,
      timestamp: "6h ago",
      avatar:
        "https://images.unsplash.com/photo-1484544808355-8ec84e68e500?w=150&auto=format&fit=crop",
    },
    {
      id: 6,
      author: "David Lee",
      role: "CEO at Tech Dynamics",
      content:
        "Celebrating a milestone: our product just hit 1 million downloads! Grateful to our users and the team's dedication. #TechSuccess #Milestone",
      likes: 324,
      comments: 53,
      timestamp: "1h ago",
      avatar:
        "https://images.unsplash.com/photo-1519333801426-4b98b2daf18e?w=150&auto=format&fit=crop",
    },
    {
      id: 7,
      author: "Sophia Baker",
      role: "Marketing Director at Growth Spark",
      content:
        "Launching our new marketing campaign today! Excited to see how it resonates with our audience. #MarketingStrategy #CampaignLaunch",
      likes: 189,
      comments: 29,
      timestamp: "2h ago",
      avatar:
        "https://images.unsplash.com/photo-1509460913899-515f1df34fea?w=150&auto=format&fit=crop",
    },
    {
      id: 8,
      author: "Liam Carter",
      role: "Mobile Developer at AppGenics",
      content:
        "Our new app update is live! Faster load times and enhanced security. #MobileApps #Development",
      likes: 143,
      comments: 19,
      timestamp: "7h ago",
      avatar:
        "https://images.unsplash.com/photo-1502767089025-6572583495f6?w=150&auto=format&fit=crop",
    },
    {
      id: 9,
      author: "Olivia White",
      role: "Content Strategist at Digital Edge",
      content:
        "Sharing insights from our latest blog post on effective content marketing. Check it out! #ContentStrategy #MarketingTips",
      likes: 98,
      comments: 14,
      timestamp: "8h ago",
      avatar:
        "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=150&auto=format&fit=crop",
    },
    {
      id: 10,
      author: "Ethan Moore",
      role: "Cloud Architect at TechNova",
      content:
        "Cloud migration completed successfully! Thrilled to see our client's infrastructure transformed. #CloudComputing #Innovation",
      likes: 165,
      comments: 26,
      timestamp: "9h ago",
      avatar:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&auto=format&fit=crop",
    },
    {
      id: 11,
      author: "Isabella Green",
      role: "Graphic Designer at ArtCore",
      content:
        "Freshly designed brand identity for one of our clients. Minimal yet impactful. #GraphicDesign #Creativity",
      image:
        "https://images.unsplash.com/photo-1496317556649-f930d733ee60?w=800&auto=format&fit=crop",
      likes: 245,
      comments: 35,
      timestamp: "10h ago",
      avatar:
        "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=150&auto=format&fit=crop",
    },
    {
      id: 12,
      author: "Mason Brown",
      role: "Full-Stack Developer at CodeWorks",
      content:
        "Pushed a major update to our internal tools today. Performance improved by 40%! #FullStack #WebDevelopment",
      likes: 173,
      comments: 22,
      timestamp: "11h ago",
      avatar:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=150&auto=format&fit=crop",
    },
    {
      id: 13,
      author: "Ella Adams",
      role: "Project Manager at AgileFlow",
      content:
        "Successfully delivered a client project ahead of schedule! Proud of the team. #ProjectManagement #Success",
      likes: 132,
      comments: 18,
      timestamp: "12h ago",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop",
    },
    {
      id: 14,
      author: "Noah Scott",
      role: "Cybersecurity Analyst at SecureNet",
      content:
        "Identified and mitigated a potential data breach today. Cybersecurity is critical! #CyberSecurity #InfoSec",
      likes: 210,
      comments: 30,
      timestamp: "13h ago",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop",
    },
    {
      id: 15,
      author: "Ava Martinez",
      role: "Machine Learning Engineer at DataCore",
      content:
        "Implemented a new algorithm that improved accuracy by 15%. Thrilled with the results! #MachineLearning #AI",
      likes: 198,
      comments: 28,
      timestamp: "14h ago",
      avatar:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&auto=format&fit=crop",
    },
    {
      id: 16,
      author: "Lucas Wilson",
      role: "Blockchain Developer at CryptoChain",
      content:
        "Deployed a smart contract on Ethereum that reduces gas fees by 25%. #Blockchain #CryptoTech",
      likes: 144,
      comments: 19,
      timestamp: "15h ago",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop",
    },
    {
      id: 17,
      author: "Mia Parker",
      role: "HR Manager at TalentBridge",
      content:
        "Recruitment drive completed! Welcoming 20 new talented professionals to the team. #HR #TalentAcquisition",
      likes: 121,
      comments: 15,
      timestamp: "16h ago",
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop",
    },
    {
      id: 18,
      author: "Logan Carter",
      role: "DevOps Engineer at CloudSync",
      content:
        "Automated the deployment process, cutting downtime by 60%. Efficiency is everything. #DevOps #Automation",
      likes: 160,
      comments: 21,
      timestamp: "17h ago",
      avatar:
        "https://images.unsplash.com/photo-1516542076529-1ea3854896f1?w=150&auto=format&fit=crop",
    },
    {
      id: 19,
      author: "Harper Bell",
      role: "Frontend Developer at PixelPerfect",
      content:
        "Redesigned our landing page with a focus on user experience. Loving the new look! #Frontend #WebDesign",
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&auto=format&fit=crop",
      likes: 204,
      comments: 27,
      timestamp: "18h ago",
      avatar:
        "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=150&auto=format&fit=crop",
    },
    {
      id: 20,
      author: "Evelyn Morris",
      role: "Marketing Manager at BrandBoost",
      content:
        "Launched a successful social media campaign that doubled our engagement rate. #Marketing #Success",
      likes: 187,
      comments: 23,
      timestamp: "19h ago",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop",
    },
    {
      id: 21,
      author: "Benjamin Hall",
      role: "AI Researcher at NeuralNet Labs",
      content:
        "Our paper on reinforcement learning was accepted at a top-tier conference! #AI #Research",
      likes: 222,
      comments: 34,
      timestamp: "20h ago",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-blue-600 text-2xl font-bold">in</div>
              <div className="ml-4 relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-gray-100 px-4 py-2 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute right-3 top-2.5 text-gray-500 w-5 h-5" />
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <NavItem
                icon={<Home />}
                label="Home"
                active={!showProfile}
                onClick={() => setShowProfile(false)}
              />
              <NavItem icon={<Users />} label="Network" />
              <NavItem icon={<Briefcase />} label="Jobs" />
              <NavItem icon={<MessageCircle />} label="Messages" />
              <NavItem icon={<Bell />} label="Notifications" />
              <button
                className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                onClick={() => setShowProfile(true)}
              >
                <User className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-10">
        {showProfile ? (
          <Profile />
        ) : (
          <div className="max-w-2xl mx-auto px-4">
            {/* Create Post */}
            <div className="bg-white rounded-lg shadow mb-6 p-4">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <User className="w-6 h-6 text-gray-600" />
                </div>
                <input
                  type="text"
                  placeholder="Start a post"
                  className="flex-1 bg-gray-100 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Posts */}
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow mb-6">
                <div className="p-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={post.avatar}
                      alt={post.author}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">{post.author}</h3>
                      <p className="text-sm text-gray-500">{post.role}</p>
                      <p className="text-xs text-gray-400">{post.timestamp}</p>
                    </div>
                  </div>
                  <p className="mt-4">{post.content}</p>
                  {post.image && (
                    <img
                      src={post.image}
                      alt="Post content"
                      className="mt-4 rounded-lg w-full"
                    />
                  )}
                  <div className="mt-4 flex items-center justify-between pt-4 border-t">
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                      <ThumbsUp className="w-5 h-5" />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                      <MessageSquare className="w-5 h-5" />
                      <span>{post.comments}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                      <Share2 className="w-5 h-5" />
                      <span>Share</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                      <Send className="w-5 h-5" />
                      <span>Send</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function NavItem({
  icon,
  label,
  active = false,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      className={`flex flex-col items-center space-y-1 ${
        active ? "text-black" : "text-gray-500"
      } hover:text-black`}
      onClick={onClick}
    >
      {icon}
      <span className="text-xs">{label}</span>
    </button>
  );
}

export default App;
