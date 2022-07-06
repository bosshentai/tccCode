
import styles from "./styles.module.scss";

export const DefaultPage = (props: any) => {


  const classNameController = `${styles.pageContainer}  ${props.className}`;

  return <div className={classNameController}>
      {props.children}
  </div>
}