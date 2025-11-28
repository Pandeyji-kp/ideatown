// GrowthHero.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function GrowthHero({
  bgUrl = "/2f72e5129bf0ae698e996dd5a43a8ee5.jpg", // keep inside public folder
}) {
  // counter targets
  const targets = { capitalCr: 100, portfolioCount: 25, founderExp: 25 };

  const [counts, setCounts] = useState({
    capital: 0,
    portfolio: 0,
    founder: 0,
  });

  // counter animation
  const animateValue = (start, end, duration, setter, key) => {
    const startTime = performance.now();
    const step = (now) => {
      const elapsed = Math.min(now - startTime, duration);
      const t = elapsed / duration;
      const ease = 1 - Math.pow(1 - t, 3);
      const value = Math.round(start + (end - start) * ease);
      setter((prev) => ({ ...prev, [key]: value }));
      if (elapsed < duration) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  useEffect(() => {
    const duration = 1200;
    animateValue(0, targets.capitalCr, duration, setCounts, "capital");
    animateValue(0, targets.portfolioCount, duration, setCounts, "portfolio");
    animateValue(0, targets.founderExp, duration, setCounts, "founder");
  }, []);

  const formattedCapital = new Intl.NumberFormat("en-IN").format(
    counts.capital
  );

  return (
    <main className="w-full overflow-hidden">
      {/* ----------------------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* ----------------------------------------------------------------- */}
      <header className="relative w-full min-h-[680px] sm:min-h-[720px] flex items-center">
        {/* Animation */}
        <style>{`
          .hero-slide {
            transform: translateY(28%) scale(1.12);
            animation: heroSlide 1.2s cubic-bezier(.22,.86,.31,1) forwards;
            opacity: 0.8;
          }
          @keyframes heroSlide {
            0% { transform: translateY(28%) scale(1.12); opacity: 0.7; }
            60% { transform: translateY(6%) scale(1.06); opacity: 0.9; }
            100% { transform: translateY(0) scale(1); opacity: 1; }
          }
        `}</style>

        {/* Background image */}
        <img
          src={bgUrl}
          alt="Hero Background"
          className="hero-slide absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* CONTENT */}
        <div className="relative z-10 px-4 w-full flex items-center justify-center text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-xl">
              Build. Scale. Dominate.
            </h1>

            <p className="mt-4 text-white/90 text-base sm:text-lg md:text-xl leading-relaxed">
              Strategic capital meets operational excellence. We help founders
              accelerate growth with funding + expertise.
            </p>

            {/* Badges */}
            <div className="mt-5 flex flex-wrap justify-center gap-2 sm:gap-3">
              {[
                "✓ 48-Hour Initial Review",
                "✓ Founder-First Approach",
                "✓ No Hidden Terms",
              ].map((t, i) => (
                <span
                  key={i}
                  className="bg-white/90 backdrop-blur-sm text-slate-900 text-xs sm:text-sm font-medium px-3 py-2 rounded-full shadow-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                to="/google"
                className="inline-flex items-center gap-2 px-6 py-3 sm:px-7 sm:py-3 rounded-lg bg-black text-white font-semibold shadow-xl hover:scale-[1.03] active:scale-[0.98] transition"
              >
                Submit Your Proposal →
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                {
                  value: `₹${formattedCapital} Cr+`,
                  label: "Total Capital Invested",
                },
                { value: `${counts.portfolio}+`, label: "Portfolio Companies" },
                {
                  value: `${counts.founder}+`,
                  label: "Founder Experience (Years)",
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/90 backdrop-blur-sm border border-blue-200 shadow-md rounded-xl p-5"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-blue-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-700 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave bottom */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full h-[120px]"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#e0f2fe"
            d="M0,64 C120,120 360,120 540,96 C720,72 960,72 1140,96 C1320,120 1440,120 1440,120 L1440,140 L0,140 Z"
          />
        </svg>
      </header>

      {/* ----------------------------------------------------------------- */}
      {/* WHY CHOOSE US (Light Blue Wave Background) */}
      {/* ----------------------------------------------------------------- */}
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/wave-blue-light-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-blue-50/70 backdrop-blur-sm" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-900">Why Choose Us</h2>
            <p className="mt-3 text-slate-600 text-lg max-w-2xl mx-auto">
              Smart Capital + Operational expertise = Hypergrowth for founders.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Smart Capital",
                desc: "Flexible structures including equity, revenue share, or hybrid models. ",
              },
              {
                title: "Growth Engineering",
                desc: "GTM playbooks, hiring blueprints, and financial operational support.",
              },
              {
                title: "Hands-On Partnership",
                desc: "Dedicated growth manager + Quarterly sessions.",
              },
              {
                title: "Exit-Ready Focus",
                desc: "Scale fast and prep for future exits.",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer bg-blue-900"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.15)), url('/17248-abstract-light-orange-wave-background-blurred-application-wallpaper.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* Content */}
                <div className="relative p-6 min-h-[160px] flex flex-col justify-between">
                  <div>
                    <span className="bg-white/90 px-2 py-1 rounded font-semibold mb-2">{p.title}</span>
                    <p className="text-white/90 text-sm mt-1">{p.desc}</p>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-40 transition" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* SECTORS WE FUEL (Light Blue Wave Background) */}
      {/* ----------------------------------------------------------------- */}
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/wave-blue-soft-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-blue-50/70 backdrop-blur-sm" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold text-blue-900">
              Sectors We Fuel
            </h3>
            <p className="mt-3 text-slate-700 max-w-2xl mx-auto">
              Tech-enabled, consumer brands, essential services & emerging
              markets.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                tag: "Tech",
                title: "Tech-Enabled Businesses",
                subtitle: "SaaS | FinTech | HealthTech | AI",
              },
              {
                tag: "Consumer",
                title: "Consumer Brands",
                subtitle: "D2C | Q-Commerce | Sustainability",
              },
              {
                tag: "Services",
                title: "Essential Services",
                subtitle: "Logistics | B2B | Marketplace",
              },
              {
                tag: "Emerging",
                title: "Emerging Markets",
                subtitle: "CleanTech | AgriTech | Social Impact",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer bg-blue-900"
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.15)), url('/17248-abstract-light-orange-wave-background-blurred-application-wallpaper.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                <div className="relative p-6 min-h-[160px] flex flex-col justify-between">
                  <span className="text-xs bg-white/90 px-2 py-1 rounded font-semibold">
                    {s.tag}
                  </span>
                  <div>
                    <h4 className="text-white text-lg font-bold">{s.title}</h4>
                    <p className="text-white/90 text-sm mt-1">{s.subtitle}</p>
                  </div>
                </div>

                {/* hover overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-40 transition" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
