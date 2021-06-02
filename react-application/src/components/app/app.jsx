import React from "react";

import { Header } from "../header";
import { Main } from "../main";

import styles from "./app.module.css";

export const App = (props) => {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
    </div>
  );
};
