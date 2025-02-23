import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

import styles from "@/styles/sidebar.module.scss";

import recordSvg from "@/assets/svgs/server.svg";
import analyticSvg from "@/assets/svgs/analytics.svg";
import settingSvg from "@/assets/svgs/settings.svg";
import upDown from "@/assets/svgs/updown.svg";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <h1>veeu</h1>
        <UserButton />
      </div>

      <div className={styles.domain}>
        <div>
          <p className={styles.icon}>C</p>
          <div className={styles.domainName}>
            <p>Codex</p>
            <p>.veeu.io</p>
          </div>
        </div>
        <Image src={upDown} alt="show" width={12} />
      </div>

      <div className={styles.options}>
        <div className={styles.active}>
          <Image src={recordSvg} alt="records" width={20} />
          <p>DNS Records</p>
        </div>
        <div>
          <Image src={analyticSvg} alt="charts" width={20} />
          <p>Analytics</p>
        </div>
        <div>
          <Image src={settingSvg} alt="settings" width={20} />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
