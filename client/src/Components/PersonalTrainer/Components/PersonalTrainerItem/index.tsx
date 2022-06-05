import { NavLink } from "react-router-dom";

import styles from "./styles.module.scss";

type personalTrainerInfo ={
  id: string;
  name: string;
  email: string;
}



export const PersonalTrainerItem = (props: personalTrainerInfo) =>{
  const { id, name, email } = props;

  // const []

  return (
    <li key={id} className={styles.personalTrainerContainer}>
      <NavLink to={`Profile/${id}`}>
        <div className={styles.info}>
          <p>{name}</p>
        </div>
        <div className={styles.info}>
          <p>{email}</p>
        </div>

        </NavLink>

    </li>
  )
}