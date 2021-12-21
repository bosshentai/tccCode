import { Fragment } from "react"
import { SideBar } from "../SideBar"


import style from "./style.module.scss"

export const Layout = (props:any) => {
  return  <div className={style.container}>
    <SideBar/>
    <main className={style.main}>{props.children}</main>
  </div>
}