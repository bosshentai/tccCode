import React, { useEffect, useState } from "react";
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

export const NavLinkItemV2 = (props: ItemProps) => {
  const [isHover, setIsHover] = useState<boolean>();
  const [isActive, setIsActive] = useState<Boolean>();

  

  const [test2, setTest] = useState<boolean>();

  const hoverHandler = () => {
    setIsHover(true);
  };

  const leaveHandler = () => {
    setIsHover(false);
  };

  useEffect(() => {
    setIsActive(document.location.pathname === props.to);

    if (isActive) {
     

      setTest(true);
    } else {
      if (!isHover) {
        setTest(true);
      } else {
        setTest(false);
      }
    }
  }, [isActive, isHover]);

  

  console.log("Name is ", props.name);
  // console.log("IconBlue is ", iconIsBlue);

  console.log("Hover state: ", isHover);
  console.log("Active state: ", isActive);

  console.log(test2);

 

  const iconController = isActive
    ? test2
      ? props.icon.blueicon
      : props.icon.blueicon
    : test2
    ? props.icon.blueicon
    : props.icon.whiteicon;

  //  const iconController = !isHover ? props.icon.whiteicon : props.icon.blueicon;

  // const classNameController = styles.navlink;

  let classNameInactive = styles.navlink;

  let classNameActive = styles.navlinkActive;

  return (
    <li>
      <NavLink
        to={props.to}
        onMouseEnter={hoverHandler}
        onMouseLeave={leaveHandler}
        className={({ isActive }) =>
          isActive ? classNameActive : classNameInactive
        }
      >
        <img src={iconController} alt={props.name} /> <p>{props.name}</p>
      </NavLink>
    </li>
  );
};
