
import styles from "./styles.module.scss"



type btnProps = {
  btnText: string;
  showHandler: () => void;
}

export const BtnBottomSide = (props: btnProps) => {

  return (
    <div className={styles.btnContainer}>
      <button onClick={props.showHandler} >
        <p>
          {props.btnText}</p>
      </button>
    </div>
  )
}