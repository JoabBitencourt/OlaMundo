import { Link, useLocation } from "react-router-dom";
import styles from "./Menu.module.css";
import React from "react";
import MenuLink from "../MenuLink";

export default function Menu() {
  const localizacao = useLocation();

  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink path="/" nomeLink="Início" />
        <MenuLink path="/sobremim" nomeLink="Sobre Mim" />
      </nav>
    </header>
  );
}
