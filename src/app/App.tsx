import React from "react";
import { Route, Switch } from "react-router-dom";
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

function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route path="/portfolio">
          <PortfolioPage />
        </Route>
        <Route path="/services/:serviceType">
          <ServicesPage />
        </Route>
        <Route path="/about-us">
          <AboutPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>

      <Client />

      <Footer />
    </>
  );
}

export default App;
