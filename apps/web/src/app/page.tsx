import styles from "@/styles/page.module.scss";
import Landing from "@/components/Landing";
import Features from "@/components/Features";

export default function Home() {
  return (
    <div className={styles.page}>
      <Landing />
      <Features />
    </div>
  );
}
