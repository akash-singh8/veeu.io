"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { UserButton } from "@clerk/nextjs";

import styles from "@/styles/sidebar.module.scss";

import { StoreState } from "@/store/store";
import recordSvg from "@/assets/svgs/server.svg";
import analyticSvg from "@/assets/svgs/analytics.svg";
import settingSvg from "@/assets/svgs/settings.svg";
import upDown from "@/assets/svgs/updown.svg";

const Sidebar = () => {
  const domains = useSelector((state: StoreState) => state.domains);
  const currDomainValue = useSelector((state: StoreState) => state.currDomain);

  const pathName = usePathname();
  const [showDomains, setShowDomains] = useState(false);
  const [currDomain, setCurrDomain] = useState("");
  const domainName = currDomain?.split(".")[0];

  useEffect(() => {
    setCurrDomain(currDomainValue);
  }, [currDomainValue]);

  const handleNavigation = (path: string) => {
    window.history.pushState({}, "", `/${path}`);
  };

  const toggleShowDomains = () => {
    const hideDomains = () => {
      setShowDomains(false);
      document.removeEventListener("click", hideDomains);
    };

    if (!showDomains) {
      setShowDomains(true);
      document.addEventListener("click", hideDomains);
    }
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <h1>veeu</h1>
        <UserButton />
      </div>

      {currDomain ? (
        <div
          className={`${styles.domain} ${showDomains ? styles.active : ""}`}
          onClick={toggleShowDomains}
        >
          <div>
            <p className={styles.icon}>{domainName[0].toUpperCase()}</p>
            <div className={styles.domainName}>
              <p>{domainName[0].toUpperCase() + domainName.slice(1)}</p>
              <p>.veeu.io</p>
            </div>
          </div>
          <Image src={upDown} alt="show" width={12} />

          {showDomains && (
            <div className={styles.domainPop}>
              <h2>Domains</h2>
              <div className={styles.domainsList}>
                {domains.map((domain) => (
                  <div
                    key={domain}
                    className={currDomain === domain ? styles.active : ""}
                    onClick={() => setCurrDomain(domain)}
                  >
                    <p className={styles.icon}>{domain[0].toUpperCase()}</p>
                    <p>{domain}</p>
                  </div>
                ))}
              </div>
              <button>+ Add New Domain</button>
            </div>
          )}
        </div>
      ) : (
        <div className={styles.newDomain}>
          Welcome Boss ^^ Book your first Domain to continue
        </div>
      )}

      <div className={styles.options}>
        <div
          className={pathName === "/" ? styles.active : ""}
          onClick={() => handleNavigation("")}
        >
          <Image src={recordSvg} alt="records" width={20} />
          <p>DNS Records</p>
        </div>
        <div
          className={pathName === "/analytics" ? styles.active : ""}
          onClick={() => handleNavigation("analytics")}
        >
          <Image src={analyticSvg} alt="charts" width={20} />
          <p>Analytics</p>
        </div>
        <div
          className={pathName === "/settings" ? styles.active : ""}
          onClick={() => handleNavigation("settings")}
        >
          <Image src={settingSvg} alt="settings" width={20} />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
