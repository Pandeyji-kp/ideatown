// ContactUs.jsx
import React from "react";

export default function ContactUs() {
    return (
        <>
            {/* TOP HEADING SECTION WITH BACKGROUND IMAGE */}
            <section
                className="relative w-full h-[60vh] md:h-[70vh] lg:h-[75vh] overflow-hidden flex items-center justify-center text-center"
                style={{
                    backgroundImage: "url('public/pngtree-white-textured-design-over-a-gradient-orange-background-image_13905315.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <style>{`
    @keyframes waveMove {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `}</style>

                {/* Overlay to improve readability */}
                <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />

                {/* Animated WAVE Background */}
                <div className="absolute bottom-0 left-0 w-[200%] h-[200px] opacity-80">
                    <svg
                        className="w-full h-full"
                        viewBox="0 0 1440 320"
                        preserveAspectRatio="none"
                        style={{
                            animation: "waveMove 12s linear infinite",
                        }}
                    >
                        <path
                            fill="#FFE8C2"
                            fillOpacity="1"
                            d="
          M0,64L48,80C96,96,192,128,288,133.3C384,139,480,117,576,101.3C672,85,768,75,864,101.3C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96
          L1440,320
          L1392,320
          C1344,320,1248,320,1152,320
          C1056,320,960,320,864,320
          C768,320,672,320,576,320
          C480,320,384,320,288,320
          C192,320,96,320,48,320
          L0,320Z"
                        ></path>
                    </svg>
                </div>

                {/* SECOND WAVE FOR DEPTH */}
                <div className="absolute bottom-0 left-0 w-[200%] h-[220px] opacity-60">
                    <svg
                        className="w-full h-full"
                        viewBox="0 0 1440 320"
                        preserveAspectRatio="none"
                        style={{
                            animation: "waveMove 18s linear infinite reverse",
                        }}
                    >
                        <path
                            fill="#FFD8A8"
                            fillOpacity="0.9"
                            d="
          M0,128L48,149.3C96,171,192,213,288,229.3C384,245,480,235,576,224C672,213,768,203,864,197.3C960,192,1056,192,1152,202.7C1248,213,1344,235,1392,245.3L1440,256
          L1440,320
          L1392,320
          C1344,320,1248,320,1152,320
          C1056,320,960,320,864,320
          C768,320,672,320,576,320
          C480,320,384,320,288,320
          C192,320,96,320,48,320
          L0,320Z"
                        ></path>
                    </svg>
                </div>

                {/* TEXT CONTENT */}
                <div className="relative z-10 px-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 drop-shadow-sm">
                        Connect with us
                    </h1>

                    <p className="mt-4 text-lg md:text-xl text-slate-700 font-light max-w-2xl mx-auto">
                        Share your details with us and we’ll get back to you shortly.
                    </p>
                </div>
            </section>


            {/* Soft overlay improves readability */}
            <div className="absolute inset-0 bg-white/65 backdrop-blur-[2px] -z-10" />
            <div className="p-12">
                {/* Soft animated blobs + wave background on top of image */}
                <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden p-6">
                    {/* Blob 1 */}
                    <svg
                        className="absolute -left-40 top-0 opacity-30"
                        width="600"
                        height="600"
                        viewBox="0 0 600 600"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g filter="url(#f1)">
                            <circle cx="300" cy="300" r="200" fill="#FFD8A8" />
                        </g>
                        <defs>
                            <filter id="f1" x="0" y="0" width="600" height="600">
                                <feGaussianBlur stdDeviation="60" />
                            </filter>
                        </defs>
                    </svg>

                    {/* Blob 2 */}
                    <svg
                        className="absolute -right-40 bottom-0 opacity-25"
                        width="500"
                        height="500"
                        viewBox="0 0 500 500"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g filter="url(#f2)">
                            <circle cx="250" cy="250" r="170" fill="#FFE8C2" />
                        </g>
                        <defs>
                            <filter id="f2" x="0" y="0" width="500" height="500">
                                <feGaussianBlur stdDeviation="50" />
                            </filter>
                        </defs>
                    </svg>

                    {/* Bottom white wave */}
                    <svg
                        className="absolute left-0 right-0 bottom-0 w-full h-40 md:h-48"
                        viewBox="0 0 1440 320"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill="#fff"
                            d="M0,192L80,197.3C160,203,320,213,480,208C640,203,800,181,960,170.7C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                        ></path>
                    </svg>
                </div>

                {/* Actual Page Content */}
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                        {/* LEFT CARD */}
                        <div className="lg:col-span-5">
                            <div className="bg-white/85 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/40">
                                <h3 className="text-2xl font-semibold text-slate-900">Get in touch</h3>
                                <p className="mt-3 text-slate-600">
                                    We're here to help — tell us about your enquiry and we'll respond within 48 hours.
                                </p>

                                {/* Contact details */}
                                <div className="mt-6 space-y-4">
                                    {/* Email */}
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-lg bg-orange-100">
                                            <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2 5a2 2 0 012-2h3.5a1 1 0 010 2H4v10h12V5h-3.5a1 1 0 010-2H16a2 2 0 012 2v11a1 1 0 01-1 1H3a1 1 0 01-1-1V5z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-sm text-slate-500">Email</div>
                                            <div className="font-medium text-slate-800">contact@ideatowninvest.com</div>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-lg bg-orange-100">
                                            <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2 2.5A1.5 1.5 0 013.5 1h3A1.5 1.5 0 018 2.5V4h4V2.5A1.5 1.5 0 0113.5 1h3A1.5 1.5 0 0118 2.5V17.5A1.5 1.5 0 0116.5 19h-13A1.5 1.5 0 012 17.5V2.5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-sm text-slate-500">Phone</div>
                                            <div className="font-medium text-slate-800">+44 20 7946 0931</div>
                                        </div>
                                    </div>

                                    {/* Address */}
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-lg bg-orange-100">
                                            <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 2a6 6 0 100 12A6 6 0 0010 2zM2 18a8 8 0 0116 0H2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-sm text-slate-500">Address</div>
                                            <div className="font-medium text-slate-800">London • Dubai • Singapore</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className="mt-6 flex items-center gap-3">
                                    <a
                                        href="/business-proposals"
                                        className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold shadow hover:shadow-lg transition"
                                    >
                                        Apply Now
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="lg:col-span-7 space-y-6">
                            {/* Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="rounded-2xl p-6 bg-white/85 backdrop-blur-sm shadow-lg border border-white/40">
                                    <h4 className="text-lg font-semibold text-slate-900">Corporate Enquiries</h4>
                                    <p className="mt-2 text-slate-600">For investment and partnership queries.</p>
                                    <div className="mt-4 text-slate-700 font-medium">corp@ideatowninvest.com</div>
                                </div>

                                <div className="rounded-2xl p-6 bg-white/85 backdrop-blur-sm shadow-lg border border-white/40">
                                    <h4 className="text-lg font-semibold text-slate-900">Media & PR</h4>
                                    <p className="mt-2 text-slate-600">Press and media requests.</p>
                                    <div className="mt-4 text-slate-700 font-medium">press@ideatowninvest.com</div>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="rounded-2xl overflow-hidden border border-white/40 shadow-md bg-white/70 backdrop-blur-sm">
                                <iframe
                                    title="office-map"
                                    src="https://maps.google.com/maps?q=London&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    className="w-full h-56 md:h-72"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>


    );
}
