// NavbarStyled.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function NavbarStyled({
  logoSrc = "/public/generated.png",
  logoAlt = "Idea Town Investments",
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  const menu = [
    { id: 1, title: "Home", to: "/" },
    { id: 2, title: "About Us", to: "/about-us" },
    { id: 3, title: "Contact Us", to: "/contact-us" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const headerEl = headerRef.current;
    if (!headerEl) return;

    headerEl.style.position = "fixed";
    headerEl.style.top = "0";
    headerEl.style.left = "0";
    headerEl.style.right = "0";
    headerEl.style.zIndex = "9999";

    const applyBodyPadding = () => {
      const h = headerEl.getBoundingClientRect().height;
      document.body.style.paddingTop = `${h}px`;
    };
    applyBodyPadding();
    window.addEventListener("resize", applyBodyPadding);

    // debug transformed ancestor
    let el = headerEl.parentElement;
    while (el) {
      const cs = getComputedStyle(el);
      if (
        cs.transform !== "none" ||
        cs.filter !== "none" ||
        cs.perspective !== "none" ||
        (cs.willChange && cs.willChange !== "auto")
      ) {
        // eslint-disable-next-line no-console
        console.warn(
          "Navbar: ancestor may break fixed positioning (transform/filter/perspective/will-change). Move header outside it or remove that style.",
          el,
          cs
        );
        break;
      }
      el = el.parentElement;
    }

    return () => {
      window.removeEventListener("resize", applyBodyPadding);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`transition-all duration-300 ${scrolled ? "backdrop-blur-sm bg-white/60 border-b border-gray-100 shadow-sm" : "bg-transparent"}`}
    >
      {/* Background image behind content (z-0) */}
      <img
        src="/public/pngtree-white-textured-design-over-a-gradient-orange-background-image_13905315.png"
        alt="decorative background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-80 pointer-events-none"
      />

      {/* Content wrapper must be above the image */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center" aria-label="Home">
            <img
              src={logoSrc}
              alt={logoAlt}
              className="h-28 w-auto object-contain filter grayscale brightness-0"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-6" aria-label="Primary navigation">
            {menu.map((m) => (
              <Link
                key={m.id}
                to={m.to}
                className={`text-sm font-medium transition ${
                  scrolled ? "text-slate-900 hover:text-slate-700" : "text-black"
                }`}
              >
                {m.title}
              </Link>
            ))}

            <div className="h-6 w-px bg-gray-200" />

            <Link
              to="/google"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#0ea5a4] to-[#ff7a66] text-white text-sm font-semibold shadow"
            >
              Apply Now
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 text-slate-700 rounded-md hover:bg-gray-100"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100" role="dialog" aria-modal="true">
          <div className="flex flex-col px-4 py-4">
            {menu.map((m) => (
              <Link
                key={m.id}
                to={m.to}
                className="py-2 text-slate-700 hover:bg-gray-50 rounded-md"
                onClick={() => setOpen(false)}
              >
                {m.title}
              </Link>
            ))}

            <Link
              to="/google"
              className="mt-3 px-4 py-2 bg-gradient-to-r from-[#0ea5a4] to-[#ff7a66] text-white rounded-lg text-center"
              onClick={() => setOpen(false)}
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
