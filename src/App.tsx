import React, { useState } from 'react';
import { MessageSquare, ThumbsUp, Share2, Send, Search, Bell, Home, Users, Briefcase, MessageCircle, User } from 'lucide-react';
import Profile from './Profile';

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
      content: "Just launched our new AI-powered feature! Really proud of what the team accomplished in just 6 weeks. #Innovation #TechLife",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop",
      likes: 234,
      comments: 45,
      timestamp: "2h ago",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop"
    },
    {
      id: 2,
      author: "Alex Thompson",
      role: "Product Manager at StartupX",
      content: "Looking for senior React developers to join our growing team! We offer remote-first culture, great benefits, and exciting projects. DM if interested!",
      likes: 156,
      comments: 28,
      timestamp: "4h ago",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop"
    }
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
              <NavItem icon={<Home />} label="Home" active={!showProfile} onClick={() => setShowProfile(false)} />
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
            {posts.map(post => (
              <div key={post.id} className="bg-white rounded-lg shadow mb-6">
                <div className="p-4">
                  <div className="flex items-center space-x-3">
                    <img src={post.avatar} alt={post.author} className="w-12 h-12 rounded-full" />
                    <div>
                      <h3 className="font-semibold">{post.author}</h3>
                      <p className="text-sm text-gray-500">{post.role}</p>
                      <p className="text-xs text-gray-400">{post.timestamp}</p>
                    </div>
                  </div>
                  <p className="mt-4">{post.content}</p>
                  {post.image && (
                    <img src={post.image} alt="Post content" className="mt-4 rounded-lg w-full" />
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
  onClick 
}: { 
  icon: React.ReactNode; 
  label: string; 
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button 
      className={`flex flex-col items-center space-y-1 ${active ? 'text-black' : 'text-gray-500'} hover:text-black`}
      onClick={onClick}
    >
      {icon}
      <span className="text-xs">{label}</span>
    </button>
  );
}

export default App;