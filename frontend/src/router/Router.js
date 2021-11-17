import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Importar from "../pages/Importar";

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
