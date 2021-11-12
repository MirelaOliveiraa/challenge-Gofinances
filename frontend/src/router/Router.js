import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-dom";

import Listagem from "../pages/Listagem";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/listagem" component={Listagem} />
      </Switch>
    </Router>
  );
};
export default Routes;
