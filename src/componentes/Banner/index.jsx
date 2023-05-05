import React from "react";
import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/minha_foto.png";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá, Mundo</h1>
        <p className={styles.paragrafo}>
          Para fazer essa configuração, precisamos ir na raiz do projeto e criar
          um arquivo chamado “jsconfig.json”. Essa configuração já está
          especificada na documentação do React, eu vou até deixar um “Para
          saber mais” para você acessar. Então, já vou dar um “Ctrl + V” nesse
          código que vamos utilizar.
        </p>
      </div>
      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
        />
        <img className={styles.minhaFoto} src={minhaFoto} alt="" />
      </div>
    </div>
  );
}
