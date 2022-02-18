import React from "react";

import styles from "./styles.module.scss";

import { NavLink } from "react-router-dom";
import { NavLinkItem } from "../NavLinkItem";

// white icons for the nav links
import whiteClientIcon from "../../../../assets/icons/whiteClient.svg";
import whiteTrainingPlanIcon from "../../../../assets/icons/whiteTrainingPlan.svg";
import whiteDiscountIcon from "../../../../assets/icons/whiteDiscount.svg";
import whiteEmployeeIcon from "../../../../assets/icons/whiteEmployee.svg";
import whitePersonalTrainer from "../../../../assets/icons/whitePersonalTrainer.svg";

// blue icons for the vav links
import blueClientIcon from "../../../../assets/icons/blueClient.svg";
import blueTrainingPlanIcon from "../../../../assets/icons/blueTrainingPlan.svg";
import blueDiscountIcon from "../../../../assets/icons/blueDiscount.svg";
import blueEmployeeIcon from "../../../../assets/icons/blueEmployee.svg";
import bluePersonalTrainer from "../../../../assets/icons/bluePersonalTrainer.svg";

export const NavLinks = () => {
  return (
    <ul className={styles.navLinksContainer}>
      <NavLinkItem
        name="Client"
        icon={{ blueicon: blueClientIcon, whiteicon: whiteClientIcon }}
        to="/Client"
      />
      <NavLinkItem
        name="Plano de Treino"
        icon={{
          blueicon: blueTrainingPlanIcon,
          whiteicon: whiteTrainingPlanIcon,
        }}
        to="/TrainingPlan"
      />
      <NavLinkItem
        name="Desconto"
        icon={{ blueicon: blueDiscountIcon, whiteicon: whiteDiscountIcon }}
        to="/Discount"
      />
      <NavLinkItem
        name="Funcionário"
        icon={{ blueicon: blueEmployeeIcon, whiteicon: whiteEmployeeIcon }}
        to="/Employee"
      />

      <NavLinkItem
        name="Personal Trainer"
        icon={{
          blueicon: bluePersonalTrainer,
          whiteicon: whitePersonalTrainer,
        }}
        to="/PersonalTrainer"
      />
    </ul>
  );
};
