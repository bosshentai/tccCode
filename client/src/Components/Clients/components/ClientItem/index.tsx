

import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";


type clientInfo= {
  id: string;
  name: string;
  email: string;
  trainPlan: string;
}


export const ClientItem = (props: clientInfo) => {
  const { id, name, email, trainPlan } = props;


  const trainPlanIsNull = trainPlan === "null"


  return (
    <li key={id} id={id} className={styles.clientContainer}>
      <NavLink to={`Profile/${id}`}>
      <div className={styles.info}>
        <p>{name}</p>
      </div>
      <div className={styles.info}>
        <p>{email}</p>
      </div>
      <div className={styles.info}>
        {/* <p>{trainPlan}</p> */}
        <p>{trainPlanIsNull ? "---": trainPlan}</p>
      </div>
      </NavLink>
    </li>
  )
}