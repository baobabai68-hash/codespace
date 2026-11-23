"use client";

import { useState } from "react";

type Message = {
  id: string;
  name: string;
  emoji: string;
  lastMessage: string;
  time: string;
  unread: number;
};

type Notification = {
  id: string;
  text: string;
  icon: string;
  time: string;
  unread: boolean;
};

const conversations: Message[] = [
  {
    id: "1",
    name: "Amina",
    emoji: "👩",
    lastMessage: "Tu as vu ma nouvelle vidéo ? 🎬",
    time: "12:34",
    unread: 3,
  },
  {
    id: "2",
    name: "Junior",
    emoji: "🧑",
    lastMessage: "Merci pour le like ! ❤️",
    time: "Hier",
    unread: 0,
  },
  {
    id: "3",
    name: "Fatima_Chef",
    emoji: "👩‍🍳",
    lastMessage: "La recette est trop bonne, à refaire !",
    time: "Hier",
    unread: 1,
  },
  {
    id: "4",
    name: "Moussa_Tech",
    emoji: "🧑‍💻",
    lastMessage: "On se lance sur le projet ce soir ?",
    time: "Lundi",
    unread: 0,
  },
  {
    id: "5",
    name: "Amadou_Dance",
    emoji: "🕺",
    lastMessage: "Nouveau défi de danse 🔥",
    time: "Lundi",
    unread: 0,
  },
];

const notifications: Notification[] = [
  { id: "1", text: "Junior a aimé votre vidéo", icon: "❤️", time: "Il y a 5 min", unread: true },
  { id: "2", text: "Amina s'est abonnée à vous", icon: "🔔", time: "Il y a 12 min", unread: true },
  { id: "3", text: "Vous avez reçu un cadeau de @Koffi_Media", icon: "🎁", time: "Il y a 1 h", unread: true },
  { id: "4", text: "Votre publication a atteint 10 000 vues !", icon: "🔥", time: "Il y a 2 h", unread: false },
  { id: "5", text: "Amadou_Dance a commenté votre vidéo", icon: "💬", time: "Il y a 3 h", unread: false },
  { id: "6", text: "Nouveau follower : @Awa_Dance", icon: "👥", time: "Hier", unread: false },
];

export default function MessagesPage() {
  const [activeTab, setActiveTab] = useState<"messages" | "notifications">("messages");

  return (
    <div className="min-h-screen bg-purple-brand flex flex-col items-center pb-24">
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between bg-gradient-to-b from-black/60 to-transparent px-4 py-3">
        <a href="/" className="text-white/80 hover:text-white transition-colors">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
            <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <h1 className="text-lg font-bold text-gold-brand">Messages & Notifications</h1>
        <div className="w-6" />
      </header>

      <div className="w-full max-w-md px-4 pt-20 pb-6">
        <div className="flex gap-2 mb-4">
          <button
            type="button"
            onClick={() => setActiveTab("messages")}
            className={`flex-1 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === "messages"
                ? "bg-purple-brand text-white border border-white/20"
                : "bg-white/10 text-white border border-white/20"
            }`}
          >
            Messages
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("notifications")}
            className={`flex-1 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === "notifications"
                ? "bg-purple-brand text-white border border-white/20"
                : "bg-white/10 text-white border border-white/20"
            }`}
          >
            Notifications
          </button>
        </div>

        {activeTab === "messages" && (
          <div className="space-y-2">
            {conversations.map((conv) => (
              <div
                key={conv.id}
                className="flex items-center gap-3 p-3 rounded-xl bg-black/60 border border-white/10"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-brand to-gold-brand text-xl">
                  {conv.emoji}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="truncate text-sm font-semibold text-white">{conv.name}</p>
                    <span className="text-xs text-white/50 shrink-0 ml-2">{conv.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="truncate text-xs text-white/70">{conv.lastMessage}</p>
                    {conv.unread > 0 && (
                      <span className="ml-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-brand text-[10px] font-bold text-white">
                        {conv.unread}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "notifications" && (
          <div className="space-y-2">
            {notifications.map((notif) => (
              <div
                key={notif.id}
                className="flex items-center gap-3 p-3 rounded-xl bg-black/60 border border-white/10"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black/40 text-xl">
                  {notif.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="truncate text-sm text-white">{notif.text}</p>
                    {notif.unread && (
                      <span className="ml-2 h-2 w-2 shrink-0 rounded-full bg-orange-brand" />
                    )}
                  </div>
                  <span className="text-xs text-white/50">{notif.time}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}