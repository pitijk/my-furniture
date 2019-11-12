import "./App.scss";

import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Footer from "./Footer";
import HomePage from "./HomePage";
import Product from "./Product";
import TermsOfService from "./TermsOfService";
import PrivacyPolicy from "./PrivacyPolicy";
import ReturnPolicy from "./ReturnPolicy";
import Cart from "./Cart";
import Navbar from "./Navbar";

const App = props => {
  return (
    <>
      <HashRouter basename="/">
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/terms-of-service" exact component={TermsOfService} />
          <Route path="/privacy-policy" exact component={PrivacyPolicy} />
          <Route path="/return-policy" exact component={ReturnPolicy} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/:type/:name" component={Product} />
        </Switch>
        <Footer />
      </HashRouter>
    </>
  );
};

export default App;
