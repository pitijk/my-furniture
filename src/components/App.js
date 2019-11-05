import "../sass/index.scss";

import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";

import Footer from "./Footer";
import HomePage from "./HomePage";
import Product from "./Product";
import TermsOfService from "./TermsOfService";
import PrivacyPolicy from "./PrivacyPolicy";
import ReturnPolicy from "./ReturnPolicy";

const App = props => {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/terms-of-service" exact component={TermsOfService} />
          <Route path="/privacy-policy" exact component={PrivacyPolicy} />
          <Route path="/return-policy" exact component={ReturnPolicy} />
          <Route path="/:type/:name" component={Product} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
