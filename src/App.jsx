// GrowthHero.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/**
 * GrowthHero.jsx
 * - Full-screen hero (sliding background image from /mnt/data/...jpg)
 * - Wave bottom divider
 * - Animated counters
 * - Clean "Why Choose Us" cards (equal height)
 * - Polished "Sectors We Fuel" tiles
 *
 * Usage:
 *  import GrowthHero from './GrowthHero.jsx'
 */

export default function GrowthHero({
  logoSrc = "/mnt/data/generated-image-20.png",
  bgUrl = "/7bb7471424350e75d03e6122f5033a5c.jpg",
}) {
  // counter targets
  const targets = { capitalCr: 100, portfolioCount: 25, founderExp: 25 };

  // counts state
  const [counts, setCounts] = useState({ capital: 0, portfolio: 0, founder: 0 });

  // animate numeric value with requestAnimationFrame
  const animateValue = (start, end, duration, setter, key) => {
    const startTime = performance.now();
    const step = (now) => {
      const elapsed = Math.min(now - startTime, duration);
      const t = elapsed / duration;
      const ease = 1 - Math.pow(1 - t, 3); // easeOutCubic
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
    // no cleanup needed; completes quickly
  }, []);

  const formattedCapital = new Intl.NumberFormat("en-IN").format(counts.capital);

  return (
    <main className="w-full">
      {/* HERO */}
      <header className="relative w-full h-screen min-h-[680px] overflow-hidden">
        {/* Sliding background image */}
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

        <img
          src={bgUrl}
          alt="Hero background"
          className="hero-slide absolute inset-0 w-full h-full object-cover object-center"
          decoding="async"
        />

        {/* dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/40" />

        {/* hero content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 h-full flex items-center">
          <div className="w-full text-center">

            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
              Build. Scale. Dominate.
            </h1>

            <p className="mt-4 max-w-3xl mx-auto text-white/90 text-lg md:text-xl">
              Strategic capital meets operational excellence. We fuel ambitious businesses with the funding and expertise to accelerate from growth to market leadership.
            </p>

            {/* trust badges */}
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <span className="bg-white/90 text-slate-900 text-sm font-medium px-3 py-2 rounded-full shadow-sm">✓ 48-Hour Initial Review</span>
              <span className="bg-white/90 text-slate-900 text-sm font-medium px-3 py-2 rounded-full shadow-sm">✓ Founder-First Approach</span>
              <span className="bg-white/90 text-slate-900 text-sm font-medium px-3 py-2 rounded-full shadow-sm">✓ No Hidden Terms</span>
            </div>

            {/* CTA */}
            <div className="mt-8 flex justify-center">
              <Link
                to="/google"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-md bg-black text-white font-semibold shadow-xl hover:scale-[1.02] transition-transform"
              >
                Submit Your Proposal
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* stats row */}
            <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-5 text-center shadow-md">
                <div className="text-2xl md:text-3xl font-extrabold text-slate-900">₹{formattedCapital}<span className="text-base ml-1 text-slate-600">Cr+</span></div>
                <div className="mt-1 text-sm text-slate-600">Total Capital Invested</div>
              </div>

              <div className="bg-white rounded-lg p-5 text-center shadow-md">
                <div className="text-2xl md:text-3xl font-extrabold text-slate-900">{counts.portfolio}+</div>
                <div className="mt-1 text-sm text-slate-600">Portfolio Companies</div>
              </div>

              <div className="bg-white rounded-lg p-5 text-center shadow-md">
                <div className="text-2xl md:text-3xl font-extrabold text-slate-900">{counts.founder}+</div>
                <div className="mt-1 text-sm text-slate-600">Founder Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 140" className="w-full h-[140px]" preserveAspectRatio="none">
            <path fill="#ffffff" d="M0,64 C120,120 360,120 540,96 C720,72 960,72 1140,96 C1320,120 1440,120 1440,120 L1440,140 L0,140 Z" />
          </svg>
        </div>
      </header>

      {/* MAIN CONTENT: Why Choose Us */}
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('public/pngtree-abstract-white-paper-waves-elegant-3d-background-design-image_17348794.jpg')", // CHANGE IMAGE
        }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">Why Choose Us</h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
              We combine capital with hands-on operational expertise to help ambitious founders scale.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {[
              { title: "Smart Capital", desc: "Flexible capital: equity, revenue share or hybrid structures tailored to your goals.", icon: "M3 12h18 M6 8v8" },
              { title: "Growth Engineering", desc: "GTM playbooks, hiring blueprints, tech and financial operational support.", icon: "M3 17l6-6 4 4 8-8" },
              { title: "Hands-On Partnership", desc: "A dedicated growth manager and quarterly strategy sessions — we work alongside you.", icon: "circle" },
              { title: "Exit-Ready Focus", desc: "Build for scale or acquisition — we align your growth to future exits.", icon: "M9 8l3-3 3 3" },
            ].map((p, i) => (
              <article
                key={i}
                className="flex flex-col h-full bg-white/90 backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-none h-12 w-12 rounded-md bg-slate-900 text-white flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path
                        d={p.icon === "circle" ? "M12 8a4 4 0 1 0 0 0" : p.icon}
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                    <p className="mt-3 text-sm text-slate-600">{p.desc}</p>
                  </div>
                </div>

                <div className="mt-auto pt-4">
                  <span className="inline-block px-3 py-1 text-xs rounded-full bg-white text-slate-700 border border-gray-200">
                    Partner-first
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* SECTORS */}
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('public/pngtree-orange-wave-abstract-background-picture-image_1455036.jpg')", // CHANGE IMAGE
        }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-16">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-slate-900">Sectors We Fuel</h3>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
              Tech-Enabled, Consumer, Essential Services, and Emerging Markets.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { tag: "Tech", title: "Tech-Enabled Businesses", subtitle: "SaaS | Fintech | HealthTech | EdTech | AI/ML" },
              { tag: "Consumer", title: "Consumer Brands", subtitle: "D2C | Quick Commerce | Sustainable Products" },
              { tag: "Services", title: "Essential Services", subtitle: "Logistics | Supply Chain | B2B Marketplaces" },
              { tag: "Emerging", title: "Emerging Markets", subtitle: "Clean Energy | AgriTech | Social Impact" },
            ].map((s, i) => (
              <a
                key={i}
                href="#"
                className="group block relative rounded-xl overflow-hidden shadow-lg"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(2,6,23,0.46), rgba(2,6,23,0.24)), url('/sector-thumbnail.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="p-6 min-h-[160px] flex flex-col justify-between">
                  <span className="inline-block px-2 py-1 text-xs font-semibold bg-white/90 rounded-md text-slate-900">
                    {s.tag}
                  </span>
                  <div>
                    <h4 className="text-lg font-bold text-white">{s.title}</h4>
                    <p className="mt-2 text-sm text-white/90">{s.subtitle}</p>
                  </div>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity bg-black/10" />
              </a>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
