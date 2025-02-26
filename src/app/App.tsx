import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/headers/Navbar";
import Footer from "./components/footer";
import Client from "./components/client";
import HomePage from "./screens/homePage";
import PortfolioPage from "./screens/portfolioPage";
import ServicesPage from "./screens/servicesPage";
import AboutPage from "./screens/aboutPage";
import "../css/app.css";
import "../css/navbar.css";
import "../css/footer.css";
import "../css/client.css";
import "../css/modal.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/portfolio/*" element={<PortfolioPage />} />
        <Route path="/services/:serviceType" element={<ServicesPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>

      <Client />

      <Footer />
    </>
  );
}

export default App;
