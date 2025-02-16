import styles from "@/styles/page.module.scss";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
    </div>
  );
}
