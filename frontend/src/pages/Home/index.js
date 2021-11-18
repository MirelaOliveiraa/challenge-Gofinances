import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import style from "./style.module.scss";
import Table from "../../components/Table";
import Finance from "../../assets/Finance.svg";
import Alinhamento from "../../components/Alinhamento";
import { TransactionContext } from "../../contexts/TransactionsContext";

import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import AttachMoneyOutlinedIcon from "@material-ui/icons/AttachMoneyOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";

const Home = () => {
  const history = useHistory();
  const { transacoes } = useContext(TransactionContext);

  const Importar = () => {
    history.push("/importacao");
  };

  const summary = transacoes.reduce(
    (acc, transacao) => {
      if (transacao.tipo === "deposito") {
        acc.deposito += transacao.preco;
        acc.total += transacao.preco;
      } else {
        acc.saida += transacao.preco;
        acc.total -= transacao.preco;
      }

      return acc;
    },
    {
      deposito: 0,
      saida: 0,
      total: 0,
    }
  );

  return (
    <section className={style.sectionHome}>
      <div className={style.Cabecalho}>
        <Alinhamento>
          <div className={style.divGofinances}>
            <div className={style.span1}>
              <img src={Finance} />
              gofinances
            </div>
            <div>
              <span className={style.spanImportar}>Listagem</span>
              <span className={style.spanListagem} onClick={Importar}>
                Importar
              </span>
            </div>
          </div>
          <div className={style.sectionDivOneCards}>
            <div className={style.cards}>
              <div className={style.cardsL1}>
                <span>Entradas</span>
                <ArrowUpwardOutlinedIcon className={style.iconEntrada} />
              </div>
              <div className={style.cardsL2}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(summary.deposito)}
              </div>
            </div>

            <div className={style.cards}>
              <div className={style.cardsL1}>
                <span>Saidas</span>
                <ArrowDownwardOutlinedIcon className={style.iconSaida} />
              </div>
              <div className={style.cardsL2}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(summary.saida)}
              </div>
            </div>

            <div className={style.cardOrange}>
              <div className={style.cardsL1}>
                <span>Total</span>
                <AttachMoneyOutlinedIcon className={style.money} />
              </div>
              <div className={style.cardsL2}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(summary.total)}
              </div>
            </div>
          </div>
        </Alinhamento>
      </div>
      <div className={style.sectionDivTwo}>
        <Table />
      </div>
    </section>
  );
};
export default Home;
