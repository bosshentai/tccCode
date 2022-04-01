import React from "react";


import styles from "./styles.module.scss"

export const MainHeader = (props: any) => {
  return (
    <header className={styles.mainHeader}>{props.children}</header>
  )
}
