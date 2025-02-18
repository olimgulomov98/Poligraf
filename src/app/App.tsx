import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./screens/homePage";
import Navbar from "./components/headers/Navbar";
import Footer from "./components/footer";
import "../css/app.css";
import "../css/navbar.css";
import "../css/footer.css";

function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>

      <Footer />
    </>
  );
}

export default App;
