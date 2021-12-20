import React, { useEffect } from "react";
// import {NavLink} from "react-router-dom";
import styles from "./style.module.scss";
import { NavLink, Link } from "react-router-dom";
type item = {
  name: string;
  icon: {
    blueicon: string;
    whiteicon: string;
  };
  linkPath: string;
};

export const MenuItem = (props: item) => {
  const [isHover, setHover] = React.useState(false);
  const [isActive, setActive] = React.useState(false);

  const name = props.name;

  const icon = props.icon;

  const linkPath = props.linkPath;

  useEffect(() => {
    const location = window.location.pathname;
    if (location === linkPath) {
      setActive(true);
      console.log(isActive);
    } else {
      setActive(false);
      console.log(isActive);
    }
  }, [isActive]);

  // console.log(icon)

  const hoverHandler = () => {
    setHover(true);
  };

  const leaveHandler = () => {
    setHover(false);
  };

  const iconChange = !isHover ? icon.whiteicon : icon.blueicon;

  const ulClassController = !isHover
    ? `${styles.menuItem}`
    : `${styles.menuItem}  ${styles.menuItemHouver}`;

  // const ulClassController = !isActive ? `${styles.menuItem}` : `${styles.menuItem}  ${styles.menuItemActive}`;

  // console.log(window.location.pathname);

  // const ulClassActiveControler = () => {
  //   const location = window.location.pathname;
  //   if (location === linkPath) {
  //     return `${styles.menuItemActive}`;
  //   }
  // }

  return (
    <ul
      className={ulClassController}
      onMouseEnter={hoverHandler}
      onMouseLeave={leaveHandler}
    >
      <NavLink className={styles.iconMenuContainer} to={linkPath}>
        <img src={iconChange} alt={name} />
        <p>{name}</p>
      </NavLink>
    </ul>
  );
};
