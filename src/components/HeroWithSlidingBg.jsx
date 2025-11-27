// // HeroWithSlidingBg.jsx
// import React, { useEffect, useState } from "react";
// import GrowthHero from "../App";

// export default function HeroWithSlidingBg({
//   bgUrl = "public/7bb7471424350e75d03e6122f5033a5c.jpg",
// }) {
//   // counters target values
//   const targets = {
//     capitalCr: 100,
//     portfolioCount: 25,
//     founderExp: 25,
//   };

//   const [counts, setCounts] = useState({
//     capital: 0,
//     portfolio: 0,
//     founder: 0,
//   });

//   // animate number
//   const animateValue = (start, end, duration, setter, key) => {
//     const startTime = performance.now();
//     const step = (now) => {
//       const elapsed = Math.min(now - startTime, duration);
//       const t = elapsed / duration;

//       const ease = 1 - Math.pow(1 - t, 3); // smooth easeOutCubic
//       const value = Math.round(start + (end - start) * ease);

//       setter((prev) => ({ ...prev, [key]: value }));

//       if (elapsed < duration) requestAnimationFrame(step);
//     };
//     requestAnimationFrame(step);
//   };

//   // run when page loads
//   useEffect(() => {
//     const duration = 1200;
//     animateValue(0, targets.capitalCr, duration, setCounts, "capital");
//     animateValue(0, targets.portfolioCount, duration, setCounts, "portfolio");
//     animateValue(0, targets.founderExp, duration, setCounts, "founder");
//   }, []);

//   const formattedCapital = new Intl.NumberFormat("en-IN").format(counts.capital);

//   return (
//     <div>
//       <section className="relative w-full overflow-hidden">
//         {/* Animation styles */}
//         <style>{`
//         .hero-bg-img {
//           transform: translateY(30%) scale(1.35);
//           transform-origin: center;
//           animation: heroSlideUp 1200ms cubic-bezier(.22,.86,.31,1) forwards;
//           opacity: 0;
//         }

//         @keyframes heroSlideUp {
//           0%   { transform: translateY(30%) scale(1.35); opacity: 0.6; }
//           70%  { transform: translateY(8%)  scale(1.32); opacity: 0.92; }
//           100% { transform: translateY(0%)  scale(1.28); opacity: 1; }
//         }
//       `}</style>

//         {/* Background Image */}
//         <div className="absolute inset-0 pointer-events-none">
//           <img
//             src={bgUrl}
//             alt=""
//             className="hero-bg-img absolute inset-0 w-full h-full object-cover object-center"
//           />
//           <div className="absolute inset-0 bg-black/30" />

//           {/* Wave Bottom */}
//           <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
//             <svg
//               viewBox="0 0 1440 320"
//               className="w-full h-[140px]"
//               preserveAspectRatio="none"
//             >
//               <path
//                 fill="white"
//                 d="M0,256L48,240C96,224,192,192,288,192C384,192,480,224,576,240C672,256,768,256,864,240C960,224,1056,192,1152,160C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//               ></path>
//             </svg>
//           </div>
//         </div>

//         {/* Foreground Content */}
//         <div className="relative z-10">
//           <div className="max-w-6xl mx-auto px-6 lg:px-8">
//             <div className="min-h-[60vh] md:min-h-[64vh] flex items-center justify-center">
//               <div className="flex flex-col items-center text-center gap-8 py-16">
//                 {/* Text */}
//                 <div className="max-w-3xl">
//                   <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white drop-shadow-xl">
//                     Build. Scale. Dominate.
//                     <br />
//                     <span className="text-white">
//                       Your Growth Partner for the Next Chapter
//                     </span>
//                   </h1>

//                   <p className="mt-5 mx-auto text-base md:text-lg text-white/95 drop-shadow">
//                     Strategic capital meets operational excellence.
//                     We fuel ambitious businesses with the funding and expertise
//                     to accelerate from growth to market leadership.
//                   </p>

//                   {/* Trust badges */}
//                   <div className="mt-6 flex flex-wrap justify-center items-center gap-3">
//                     <div className="px-3 py-2 bg-white/90 text-slate-800 rounded-full text-sm font-medium shadow">
//                       ✓ 48-Hour Initial Review
//                     </div>
//                     <div className="px-3 py-2 bg-white/90 text-slate-800 rounded-full text-sm font-medium shadow">
//                       ✓ Founder-First Approach
//                     </div>
//                     <div className="px-3 py-2 bg-white/90 text-slate-800 rounded-full text-sm font-medium shadow">
//                       ✓ No Hidden Terms
//                     </div>
//                   </div>
//                 </div>

//                 {/* CTA */}
//                 <div className="mt-6">
//                   <a
//                     href="#apply"
//                     className="inline-flex items-center gap-3 px-6 py-3 rounded-md bg-gradient-to-r from-[#0ea5a4] to-[#ff7a66] text-white font-semibold shadow-lg hover:scale-[1.03] transition-transform"
//                   >
//                     Submit Your Proposal Today
//                     <svg
//                       className="w-4 h-4"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       fill="none"
//                     >
//                       <path
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M5 12h14M12 5l7 7-7 7"
//                       />
//                     </svg>
//                   </a>
//                 </div>

//                 {/* Stats Section with Counter */}
//                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
//                   {/* Capital */}
//                   <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm text-center">
//                     <div className="text-2xl font-extrabold text-slate-900">
//                       ₹{formattedCapital}
//                       <span className="text-base font-medium ml-1 text-slate-600">
//                         Cr+
//                       </span>
//                     </div>
//                     <div className="mt-1 text-sm text-slate-600">
//                       Total Capital Invested
//                     </div>
//                   </div>

//                   {/* Portfolio */}
//                   <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm text-center">
//                     <div className="text-2xl font-extrabold text-slate-900">
//                       {counts.portfolio}+
//                     </div>
//                     <div className="mt-1 text-sm text-slate-600">
//                       Portfolio Companies
//                     </div>
//                   </div>

//                   {/* Founder Experience */}
//                   <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm text-center">
//                     <div className="text-2xl font-extrabold text-slate-900">
//                       {counts.founder}+
//                     </div>
//                     <div className="mt-1 text-sm text-slate-600">
//                       Founder Experience
//                     </div>
//                   </div>
//                 </div>
//                 {/* End Stats */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <GrowthHero />

//     </div>
//   );

// }
