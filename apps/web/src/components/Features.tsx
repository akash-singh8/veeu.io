import Image from "next/image";

import styles from "@/styles/features.module.scss";

import stars from "@/assets/svgs/stars.svg";
import server from "@/assets/features/server.svg";
import shield from "@/assets/features/shield.svg";
import code from "@/assets/features/code.svg";
import analytics from "@/assets/features/analytics.svg";

const Features = () => {
  return (
    <section className={styles.main}>
      <div className={styles.title}>
        <div>
          <h2>Powerful features</h2>
          <h2>for modern developers</h2>
        </div>

        <div>
          <p>Everything you need to manage your domains and DNS records</p>
          <p>in one place, with a developer-first approach.</p>
        </div>
      </div>

      <div className={styles.features}>
        <div className={styles.divider}>
          <div className={styles.image}>
            <Image src={stars} alt="stars" width={28} />
          </div>
          <div className={styles.line}></div>
        </div>

        <div className={styles.feature}>
          <Image src={server} alt="Domain" width={40} />
          <h2>Free Subdomains</h2>
          <p>
            Get started instantly with free subdomains under veeu.io for your
            projects.
          </p>
        </div>

        <div className={styles.feature}>
          <Image src={shield} alt="Shield" width={40} />
          <h2>DNS Management</h2>
          <p>
            Full control over DNS records with support for A, AAAA, CNAME, MX,
            and TXT.
          </p>
        </div>

        <div className={styles.feature}>
          <Image src={code} alt="Code" width={48} />
          <h2>Developer-First</h2>
          <p>
            Clean, intuitive interface designed specifically for developers.
          </p>
          <div></div>
        </div>

        <div className={styles.feature}>
          <Image src={analytics} alt="Analytics" width={34} />
          <h2>Real-time Monitoring</h2>
          <p>Monitor DNS propagation and queries across global networks.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
