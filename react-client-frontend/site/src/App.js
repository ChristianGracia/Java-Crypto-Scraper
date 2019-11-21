import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

// pages
import HomePage from "./pages/homepage/homepage.component";
import ServicePage from "./pages/services/services-page.component";
import AboutPage from "./pages/about/about-page.component";
import RegisterPage from "./pages/register/register-page.component";

import Header from "./components/header/header-component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        {/* Pages */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/services" component={ServicePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/register" component={RegisterPage} />
      </Switch>
    </div>
  );
}

export default App;
