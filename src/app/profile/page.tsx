"use client";

import { useState } from "react";

type Post = {
  id: string;
  type: "video" | "image" | "text";
  emoji: string;
  gradient: string;
};

const user = {
  name: "Koffi Media",
  username: "@koffi_media",
  avatarEmoji: "🎬",
  verified: true,
  bio: "Créateur de contenu africain. Partage des histoires du futur 🚀 #PALABA #Afrique #Créativité",
  posts: 342,
  followers: 12800,
  following: 156,
};

const userPosts: Post[] = [
  { id: "1", type: "video", emoji: "🎥", gradient: "from-[#4A0E5C] via-[#2d0736] to-black" },
  { id: "2", type: "image", emoji: "📸", gradient: "from-[#F59E0B] via-[#D4AF37] to-black" },
  { id: "3", type: "text", emoji: "✍️", gradient: "from-[#1e3a8a] via-[#4A0E5C] to-black" },
  { id: "4", type: "video", emoji: "🎬", gradient: "from-[#F59E0B]/40 via-[#4A0E5C] to-black" },
  { id: "5", type: "image", emoji: "🌅", gradient: "from-[#4A0E5C] via-[#F59E0B] to-black" },
  { id: "6", type: "text", emoji: "💡", gradient: "from-[#D4AF37] via-[#4A0E5C] to-black" },
];

function VerificationBadge() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-400 ml-1"
      aria-hidden="true"
    >
      <path d="M12 2l2.4 1.8 2.8-.3 1 2.6 2.3 1.4-1 2.8.7 2.8-2.6 1.3-1.8 2.4-2.4-1.3-2.8-.7 1.4-2.3-.3-2.8 2.6-1 1.8-2.4L12 2z" />
      <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StatItem({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-xl font-bold text-white">{value}</span>
      <span className="text-xs text-white/60">{label}</span>
    </div>
  );
}

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="min-h-screen bg-purple-brand flex flex-col items-center pb-24">
      {/* Header with back button */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between bg-gradient-to-b from-black/60 to-transparent px-4 py-3">
        <a href="/" className="text-white/80 hover:text-white transition-colors">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
            <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <h1 className="text-lg font-bold text-gold-brand">Profil</h1>
        <div className="w-6" />
      </header>

      <div className="w-full max-w-md px-4 pt-20 pb-6 space-y-5">
        {/* Avatar + username + bio */}
        <div className="flex flex-col items-center text-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-orange-brand to-gold-brand text-5xl ring-4 ring-white/20 shadow-lg">
            {user.avatarEmoji}
          </div>
          <div className="flex items-center mt-3">
            <span className="text-lg font-bold text-white">{user.username}</span>
            {user.verified && <VerificationBadge />}
          </div>
          <p className="mt-2 text-sm text-white/80 max-w-xs leading-relaxed">
            {user.bio}
          </p>
        </div>

        {/* Edit profile button */}
        <button
          type="button"
          onClick={() => setIsEditing(!isEditing)}
          className="w-full bg-purple-brand text-white py-2.5 rounded-full font-medium text-sm hover:bg-orange-brand transition-colors border border-white/20"
        >
          Modifier le profil
        </button>

        {/* Stats */}
        <div className="flex justify-around py-4 border-y border-white/10">
          <StatItem label="Publications" value={user.posts} />
          <StatItem label="Abonnés" value={user.followers} />
          <StatItem label="Abonnements" value={user.following} />
        </div>

        {/* Publications grid */}
        <div>
          <h2 className="text-sm font-semibold text-white/80 mb-3 text-center">Publications</h2>
          <div className="grid grid-cols-3 gap-1">
            {userPosts.map((post) => (
              <div
                key={post.id}
                className="relative aspect-square rounded-lg overflow-hidden bg-gray-900 border border-white/10"
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${post.gradient}`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl">{post.emoji}</span>
                </div>
                {post.type === "video" && (
                  <div className="absolute top-1 right-1">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-white drop-shadow">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}