"use client";

import { useState, useEffect } from "react";

const TG_BOT_LINK = "https://t.me/homiezdotfun_bot";

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
          ? "glass shadow-lg shadow-accent/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-neon-pink flex items-center justify-center text-lg font-bold">
            H
          </div>
          <span
            className="text-xl font-bold tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Homiez<span className="text-accent-light">.fun</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-text-secondary">
          <a href="#how" className="hover:text-text-primary transition-colors">
            How It Works
          </a>
          <a href="#features" className="hover:text-text-primary transition-colors">
            Features
          </a>
          <a href="#bets" className="hover:text-text-primary transition-colors">
            Live Bets
          </a>
          <a href="#faq" className="hover:text-text-primary transition-colors">
            FAQ
          </a>
        </div>
        <a
          href={TG_BOT_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-accent to-neon-pink text-white text-sm font-semibold hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-accent/25"
        >
          Launch Bot
        </a>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(124,58,237,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-pink/15 rounded-full blur-[128px] animate-float"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="absolute top-1/3 right-1/3 w-64 h-64 bg-neon-green/10 rounded-full blur-[128px] animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs text-accent-light mb-8 animate-slide-up">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          we&apos;re so back — 2,400+ bets placed fr fr
        </div>

        {/* Title */}
        <h1
          className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-6 animate-slide-up stagger-1"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Bet Against
          <br />
          <span className="bg-gradient-to-r from-accent via-neon-pink to-accent-gold bg-clip-text text-transparent animate-gradient">
            Your Homiez
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10 animate-slide-up stagger-2 leading-relaxed">
          talk is cheap. prove you&apos;re not all bark. put your bag where your mouth is.
          <br className="hidden sm:block" />
          the{" "}
          <span className="text-accent-light font-medium">
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
            className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-accent to-neon-pink text-white font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-accent/30 animate-pulse-glow"
          >
            <span className="flex items-center gap-3">
              <TelegramIcon />
              let him cook
            </span>
          </a>
          <a
            href="#how"
            className="px-8 py-4 rounded-2xl border border-border hover:border-accent/50 text-text-secondary hover:text-text-primary transition-all font-medium text-lg"
          >
            explain like i&apos;m 5
          </a>
        </div>

        {/* Stats ticker */}
        <div className="mt-16 flex items-center justify-center gap-8 sm:gap-16 animate-slide-up stagger-4">
          {[
            { value: "2.4K+", label: "Bets Placed" },
            { value: "$180K", label: "Bags Moved" },
            { value: "890+", label: "Degens" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-2xl sm:text-3xl font-bold text-text-primary"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
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
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-dark to-transparent" />
    </section>
  );
}

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
          <span className="text-accent text-sm font-mono uppercase tracking-[0.3em]">
            // How It Works
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold mt-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            three steps.{" "}
            <span className="text-text-muted">zero excuses. skill issue if you can&apos;t.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="group relative p-8 rounded-3xl bg-bg-card border border-border hover:border-accent/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/5"
            >
              {/* Step number */}
              <span className="text-6xl font-black text-border group-hover:text-accent/20 transition-colors absolute top-6 right-6">
                {step.num}
              </span>

              <div className="text-4xl mb-6">{step.icon}</div>

              <h3
                className="text-xl font-bold mb-3"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {step.title}
              </h3>

              <p className="text-text-secondary text-sm leading-relaxed">
                {step.desc}
              </p>

              {i < steps.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-text-muted text-2xl">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      title: "Peer-to-Peer Bets",
      desc: "no house edge. no middleman. just you and your homie finding out who's actually him.",
      gradient: "from-accent to-blue-500",
    },
    {
      title: "Group Betting",
      desc: "drop a bet in the gc and watch chaos unfold. your whole squad can get in on it.",
      gradient: "from-neon-pink to-accent-hot",
    },
    {
      title: "Instant Settlement",
      desc: "winnings hit your wallet immediately. speedrun to getting paid.",
      gradient: "from-accent-gold to-orange-500",
    },
    {
      title: "Bet on Anything",
      desc: "sports, crypto, who eats more wings — if you can argue about it at 2am, you can bet on it.",
      gradient: "from-neon-green to-green-500",
    },
    {
      title: "Leaderboard",
      desc: "ratio your friends. track who's the GOAT bettor in your crew. flex responsibly.",
      gradient: "from-purple-500 to-accent",
    },
    {
      title: "Fully in Telegram",
      desc: "no app downloads. no signups. just vibes. open the bot and start printing W's.",
      gradient: "from-blue-400 to-accent-light",
    },
  ];

  return (
    <section id="features" className="relative py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-accent-hot text-sm font-mono uppercase tracking-[0.3em]">
            // Features
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold mt-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            built different.{" "}
            <span className="bg-gradient-to-r from-accent-hot to-accent-gold bg-clip-text text-transparent">
              by degens.
            </span>{" "}
            for degens.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-3xl bg-bg-card border border-border hover:border-border-glow/30 transition-all duration-500 overflow-hidden"
            >
              {/* Hover gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}
              />

              <div
                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-80 mb-6 flex items-center justify-center`}
              >
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>

              <h3
                className="text-lg font-bold mb-3"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {feature.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LiveBetsSection() {
  const bets = [
    {
      id: 1,
      bet: "BTC hits $150K before July",
      amount: "$500",
      status: "live",
      time: "2h ago",
    },
    {
      id: 2,
      bet: "Celtics win the Finals",
      amount: "$200",
      status: "live",
      time: "5h ago",
    },
    {
      id: 3,
      bet: "SOL flips ETH market cap by 2027",
      amount: "$1,000",
      status: "live",
      time: "1d ago",
    },
    {
      id: 4,
      bet: "I'll lose 20lbs by March",
      amount: "$150",
      status: "settled",
      time: "3d ago",
    },
    {
      id: 5,
      bet: "GPT-5 drops before June",
      amount: "$300",
      status: "live",
      time: "12h ago",
    },
  ];

  return (
    <section id="bets" className="relative py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-pink/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-neon-green text-sm font-mono uppercase tracking-[0.3em]">
            // Live Feed
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold mt-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            What the homiez are{" "}
            <span className="text-neon-green">beefing about</span>
          </h2>
        </div>

        <div className="space-y-4">
          {bets.map((bet) => (
            <div
              key={bet.id}
              className="group p-6 rounded-2xl bg-bg-card border border-border hover:border-accent/20 transition-all duration-300 hover:bg-bg-card-hover"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                        bet.status === "live"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-text-muted/20 text-text-muted"
                      }`}
                    >
                      {bet.status === "live" ? "● LIVE" : "SETTLED"}
                    </span>
                    <span className="text-text-muted text-xs">{bet.time}</span>
                  </div>

                  <p className="text-text-primary font-medium">
                    &quot;{bet.bet}&quot;
                  </p>
                </div>

                <div className="text-right">
                  <div
                    className="text-xl font-bold text-accent-gold"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {bet.amount}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={TG_BOT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-accent/30 text-accent-light hover:bg-accent/10 transition-all text-sm font-medium"
          >
            see the full degenerate feed
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

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
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent" />

      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent-gold text-sm font-mono uppercase tracking-[0.3em]">
            // FAQ
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold mt-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            FAQ (for the confused ones)
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl bg-bg-card border border-border overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-bg-card-hover transition-colors"
              >
                <span className="font-medium">{faq.q}</span>
                <span
                  className={`text-accent-light transition-transform duration-300 text-xl ${
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

function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-accent/5 to-bg-dark" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2
          className="text-4xl sm:text-6xl font-black mb-6"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          stop being a spectator.
          <br />
          <span className="bg-gradient-to-r from-accent via-neon-pink to-accent-gold bg-clip-text text-transparent animate-gradient">
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
          className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-accent to-neon-pink text-white font-bold text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-accent/40 animate-pulse-glow"
        >
          <TelegramIcon />
          become ungovernable
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-neon-pink flex items-center justify-center text-sm font-bold">
              H
            </div>
            <span
              className="font-bold"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Homiez<span className="text-accent-light">.fun</span>
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-text-muted">
            <a
              href={TG_BOT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text-primary transition-colors"
            >
              Telegram Bot
            </a>
            <span className="text-border">|</span>
            <span>&copy; 2025 Homiez.fun — not financial advice lmao</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

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

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <FeaturesSection />
      <LiveBetsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
