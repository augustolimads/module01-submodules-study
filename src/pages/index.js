import styles from "../styles/Home.module.css";
import { Module01 } from "src/components/Module01";
import { Module04 } from "src/components/Module04";
import { Module02 } from "src2/components/Module02";
import { Module03 } from "src3/components/Module03";

export default function Home() {
  return (
    <div className={styles.container}>
      <Module01>
        <Module02 test={<Module03 />} />
      </Module01>
      <Module04 />
    </div>
  );
}
