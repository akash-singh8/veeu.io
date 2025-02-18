import styles from "@/styles/page.module.scss";
import Landing from "@/components/Landing";
import Features from "@/components/Features";
import OpenSource from "@/components/OpenSource";
import Tutorial from "@/components/Tutorial";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <Landing />
      <Features />
      <OpenSource />
      <Tutorial />
      <Footer />
    </div>
  );
}
