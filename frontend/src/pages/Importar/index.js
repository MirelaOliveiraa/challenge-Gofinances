import { useHistory } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import React, { useState } from "react";

import style from "./style.module.scss";

import HomeIcon from "@material-ui/icons/Home";
import ReportProblemOutlinedIcon from "@material-ui/icons/ReportProblemOutlined";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import PictureInPictureAltOutlinedIcon from "@material-ui/icons/PictureInPictureAltOutlined";

const Importar = () => {
  const history = useHistory();
  const [file, setFile] = useState(null);

  const onDropAccepted = (acceptedFile) => {
    setFile(acceptedFile[0]);
    console.log(acceptedFile);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDropAccepted,
    accept: ".csv",
  });

  const pagInicial = () => {
    history.push("/");
  };

  return (
    <section className={style.section}>
      <div className={style.sectionCabecalho}>
        <div className={style.GoFinances}>
          <MonetizationOnOutlinedIcon className={style.iconMoney} />
          gofinances
        </div>
        <HomeIcon className={style.iconHome} onClick={pagInicial} />
      </div>
      <h3 className={style.titulo}>Importar uma transação</h3>
      <div className={style.divCard}>
        <div {...getRootProps({ className: style.divArquivo })}>
          <input
            {...getInputProps()}
            className={style.InputAddArquivos}
            type="text"
          />
          <p>Selecione ou arraste o arquivo aqui</p>
        </div>
        {file && (
          <p className={style.ArquivoAdicionado}>
            <PictureInPictureAltOutlinedIcon />
            <span>{file.name}</span>
          </p>
        )}
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
