

import styles from './styles.module.scss';

type propsType ={
  onClose: () => void;
}


export const Backdrop = (props: propsType) => {

  // const portalElement = document.getElementById('backdrop');

  // return <div className={styles.backdrop} onClick={props.onClose} />
  return <div className={styles.backdrop} onClick={props.onClose} />
}