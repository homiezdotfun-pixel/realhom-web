"use client";

import { useState, useEffect } from "react";

const TG_BOT_LINK = "https://t.me/homiezdotfun_bot";

/* ═══════════════════════════════════════════════════════
   Data constants
   ═══════════════════════════════════════════════════════ */

const WALL_OF_SHAME = [
  { rank: 1, avatar: "😎", name: "degen_mike", streak: "🔥 12W", totalLs: 8, badge: "Biggest Degen" },
  { rank: 2, avatar: "💅", name: "cryptoSis99", streak: "🔥 9W", totalLs: 12, badge: null },
  { rank: 3, avatar: "🧠", name: "alphaLeaker", streak: "💀 4L", totalLs: 15, badge: null },
  { rank: 4, avatar: "🍗", name: "wingKing", streak: "🔥 3W", totalLs: 20, badge: "Pro Bag Holder" },
  { rank: 5, avatar: "🛡️", name: "rug_survivor", streak: "💀 6L", totalLs: 22, badge: null },
  { rank: 6, avatar: "😢", name: "sadBoi42", streak: "💀 8L", totalLs: 25, badge: null },
  { rank: 7, avatar: "💀", name: "bag_fumbler", streak: "💀 14L", totalLs: 40, badge: "Professional Bag Holder" },
];

const FLOATING_STICKERS = [
  { content: "🐕", top: "10%", left: "3%", delay: "0s", size: "2.2rem" },
  { content: "W", top: "18%", left: "93%", delay: "1.2s", size: "1.4rem" },
  { content: "💀", top: "38%", left: "4%", delay: "2s", size: "1.8rem" },
  { content: "📉", top: "55%", left: "95%", delay: "0.5s", size: "1.6rem" },
  { content: "L", top: "68%", left: "2%", delay: "3s", size: "1.4rem" },
  { content: "🤡", top: "82%", left: "94%", delay: "1.5s", size: "1.8rem" },
  { content: "💰", top: "28%", left: "96%", delay: "0.8s", size: "1.8rem" },
  { content: "GG", top: "72%", left: "97%", delay: "3.5s", size: "1.1rem" },
];

/* ═══════════════════════════════════════════════════════
   Floating Stickers
   ═══════════════════════════════════════════════════════ */
function FloatingStickers() {
  return (
    <>
      {FLOATING_STICKERS.map((s, i) => (
        <span
          key={i}
          className="sticker"
          style={{
            top: s.top,
            left: s.left,
            fontSize: s.size,
            animationDelay: s.delay,
          }}
        >
          {s.content}
        </span>
      ))}
    </>
  );
}

/* ═══════════════════════════════════════════════════════
   Navbar
   ═══════════════════════════════════════════════════════ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f172a]/95 backdrop-blur-sm border-b-4 border-black shadow-[0_4px_0_0_rgba(0,0,0,1)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🐕</span>
          <span className="text-xl font-black tracking-tight">
            homiez<span className="text-[#4ade80]">.fun</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider text-text-secondary">
          <a href="#how" className="hover:text-[#4ade80] transition-colors">
            How It Works
          </a>
          <a href="#shame" className="hover:text-[#4ade80] transition-colors">
            Wall of Shame
          </a>
          <a href="#faq" className="hover:text-[#4ade80] transition-colors">
            FAQ
          </a>
        </div>
        <a
          href={TG_BOT_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-win95"
        >
          Launch Bot
        </a>
      </div>
    </nav>
  );
}

/* ═══════════════════════════════════════════════════════
   Hero Section
   ═══════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Doge mascot */}
        <div className="text-8xl sm:text-9xl mb-6 animate-float">
          🐕
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black italic uppercase leading-[0.95] mb-6 animate-slide-up stagger-1">
          Bet Against
          <br />
          <span className="text-[#4ade80]">Your Homiez.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10 animate-slide-up stagger-2 leading-relaxed">
          Because winning is great, but watching your friends lose is better.
          <span className="animate-blink-cursor text-[#4ade80]"> _</span>
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-slide-up stagger-3">
          <a
            href={TG_BOT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brutal btn-brutal-green text-lg animate-vibrate"
          >
            <TelegramIcon />
            START A RIOT
          </a>
          <a
            href="#how"
            className="btn-brutal btn-brutal-purple text-lg"
          >
            how does this work
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 flex items-center justify-center gap-6 sm:gap-14 animate-slide-up stagger-4">
          {[
            { value: "2.4K+", label: "Bets Placed" },
            { value: "$180K", label: "Bags Lost" },
            { value: "890+", label: "Degens" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="brutal-card px-5 py-3 text-center"
            >
              <div className="text-2xl sm:text-3xl font-black text-[#4ade80]">
                {stat.value}
              </div>
              <div className="text-xs text-text-muted mt-1 uppercase tracking-wider font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f172a] to-transparent z-10" />
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   How It Works
   ═══════════════════════════════════════════════════════ */
function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Choose a Homie.",
      desc: "Pick your target. Your best friend, your worst enemy, your coworker who won't shut up about crypto. Anyone.",
      icon: "🎯",
    },
    {
      num: "02",
      title: "Set the Stakes.",
      desc: "Name your price. $5 or $500 — we don't judge. Actually we do. Go big or go home.",
      icon: "💸",
    },
    {
      num: "03",
      title: "Assert Dominance.",
      desc: "Win the bet. Collect the bag. Screenshot the receipt. Post it in the group chat. Become legend.",
      icon: "👑",
    },
  ];

  return (
    <section id="how" className="relative py-28 z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black italic uppercase">
            How It <span className="text-[#c084fc]">Works</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="brutal-card p-8 relative animate-float"
              style={{ animationDelay: `${i * 0.6}s` }}
            >
              {/* Step number */}
              <span className="absolute top-4 right-4 text-5xl font-black text-[#4ade80]/20">
                {step.num}
              </span>

              <div className="text-5xl mb-5">{step.icon}</div>

              <h3 className="text-xl font-black uppercase mb-3 text-[#4ade80]">
                {step.title}
              </h3>

              <p className="text-text-secondary text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   Wall of Shame (Leaderboard)
   ═══════════════════════════════════════════════════════ */
function WallOfShame() {
  return (
    <section id="shame" className="relative py-28 z-10">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black italic uppercase">
            Wall of <span className="text-[#f43f5e]">Shame</span>
          </h2>
          <p className="text-text-muted mt-3 text-sm uppercase tracking-wider font-bold">
            the leaderboard never forgets
          </p>
        </div>

        <div className="brutal-card overflow-hidden">
          {/* Header */}
          <div className="shame-row text-xs uppercase tracking-wider text-text-muted font-bold bg-[#0f172a] border-b-4 border-black">
            <span>#</span>
            <span></span>
            <span>The Homie</span>
            <span>Current Streak</span>
            <span className="text-right">Total Ls</span>
          </div>

          {WALL_OF_SHAME.map((row) => (
            <div key={row.rank} className="shame-row text-sm">
              <span className="font-black text-[#fbbf24]">
                {row.rank}
              </span>
              <span className="text-xl">{row.avatar}</span>
              <div>
                <span className="font-bold text-text-primary">{row.name}</span>
                {row.badge && (
                  <span className="ml-2 text-[0.6rem] font-bold uppercase px-2 py-0.5 bg-[#f43f5e] text-white border-2 border-black inline-block">
                    {row.badge}
                  </span>
                )}
              </div>
              <span className="font-bold">
                {row.streak}
              </span>
              <span className="text-right font-black text-[#f43f5e]">
                {row.totalLs}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   FAQ Section
   ═══════════════════════════════════════════════════════ */
function FAQSection() {
  const faqs = [
    {
      q: "wait this is real money??",
      a: "yes bestie. real stakes. real bags. the bot facilitates but the smoke is between you and your homie.",
    },
    {
      q: "how do i get in on this",
      a: "open the bot. make a bet. send it. that's literally it. if you need more steps than that idk what to tell you.",
    },
    {
      q: "can i actually bet on anything tho",
      a: "basically yeah. sports, crypto, 'i can eat 50 nuggets in an hour' — if both sides agree it's a valid bet. go crazy.",
    },
    {
      q: "what if my homie is a fraud",
      a: "the bot tracks everyone's record. duck a bet and your reputation is cooked forever. the wall of shame never forgets. accountability era.",
    },
    {
      q: "you're taking my money too??",
      a: "chill. tiny fee on settled bets. way less than any sportsbook. your bag stays between homiez.",
    },
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-28 z-10">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black italic uppercase">
            FAQ <span className="text-[#c084fc]">(for the confused)</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="brutal-card overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-[#334155] transition-colors"
              >
                <span className="font-bold">{faq.q}</span>
                <span
                  className={`text-[#4ade80] font-black text-2xl transition-transform duration-200 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  open === i ? "max-h-40 pb-5" : "max-h-0"
                }`}
              >
                <p className="px-5 text-text-secondary text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   CTA Section
   ═══════════════════════════════════════════════════════ */
function CTASection() {
  return (
    <section className="relative py-28 z-10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-6xl font-black italic uppercase mb-6">
          Stop being a
          <br />
          <span className="text-[#4ade80]">spectator.</span>
        </h2>
        <p className="text-text-secondary text-lg max-w-xl mx-auto mb-10">
          your homiez are already printing W&apos;s without you. genuinely
          embarrassing to sit this one out.
        </p>
        <a
          href={TG_BOT_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-brutal btn-brutal-green text-xl animate-vibrate"
        >
          <TelegramIcon />
          BECOME UNGOVERNABLE
        </a>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   Footer
   ═══════════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="border-t-4 border-black py-10 z-10 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🐕</span>
            <span className="font-black text-lg">
              homiez<span className="text-[#4ade80]">.fun</span>
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-text-muted font-bold">
            <a
              href={TG_BOT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#4ade80] transition-colors"
            >
              Telegram Bot
            </a>
            <span className="text-text-muted/30">|</span>
            <span>&copy; 2025 homiez.fun — not financial advice lmao</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════
   Telegram Icon
   ═══════════════════════════════════════════════════════ */
function TelegramIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════
   Home (main)
   ═══════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <main className="relative scanlines">
      <div className="vaporwave-grid" />
      <FloatingStickers />
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <WallOfShame />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
