import { useState } from "react";
import styles from "./styles.module.scss";

import whiteCross from "../../../assets/icons/whiteCross.svg";
import blueCross from "../../../assets/icons/blueCross.svg";

export const AddDiscount = () => {
  const [isHover, setHover] = useState(false);

  const hoverHandler = () => {
    setHover(true);
  };

  const leaveHandler = () => {
    setHover(false);
  };

  const iconChange = !isHover ? whiteCross : blueCross;

  return (
    <div className={styles.addDiscountContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.left}>
          <h1>Registrar Desconto</h1>
        </div>
        <button className={styles.right}
          onMouseEnter={hoverHandler}
          onMouseLeave={leaveHandler}
        >
          <img src={iconChange} alt="close" />
        </button>
      </div>
      {/* Form  */}
      <div>

      </div>
    </div>
  );
};
