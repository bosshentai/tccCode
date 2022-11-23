import { useState } from 'react'

import styles from './styles.module.scss'

import whiteCross from '../../../../assets/icons/whiteCross.svg'
import blueCross from '../../../../assets/icons/blueCross.svg'

type propsType = {
  onClose: () => void
}

export const Payment = (props: propsType) => {
  const [closeButtonIsHover, setCloseButtonIsHover] =
    useState(false)

  const hoverHandler = () => {
    setCloseButtonIsHover(true)
  }

  const leaveHandler = () => {
    setCloseButtonIsHover(false)
  }

  const iconChange = !closeButtonIsHover
    ? whiteCross
    : blueCross

  return (
    <div className={styles.addPaymentContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.left}>
            <h1>Pagamento</h1>
          </div>
          <button
            className={styles.right}
            onMouseEnter={hoverHandler}
            onMouseLeave={leaveHandler}
            onClick={props.onClose}
          >
            <img src={iconChange} alt="close" />
          </button>
        </div>
      </div>
      <div className={styles.formContainer}>
        <div className={styles.title}>
          <h2>Detalhes</h2>
          <h2>Preço</h2>
        </div>
        <div className={styles.itemContainer}>
          <p>
            <strong>Plano de Treino:</strong>treino 1
          </p>
          <p>110$00</p>
        </div>
        <div className={styles.itemContainer}>
          <p>
            <strong>Personal Trainer:</strong>personal 1
          </p>
          <p>110$00</p>
        </div>
        <div className={styles.itemContainer}>
          <p>
            <strong>Desconto:</strong> desconto 1
          </p>
          <p>10$00</p>
        </div>
        <div className={styles.itemContainer}>
          <p>
            <strong>Total:</strong>
          </p>
          <p>210$00</p>
        </div>
        <div className={styles.btnSubmitContainer}>
          <button>Confirmar</button>
        </div>
      </div>
    </div>
  )
}
