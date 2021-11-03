import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { Module01 } from "src/components/Module01";
import { Module04 } from "src/components/Module04";
import { Module02 } from "src2/components/Module02";
import { Module03 } from "src3/components/Module03";

export default function Home() {
  const [counter, setCounter] = useState(0);

  function increase() {
    setCounter((old) => old + 1);
  }
  function decrease() {
    setCounter((old) => old - 1);
  }

  return (
    <div className={styles.container}>
      <Module01 increase={increase} decrease={decrease}>
        <Module02 counter={counter} test={<Module03 counter={counter} />} />
      </Module01>
      <Module04 />
    </div>
  );
}
