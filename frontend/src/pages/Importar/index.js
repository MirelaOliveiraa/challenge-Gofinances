import React from "react";
import { useHistory } from "react-router-dom";

import style from "./style.module.scss";
import Cabecalho from "../../components/Cabecalho";

import HomeIcon from "@material-ui/icons/Home";
import ReportProblemOutlinedIcon from "@material-ui/icons/ReportProblemOutlined";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";

const Importar = () => {
  const history = useHistory();

  const pagInicial = () => {
    history.push("/");
  };

  return (
    <section className={style.section}>
      <Cabecalho>
        <div className={style.sectionCabecalho}>
          <div className={style.GoFinances}>
            <MonetizationOnOutlinedIcon className={style.iconMoney} />
            gofinances
          </div>
          <HomeIcon className={style.iconHome} onClick={pagInicial} />
        </div>
      </Cabecalho>
      <h3 className={style.titulo}>Importar uma transação</h3>
      <div className={style.divCard}>
        <div className={style.divArquivo}>
          <input
            className={style.InputAddArquivos}
            placeholder="Selecione ou arraste o arquivo aqui"
            type="text"
          />
        </div>
        <div className={style.divButtons}>
          <div className={style.divAlert}>
            <ReportProblemOutlinedIcon className={style.iconProblem} />
            <h6>Permitido apenas arquivos CSV</h6>
          </div>
          <button className={style.buttonEnviar}>Enviar</button>
        </div>
      </div>
    </section>
  );
};

export default Importar;
