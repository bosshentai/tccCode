
import styles from "./styles.module.scss";


type DefaultInsidePageProps = {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

export const DefaultInsidePage = (props: DefaultInsidePageProps) => {


  const classNameController = `${styles.container} ${props.className}`

  return <div className={classNameController}>
        {props.children}
  </div>
}