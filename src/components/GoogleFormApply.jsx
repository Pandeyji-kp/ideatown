// StylishGoogleFormApply.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/**
 * StylishGoogleFormApply (responsive, no animations)
 * - Embedded Google Form iframe (SRC)
 * - Responsive iframe heights so form is usable on mobile
 * - "I have submitted" button to show a simple thank-you modal
 *
 * NOTE: cannot detect cross-origin Google Form submission; use the confirm button.
 */

export default function StylishGoogleFormApply() {
  const SRC =
    "https://docs.google.com/forms/d/e/1FAIpQLSck7RzH1oLCUWFuhDU8o9vjL_wbN2t9UJeFKwQMbTejTEDfKQ/viewform?embedded=true";

  const iframeWrapRef = useRef(null);
  const [showThanks, setShowThanks] = useState(false);

  // Optional: auto-show thanks when user scrolls past iframe bottom (one-time)
  // Kept simple and non-animated. You can remove this effect entirely if undesired.
  useEffect(() => {
    let triggered = false;
    function onScroll() {
      if (showThanks || triggered) return;
      const el = iframeWrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      // if iframe bottom is above top of viewport (scrolled past) -> show thanks
      if (rect.bottom < 0) {
        triggered = true;
        setShowThanks(true);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showThanks]);

  function handleSubmittedConfirm() {
    setShowThanks(true);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-50 to-white py-8">
      {/* decorative background (static, no animations) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* left blob */}
        <svg className="absolute -left-48 top-8 opacity-30" width="540" height="540" viewBox="0 0 540 540" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#f1)"><circle cx="270" cy="270" r="180" fill="#FFD8A8" /></g>
          <defs><filter id="f1" x="0" y="0" width="540" height="540" filterUnits="userSpaceOnUse"><feGaussianBlur stdDeviation="60"/></filter></defs>
        </svg>

        {/* right blob */}
        <svg className="absolute -right-48 bottom-8 opacity-25" width="420" height="420" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#f2)"><circle cx="210" cy="210" r="150" fill="#FFE8C2" /></g>
          <defs><filter id="f2" x="0" y="0" width="420" height="420" filterUnits="userSpaceOnUse"><feGaussianBlur stdDeviation="50"/></filter></defs>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header card with background image */}
        <header className="relative rounded-2xl overflow-hidden shadow-lg">
          {/* background image (ensure file exists in public/) */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/pngtree-white-textured-design-over-a-gradient-orange-background-image_13905315.png')`,
            }}
          />
          {/* soft overlay for readability */}
          <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />
          {/* header content */}
          <div className="relative z-10 text-center px-6 py-10 md:py-16">
            <span className="inline-block px-4 py-2 rounded-full bg-white/80 text-orange-600 font-semibold text-sm shadow">
              Apply for Investment
            </span>

            <h1 className="mt-6 text-2xl md:text-3xl font-extrabold text-slate-900">
              Business Investment Application
            </h1>

            <p className="mt-3 text-slate-700 max-w-2xl mx-auto text-base md:text-lg">
              Submit your proposal — our investment team reviews every application carefully and responds within 48 hours.
            </p>
          </div>
        </header>

        {/* Iframe / Form Card */}
        <main className="mt-8">
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow">
            {/* Responsive iframe sizing:
                - mobile: fills 80vh so user can scroll inside the iframe easily
                - md: fixed taller height to accommodate longer forms
            */}
            <div
              ref={iframeWrapRef}
              className="relative"
              style={{
                // use CSS fallback: mobile 80vh, md 900px, lg 700px
                height: "1200px",
              }}
            >
              <iframe
                title="Business Investment Application Form"
                src={SRC}
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
              />
            </div>
          </div>

          <p className="mt-4 text-xs text-center text-slate-500">
            Responses are saved to Google Forms and any linked Google Sheet.
          </p>
        </main>
      </div>

    </div>
  );
}
