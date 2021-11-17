import React from "react";

import style from "./style.module.scss";

const Cabecalho = (props) => {
  return <section className={style.cabecalho}>{props.children}</section>;
};

export default Cabecalho;
