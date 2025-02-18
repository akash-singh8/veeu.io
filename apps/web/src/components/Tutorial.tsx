import Image from "next/image";

import styles from "@/styles/tutorail.module.scss";
import tutorial from "@/assets/svgs/tutorial.svg";
import right from "@/assets/svgs/right.svg";

const Tutorial = () => {
  return (
    <section className={styles.main}>
      <div className={styles.title}>
        <h2>Veeu 101: A Quickstart</h2>
        <p>
          Follow our step-by-step guide to get started with domain management
        </p>
      </div>

      <div className={styles.map}>
        <div>
          <Image src={tutorial} alt="tutorial" width={26} />
        </div>
        <div>
          <p>1</p>
        </div>
        <div>
          <p>2</p>
        </div>
        <div>
          <p>3</p>
        </div>
        <span></span>
      </div>

      <div className={styles.steps}>
        <div className={styles.step}>
          <h2>Register Your Domain</h2>
          <div>
            <Image src={right} alt=">" width={14} />
            <p>Getting started with Veeu is simple:</p>
          </div>
          <ol type="1">
            <li>Create a free account</li>
            <li>Choose your preferred subdomain under veeu.io</li>
          </ol>
        </div>

        <div className={styles.step}>
          <h2>Configure DNS Records</h2>
          <div>
            <Image src={right} alt=">" width={14} />
            <p>Manage your DNS records with ease:</p>
          </div>
          <ul>
            <li>Add A records to point to your servers</li>
            <li>Set up CNAME records for subdomains</li>
            <li>Configure MX records for email</li>
            <li>Add TXT records for verification</li>
          </ul>
        </div>

        <div className={styles.step}>
          <h2>Go Live</h2>
          <div>
            <Image src={right} alt=">" width={14} />
            <p>Your domain is ready to use:</p>
          </div>
          <ul>
            <li>DNS changes propagate instantly</li>
            <li>Monitor your DNS records in real-time</li>
            <li>Easily update records as needed</li>
          </ul>

          <button>Get Started Now &nbsp; {">"}</button>
        </div>
      </div>
    </section>
  );
};

export default Tutorial;
