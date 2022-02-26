import React from "react";
import { NavLinkItem } from "../NavLinkItem";


import styles from "./styles.module.scss"


export const NavLinks = () => {
  return (
    <ul className={styles.navLinksContainer}>
      <NavLinkItem name="Client" to="/Client" />
      <NavLinkItem name="Plano de Treino" to="/TrainingPlan" />
      <NavLinkItem name="Desconto" to="/Discount" />
      <NavLinkItem name="Funcionário" to="/Employee" />
      <NavLinkItem name="Personal Trainer" to="/PersonalTrainer" />
    </ul>
  );
}
