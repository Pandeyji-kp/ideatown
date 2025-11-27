// AboutUs.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutUs({
  bgUrl = "/f93aad411795f448b23fe483a8522616.jpg",
}) {
  /* -------------------------------------------------------------------------- */
  /* DATA                                                                       */
  /* -------------------------------------------------------------------------- */

  const items = [
    {
      title: "Who We Are",
      text: (
        <>
          <b>IDEA TOWN Investments</b> is a global investment firm dedicated to
          empowering high-growth startups and emerging businesses using
          balance-sheet capital — not debt. Our involvement goes far beyond
          capital. We provide strategic guidance, operational support, and
          hands-on growth leadership to help every portfolio company reach its
          full potential.
        </>
      ),
      image: "/aad56012be20badfec41abdffd7af819.jpg",
    },
    {
      title: "A Proven Track Record",
      text: (
        <>
          <p>
            Our majority-stake model (50% +1) ensures seamless integration,
            faster decision-making, and long-term stability. We continuously
            support companies across industry verticals including:
          </p>

          <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-700">
            <li>3D Virtual Environments</li>
            <li>Customer Experience Management</li>
            <li>Performance Marketing</li>
            <li>E-Commerce & Retail</li>
            <li>Fulfilment & Distribution</li>
            <li>Software & Web Development</li>
            <li>ISP Solutions</li>
            <li>Technology & IT Services</li>
          </ul>
        </>
      ),
      images: [
        "/986bff98d019390f2d48e829eba0dd35.jpg",
        "/4e6b7e8783e67d822419b8577ec16e86.jpg",
      ],
    },
    {
      title: "Investment Ethos",
      text: (
        <>
          At Idea Town Investments, we believe in purpose-driven,
          innovation-focused, Shariah-compliant businesses. Our goal is to
          empower visionary founders to shape the future while creating
          long-term economic value and opportunities.
        </>
      ),
      image: "/4e6b7e8783e67d822419b8577ec16e86.jpg",
    },
    {
      title: "Highly Experienced Leadership",
      text: (
        <>
          Our team consists of seasoned operators and investors with decades of
          experience across technology, telecom, CX, software, manufacturing,
          retail, distribution, and more. We study each venture in detail and
          tailor our involvement for maximum impact.
        </>
      ),
      image: "/80a54a73303bdf456eeb3b4d460328a2.jpg",
    },
    {
      title: "Our Values",
      text: `Founder First — We prioritize long-term founder success.
Integrity — Ethical, transparent, responsible decision-making.
Long-Term Vision — We partner with founders to build enduring companies.`,
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=60",
    },
  ];

  /* -------------------------------------------------------------------------- */
  /* ANIMATION CSS                                                              */
  /* -------------------------------------------------------------------------- */

  const AnimationStyles = (
    <style>{`
      /* HERO IMAGE FLOAT + ENTER */
      .hero-img {
        transform: translateY(18%) scale(1.14);
        animation:
          heroEnter 1.2s cubic-bezier(.22,.86,.31,1) forwards,
          heroFloat 13s ease-in-out 1.1s infinite alternate;
        opacity: 0;
      }

      @keyframes heroEnter {
        0% { transform: translateY(28%) scale(1.18); opacity: 0; }
        60% { transform: translateY(12%) scale(1.12); opacity: 0.85; }
        100% { transform: translateY(0%) scale(1.06); opacity: 1; }
      }

      @keyframes heroFloat {
        0% { transform: translateY(0%) scale(1.06); }
        100% { transform: translateY(3%) scale(1.08); }
      }

      /* WAVE REVEAL ANIMATION */
      .wave-path {
        transform: translateY(28px);
        opacity: 0;
        animation: waveReveal 1s cubic-bezier(.22,.86,.31,1) forwards 500ms;
      }

      @keyframes waveReveal {
        0% { transform: translateY(40px); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
      }

      /* BLUE GRADIENT OVERLAY */
      .hero-overlay {
        background: linear-gradient(
          180deg,
          rgba(15, 23, 42, 0.55) 0%,
          rgba(15, 23, 42, 0.38) 40%,
          rgba(15, 23, 42, 0.18) 100%
        );
      }
    `}</style>
  );

  /* -------------------------------------------------------------------------- */
  /* JSX RETURN                                                                 */
  /* -------------------------------------------------------------------------- */

  return (
    <section className="w-full text-slate-900">
      {AnimationStyles}

      {/* HERO SECTION */}
      <div className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">

        {/* BG IMAGE (Always Full-Cover – Option A) */}
        <img
          src={bgUrl}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover hero-img"
        />

        {/* Overlay */}
        <div className="absolute inset-0 hero-overlay"></div>

        {/* HERO CONTENT */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
              About <span className="text-blue-200">Us</span>
            </h1>

            <p className="mt-4 max-w-2xl mx-auto text-white/90 text-lg md:text-xl font-light">
              We empower founders with capital, strategy & deep operational
              expertise to build tomorrow’s market leaders.
            </p>

            <Link
              to="/google"
              className="
                mt-8 inline-flex items-center justify-center
                px-7 py-3.5 rounded-xl font-semibold
                bg-gradient-to-r from-blue-500 to-blue-700 text-white
                shadow-lg hover:scale-[1.03] transition-transform
              "
            >
              Apply Now →
            </Link>
          </div>
        </div>

        {/* BOTTOM WAVE */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg
            className="block w-full h-28 md:h-40 wave-path"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="M0,160L40,144C80,128,160,96,240,80C320,64,400,64,480,85.3C560,107,640,149,720,154.7C800,160,880,128,960,106.7C1040,85,1120,75,1200,101.3C1280,128,1360,192,1400,218.7L1440,245V320H0Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* CONTENT SECTIONS */}
      <div className="space-y-20 md:space-y-28 max-w-6xl mx-auto px-6 py-16 md:py-24">
        {items.map((item, idx) => {
          const isEven = idx % 2 === 0;
          const contentInitial = { x: isEven ? 120 : -120, opacity: 0 };
          const imageInitial = { x: isEven ? -120 : 120, opacity: 0 };

          return (
            <section key={idx}>
              <div
                className={`flex flex-col md:flex-row items-center gap-12 
                ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* IMAGE */}
                <motion.div
                  className="md:w-1/2 w-full flex flex-col gap-6"
                  initial={imageInitial}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7 }}
                >
                  {(Array.isArray(item.images)
                    ? item.images
                    : [item.image]
                  ).map((img, i) => (
                    <div key={i} className="relative group h-[280px] md:h-[380px]">
                      <img
                        src={img}
                        className="w-full h-full object-cover rounded-xl shadow-xl 
                        transition-transform group-hover:scale-[1.03]"
                      />
                    </div>
                  ))}
                </motion.div>

                {/* TEXT */}
                <motion.div
                  className="md:w-1/2 w-full"
                  initial={contentInitial}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.05 }}
                >
                  <div className="p-8 rounded-2xl bg-white/80 backdrop-blur-md border border-blue-200 shadow-xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                      {item.title}
                    </h2>
                    <div className="text-lg text-slate-700 leading-relaxed">
                      {item.text}
                    </div>
                  </div>

                  {idx === items.length - 1 && (
                    <div className="mt-8">
                      <Link
                        to="/google"
                        className="inline-flex items-center px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold shadow-lg hover:scale-[1.03] transition-transform"
                      >
                        Get Started →
                      </Link>
                    </div>
                  )}
                </motion.div>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
