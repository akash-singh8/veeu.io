import Image from "next/image";
import { useState } from "react";

import styles from "@/styles/newdomain.module.scss";

import checkSvg from "@/assets/svgs/check.svg";
import annoyedSvg from "@/assets/svgs/annoyed.svg";

const NewDomain = () => {
  const [domain, setDomain] = useState("");
  const [isAvailable, setIsAvailable] = useState(0); // possible values: -1 => not available, 0 => not checked, and 1 => available
  const [searching, setSearching] = useState(false);

  const searchDomain = () => {
    setIsAvailable(0);

    const domainInput = document.querySelector(
      `.${styles.domainSearch} input`
    ) as HTMLInputElement;

    // Check that the domain only contains letters, numbers, and hyphens.
    const validRegex = /^[a-zA-Z0-9-]+$/;
    if (!validRegex.test(domainInput.value)) {
      alert("Invalid domain. Please use only letters, numbers, and hyphens.");
      return;
    }

    setDomain(domainInput.value);
    setSearching(true);
    setTimeout(() => {
      setSearching(false);
      setIsAvailable(1);
    }, 2000);
  };

  return (
    <div className={styles.main}>
      <h2>Book a Domain to continue</h2>

      <div className={styles.book}>
        <h2>Search and book a domain in one click</h2>
        <p>
          Use our domain checker tool to find the perfect name for your online
          project.
        </p>

        <div className={styles.domainSearch}>
          <input type="text" placeholder="Find a Domain" />
          <p>.veeu.io</p>
          <button onClick={searchDomain} disabled={searching}>
            Search
          </button>
        </div>

        {isAvailable !== 0 && (
          <div className={styles.checkResult}>
            {isAvailable === 1 ? (
              <>
                <div className={styles.available}>
                  <Image src={checkSvg} alt="check" width={20} />
                  <p>
                    <span>{domain}.veeu.io</span> is available!
                  </p>
                </div>

                <button>Book Domain</button>
              </>
            ) : (
              <div className={styles.notAvailable}>
                <Image src={annoyedSvg} alt="annoyed" width={24} />
                <p>
                  <span>{domain}.veeu.io</span> not available, Please try
                  another domain!
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewDomain;
