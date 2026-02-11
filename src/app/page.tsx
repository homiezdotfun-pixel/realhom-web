"use client";

import { useState, useEffect } from "react";

const TG_BOT_LINK = "https://t.me/homiezdotfun_bot";

/* ═══════════════════════════════════════════════════════
   Data constants
   ═══════════════════════════════════════════════════════ */

const LIVE_BETS = [
  { user: "degen_mike", bet: "Lakers ML tonight", amount: "$50", emoji: "🏀" },
  { user: "cryptoSis99", bet: "ETH above 4k by Friday", amount: "$200", emoji: "📈" },
  { user: "wingKing", bet: "I eat 50 nuggs in 1hr", amount: "$30", emoji: "🍗" },
  { user: "rug_survivor", bet: "BTC flips gold this cycle", amount: "$500", emoji: "🪙" },
  { user: "sadBoi42", bet: "Celtics sweep playoffs", amount: "$75", emoji: "🍀" },
  { user: "alphaLeaker", bet: "SOL hits $300 next month", amount: "$150", emoji: "🚀" },
  { user: "npcTrader", bet: "My portfolio stays green", amount: "$100", emoji: "🤡" },
  { user: "bag_fumbler", bet: "I quit fast food for a week", amount: "$20", emoji: "🍔" },
];

const LEADERBOARD = [
  { rank: 1, name: "degen_mike", wl: "42-8", pnl: "+$4,200", emoji: "👑" },
  { rank: 2, name: "cryptoSis99", wl: "38-12", pnl: "+$3,100", emoji: "🔥" },
  { rank: 3, name: "alphaLeaker", wl: "35-15", pnl: "+$2,800", emoji: "💎" },
  { rank: 4, name: "wingKing", wl: "30-20", pnl: "+$1,500", emoji: "🍗" },
  { rank: 5, name: "rug_survivor", wl: "28-22", pnl: "+$900", emoji: "🛡️" },
  { rank: 6, name: "sadBoi42", wl: "25-25", pnl: "+$200", emoji: "😢" },
  { rank: 7, name: "bag_fumbler", wl: "10-40", pnl: "-$2,100", emoji: "💀" },
];

const FLOATING_STICKERS = [
  { content: "🐕", top: "8%", left: "3%", delay: "0s", size: "2rem" },
  { content: "W", top: "15%", left: "92%", delay: "1s", size: "1.2rem" },
  { content: "💀", top: "35%", left: "5%", delay: "2s", size: "1.8rem" },
  { content: "📈", top: "50%", left: "95%", delay: "0.5s", size: "1.6rem" },
  { content: "L", top: "65%", left: "2%", delay: "3s", size: "1.2rem" },
  { content: "🚀", top: "78%", left: "93%", delay: "1.5s", size: "1.8rem" },
  { content: "🤡", top: "88%", left: "6%", delay: "2.5s", size: "1.6rem" },
  { content: "💰", top: "25%", left: "96%", delay: "0.8s", size: "1.8rem" },
  { content: "🔥", top: "45%", left: "1%", delay: "1.8s", size: "1.5rem" },
  { content: "GG", top: "70%", left: "97%", delay: "3.5s", size: "1rem" },
];

const colorMap: Record<string, { dot: string; text: string }> = {
  cyan: { dot: "bg-[#00fff0]", text: "text-[#00fff0]" },
  pink: { dot: "bg-[#ff00ff]", text: "text-[#ff00ff]" },
  gold: { dot: "bg-[#fbbf24]", text: "text-[#fbbf24]" },
  green: { dot: "bg-[#39ff14]", text: "text-[#39ff14]" },
  purple: { dot: "bg-[#8b5cf6]", text: "text-[#8b5cf6]" },
  blue: { dot: "bg-[#38bdf8]", text: "text-[#38bdf8]" },
};

const PIXEL_FONT = "'Press Start 2P', monospace";

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
   Live Bets Ticker
   ═══════════════════════════════════════════════════════ */
function LiveBetsTicker() {
  const doubled = [...LIVE_BETS, ...LIVE_BETS];
  return (
    <div className="ticker-strip py-3 relative z-10">
      <div className="flex items-center">
        {/* LIVE badge */}
        <span
          className="shrink-0 mx-4 px-3 py-1 bg-[#39ff14] text-[#0a0014] text-[0.6rem] font-bold rounded animate-arcade-pulse"
          style={{ fontFamily: PIXEL_FONT }}
        >
          LIVE
        </span>
        <div className="ticker-strip-inner">
          {doubled.map((bet, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 mx-6 text-sm text-text-secondary"
            >
              <span>{bet.emoji}</span>
              <span className="text-[#00fff0] font-medium">{bet.user}</span>
              <span className="text-text-muted">—</span>
              <span>{bet.bet}</span>
              <span className="text-[#39ff14] font-bold">{bet.amount}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   Leaderboard Section
   ═══════════════════════════════════════════════════════ */
function LeaderboardSection() {
  return (
    <section className="relative py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00fff0]/30 to-transparent" />
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span
            className="text-[#39ff14] text-xs uppercase tracking-[0.3em]"
            style={{ fontFamily: PIXEL_FONT }}
          >
            // Leaderboard
          </span>
          <h2
            className="text-2xl sm:text-3xl font-bold mt-4 text-glow-cyan"
            style={{ fontFamily: PIXEL_FONT }}
          >
            Top Degenerates
          </h2>
        </div>

        <div className="glass glow-border rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="leaderboard-row text-[0.6rem] uppercase tracking-wider text-text-muted border-b border-[#00fff0]/15"
            style={{ fontFamily: PIXEL_FONT }}
          >
            <span>#</span>
            <span>Name</span>
            <span>W-L</span>
            <span className="text-right">P&amp;L</span>
          </div>

          {LEADERBOARD.map((row) => (
            <div key={row.rank} className="leaderboard-row text-sm">
              <span className="text-[#fbbf24] font-bold">
                {row.rank <= 3 ? row.emoji : `${row.rank}`}
              </span>
              <span className="text-[#00fff0] font-medium">{row.name}</span>
              <span className="text-text-secondary">{row.wl}</span>
              <span
                className={`text-right font-bold ${
                  row.pnl.startsWith("+") ? "text-[#39ff14]" : "text-[#ff00ff]"
                }`}
              >
                {row.pnl}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-lg shadow-[#00fff0]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🐕</span>
          <span
            className="text-sm text-glow-cyan"
            style={{ fontFamily: PIXEL_FONT }}
          >
            Homiez<span className="text-[#39ff14]">.fun</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-text-secondary">
          <a href="#how" className="hover:text-[#00fff0] transition-colors">
            How It Works
          </a>
          <a href="#features" className="hover:text-[#00fff0] transition-colors">
            Features
          </a>
          <a href="#faq" className="hover:text-[#00fff0] transition-colors">
            FAQ
          </a>
        </div>
        <a
          href={TG_BOT_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-arcade text-[0.55rem] py-2 px-4"
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg">
      {/* Neon grid floor */}
      <div className="neon-grid" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8b5cf6]/20 rounded-full blur-[128px] animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#ff00ff]/15 rounded-full blur-[128px] animate-float"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="absolute top-1/3 right-1/3 w-64 h-64 bg-[#00fff0]/10 rounded-full blur-[128px] animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Shiba mascot */}
        <div className="text-7xl sm:text-8xl mb-4 animate-float animate-neon-flicker">
          🐕
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs text-[#00fff0] mb-8 animate-slide-up">
          <span className="w-2 h-2 rounded-full bg-[#39ff14] animate-pulse" />
          we&apos;re so back — 2,400+ bets placed fr fr
        </div>

        {/* Title */}
        <h1
          className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] mb-6 animate-slide-up stagger-1 text-glow-cyan"
          style={{ fontFamily: PIXEL_FONT }}
        >
          Bet Against
          <br />
          <span className="text-[#ff00ff] text-glow-pink">
            Your Homiez
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10 animate-slide-up stagger-2 leading-relaxed">
          talk is cheap. prove you&apos;re not all bark. put your bag where your mouth is.
          <br className="hidden sm:block" />
          the{" "}
          <span className="text-[#00fff0] font-medium">
            social betting platform
          </span>{" "}
          that separates the real ones from the cap merchants.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up stagger-3">
          <a
            href={TG_BOT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-arcade animate-arcade-pulse"
          >
            <TelegramIcon />
            let him cook
          </a>
          <a
            href="#how"
            className="btn-arcade-pink"
          >
            explain like i&apos;m 5
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 flex items-center justify-center gap-8 sm:gap-16 animate-slide-up stagger-4">
          {[
            { value: "2.4K+", label: "Bets Placed" },
            { value: "$180K", label: "Bags Moved" },
            { value: "890+", label: "Degens" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-2xl sm:text-3xl font-bold text-[#00fff0] text-glow-cyan"
                style={{ fontFamily: PIXEL_FONT }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-text-muted mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0014] to-transparent" />
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
      title: "cook up a bet",
      desc: "open the bot, type your hot take. 'lakers are cooked tonight' — literally anything goes. be unhinged.",
      icon: "🎯",
    },
    {
      num: "02",
      title: "slide into their DMs",
      desc: "send the bet to your homie or nuke the group chat with it. set the stakes. if they don't accept they're actually scared.",
      icon: "🤝",
    },
    {
      num: "03",
      title: "collect the bag",
      desc: "outcome hits. winner gets paid. loser copes. no refunds on bad takes.",
      icon: "💰",
    },
  ];

  return (
    <section id="how" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span
            className="text-[#39ff14] text-xs uppercase tracking-[0.3em]"
            style={{ fontFamily: PIXEL_FONT }}
          >
            // How It Works
          </span>
          <h2
            className="text-xl sm:text-2xl font-bold mt-4 text-glow-green"
            style={{ fontFamily: PIXEL_FONT }}
          >
            three steps.{" "}
            <span className="text-text-muted">zero excuses.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="group relative p-8 rounded-2xl glass glow-border animate-border-glow hover:-translate-y-2 transition-transform duration-500"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              {/* Step number */}
              <span className="text-6xl font-black text-[#8b5cf6]/20 group-hover:text-[#8b5cf6]/40 transition-colors absolute top-6 right-6">
                {step.num}
              </span>

              <div className="text-4xl mb-6">{step.icon}</div>

              <h3
                className="text-xs font-bold mb-3 text-[#39ff14] text-glow-green"
                style={{ fontFamily: PIXEL_FONT }}
              >
                {step.title}
              </h3>

              <p className="text-text-secondary text-sm leading-relaxed">
                {step.desc}
              </p>

              {i < steps.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-[#00fff0] text-2xl text-glow-cyan">
                  &gt;
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   Features Section
   ═══════════════════════════════════════════════════════ */
function FeaturesSection() {
  const features = [
    {
      title: "Peer-to-Peer Bets",
      desc: "no house edge. no middleman. just you and your homie finding out who's actually him.",
      color: "cyan" as const,
    },
    {
      title: "Group Betting",
      desc: "drop a bet in the gc and watch chaos unfold. your whole squad can get in on it.",
      color: "pink" as const,
    },
    {
      title: "Instant Settlement",
      desc: "winnings hit your wallet immediately. speedrun to getting paid.",
      color: "gold" as const,
    },
    {
      title: "Bet on Anything",
      desc: "sports, crypto, who eats more wings — if you can argue about it at 2am, you can bet on it.",
      color: "green" as const,
    },
    {
      title: "Leaderboard",
      desc: "ratio your friends. track who's the GOAT bettor in your crew. flex responsibly.",
      color: "purple" as const,
    },
    {
      title: "Fully in Telegram",
      desc: "no app downloads. no signups. just vibes. open the bot and start printing W's.",
      color: "blue" as const,
    },
  ];

  return (
    <section id="features" className="relative py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff00ff]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span
            className="text-[#ff00ff] text-xs uppercase tracking-[0.3em]"
            style={{ fontFamily: PIXEL_FONT }}
          >
            // Features
          </span>
          <h2
            className="text-xl sm:text-2xl font-bold mt-4 text-glow-pink"
            style={{ fontFamily: PIXEL_FONT }}
          >
            built different.{" "}
            <span className="text-[#fbbf24] text-glow-purple">
              by degens.
            </span>{" "}
            for degens.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const colors = colorMap[feature.color];
            return (
              <div
                key={feature.title}
                className="group relative p-8 rounded-2xl glass glow-border transition-all duration-500 overflow-hidden"
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${colors.dot} opacity-80 mb-6 flex items-center justify-center`}
                >
                  <div className="w-3 h-3 bg-[#0a0014] rounded-full" />
                </div>

                <h3
                  className={`text-xs font-bold mb-3 ${colors.text}`}
                  style={{ fontFamily: PIXEL_FONT }}
                >
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
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
      a: "the bot tracks everyone's record. duck a bet and your reputation is cooked forever. the leaderboard never forgets. accountability era.",
    },
    {
      q: "you're taking my money too??",
      a: "chill. tiny fee on settled bets. way less than any sportsbook. your bag stays between homiez.",
    },
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#fbbf24]/30 to-transparent" />

      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span
            className="text-[#fbbf24] text-xs uppercase tracking-[0.3em]"
            style={{ fontFamily: PIXEL_FONT }}
          >
            // FAQ
          </span>
          <h2
            className="text-xl sm:text-2xl font-bold mt-4 text-glow-cyan"
            style={{ fontFamily: PIXEL_FONT }}
          >
            FAQ (for the confused ones)
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl glass glow-border overflow-hidden animate-border-glow transition-all"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-[#1a0033]/50 transition-colors"
              >
                <span className="font-medium">{faq.q}</span>
                <span
                  className={`text-[#39ff14] text-glow-green transition-transform duration-300 text-xl ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-40 pb-6" : "max-h-0"
                }`}
              >
                <p className="px-6 text-text-secondary text-sm leading-relaxed">
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
    <section className="relative py-32 overflow-hidden">
      {/* Neon grid fragment */}
      <div className="neon-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0014] via-transparent to-[#0a0014]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2
          className="text-xl sm:text-3xl font-bold mb-6 text-glow-pink"
          style={{ fontFamily: PIXEL_FONT }}
        >
          stop being a spectator.
          <br />
          <span className="text-[#00fff0] text-glow-cyan">
            enter your villain arc.
          </span>
        </h2>
        <p className="text-text-secondary text-lg max-w-xl mx-auto mb-10">
          your homiez are already printing W&apos;s without you. genuinely
          embarrassing to sit this one out.
        </p>
        <a
          href={TG_BOT_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-arcade animate-arcade-pulse"
        >
          <TelegramIcon />
          become ungovernable
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
    <footer className="border-t border-[#39ff14]/20 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xl">🐕</span>
            <span
              className="text-xs text-glow-cyan"
              style={{ fontFamily: PIXEL_FONT }}
            >
              Homiez<span className="text-[#39ff14]">.fun</span>
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-text-muted">
            <a
              href={TG_BOT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00fff0] transition-colors"
            >
              Telegram Bot
            </a>
            <span className="text-[#00fff0]/20">|</span>
            <span>&copy; 2025 Homiez.fun — not financial advice lmao</span>
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
      <FloatingStickers />
      <Navbar />
      <HeroSection />
      <LiveBetsTicker />
      <HowItWorks />
      <FeaturesSection />
      <LeaderboardSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
