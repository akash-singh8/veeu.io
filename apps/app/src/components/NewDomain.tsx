import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { changeDomain } from "@/store/domainSlice";

import styles from "@/styles/newdomain.module.scss";

import checkSvg from "@/assets/svgs/check.svg";
import annoyedSvg from "@/assets/svgs/annoyed.svg";

const NewDomain = () => {
  const [domain, setDomain] = useState("");
  // -1 => not available, 0 => not checked, 1 => available
  const [isAvailable, setIsAvailable] = useState(0);
  const [searching, setSearching] = useState(false);
  const dispatch = useDispatch();

  const searchDomain = async () => {
    setIsAvailable(0);

    const domainInput = document.querySelector(
      `.${styles.domainSearch} input`
    ) as HTMLInputElement;

    // Check that the domain only contains letters, numbers, and hyphens.
    const validRegex = /^[a-zA-Z0-9-]+$/;
    if (!validRegex.test(domainInput.value)) {
      toast.error(
        "Invalid domain. Please use only letters, numbers, and hyphens."
      );
      return;
    }

    setSearching(true);
    setDomain(`${domainInput.value}.veeu.io`);

    try {
      const response = await fetch(
        `/api/check?domain=${domainInput.value}.veeu.io`
      );

      if (response.ok) {
        const data = await response.json();
        setIsAvailable(data.isAvailable ? 1 : -1);
      } else {
        throw new Error("Domain check failed");
      }
    } catch (err) {
      toast.error("Unable to check domains! Please try again later.");
    }

    setSearching(false);
  };

  const bookDomain = async () => {
    setSearching(true);

    try {
      const response = await fetch("/api/domain/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          domain,
          date: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        dispatch(changeDomain(domain));
        toast.success(`Yay ${domain} is all yours. Enjoy!`);
      } else if (response.status === 409) {
        toast.info("Domain already registered! Please try any other domain.");
      } else {
        throw new Error("Domain registration failed");
      }
    } catch (err) {
      toast.error("Unable to check domains! Please try again later.");
    }

    setSearching(false);
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
                    <span>{domain}</span> is available!
                  </p>
                </div>

                <button onClick={bookDomain} disabled={searching}>
                  Book Domain
                </button>
              </>
            ) : (
              <div className={styles.notAvailable}>
                <Image src={annoyedSvg} alt="annoyed" width={24} />
                <p>
                  <span>{domain}</span> is not available, Please try another
                  domain!
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
