"use client";
import Image from "next/image";

import styles from "@/styles/navbar.module.scss";

import stars from "@/assets/svgs/stars.svg";
import github from "@/assets/svgs/github.svg";
import video from "@/assets/svgs/video.svg";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <h1>veeu</h1>

      <div className={styles.options}>
        <div>
          <span>Features</span>
          <Image src={stars} alt="stars" width={18} />
        </div>
        <div>
          <span>GitHub</span>
          <Image src={github} alt="github" width={18} />
        </div>
        <div>
          <span>Tutorial</span>
          <Image src={video} alt="video" width={18} />
        </div>
      </div>

      <div className={styles.action}>
        <button>Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
