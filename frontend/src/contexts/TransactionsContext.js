import React, { createContext, useState, useEffect } from "react";

import api from "../services";

export const TransactionContext = createContext({});

export const TransactionProvider = (props) => {
  const [transacoes, setTransacoes] = useState([]);

  useEffect(() => {
    api.get("/transacoes").then((response) => {
      setTransacoes(response.data);
    });
  }, []);

  return (
    <TransactionContext.Provider value={{ transacoes }}>
      {props.children}
    </TransactionContext.Provider>
  );
};
