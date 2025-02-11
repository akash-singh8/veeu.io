import Image from "next/image";
import styles from "@/styles/page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <Image src={"/logo.svg"} alt="logo" width={200} height={200}></Image>
      <h1>welcome to veeu</h1>
      <p>--launching soon--</p>
    </div>
  );
}
