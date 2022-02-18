import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./styles.module.scss";

type ItemProps = {
  name: string;
  icon: {
    blueicon: string;
    whiteicon: string;
  };

  to: string;
};

export const NavLinkItem = (props: ItemProps) => {
  const [isHover, setIsHover] = React.useState(false);

  const hoverHandler = () => {
    setIsHover(!isHover);
  };

  const leaveHandler = () => {
    setIsHover(false);
  };

  const iconController = !isHover ? props.icon.whiteicon : props.icon.blueicon;

  return (
    <li>
      <NavLink
        to={props.to}
        onMouseEnter={hoverHandler}
        onMouseLeave={leaveHandler}
        className={styles.navlink}
      >
        <img src={iconController} alt={props.name} /> <p>{props.name}</p>
      </NavLink>
    </li>
  );
};
