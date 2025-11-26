// AboutUs.jsx
import React from "react";
import { motion } from "framer-motion";

export default function AboutUs({
    bgUrl = "/public/2f77e8bc2816c2ca68090d76ab8d7d26.jpg",
}) {
    const items = [
        {
            title: "Who We Are",
            text: (
                <>
                    <b>IDEA TOWN Investments</b> is a global investment firm dedicated to
                    empowering high-growth startups and emerging small businesses. We focus on
                    innovative, future-driven ventures and help them achieve long-term
                    sustainability and scalable growth.
                    Unlike traditional lenders, we invest exclusively using our own
                    balance-sheet capital, meaning we deploy our own funds and do not offer
                    debt-based financing. This allows us to take a genuine, long-term stake in
                    every business we partner with.
                    At Idea Town Investments, our involvement goes far beyond capital. We
                    actively support each portfolio company with strategic guidance,
                    operational expertise, and hands-on growth assistance to ensure they are
                    fully equipped to reach their goals.
                    We understand that every business is unique, with its own challenges,
                    strengths, and aspirations. That’s why we take the time to study each
                    venture closely and tailor our investment approach to match their
                    specific needs and long-term vision.
                </>
            ),
            image: "public/aad56012be20badfec41abdffd7af819.jpg",
        },
        {
            title: "A Proven Track Record",
            text: (
                <>
                    <p>
                        Idea Town Investments has built a strong record of scaling businesses and guiding them
                        toward long-term sustainability. Our model is centred on equity-based partnerships,
                        where we typically acquire a majority stake of 50+1%, and rarely invest in businesses
                        where we hold less than 50%.
                        This majority-ownership approach enables us to integrate companies seamlessly into
                        our portfolio, giving us the agility to make faster decisions, implement improvements,
                        and drive meaningful growth.
                        Over the years, this strategy has helped us create exceptional value for both our firm
                        and our partners across a wide range of sectors, including:
                    </p>

                    <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-700">
                        <li>3D Virtual Environment Solutions</li>
                        <li>Customer Experience Management</li>
                        <li>Contact Centres</li>
                        <li>Digital Performance Marketing</li>
                        <li>E-Commerce</li>
                        <li>Fulfilment & Distribution</li>
                        <li>ISP Solutions</li>
                        <li>IT Hardware Services</li>
                        <li>Paid Media</li>
                        <li>Retail</li>
                        <li>SEO</li>
                        <li>Software Development</li>
                        <li>Web Development</li>
                        <li>And many more…</li>
                    </ul>
                </>
            ),

            // ⭐ New structure for multiple images
            images: [
                "/public/986bff98d019390f2d48e829eba0dd35.jpg",
                "/public/4e6b7e8783e67d822419b8577ec16e86.jpg",
            ]
        },
        {
            title: "Investment Ethos",
            text: (
                <>
                    At Idea Town Investments, we recognize the incredible potential of startups and small businesses to drive meaningful progress and shape a better future. This is why we focus on supporting Shariah-compliant ventures that demonstrate purpose, innovation, and the capacity to create positive change.
                    <br /><br />
                    Our investment philosophy is built around encouraging entrepreneurship, fostering innovation, generating employment, and contributing to long-term economic growth. Above all, we are committed to empowering businesses to reach their full potential and play a transformative role in building a brighter future for everyone.
                </>
            ),
            image: "public/4e6b7e8783e67d822419b8577ec16e86.jpg",
        },
        {
            title: "Highly experienced team of professionals",
            text: (
                <>
                    <b>Idea Town Investments is led by a team of seasoned professionals</b> with deep expertise in guiding businesses through the complex journey of growth, scalability, and long-term profitability. By leveraging our in-house capabilities, extensive networks, and decades of combined experience across industries such as telecommunications, technology, customer experience, IT, e-commerce, software development, manufacturing, and distribution, we help our partners build a strong foundation for sustainable success.
                    <br />
                    We also understand that every business is unique, with its own challenges, goals, and vision. That’s why we take the time to understand each venture in detail and tailor our investment approach to meet their specific needs.
                    <br />
                    We look forward to introducing prospective partners to our leadership team <b>once they have completed the business proposal form</b> (insert hyperlink here) and have been shortlisted for further consideration.
                </>
            ),
            image: "public/80a54a73303bdf456eeb3b4d460328a2.jpg",
        },

        {
            title: "Our Values",
            text: `Founder First — We prioritize long-term founder success over short-term returns.
                                                                    Integrity — Transparent, ethical decision-making in everything we do.
                                                                    Long-Term Vision — We partner with founders to build enduring companies.`,
            image:
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=60",
        },
    ];

    return (
        <section className="w-full text-slate-900">
            {/* HERO SECTION */}
            <div className="relative w-full h-[85vh] overflow-hidden">
                <style>{`
    /* hero image gentle float + entrance */
    .hero-img {
      transform: translateY(8%) scale(1.08);
      animation: heroFloat 14s ease-in-out infinite alternate, heroEnter 1000ms cubic-bezier(.22,.86,.31,1) forwards;
      will-change: transform, opacity;
      opacity: 0.95;
    }
    @keyframes heroFloat {
      0% { transform: translateY(6%) scale(1.06); }
      100% { transform: translateY(0%) scale(1.02); }
    }
    @keyframes heroEnter {
      0% { transform: translateY(22%) scale(1.12); opacity: 0.75; }
      60% { transform: translateY(6%) scale(1.06); opacity: 0.92; }
      100% { transform: translateY(0%) scale(1.02); opacity: 1; }
    }

    /* subtle parallax shift on scroll (optional enhancement) */
    .parallax { will-change: transform; }

    /* wave reveal animation */
    .wave-path { transform: translateY(16px); opacity: 0; animation: waveIn 900ms cubic-bezier(.22,.86,.31,1) forwards 600ms; }
    @keyframes waveIn {
      0% { transform: translateY(36px); opacity: 0; }
      100% { transform: translateY(0); opacity: 1; }
    }

    /* small accessibility/visual tweaks */
    .hero-overlay { background: linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.28) 40%, rgba(0,0,0,0.10) 100%); }
  `}</style>

                {/* Background image (animated) */}
                <img
                    src={bgUrl}
                    alt="About Background"
                    className="absolute inset-0 w-full h-full object-cover object-center hero-img parallax"
                />

                {/* darkened overlay for text readability */}
                <div className="absolute inset-0 hero-overlay -z-10" />

                {/* Overlay content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-xl">
                            About <span className="text-[#F5F5F5]">Us</span>
                        </h1>

                        <p className="mt-4 max-w-2xl mx-auto text-white/90 text-2xl md:text-xl font-light">
                            <b>We empower founders with capital, strategy, and deep operational expertise to build tomorrow’s market leaders.</b>
                        </p>


                        {/* CTA */}
                        <a
                            href="/google"
                            className="mt-8 inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-400 to-orange-500 shadow-lg hover:shadow-[0_12px_30px_rgba(249,115,22,0.35)] transition duration-200 transform-gpu hover:-translate-y-1"
                        >
                            Apply Now →
                        </a>
                    </div>
                </div>

                {/* Bottom wave SVG (appears above the page background, creating a wave edge) */}
                <div className="absolute left-0 right-0 bottom-0 overflow-hidden leading-none">
                    <svg className="block w-full h-36 wave-path" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>

                        <path fill="#ffffff" d="M0,128L48,122.7C96,117,192,107,288,112C384,117,480,139,576,160C672,181,768,203,864,202.7C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </div>


            {/* CONTENT SECTIONS (alternating image/content) */}
            <div className="space-y-24 max-w-6xl mx-auto px-6 py-16">
                {items.map((item, idx) => {
                    const isEven = idx % 2 === 0;

                    // animation starting positions depend on side
                    const contentInitial = { x: isEven ? 100 : -100, opacity: 0 };
                    const imageInitial = { x: isEven ? -100 : 100, opacity: 0 };

                    return (
                        <section key={idx}>
                            <div
                                className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* -----------------------
        IMAGE COLUMN (LEFT/RIGHT)
       ----------------------- */}
                                <motion.div
                                    className="md:w-1/2 w-full min-h-[24rem] md:min-h-[28rem] flex flex-col gap-6"
                                    initial={imageInitial}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                >
                                    {Array.isArray(item.images)
                                        ? item.images.map((img, index) => (
                                            <img
                                                key={index}
                                                src={img}                       // ensure item.images use "/your-file.jpg" if in public
                                                alt={`${item.title}-${index}`}
                                                className="w-full h-[320px] md:h-[420px] object-cover rounded-xl shadow-lg"
                                            />
                                        ))
                                        : (
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-[320px] md:h-[420px] object-cover rounded-xl shadow-lg"
                                            />
                                        )}
                                </motion.div>

                                {/* -----------------------
        TEXT COLUMN (with wave bg)
       ----------------------- */}
                                <motion.div
                                    className="md:w-1/2 w-full"
                                    initial={contentInitial}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
                                >
                                    {/* wave card wrapper */}
                                    <div className="relative p-8 rounded-2xl overflow-hidden">
                                        {/* SVG wave placed behind text */}
                                        <svg
                                            className="absolute inset-0 w-full h-full -z-10"
                                            xmlns="http://www.w3.org/2000/svg"
                                            preserveAspectRatio="none"
                                            viewBox="0 0 1440 320"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fill="#FFE8C2"
                                                d="M0,256L40,250.7C80,245,160,235,240,224C320,213,400,203,480,208C560,213,640,235,720,229.3C800,224,880,192,960,170.7C1040,149,1120,139,1200,149.3C1280,160,1360,192,1400,208L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                                            />
                                        </svg>

                                        {/* Title + body - z-10 to sit above svg */}
                                        <h2 className="text-3xl font-bold mb-4 relative z-10">{item.title}</h2>

                                        <div className="text-slate-700 text-lg leading-relaxed relative z-10">
                                            {item.text}
                                        </div>
                                    </div>

                                    {/* CTA only on last item */}
                                    {idx === items.length - 1 && (
                                        <div className="mt-8 text-center md:text-left">
                                            <a
                                                href="/google"
                                                className="inline-flex items-center px-6 py-3 bg-black text-white font-semibold rounded-lg shadow hover:bg-slate-900 transition"
                                            >
                                                Get Started →
                                            </a>
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
