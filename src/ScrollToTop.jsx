// src/ScrollToTop.jsx
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop - scrolls to top (or to a saved position) on route change.
 * Uses useLayoutEffect so the jump happens before paint, avoiding flicker.
 *
 * Props:
 *  - behavior: "auto" | "smooth"  (default "auto")
 */
export default function ScrollToTop({ behavior = "auto" }) {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // scroll to top of page on route change
    // you can offset by header height if required: window.scrollTo(0, headerHeight)
    window.scrollTo({ top: 0, left: 0, behavior });
  }, [pathname, behavior]);

  return null;
}
