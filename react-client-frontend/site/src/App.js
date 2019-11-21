import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

// pages
import HomePage from "./pages/homepage/homepage.component";
import ServicesPage from "./pages/services/services-page.component";
import AboutPage from "./pages/about/about-page.component";
import RegisterPage from "./pages/register/register-page.component";

import SingleCoinPage from "./pages/single-coin/single-coin.component";
import AllCoinsPage from "./pages/all-coins/all-coins-page.component";

import Header from "./components/header/header-component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        {/* Pages */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/coins" component={ServicesPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/all-scrapes" component={AllCoinsPage} />
        <Route exact path="/single-coin" component={SingleCoinPage} />
      </Switch>
    </div>
  );
}

export default App;
