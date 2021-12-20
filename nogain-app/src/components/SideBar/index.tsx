import logoImg from "../../assets/logo.svg";

import { MenuItem } from "../MenuItem";

// blue icon
import blueClient from "../../assets/icons/blueClient.svg";
import blueTrainingPlan from "../../assets/icons/blueTrainingPlan.svg";
import blueDiscount from "../../assets/icons/blueDiscount.svg";
import blueEmployee from "../../assets/icons/blueEmployee.svg";
import bluePersonalTrainer from "../../assets/icons/bluePersonalTrainer.svg";

// white icon
import whiteClient from "../../assets/icons/whiteClient.svg";
import whiteTrainingPlan from "../../assets/icons/whiteTrainingPlan.svg";
import whiteDiscount from "../../assets/icons/whiteDiscount.svg";
import whiteEmployee from "../../assets/icons/whiteEmployee.svg";
import whitePersonalTrainer from "../../assets/icons/whitePersonalTrainer.svg";

import styles from "./style.module.scss";

type icon = {
  blueicon: string;
  whiteicon: string;
};

type item = {
  name: string;
  icon: icon;
  linkPath: string;
}

export function SideBar() {
  // console.log(typeof(whiteClient))

  // const menuClientName: string = "Cliente";
  // const menuClientIcon: icon = {
  //   blueicon: blueClient,
  //   whiteicon: whiteClient,
  // };


  const menuClient: item = {
    name: "Cliente",
    icon: {
      blueicon: blueClient,
      whiteicon: whiteClient,
    },
    linkPath: "/client",
  }

  const menuTrainingPlan: item = {
    name: "Plano de Treino",
    icon: {
      blueicon: blueTrainingPlan,
      whiteicon: whiteTrainingPlan,
    },
    linkPath: "/trainingPlan",
  }


  const menuDiscount: item = {
    name: "Desconto",
    icon: {
      blueicon: blueDiscount,
      whiteicon: whiteDiscount,
    },
    linkPath: "/discount",
  }


  const menuEmployee: item = {
    name: "Funcionário",
    icon: {
      blueicon: blueEmployee,
      whiteicon: whiteEmployee,
    },
    linkPath: "/employee",
  }

  const menuPersonalTrainer: item = {
    name: "Personal Trainer",
    icon: {
      blueicon: bluePersonalTrainer,
      whiteicon: whitePersonalTrainer,
    },
    linkPath: "/personalTrainer",
  }





  

  return (
    <header className={styles.leftSideBar}>
      <div className={styles.imageContainer}>
        <img src={logoImg} alt="logo" className={styles.logo} />
      </div>
      <nav className={styles.navContainer}>
        <MenuItem name={menuClient.name} icon={menuClient.icon} linkPath={menuClient.linkPath} />
        <MenuItem name={menuTrainingPlan.name} icon={menuTrainingPlan.icon} linkPath={menuTrainingPlan.linkPath} />
        <MenuItem name={menuDiscount.name} icon={menuTrainingPlan.icon} linkPath={menuDiscount.linkPath} />
        <MenuItem name={menuEmployee.name} icon={menuEmployee.icon} linkPath={menuEmployee.linkPath} />
        <MenuItem name={menuPersonalTrainer.name} icon={menuPersonalTrainer.icon} linkPath={menuPersonalTrainer.linkPath} />
      </nav>
    </header>
  );
}
