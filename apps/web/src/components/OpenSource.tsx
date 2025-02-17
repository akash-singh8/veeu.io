import Image from "next/image";

import styles from "@/styles/opensource.module.scss";
import stars from "@/assets/opensource/stars.svg";
import merge from "@/assets/opensource/merge.svg";
import github from "@/assets/svgs/github.svg";

const OpenSource = () => {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h2>Proudly open-source</h2>
        <p>
          Our source code is available on GitHub - feel free to read, review, or
          contribute to it however you want!
        </p>
      </div>

      <a
        href="https://github.com/akash-singh8/veeu.io"
        className={styles.github}
      >
        <Image src={github} alt="github" width={18} />
        <p>Star on Github</p>
      </a>

      <div className={styles.data}>
        <a href="https://github.com/akash-singh8/veeu.io">
          <Image src={stars} alt="Stars" height={112} />
          <p>1 Stars</p>
        </a>

        <a href="https://github.com/akash-singh8/veeu.io">
          <Image src={merge} alt="Contribute" height={80} />
          <p>Contribute</p>
        </a>
      </div>
    </div>
  );
};

export default OpenSource;
