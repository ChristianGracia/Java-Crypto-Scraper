import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

// pages
import HomePage from "./pages/homepage/homepage.component";
import ServicePage from "./pages/services/services-page.component";
import AboutPage from "./pages/about/about-page.component";
import ContactPage from "./pages/contact/contact-page.component";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* Pages */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/services" component={ServicePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
    </div>
  );
}

export default App;
