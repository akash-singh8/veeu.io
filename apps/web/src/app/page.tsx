import styles from "@/styles/page.module.scss";
import Landing from "@/components/Landing";
import Features from "@/components/Features";
import OpenSource from "@/components/OpenSource";
import Tutorial from "@/components/Tutorial";

export default function Home() {
  return (
    <div className={styles.page}>
      <Landing />
      <Features />
      <OpenSource />
      <Tutorial />
    </div>
  );
}
