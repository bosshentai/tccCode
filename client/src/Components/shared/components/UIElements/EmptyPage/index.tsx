

import { DefaultInsidePage } from "../DefaultInsidePage";
import styles from "./styles.module.scss";


type EmptyPageProps = {
  message: string;
  className?: string;
}


export const EmptyPage = (props: EmptyPageProps) => {


  // const classNameController = `${styles.p}  ${props.className}`


  return <DefaultInsidePage className={styles.textContainer}>
    <p className={styles.p}>{props.message}</p>
    </DefaultInsidePage>;
}