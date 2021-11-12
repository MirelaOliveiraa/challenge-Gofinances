import React from "react";

import style from "./style.module.scss";

const Table = () => {
  return (
    <section className={style.section}>
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
          <tr className={style.tableTr}>
            <td className={style.tableTd}>lalakalkaasjiuds koeyhor9f la</td>
            <td className={style.tableTd}>lallaa</td>
            <td className={style.tableTd}>lalal</td>
            <td className={style.tableTd}>alallla</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Table;
