import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Importar from "../pages/Importar";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/importacao" component={Importar} />
      </Switch>
    </Router>
  );
};
export default Routes;
