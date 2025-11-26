// StylishGoogleFormApply.jsx
import React, { useEffect, useRef, useState } from "react";

/**
 * StylishGoogleFormApply
 * - Embeds Google Form iframe (replace SRC if needed)
 * - Unique background (blobs + diagonal pattern)
 * - Shows animated thank-you card after user scrolls past the iframe OR clicks "I've submitted"
 *
 * Note: cannot detect Google Form submission inside cross-origin iframe.
 * Use the "I've submitted" button if you want deterministic behavior.
 */

export default function StylishGoogleFormApply() {
    const SRC =
        "https://docs.google.com/forms/d/e/1FAIpQLSck7RzH1oLCUWFuhDU8o9vjL_wbN2t9UJeFKwQMbTejTEDfKQ/viewform?embedded=true";

    const iframeWrapRef = useRef(null);
    const [showThanks, setShowThanks] = useState(false);
    const [autoTriggered, setAutoTriggered] = useState(false);

    // Scroll-detection: if user scrolls past iframe bottom, show thank-you (one time)
    useEffect(() => {
        function check() {
            if (showThanks) return;
            const el = iframeWrapRef.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const scrolledPast = rect.bottom < window.innerHeight * 0.25; // bottom moved above 25% of viewport
            if (scrolledPast && !autoTriggered) {
                // set a tiny delay so user didn't just scroll a bit
                setAutoTriggered(true);
                setTimeout(() => setShowThanks(true), 350);
            }
        }
        window.addEventListener("scroll", check, { passive: true });
        window.addEventListener("resize", check);
        // initial check
        check();
        return () => {
            window.removeEventListener("scroll", check);
            window.removeEventListener("resize", check);
        };
    }, [showThanks, autoTriggered]);

    // Handler for explicit confirm button
    function handleSubmittedConfirm() {
        setShowThanks(true);
    }

    return (
        <div className="min-h-screen relative bg-gradient-to-b from-white via-orange-50 to-white py-12">
            {/* Decorative background (blobs + subtle diagonal pattern) */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                {/* soft left blob */}
                <svg className="absolute -left-48 top-10 opacity-30" width="640" height="640" viewBox="0 0 640 640" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#f1)">
                        <circle cx="320" cy="320" r="200" fill="#FFD8A8" />
                    </g>
                    <defs>
                        <filter id="f1" x="0" y="0" width="640" height="640" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feGaussianBlur stdDeviation="80" />
                        </filter>
                    </defs>
                </svg>

                {/* soft right blob */}
                <svg className="absolute -right-48 bottom-10 opacity-25" width="520" height="520" viewBox="0 0 520 520" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#f2)">
                        <circle cx="260" cy="260" r="180" fill="#FFE8C2" />
                    </g>
                    <defs>
                        <filter id="f2" x="0" y="0" width="520" height="520" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feGaussianBlur stdDeviation="60" />
                        </filter>
                    </defs>
                </svg>

                {/* diagonal subtle pattern */}
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="diag" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                            <rect width="3" height="6" fill="rgba(0,0,0,0.02)" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#diag)" />
                </svg>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative">

                {/* Header card with wave background */}
                <div className="max-w-6xl mx-auto px-6 relative">

                    {/* Header with wave background image */}
                    <header className="relative rounded-2xl overflow-hidden shadow-lg">

                        {/* BACKGROUND WAVE IMAGE */}
                        <img
                            src="public/pngtree-white-textured-design-over-a-gradient-orange-background-image_13905315.png"  // <-- change to your image path
                            alt="Wave Background"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                        />

                        {/* SOFT OVERLAY FOR READABILITY */}
                        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]"></div>

                        {/* CENTERED TEXT */}
                        <div className="relative z-10 text-center px-8 py-16 md:py-24">

                            <span className="inline-block px-4 py-2 rounded-full bg-white/80 text-orange-600 font-semibold text-sm shadow">
                                Apply for Investment
                            </span>

                            <h1 className="mt-6 text-3xl md:text-4xl font-extrabold text-slate-900 drop-shadow">
                                Business Investment Application
                            </h1>

                            <p className="mt-4 text-slate-700 max-w-2xl mx-auto text-lg">
                                Submit your proposal — our investment team reviews every application
                                carefully and responds within 48 hours.
                            </p>

                        </div>
                    </header>

                    {/* Iframe / form card */}
                    <main className="mt-8">
                        <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow">
                            <div ref={iframeWrapRef} className="relative" style={{ paddingBottom: "160%", height: 0 }}>
                                <iframe
                                    title="Business Investment Application Form"
                                    src={SRC}
                                    className="absolute inset-0 w-full h-full border-0"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Submitted Confirm Button */}
                        <div className="mt-6 flex items-center justify-center">
                            <button
                                onClick={handleSubmittedConfirm}
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow hover:scale-[1.02] transition"
                            >
                                I have submitted
                            </button>
                        </div>
                    </main>

                    <p className="mt-4 text-xs text-center text-slate-500">
                        Responses are saved to Google Forms and the linked Google Sheet.
                    </p>

                </div>


            </div>


            {/* Animated Thank You overlay — appears when showThanks true */}
            <div
                aria-hidden={!showThanks}
                className={`fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none transition-opacity duration-400 ${showThanks ? "opacity-100" : "opacity-0"
                    }`}
            >
                {/* backdrop */}
                <div
                    className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity ${showThanks ? "opacity-100" : "opacity-0"}`}
                    onClick={() => setShowThanks(false)}
                />

                {/* card */}
                <div
                    className={`relative z-10 pointer-events-auto max-w-xl w-full mx-auto rounded-2xl bg-white p-6 md:p-10 shadow-2xl transform transition-transform duration-500 ${showThanks ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                        }`}
                    role="status"
                    aria-live="polite"
                >
                    {/* confetti effect (simple) */}
                    <div className="absolute inset-0 -z-10">
                        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="g1" x1="0" x2="1">
                                    <stop offset="0%" stopColor="#f97316" stopOpacity="0.06" />
                                    <stop offset="100%" stopColor="#fb923c" stopOpacity="0.06" />
                                </linearGradient>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#g1)" />
                        </svg>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center">
                                <svg className="w-7 h-7 text-orange-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>

                        <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900">Thank you!</h3>
                            <p className="mt-2 text-slate-600">
                                Your application has been received. The Idea Town Investments team will review your submission and contact you shortly.
                            </p>

                            <div className="mt-4 flex items-center gap-3">
                                <a
                                    href="/"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
                                >
                                    Back to homepage
                                </a>
                                <button
                                    onClick={() => setShowThanks(false)}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-orange-400 to-orange-500 text-white transition"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* subtle confetti animation (decorative) */}
                    <div className="mt-4 flex gap-2" aria-hidden>
                        <span className="w-2 h-2 rounded-full bg-orange-400 animate-bounce-slow" />
                        <span className="w-2 h-2 rounded-full bg-amber-400 animate-bounce-slower" />
                        <span className="w-2 h-2 rounded-full bg-yellow-400 animate-bounce" />
                        <span className="w-2 h-2 rounded-full bg-orange-300 animate-bounce-slower" />
                        <span className="w-2 h-2 rounded-full bg-amber-300 animate-bounce-slow" />
                    </div>
                </div>
            </div>

            {/* component-scoped small styles for keyframes */}
            <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(-6px); opacity: 0.9; }
        }
        @keyframes bounce-slow {
          0%,100% { transform: translateY(0); opacity:1 }
          50% { transform: translateY(-6px); opacity:0.9 }
        }
        @keyframes bounce-slower {
          0%,100% { transform: translateY(0); opacity:1 }
          50% { transform: translateY(-4px); opacity:0.95 }
        }
        .animate-bounce { animation: bounce 900ms infinite ease-in-out; }
        .animate-bounce-slow { animation: bounce-slow 1200ms infinite ease-in-out; }
        .animate-bounce-slower { animation: bounce-slower 1600ms infinite ease-in-out; }
      `}</style>
        </div>
    );
}
