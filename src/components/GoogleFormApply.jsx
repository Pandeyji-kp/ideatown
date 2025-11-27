// StylishGoogleFormApply.jsx
import React, { useRef, useState, useEffect } from "react";

export default function StylishGoogleFormApply() {
  const SRC =
    "https://docs.google.com/forms/d/e/1FAIpQLSck7RzH1oLCUWFuhDU8o9vjL_wbN2t9UJeFKwQMbTejTEDfKQ/viewform?embedded=true";

  const iframeWrapRef = useRef(null);
  const [showThanks, setShowThanks] = useState(false);

  // Optional: Auto show message when scrolling past form
  useEffect(() => {
    let triggered = false;
    function onScroll() {
      if (showThanks || triggered) return;
      const el = iframeWrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.bottom < 0) {
        triggered = true;
        setShowThanks(true);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showThanks]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-100/50 to-white py-10 relative overflow-hidden">

      {/* Decorative soft-blue blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">

        {/* Left Blue Blob */}
        <svg
          className="absolute -left-40 top-10 opacity-25 blur-3xl"
          width="450"
          height="450"
        >
          <circle cx="225" cy="225" r="180" fill="#bfdbfe" />
        </svg>

        {/* Right Blue Blob */}
        <svg
          className="absolute -right-40 bottom-10 opacity-30 blur-2xl"
          width="420"
          height="420"
        >
          <circle cx="210" cy="210" r="150" fill="#dbeafe" />
        </svg>

      </div>

      <div className="max-w-5xl mx-auto px-6">

        {/* HEADER CARD */}
        <header className="relative rounded-2xl overflow-hidden shadow-xl">
          
          {/* Background image - classy blue pattern */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/abstract-blue-smooth-gradient-modern-background.jpg')",
            }}
          />

          {/* Soft overlay for readability */}
          <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />

          {/* TEXT CONTENT */}
          <div className="relative z-10 text-center px-6 py-12 md:py-16">
            <span className="inline-block px-4 py-2 rounded-full bg-white/80 text-blue-700 font-semibold text-sm shadow">
              Investment Application
            </span>

            <h1 className="mt-6 text-3xl md:text-4xl font-extrabold text-slate-900">
              Business Investment Application
            </h1>

            <p className="mt-3 text-slate-700 max-w-2xl mx-auto text-base md:text-lg">
             Submit your proposal — our investment team will carefully review every application and respond within 48 hours.
            </p>
          </div>
        </header>

        {/* FORM CARD */}
        <main className="mt-10">
          <div className="bg-white rounded-2xl overflow-hidden border border-blue-200/40 shadow-lg">

            {/* Responsive iframe height */}
            <div
              ref={iframeWrapRef}
              className="relative"
              style={{
                height: "1300px", // mobile fallback (Google forms are long)
              }}
            >
              <iframe
                title="Business Investment Application Form"
                src={SRC}
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                sandbox="allow-forms allow-scripts allow-same-origin allow-popups"
              />
            </div>

          </div>

          {/* Info text */}
          <p className="mt-5 text-xs text-center text-slate-500">
            Your responses are securely stored via Google Forms.
          </p>
        </main>
      </div>
    </div>
  );
}
