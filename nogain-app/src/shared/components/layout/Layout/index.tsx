// import { Fragment } from "react"

import { Profile } from "../../Profile";

import { MainBar } from "../../Navigation/MainBar";

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
