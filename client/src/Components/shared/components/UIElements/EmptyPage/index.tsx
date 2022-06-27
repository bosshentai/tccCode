

import styles from "./styles.module.scss";


type EmptyPageProps = {
  message: string;
}


export const EmptyPage = (props: EmptyPageProps) => {


  return <p className={styles.p}>{props.message}</p>
}