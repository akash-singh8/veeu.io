import Image from "next/image";
import styles from "@/styles/footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <div className={styles.top}>
          <div>
            <a href="https://veeu.io">
              <Image src={"/logo.svg"} alt="logo" width={48} height={48} />
              <h1>veeu.io</h1>
            </a>
            <p>Modern DNS management platform with free subdomain service</p>
          </div>

          <div className={styles.courtesy}>
            <p>A Special thanks to</p>
            <a target="_blank" href="https://dub.co/">
              dub.co
            </a>
            <p>for design inspiration</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2025 Veeu &nbsp; ^-^</p>
          <div>
            <a target="_blank" href="https://x.com/dev_skyi">
              Twitter
            </a>
            <a target="_blank" href="https://github.com/akash-singh8/veeu.io">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
