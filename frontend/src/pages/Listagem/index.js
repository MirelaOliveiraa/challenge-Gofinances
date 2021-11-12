import React from "react";
import { useHistory } from "react-router-dom";

const Listagem = () => {
  const history = useHistory();

  const irPraHome = () => {
    history.push("/");
  };
  return (
    <section>
      <h1>listagem</h1>
      <input type="text" />
      <input type="money" />
      <input type="text" />
      <input type="data" />
      <button>salvar</button>
      <button onClick={irPraHome}>voltar</button>
    </section>
  );
};

export default Listagem;
