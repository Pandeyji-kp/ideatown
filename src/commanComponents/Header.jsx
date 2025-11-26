// NavbarStyled.jsx
import React, { useEffect, useRef, useState } from "react";

export default function NavbarStyled({
  logoSrc = "/generated.png",
  logoAlt = "Idea Town Investments",
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  const menu = [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "About Us", href: "/about-us" },
    { id: 3, title: "Contact Us", href: "/contact-us" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Make header fixed and add body padding equal to header height
  useEffect(() => {
    const headerEl = headerRef.current;
    if (!headerEl) return;

    // ensure header has fixed positioning at top of viewport
    headerEl.style.position = "fixed";
    headerEl.style.top = "0";
    headerEl.style.left = "0";
    headerEl.style.right = "0";
    headerEl.style.zIndex = "9999";

    // add body padding-top so content doesn't hide under header
    const applyBodyPadding = () => {
      const h = headerEl.getBoundingClientRect().height;
      document.body.style.paddingTop = `${h}px`;
    };
    applyBodyPadding();
    window.addEventListener("resize", applyBodyPadding);

    // Debug: detect transformed ancestor that can break fixed
    let el = headerEl.parentElement;
    while (el) {
      const cs = getComputedStyle(el);
      if (cs.transform !== "none" || cs.filter !== "none" || cs.perspective !== "none" || (cs.willChange && cs.willChange !== "auto")) {
        // log helpful message to console
        // eslint-disable-next-line no-console
        console.warn(
          "Navbar: found ancestor that may break fixed positioning (transform/filter/perspective/will-change).\nRemove transform/filter on this element or move the header outside it to make the header sticky.",
          el,
          cs
        );
        break;
      }
      el = el.parentElement;
    }

    return () => {
      window.removeEventListener("resize", applyBodyPadding);
      // restore body padding if you want (optional)
      // document.body.style.paddingTop = '';
    };
  }, []);

  return (
    <header
      ref={headerRef}
      // keep the same visual classes you had — we force fixed via inline style above
      className={`transition-all duration-300 ${scrolled ? "backdrop-blur-sm bg-white/60 border-b border-gray-100 shadow-sm" : "bg-white"}`}
    >
      {/* background image behind content */}
      <img
        src="/pngtree-white-textured-design-over-a-gradient-orange-background-image_13905315.png"
        alt="decorative background"
        className="absolute inset-0 w-full h-full object-cover object-center -z-10 opacity-70 pointer-events-none"
        style={{ position: "absolute" }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center">
            <img src={logoSrc} alt={logoAlt} className="h-28 w-auto object-contain filter grayscale brightness-0" />
          </a>

          <nav className="hidden md:flex items-center space-x-6">
            {menu.map((m) => (
              <a key={m.id} href={m.href} className="text-sm font-medium text-slate-900 hover:text-slate-700 transition">
                {m.title}
              </a>
            ))}
            <div className="h-6 w-px bg-gray-200" />
            <a href="/google" className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#0ea5a4] to-[#ff7a66] text-white text-sm font-semibold shadow">
              Apply Now
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-slate-700 rounded-md hover:bg-gray-100" aria-label="Toggle menu">
            {open ? (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="flex flex-col px-4 py-4">
            {menu.map((m) => (
              <a key={m.id} href={m.href} className="py-2 text-slate-700 hover:bg-gray-50 rounded-md" onClick={() => setOpen(false)}>
                {m.title}
              </a>
            ))}
            <a href="/google" className="mt-3 px-4 py-2 bg-gradient-to-r from-[#0ea5a4] to-[#ff7a66] text-white rounded-lg text-center">Apply Now</a>
          </div>
        </div>
      )}
    </header>
  );
}
