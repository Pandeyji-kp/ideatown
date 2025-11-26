// ContactUs.jsx
import React from "react";

export default function ContactUs() {
    return (
        <>
            {/* ------------------------------------ */}
            {/* TOP HERO SECTION WITH WAVES + IMAGE */}
            {/* ------------------------------------ */}
            <section
                className="relative w-full h-[55vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] flex items-center justify-center text-center overflow-hidden"
                style={{
                    backgroundImage: "url('/pngtree-white-textured-design-over-a-gradient-orange-background-image_13905315.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Waves animation keyframe */}
                <style>{`
                    @keyframes waveMove {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                `}</style>

                {/* Soft white overlay */}
                <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />

                {/* Moving waves */}
                <div className="absolute bottom-0 left-0 w-[200%] h-[160px] sm:h-[180px] md:h-[200px] opacity-80">
                    <svg
                        className="w-full h-full"
                        viewBox="0 0 1440 320"
                        preserveAspectRatio="none"
                        style={{ animation: "waveMove 12s linear infinite" }}
                    >
                        <path
                            fill="#FFE8C2"
                            d="M0,64L48,80C96,96,192,128,288,133.3C384,139,480,117,576,101.3C672,85,768,75,864,101.3C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96V320H0Z"
                        />
                    </svg>
                </div>

                <div className="absolute bottom-0 left-0 w-[200%] h-[170px] sm:h-[200px] md:h-[220px] opacity-60">
                    <svg
                        className="w-full h-full"
                        viewBox="0 0 1440 320"
                        preserveAspectRatio="none"
                        style={{ animation: "waveMove 18s linear infinite reverse" }}
                    >
                        <path
                            fill="#FFD8A8"
                            d="M0,128L48,149.3C96,171,192,213,288,229.3C384,245,480,235,576,224C672,213,768,203,864,197.3C960,192,1056,192,1152,202.7C1248,213,1344,235,1392,245.3L1440,256V320H0Z"
                        />
                    </svg>
                </div>

                {/* HERO TEXT */}
                <div className="relative z-10 px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900">
                        Connect with us
                    </h1>

                    <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-700 max-w-2xl mx-auto">
                        Share your details with us and we’ll get back to you shortly.
                    </p>
                </div>
            </section>

            {/* ------------------------------------ */}
            {/* MAIN CONTENT AREA */}
            {/* ------------------------------------ */}
            <div className="relative w-full py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">

                {/* Decorative blobs */}
                <svg className="absolute -left-40 top-10 opacity-30 w-[350px] sm:w-[450px]" viewBox="0 0 600 600">
                    <g filter="url(#a1)">
                        <circle cx="300" cy="300" r="200" fill="#FFD8A8" />
                    </g>
                    <defs>
                        <filter id="a1"><feGaussianBlur stdDeviation="60" /></filter>
                    </defs>
                </svg>

                <svg className="absolute -right-40 bottom-10 opacity-25 w-[300px] sm:w-[420px]" viewBox="0 0 500 500">
                    <g filter="url(#a2)">
                        <circle cx="250" cy="250" r="170" fill="#FFE8C2" />
                    </g>
                    <defs>
                        <filter id="a2"><feGaussianBlur stdDeviation="50" /></filter>
                    </defs>
                </svg>

                {/* MAIN GRID: LEFT + RIGHT */}
                <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* LEFT CONTACT CARD */}
                    <div className="lg:col-span-5">
                        <div className="bg-white/85 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/40">
                            <h3 className="text-2xl font-semibold text-slate-900">Get in touch</h3>
                            <p className="mt-3 text-slate-600">
                                We're here to help — tell us about your enquiry and we'll respond within 48 hours.
                            </p>

                            {/* Details List */}
                            <div className="mt-6 space-y-5">
                                {/* Email */}
                                <ContactItem
                                    icon={EmailIcon}
                                    label="Email"
                                    value="contact@ideatowninvest.com"
                                />

                                {/* Phone */}
                                <ContactItem
                                    icon={PhoneIcon}
                                    label="Phone"
                                    value="+44 20 7946 0931"
                                />

                                {/* Address */}
                                <ContactItem
                                    icon={LocationIcon}
                                    label="Address"
                                    value="London • Dubai • Singapore"
                                />
                            </div>

                            <div className="mt-6">
                                <a
                                    href="/business-proposals"
                                    className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold shadow hover:shadow-lg transition"
                                >
                                    Apply Now
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="lg:col-span-7 space-y-6">
                        {/* 2 Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <InfoCard
                                title="Corporate Enquiries"
                                desc="For investment and partnership queries."
                                email="corp@ideatowninvest.com"
                            />
                            <InfoCard
                                title="Media & PR"
                                desc="Press and media requests."
                                email="press@ideatowninvest.com"
                            />
                        </div>

                        {/* Map */}
                        <div className="rounded-2xl overflow-hidden border border-white/40 shadow-md bg-white/70 backdrop-blur-sm">
                            <iframe
                                title="office-map"
                                src="https://maps.google.com/maps?q=London&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                className="w-full h-64 sm:h-72 md:h-80"
                                loading="lazy"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}


/* ------------------------------------ */
/* SMALL SUB COMPONENTS */
/* ------------------------------------ */

function ContactItem({ icon: Icon, label, value }) {
    return (
        <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-orange-100">
                <Icon />
            </div>

            <div>
                <div className="text-sm text-slate-500">{label}</div>
                <div className="font-medium text-slate-800">{value}</div>
            </div>
        </div>
    );
}

function InfoCard({ title, desc, email }) {
    return (
        <div className="rounded-2xl p-6 bg-white/85 backdrop-blur-sm shadow-lg border border-white/40">
            <h4 className="text-lg font-semibold text-slate-900">{title}</h4>
            <p className="mt-2 text-slate-600">{desc}</p>
            <div className="mt-4 text-slate-700 font-medium">{email}</div>
        </div>
    );
}

/* Icons */

function EmailIcon() {
    return (
        <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v11a1 1 0 01-1 1H3a1 1 0 01-1-1V5zm2 0l6 4 6-4" />
        </svg>
    );
}

function PhoneIcon() {
    return (
        <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 2.5A1.5 1.5 0 013.5 1h3A1.5 1.5 0 018 2.5V4h4V2.5A1.5 1.5 0 0113.5 1h3A1.5 1.5 0 0118 2.5V17.5A1.5 1.5 0 0116.5 19h-13A1.5 1.5 0 012 17.5V2.5z" />
        </svg>
    );
}

function LocationIcon() {
    return (
        <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a6 6 0 100 12A6 6 0 0010 2zM2 18a8 8 0 0116 0H2z" />
        </svg>
    );
}
