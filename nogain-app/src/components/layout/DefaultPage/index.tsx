
import styles from "./styles.module.scss";

export const DefaultPage = (props: any) => {
  return <div className={styles.pageContainer}> 
      {props.children}
  </div>
}