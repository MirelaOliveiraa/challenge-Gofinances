import React from "react";
import { useHistory } from "react-router-dom";

import style from "./style.module.scss";
import Cards from "../../components/Cards";
import Table from "../../components/Table";

import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import AttachMoneyOutlinedIcon from "@material-ui/icons/AttachMoneyOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";

const Home = () => {
  const history = useHistory();

  const importarConta = () => {
    history.push("/listagem");
  };

  return (
    <section className={style.sectionHome}>
      <div className={style.sectionDivOne}>
        <div className={style.divGofinances}>
          <div className={style.span1}>
            <MonetizationOnOutlinedIcon className={style.iconMoedas} />{" "}
            gofinances
          </div>
          <div>
            <button className={style.span2} onClick={importarConta}>
              {" "}
              listagem
            </button>
            <div>importar</div>
          </div>
        </div>
        <div className={style.sectionDivOneCards}>
          <Cards>
            <div className={style.cards}>
              <div className={style.cardsL1}>
                <span>Entradas</span>
                <ArrowUpwardOutlinedIcon className={style.iconEntrada} />
              </div>
              <div className={style.cardsL2}>R$ 33.900,00</div>
            </div>
          </Cards>
          <Cards>
            <div className={style.cards}>
              <div className={style.cardsL1}>
                <span>Saidas</span>
                <ArrowDownwardOutlinedIcon className={style.iconSaida} />
              </div>
              <div className={style.cardsL2}>R$ 00.000,00</div>
            </div>
          </Cards>
          <Cards>
            <div className={style.cardOrange}>
              <div className={style.cardsL1}>
                <span>Total</span>
                <AttachMoneyOutlinedIcon className={style.money} />
              </div>
              <div className={style.cardsL2}>R$ 33.900,00</div>
            </div>
          </Cards>
        </div>
      </div>
      <div className={style.sectionDivTwo}>
        <Table />
      </div>
    </section>
  );
};
export default Home;
