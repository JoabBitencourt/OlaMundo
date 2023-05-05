import React from 'react'
import styles from './Rodape.module.css'
import { ReactComponent as  MarcaRegistrada } from 'assets/marcaRegistrada.svg'

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
        <MarcaRegistrada />
        Desenvolvido por Joab
    </footer>
  )
}
