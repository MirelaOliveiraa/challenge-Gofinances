import React from "react";

import "./style.scss";

const Alinhamento = (props) => {
  return (
    <div className="section">
      <div className="alinhamento">{props.children}</div>
    </div>
  );
};
export default Alinhamento;
