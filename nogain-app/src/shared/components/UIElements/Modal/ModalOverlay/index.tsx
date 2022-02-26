

import styles from './styles.module.scss';

export const ModalOverlay = (props :any) => {
  return (
    <div className={styles.ModalOverlay}>
      <div>{props.children}</div>
    </div>
  )
}