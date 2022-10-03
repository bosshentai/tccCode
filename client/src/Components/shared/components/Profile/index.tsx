import { useState } from 'react'
import profileIcon from '../../../../assets/icons/blueProfile.svg'

import styles from './styles.module.scss'

// user Profile

export const Profile = () => {
  const [openSettings, setOpenSettings] = useState(false)

  const settingHandler = () => {
    setOpenSettings(!openSettings)
    // console.log(openSettings)
  }

  return (
    <div className={styles.profileContainer}>
      <img
        onClick={settingHandler}
        src={profileIcon}
        alt="profile"
      />

      {openSettings && (
        <span className={styles.settings}>
          <button>Logout</button>
        </span>
      )}
    </div>
  )
}
