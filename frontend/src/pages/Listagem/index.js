import React from "react";
import { useHistory } from "react-router-dom";

import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";

const Listagem = () => {
  const history = useHistory();

  const pagInicial = () => {
    history.push("/");
  };

  return (
    <section>
      <div>
        <div>
          icon-Gofinances <div>data</div>
        </div>
        <div>
          <h1>listagem</h1>
          <input placeholder="Nome" type="text" />
          <input placeholder="Preço" type="money" />
          <button>
            Income <ArrowUpwardOutlinedIcon />
          </button>
          <button>
            Outcome <ArrowDownwardOutlinedIcon />
          </button>
          <input placeholder="Categoria" type="text" />
          <input placeholder="Data" type="data" />
          <button>Enviar</button>
          <button onClick={pagInicial}>voltar</button>
        </div>
      </div>
    </section>
  );
};

export default Listagem;
