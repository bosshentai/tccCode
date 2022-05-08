import { IconConfig } from "../../UIElements/IconConfig";
import { MainHeader } from "../MainHeader";


import styles from ".//styles.module.scss";


import logo from "../../../../../assets/logo.svg";

import { NavLinks } from "../NavLinks";


export const MainNavigation = (props: any) => {
  return (
    <MainHeader>
      <div className={styles.logo}>
        {/* <IconConfig image={logo}/> */}
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <NavLinks/>
      </nav>
      
    </MainHeader>
   
      
  
  );
};
