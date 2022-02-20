import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./styles.module.scss";

type ItemProps = {
  name: string;
  to: string;
}


export const NavLinkItem = (props: ItemProps) => {


  let classNameInactive = styles.navlink;
  let classNameActive = styles.navlinkActive;


  return (
    <li>
      <NavLink
      className={({ isActive }) =>
      isActive ? classNameActive : classNameInactive
    }
      to={props.to}>
        <p>{props.name}</p>
      </NavLink>
    </li>
  )
}


