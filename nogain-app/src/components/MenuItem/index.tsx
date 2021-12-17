import React, { useEffect } from "react";
import styles from "./style.module.scss";

type item = {
  name: string;
  icon: {
    blueicon: string;
    whiteicon: string;
  };
};

export const MenuItem = (props: item) => {
  const [isHover, setHover] = React.useState(false);

  const name = props.name;

  const icon = props.icon;

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

  return (
    <ul
      className={ulClassController}
      onMouseEnter={hoverHandler}
      onMouseLeave={leaveHandler}
    >
      <div className={styles.iconMenuContainer}>
        <img src={iconChange} alt={name} />
        <p>{name}</p>
      </div>
    </ul>
  );
};
