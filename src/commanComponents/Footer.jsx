// Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 text-white pt-24">
      {/* Top wave divider (pointing downward into the footer) */}
      <div className="absolute -top-[1px] left-0 right-0 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[120px] md:h-[150px] block"
          preserveAspectRatio="none"
          aria-hidden
        >
          {/* Inverted wave: white -> footer background */}
          <path
            d="M0,0 C120,90 360,90 540,60 C720,30 960,30 1140,60 C1320,90 1440,90 1440,90 L1440,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* CTA block (centered) */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="bg-transparent -mt-8 md:-mt-12">
          <div className="rounded-lg bg-slate-900/95 border border-slate-800 p-10 md:p-14 shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">

              {/* Text */}
              <div className="text-center md:text-left flex-1">
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  How do I join the portfolio?
                </h2>
                <p className="mt-2 text-slate-300 max-w-2xl">
                  The first step to becoming a partner is to fill out the form on our Business Proposals page with
                  details about your business or proposal — we’ll be in touch with next steps. Ready to get started?
                  Submit your details now to begin the process.
                </p>
              </div>

              {/* CTA */}
              <div className="flex-shrink-0">
                <a
                  href="/google"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#0ea5a4] to-[#ff7a66] text-white font-semibold shadow-lg hover:scale-[1.02] transition-transform"
                >
                  Get Started
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Small footer details */}
          <div className="mt-8 border-t border-slate-800 pt-6 text-center md:text-left text-sm text-slate-400">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3">
              <div>© {new Date().getFullYear()} Idea Town Investments. All rights reserved.</div>
              {/* <div className="flex items-center gap-4">
                <a href="/privacy" className="hover:underline text-slate-300">Privacy</a>
                <span className="hidden md:inline-block text-slate-600">|</span>
                <a href="/terms" className="hover:underline text-slate-300">Terms</a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
