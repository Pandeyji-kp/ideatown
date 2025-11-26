import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import NavbarStyled from "./commanComponents/Header.jsx";
import Footer from "./commanComponents/Footer.jsx";
import GrowthHero from "./App.jsx";
import AboutUs from "./components/AboutUs.jsx";
import ContactUs from "./components/ContactUs.jsx";
import GoogleFormApply from "./components/GoogleFormApply.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <NavbarStyled />

      <Routes>
        <Route path="/" element={<GrowthHero />} />
        <Route path="/about-us" element={<AboutUs />} />
         <Route path="/contact-us" element={<ContactUs />} />
         <Route path="/google" element={<GoogleFormApply />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  </StrictMode>
);
