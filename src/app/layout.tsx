import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PALABA",
  description: "Le réseau social mobile-first en Afrique",
};

function BottomNav() {
  const navItems = [
    { label: "Accueil", href: "/", icon: "🏠" },
    { label: "Découvrir", href: "/discover", icon: "🔍" },
    { label: "+ Publier", href: "/create", icon: "➕" },
    { label: "Messages", href: "/messages", icon: "💬" },
    { label: "Profil", href: "/profile", icon: "👤" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-purple-brand border-t border-white/10 px-3 py-2 safe-area-bottom" role="navigation" aria-label="Navigation principale">
      <div className="flex justify-around items-center gap-1">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex flex-col items-center gap-1 text-white/80 hover:text-white transition-colors min-w-[60px]"
            aria-label={item.label}
          >
            <span className="text-2xl" aria-hidden="true">{item.icon}</span>
            <span className="text-xs font-medium">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="h-screen flex flex-col bg-black text-white">
        <div className="flex flex-col h-full">
          <main className="flex-1 min-h-0 overflow-y-auto overscroll-y-contain pb-20">{children}</main>
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
