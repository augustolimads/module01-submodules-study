import React from "react";
import style from "./style.module.css";

export const Module01 = ({ children }) => {
  return (
    <div className={style.card}>
      <h1>MODULE 01</h1>
      {children}
    </div>
  );
};
