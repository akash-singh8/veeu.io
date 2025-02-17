"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import styles from "@/styles/navbar.module.scss";

import stars from "@/assets/svgs/stars.svg";
import github from "@/assets/svgs/github.svg";
import tutorial from "@/assets/svgs/tutorial.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("Scrolling :::", scrollY);
      if (window.scrollY > 38) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.main}>
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
            <Image src={tutorial} alt="tutorial" width={18} />
          </div>
        </div>

        <div className={styles.action}>
          <button>Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
