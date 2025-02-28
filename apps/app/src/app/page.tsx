import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Script from "next/script";

import styles from "@/styles/page.module.scss";
import App from "@/components/App";

const Home = async () => {
  const { userId } = await auth();

  if (!userId) redirect("/auth?mode=sign-in");

  return (
    <div className={styles.page}>
      <Script
        src="https://cdn.jsdelivr.net/npm/chart.js"
        strategy="beforeInteractive"
      />

      <App />
    </div>
  );
};

export default Home;
