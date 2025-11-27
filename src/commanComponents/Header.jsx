// NavbarStyled.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function NavbarStyled({
  logoSrc = "/generated.png",
  logoAlt = "Idea Town Investments",
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  const menu = [
    { id: 1, title: "Home", to: "/" },
    { id: 2, title: "Play Quiz", to: "/quiz" },
    { id: 3, title: "About Us", to: "/about-us" },
    { id: 4, title: "Contact Us", to: "/contact-us" },
  ];

  // Detect scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent layout shift
  useEffect(() => {
    const headerEl = headerRef.current;
    if (!headerEl) return;

    const adjustPadding = () => {
      document.body.style.paddingTop =
        headerEl.getBoundingClientRect().height + "px";
    };

    adjustPadding();
    window.addEventListener("resize", adjustPadding);

    return () => window.removeEventListener("resize", adjustPadding);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-sm 
        ${
          scrolled
            ? "backdrop-blur-sm bg-blue-100/70 border-b border-blue-200"
            : "bg-blue-200"
        }
      `}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* BIG LOGO WITH PERFECT ALIGNMENT */}
          <Link to="/" className="flex items-center" aria-label="Home">
            <img
              src={logoSrc}
              alt={logoAlt}
              className="
  h-[80px]           /* mobile */
  sm:h-[100px]       /* small screens */
  md:h-[130px]       /* medium screens */
  lg:h-[150px]       /* large screens */
  w-auto 
  object-contain 
  filter brightness-0
  -mt-1
"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            {menu.map((m) => (
              <Link
                key={m.id}
                to={m.to}
                className={`text-sm font-medium transition 
                  ${
                    scrolled
                      ? "text-blue-900 hover:text-blue-700"
                      : "text-blue-800"
                  }
                `}
              >
                {m.title}
              </Link>
            ))}

            <Link
              to="/google"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm font-semibold shadow"
            >
              Apply Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-blue-900 rounded-md hover:bg-blue-300"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-blue-50 border-t border-blue-200">
          <div className="flex flex-col px-4 py-4">
            {menu.map((m) => (
              <Link
                key={m.id}
                to={m.to}
                onClick={() => setOpen(false)}
                className="py-2 text-blue-900 font-semibold hover:bg-blue-200 rounded-md"
              >
                {m.title}
              </Link>
            ))}

            <Link
              to="/google"
              onClick={() => setOpen(false)}
              className="mt-3 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg text-center font-semibold"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
