// import { Fragment } from "react"

import { Profile } from "../Profile";

import { SideBar } from "../SideBar";

import style from "./style.module.scss";

export const Layout = (props: any) => {
  return (
    <div className={style.container}>
      <SideBar />
      <div className={style.rightSide}>
        <Profile />
        <main className={style.main}>{props.children}</main>
      </div>
    </div>
  );
};
