import React from "react";
import style from "./style.module.css";

export function CounterButtons({ increase, decrease }) {
  return (
    <div className={style.buttons}>
      <button className={style.btn} onClick={increase}>
        +
      </button>
      <button className={style.btn} onClick={decrease}>
        -
      </button>
    </div>
  );
}
