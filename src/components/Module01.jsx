import React from "react";
import { CounterButtons } from "./CounterButtons";
import style from "./style.module.css";

export const Module01 = ({ children, increase, decrease }) => {
  return (
    <div className={style.card}>
      <h1>MODULE 01</h1>
      {children}
      <CounterButtons increase={increase} decrease={decrease} />
    </div>
  );
};
