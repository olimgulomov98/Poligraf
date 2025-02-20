import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/headers/Navbar";
import Footer from "./components/footer";
import HomePage from "./screens/homePage";
import PortfolioPage from "./screens/portfolioPage";
import ServicesPage from "./screens/servicesPage";
import AboutPage from "./screens/aboutPage";
import "../css/app.css";
import "../css/navbar.css";
import "../css/footer.css";

function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route path="/portfolio">
          <PortfolioPage />
        </Route>
        <Route path="/uslugi">
          <ServicesPage />
        </Route>
        <Route path="/o-nas">
          <AboutPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>

      <Footer />
    </>
  );
}

export default App;
