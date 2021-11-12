import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Listagem from "../pages/Listagem";

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
