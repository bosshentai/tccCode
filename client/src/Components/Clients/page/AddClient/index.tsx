import styles from './styles.module.scss'

import whiteCross from '../../../../assets/icons/whiteCross.svg'
import blueCross from '../../../../assets/icons/blueCross.svg'
import { useState } from 'react'

type propsType = {
  onClose: () => void
}

export const AddClient = (props: propsType) => {
  const [isHover, setHover] = useState(false)

  const hoverHandler = () => {
    setHover(true)
  }

  const leaveHandler = () => {
    setHover(false)
  }

  const iconChange = !isHover ? whiteCross : blueCross

  return (
    <div className={styles.addClientContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.left}>
          <h1>Registar Cliente</h1>
        </div>
        <button
          onMouseEnter={hoverHandler}
          onMouseLeave={leaveHandler}
          className={styles.right}
          onClick={props.onClose}>
          <img
            src={iconChange}
            alt="close"
          />
        </button>
      </div>
    </div>
  )
}
