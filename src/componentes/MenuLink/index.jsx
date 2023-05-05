import React from "react";
import styles from "./MenuLink.module.css";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function MenuLink({ nomeLink, path }) {
  return (
    <NavLink
      className={({ isActive }) => `
    ${styles.link}
    ${isActive ? styles.linkDestacado : ""}
`}
      to={path}
    >
      {nomeLink}
    </NavLink>
  );
}
