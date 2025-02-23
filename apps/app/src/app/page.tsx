import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import styles from "@/styles/page.module.scss";

import Sidebar from "@/components/Sidebar";
import DnsRecords from "@/components/DnsRecords";

const Home = async () => {
  const { userId } = await auth();

  if (!userId) redirect("/auth?mode=sign-in");

  return (
    <div className={styles.page}>
      <Sidebar />

      <div className={styles.content}>
        <div>
          <DnsRecords />
        </div>
      </div>
    </div>
  );
};

export default Home;
