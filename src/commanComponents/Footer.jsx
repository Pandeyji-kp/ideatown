// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-blue-100 text-slate-800 pt-24 overflow-hidden">

      {/* TOP WAVE DIVIDER */}
      <div className="absolute -top-[1px] left-0 right-0 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[120px] md:h-[150px] block"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0,0 C120,90 360,90 540,60 C720,30 960,30 1140,60 C1320,90 1440,90 1440,90 L1440,120 L0,120 Z"
            fill="#e0f2fe"
          />
        </svg>
      </div>

      {/* CTA CARD */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">

        <div className="-mt-8 md:-mt-12">
          <div
            className="rounded-2xl bg-white/80 backdrop-blur-md border border-blue-200 
                       p-10 md:p-14 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">

              {/* TEXT */}
              <div className="text-center md:text-left flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 leading-snug">
                  Ready to Join Our Portfolio?
                </h2>

                <p className="mt-3 text-slate-700 text-base md:text-lg max-w-2xl">
                  Submit your business proposal and let’s explore how we can build, scale, 
                  and grow together. We review every submission with a founder-first mindset.
                </p>
              </div>

              {/* CTA BUTTON */}
              <div className="flex-shrink-0">
                <Link
                  to="/google"
                  className="inline-flex items-center justify-center gap-3 px-7 py-3.5 
                             rounded-full bg-gradient-to-r from-blue-500 to-blue-700 
                             text-white font-semibold shadow-lg hover:scale-[1.03] 
                             active:scale-[0.98] transition-transform"
                >
                  Get Started
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* FOOTER BOTTOM */}
          <div className="mt-10 border-t border-blue-200 pt-6 text-center md:text-left text-sm text-slate-600">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row 
                            items-center justify-between gap-3">
              <div>© {new Date().getFullYear()} Idea Town Investments. All rights reserved.</div>

              {/* <div className="flex items-center gap-4 text-slate-600">
                <Link to="/privacy" className="hover:text-blue-700 transition">Privacy Policy</Link>
                <span className="hidden md:inline">•</span>
                <Link to="/terms" className="hover:text-blue-700 transition">Terms & Conditions</Link>
              </div> */}
            </div>
          </div>

        </div>

      </div>

      {/* BOTTOM SMOOTH BLUE GRADIENT */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-200 to-transparent opacity-80" />
    </footer>
  );
}
