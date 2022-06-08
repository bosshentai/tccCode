import { useState } from "react";
import styles from "./styles.module.scss";

// import whiteCross from "../../../../assets/icons/whiteCross.svg";
import whiteCross from "../../../../../assets/icons/whiteCross.svg";
import redCross from "../../../../../assets/icons/redCross.svg";
// import redCross from "../../../../assets/icons/redCross.svg";

type propsType = {
  onClose: () => void;
};

export const ErrorPopup = (props: propsType) => {
  const [isHover, setHover] = useState(false);

  const hoverHandler = () => {
    setHover(true);
  };

  const leaveHandler = () => {
    setHover(false);
  };

  const iconChange = isHover ? redCross : whiteCross;

  return (
    <div className={styles.transparentWall}>
      <div className={styles.errorContainer}>
        <div className={styles.headerContainer}>
          <button
            className={styles.right}
            onMouseEnter={hoverHandler}
            onMouseLeave={leaveHandler}
            onClick={props.onClose}
          >
            <img src={iconChange} alt="close" />
          </button>
        </div>
        <div className={styles.errorMessage}>
          <h1>Inscrição do Funcionário Invalido</h1>
        </div>
      </div>
    </div>
  );
};
