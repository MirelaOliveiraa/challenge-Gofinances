import React from "react";

import "./style/global.scss";
import Routes from "./router/Router.js";
import { TransactionProvider } from "./contexts/TransactionsContext";

const App = () => {
  return (
    <TransactionProvider>
      <section>
        <Routes />
      </section>
    </TransactionProvider>
  );
};

export default App;
