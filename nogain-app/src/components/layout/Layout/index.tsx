// import { Fragment } from "react"

import { Profile } from "../../User/Profile";

import { MainBar } from "../SideBar/MainBar";

import style from "./style.module.scss";

export const Layout = (props: any) => {
  return (
    <div className={style.layoutContainer}>
      <MainBar />
      <div className={style.rightSide}>
        <Profile/>
        <main className={style.main}>{props.children}</main>
      </div>
    </div>
  );
};
