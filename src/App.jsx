// GrowthHero.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function GrowthHero({
  bgUrl = "/7bb7471424350e75d03e6122f5033a5c.jpg", // your hero image in /public
}) {
  // counter targets
  const targets = { capitalCr: 100, portfolioCount: 25, founderExp: 25 };

  const [counts, setCounts] = useState({
    capital: 0,
    portfolio: 0,
    founder: 0,
  });

  // animation logic
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
    <main className="">
      {/* -------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* -------------------------------------------------- */}
      <header className="relative w-full min-h-[720px] h-[90vh] overflow-hidden">

        {/* animation */}
        <style>{`
          .hero-slide {
            transform: translateY(28%) scale(1.12);
            animation: heroSlide 1200ms cubic-bezier(.22,.86,.31,1) forwards;
            will-change: transform, opacity;
            opacity: 0.85;
          }
          @keyframes heroSlide {
            0% { transform: translateY(28%) scale(1.12); opacity: 0.7; }
            60% { transform: translateY(6%) scale(1.06); opacity: 0.9; }
            100% { transform: translateY(0%) scale(1.00); opacity: 1; }
          }
        `}</style>

        {/* Background image */}
        <img
          src={bgUrl}
          alt="Hero Background"
          className="hero-slide absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl pt-8 font-extrabold leading-tight drop-shadow-lg">
              Build. Scale. Dominate.
            </h1>

            <p className="mt-4 text-white/90 text-lg sm:text-xl">
              Strategic capital meets operational excellence. We fuel ambitious
              businesses with the funding and expertise to accelerate growth.
            </p>

            {/* Badges */}
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {[
                "✓ 48-Hour Initial Review",
                "✓ Founder-First Approach",
                "✓ No Hidden Terms",
              ].map((t, i) => (
                <span
                  key={i}
                  className="bg-white/90 text-slate-900 text-sm font-medium px-3 py-2 rounded-full shadow-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link
                to="/google"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-black text-white font-semibold shadow-xl hover:scale-[1.03] transition"
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
                { value: `${counts.founder}+`, label: "Founder Experience" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg p-5 text-center shadow-md"
                >
                  <div className="text-2xl md:text-3xl font-extrabold text-slate-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full h-[120px]"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,64 C120,120 360,120 540,96 C720,72 960,72 1140,96 C1320,120 1440,120 1440,120 L1440,140 L0,140 Z"
          />
        </svg>
      </header>

      {/* -------------------------------------------------- */}
      {/* WHY CHOOSE US SECTION */}
      {/* -------------------------------------------------- */}
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/pngtree-abstract-white-paper-waves-elegant-3d-background-design-image_17348794.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">Why Choose Us</h2>
            <p className="mt-3 text-slate-600 text-lg max-w-2xl mx-auto">
              We combine capital with hands-on operational expertise to help
              founders scale.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Smart Capital",
                desc: "Flexible structures including equity, revenue share or hybrid models.",
              },
              {
                title: "Growth Engineering",
                desc: "GTM playbooks, hiring blueprints & financial operational support.",
              },
              {
                title: "Hands-On Partnership",
                desc: "Dedicated growth manager + quarterly strategy sessions.",
              },
              {
                title: "Exit-Ready Focus",
                desc: "We help you scale fast while preparing for future exits.",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="bg-white/90 backdrop-blur-sm border shadow-sm rounded-xl p-6 flex flex-col"
              >
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm text-slate-600 flex-grow">{p.desc}</p>
                <span className="mt-4 inline-block px-3 py-1 text-xs bg-white border rounded-full">
                  Partner-first
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* SECTORS WE FUEL */}
      {/* -------------------------------------------------- */}
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/pngtree-orange-wave-abstract-background-picture-image_1455036.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-slate-900">
              Sectors We Fuel
            </h3>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
              Tech-Enabled, Consumer, Essential Services & Emerging Markets.
            </p>
          </div>

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
                className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(2,6,23,0.45), rgba(2,6,23,0.15)), url('/17248-abstract-light-orange-wave-background-blurred-application-wallpaper.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="p-6 min-h-[160px] flex flex-col justify-between">
                  <span className="text-xs bg-white/90 px-2 py-1 rounded font-semibold">
                    {s.tag}
                  </span>
                  <div>
                    <h4 className="text-white text-lg font-bold">{s.title}</h4>
                    <p className="text-white/90 text-sm mt-1">{s.subtitle}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-40 transition" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
