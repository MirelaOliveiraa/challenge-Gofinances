import React from "react";

import style from "./style.module.scss";

const Cards = (props) => {
  return (
    <div>
      <div className={style.section}>{props.children}</div>
    </div>
  );
};

export default Cards;
