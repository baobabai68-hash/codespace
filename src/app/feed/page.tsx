// Types
type Post = {
  id: string;
  username: string;
  avatarEmoji: string;
  caption: string;
  likes: number;
  comments: number;
  shares: number;
  music: string;
  gradient: string;
};

// Dummy data for the PALABA feed (Fil d'actualité)
const posts: Post[] = [
  {
    id: "1",
    username: "@Koffi_Media",
    avatarEmoji: "🎬",
    caption: "Le futur de la création africaine est là 🚀 #PALABA #Afrique #Créativité",
    likes: 12800,
    comments: 342,
    shares: 1200,
    music: "Son original - Koffi Media",
    gradient: "from-[#4A0E5C] via-[#2d0736] to-black",
  },
  {
    id: "2",
    username: "@Awa_Dance",
    avatarEmoji: "💃",
    caption: "Nouveau pas de danse 🔥 Rejoins le défi #PALABAChallenge #Dance",
    likes: 8400,
    comments: 210,
    shares: 640,
    music: "Azonto Vibes - DJ Kaba",
    gradient: "from-[#F59E0B]/40 via-[#4A0E5C] to-black",
  },
  {
    id: "3",
    username: "@Moussa_Tech",
    avatarEmoji: "💻",
    caption: "Comment j'ai construit mon premier SaaS en 30 jours 🚀 #Tech #Startup",
    likes: 5600,
    comments: 156,
    shares: 320,
    music: "Code Vibes - Dev Music",
    gradient: "from-[#1e3a8a] via-[#4A0E5C] to-black",
  },
  {
    id: "4",
    username: "@Fatima_Chef",
    avatarEmoji: "🍽️",
    caption: "Ma recette secrète de jollof rice 🍛 #Food #AfricanCuisine",
    likes: 9200,
    comments: 289,
    shares: 750,
    music: "Kitchen Sounds - Chef Beats",
    gradient: "from-[#F59E0B] via-[#D4AF37] to-black",
  },
];

function formatCount(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(1)}k`;
  return `${value}`;
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
      <path d="M12 21s-6.716-4.297-9.192-7.61C.6 10.413 1.76 6.5 5.25 6.5c2.05 0 3.45 1.17 4.25 2.5.8-1.33 2.2-2.5 4.25-2.5 3.49 0 4.65 3.91 2.442 6.89C18.716 16.703 12 21 12 21z" />
    </svg>
  );
}

function CommentIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
      <path d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 4v-4H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
      <path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7" />
      <path d="M12 3v13" />
      <path d="m7 8 5-5 5 5" />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
      <path d="M19 7h-8V4a1 1 0 0 0-2 0v3H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
      <path d="M9 4v3M15 4v3M4 16h16" />
    </svg>
  );
}

function ActionButton({
  icon,
  label,
  count,
}: {
  icon: React.ReactNode;
  label: string;
  count: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className="flex flex-col items-center gap-1 text-orange-brand active:scale-90 transition-transform"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black/30 backdrop-blur-sm border border-white/20">
        {icon}
      </span>
      <span className="text-xs font-semibold text-white drop-shadow">{count}</span>
    </button>
  );
}

function VideoCard({ post }: { post: Post }) {
  return (
    <article className="relative h-screen w-full snap-start snap-always overflow-hidden bg-black">
      <div className={`absolute inset-0 bg-gradient-to-b ${post.gradient}`} aria-hidden="true" />
      <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
          <span className="text-3xl">▶️</span>
        </div>
      </div>
      <div className="absolute right-3 bottom-32 z-20 flex flex-col items-center gap-5">
        <ActionButton icon={<HeartIcon />} label="J'aime" count={formatCount(post.likes)} />
        <ActionButton icon={<GiftIcon />} label="Cadeau" count="Gifting" />
        <ActionButton icon={<CommentIcon />} label="Commenter" count={formatCount(post.comments)} />
        <ActionButton icon={<ShareIcon />} label="Partager" count={formatCount(post.shares)} />
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 via-black/30 to-transparent px-4 pb-28 pt-16">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-brand to-gold-brand text-xl ring-2 ring-white/30">
            {post.avatarEmoji}
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-white">{post.username}</p>
            <p className="truncate text-xs text-white/70">{post.music}</p>
          </div>
        </div>
        <p className="mt-2 max-w-[75%] text-sm leading-snug text-white drop-shadow">
          {post.caption}
        </p>
      </div>
    </article>
  );
}

export default function FeedPage() {
  return (
    <div className="no-scrollbar h-screen snap-y snap-mandatory overflow-y-scroll bg-purple-brand">
      <header className="fixed left-0 right-0 top-0 z-40 flex items-center justify-between bg-gradient-to-b from-black/60 to-transparent px-4 pb-4 pt-3">
        <div className="flex items-baseline gap-2">
          <h1 className="text-2xl font-extrabold tracking-tight text-gold-brand">PALABA</h1>
          <p className="text-xs font-semibold text-orange-brand">Fil d'actualité</p>
        </div>
        <a href="/" className="rounded-full border border-white/30 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/10">Accueil</a>
      </header>
      {posts.map((post) => (
        <VideoCard key={post.id} post={post} />
      ))}
    </div>
  );
}
