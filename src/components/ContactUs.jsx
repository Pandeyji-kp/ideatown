// ContactUs.jsx
import React from "react";

export default function ContactUs() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-[55vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center text-center overflow-hidden">

        <style>{`
          @keyframes waveSlide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>

        {/* BG Image */}
        <img
          src="/7ebb1baae6142f13b510238ea227300b.jpg"
          alt="Contact Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-blue-800/40 to-blue-600/30"></div>

        {/* Animated Wave */}
        <div className="absolute bottom-0 left-0 w-[200%] h-[140px] sm:h-[160px] opacity-70">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            style={{ animation: "waveSlide 14s linear infinite" }}
          >
            <path
              fill="#e0f2fe"
              d="M0,64L48,80C96,96,192,128,288,133.3C384,139,480,117,576,101.3C672,85,768,75,864,101.3C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96V320H0Z"
            />
          </svg>
        </div>

        {/* HERO TEXT */}
        <div className="relative z-10 px-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Contact Us
          </h1>

          <p className="mt-4 text-white/90 text-base sm:text-lg max-w-xl mx-auto">
            We're here to help — reach out and our team will respond within 24–48 hours.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-14 px-4 sm:px-6 max-w-5xl mx-auto">

        <div className="bg-white/80 backdrop-blur-lg border border-blue-200 shadow-xl rounded-2xl p-6 sm:p-10">

          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-900 text-center">
            Get in touch
          </h2>

          <p className="text-center text-slate-600 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            You can reach us using any of the contact details below.
          </p>

          {/* GRID */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">

            {/* EMAIL */}
            <ContactRow
              icon={
                <svg className="w-7 h-7 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v11a1 1 0 01-1 1H3a1 1 0 01-1-1V5zm2 0l6 4 6-4" />
                </svg>
              }
              title="Email"
              value="ideatowninvestments@gmail.com"
            />

            {/* LOCATIONS */}
            <ContactRow
              icon={
                <svg className="w-7 h-7 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 100 12A6 6 0 0010 2zM2 18a8 8 0 0116 0H2z" />
                </svg>
              }
              title="Office Locations"
              value="London • Dubai • Singapore"
            />

          </div>
        </div>
      </section>
    </>
  );
}

/* COMPONENT: ContactRow */
function ContactRow({ icon, title, value }) {
  return (
    <div className="flex items-start gap-4 sm:gap-6">
      <div className="p-4 bg-blue-100 rounded-xl flex-shrink-0">{icon}</div>

      <div className="flex-1 min-w-0">
        <h4 className="text-lg font-semibold text-blue-900">{title}</h4>

        <p className="text-slate-700 mt-1 break-words text-sm sm:text-base">
          {value}
        </p>
      </div>
    </div>
  );
}
