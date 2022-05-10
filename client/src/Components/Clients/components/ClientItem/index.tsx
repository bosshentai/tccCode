

import styles from "./styles.module.scss";


type clientInfo= {
  id: string;
  name: string;
  email: string;
  trainPlan: string;
}


export const ClientItem = (props: clientInfo) => {
  const { id, name, email, trainPlan } = props;


  return (
    <li key={id} id={id} className={styles.clientContainer}>
      <div className={styles.info}>
        <p>{name}</p>
      </div>
      <div className={styles.info}>
        <p>{email}</p>
      </div>
      <div className={styles.info}>
        <p>{trainPlan}</p>
      </div>
    </li>
  )
}