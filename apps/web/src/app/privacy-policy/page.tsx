import styles from "./privacy.module.scss";

const PrivacyPolicyPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Privacy Policy</h1>
      <p>
        <em>Last Updated: [6th March, 2025]</em>
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>1. Introduction</h2>
        <p className={styles.paragraph}>
          Welcome to <strong>veeu.io</strong> (the “Platform”). This Privacy
          Policy explains how we collect, use, disclose, and protect your
          personal information when you use our open-source, free DNS provider
          and management tool. By accessing or using the Platform, you agree to
          the terms of this Privacy Policy.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>2. Information We Collect</h2>
        <p className={styles.paragraph}>
          <strong>2.1 Personal Information.</strong> We only collect the minimal
          personal information needed to create and manage your account:
        </p>
        <ul className={styles.list}>
          <li>
            <strong>Name</strong> – For user account identification.
          </li>
          <li>
            <strong>Email Address</strong> – For login authentication and
            notifications.
          </li>
        </ul>
        <p className={styles.paragraph}>
          <strong>2.2 Automatically Collected Data.</strong> When you use the
          Platform, our servers may automatically log certain technical data
          such as your IP address, browser type, and access times. This data is
          used solely for security and troubleshooting purposes.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>3. How We Use Your Information</h2>
        <p className={styles.paragraph}>
          We use the information we collect for the following purposes:
        </p>
        <ul className={styles.list}>
          <li>
            <strong>Account Creation and Management:</strong> To set up and
            maintain your account, verify your identity, and provide access to
            the Platform’s features.
          </li>
          <li>
            <strong>Platform Operations:</strong> To operate, maintain, and
            improve the Platform, including troubleshooting and enhancing user
            experience.
          </li>
          <li>
            <strong>Communication:</strong> To respond to inquiries, provide
            support, and send important updates related to the Platform (e.g.,
            feature changes, security notices).
          </li>
          <li>
            <strong>Analytics:</strong> To analyze usage trends and user
            behavior, solely to improve the functionality and stability of the
            Platform.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>4. Data Retention</h2>
        <p className={styles.paragraph}>
          We retain your personal information for as long as your account is
          active or as needed to provide you with the Platform’s services. If
          you wish to delete your account or request that we no longer use your
          information, please contact us at{" "}
          <a href="mailto:developer.akash8@gmail.com">
            <strong>developer.akash8@gmail.com</strong>
          </a>
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>5. Data Sharing and Disclosure</h2>
        <p className={styles.paragraph}>
          <strong>5.1 No Sale of Data.</strong> We do not sell, rent, or trade
          your personal information to any third parties.
        </p>
        <p className={styles.paragraph}>
          <strong>5.2 Service Providers.</strong> We may share your information
          with trusted third-party service providers (e.g., hosting providers)
          to help us operate and maintain the Platform. These providers are
          contractually bound to protect your data and only use it to perform
          tasks on our behalf.
        </p>
        <p className={styles.paragraph}>
          <strong>5.3 Legal Requirements.</strong> We may disclose your
          information if required by law or in response to valid requests by
          public authorities (e.g., a court or government agency).
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>6. Security Measures</h2>
        <p className={styles.paragraph}>
          We take reasonable administrative, technical, and physical measures to
          protect the information we collect. However, no security system is
          impenetrable. We cannot guarantee the absolute security of your data.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>7. Children’s Privacy</h2>
        <p className={styles.paragraph}>
          The Platform is not intended for use by individuals under the age of
          majority in their jurisdiction. We do not knowingly collect personal
          information from children. If you believe we may have collected
          information from a child without parental or guardian consent, please
          contact us so we can promptly remove the data.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>8. Third-Party Links</h2>
        <p className={styles.paragraph}>
          Our Platform may contain links to third-party websites or services
          that we do not control. We are not responsible for the privacy
          practices of these third-party sites. We encourage you to review their
          privacy policies before providing any personal information.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          9. Changes to This Privacy Policy
        </h2>
        <p className={styles.paragraph}>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated “Last Updated” date. Your
          continued use of the Platform after such changes constitutes your
          acceptance of the updated Privacy Policy.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>10. Contact Us</h2>
        <p className={styles.paragraph}>
          If you have any questions or concerns about this Privacy Policy or our
          data practices, please contact us at{" "}
          <a href="mailto:developer.akash8@gmail.com">
            <strong>developer.akash8@gmail.com</strong>
          </a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
