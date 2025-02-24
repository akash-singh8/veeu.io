import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Script from "next/script";

import styles from "@/styles/page.module.scss";

import Sidebar from "@/components/Sidebar";
import Content from "@/components/Content";

const Home = async () => {
  const { userId } = await auth();

  if (!userId) redirect("/auth?mode=sign-in");

  return (
    <div className={styles.page}>
      <Sidebar />

      <Script
        src="https://cdn.jsdelivr.net/npm/chart.js"
        strategy="beforeInteractive"
      />

      <div className={styles.content}>
        <div>
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Home;
