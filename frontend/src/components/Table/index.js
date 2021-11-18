import React, { useContext } from "react";

import style from "./style.module.scss";
import Alinhamento from "../Alinhamento";
import { TransactionContext } from "../../contexts/TransactionsContext";

const Table = () => {
  const { transacoes } = useContext(TransactionContext);

  return (
    <section className={style.section}>
      <Alinhamento>
        <table className={style.sectionTable}>
          <thead>
            <tr className={style.tableTr}>
              <th className={style.tableTh}>Titulo </th>
              <th className={style.tableTh}>Preço</th>
              <th className={style.tableTh}>Categoria</th>
              <th className={style.tableTh}>Data</th>
            </tr>
          </thead>
          <tbody>
            {transacoes.map((transacao) => (
              <tr key={transacao.id} className={style.tableTr}>
                <td className={style.tableTd}>{transacao.titulo}</td>
                <td
                  className={
                    transacao.tipo == "saque"
                      ? style.colorSaida
                      : style.colorEntrada
                  }
                >
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(transacao.preco)}
                </td>
                <td className={style.tableTd}>{transacao.categoria}</td>
                <td className={style.tableTd}>
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(transacao.data)
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Alinhamento>
    </section>
  );
};

export default Table;
