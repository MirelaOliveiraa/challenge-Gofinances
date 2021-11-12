import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { TransactionContext } from "../../contexts/TransactionsContext";

import style from "./style.module.scss";
import Table from "../../components/Table";

import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import AttachMoneyOutlinedIcon from "@material-ui/icons/AttachMoneyOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";

const Home = () => {
  const { transacoes } = useContext(TransactionContext);

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
      <div className={style.sectionDivOne}>
        <div className={style.divGofinances}>
          <div className={style.span1}>
            <MonetizationOnOutlinedIcon className={style.iconMoedas} />{" "}
            gofinances
          </div>
          <div>
            <div>listagem</div>
            <div>importar</div>
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
      </div>
      <div className={style.sectionDivTwo}>
        <Table />
      </div>
    </section>
  );
};
export default Home;
