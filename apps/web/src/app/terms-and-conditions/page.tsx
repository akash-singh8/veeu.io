import styles from "./tnc.module.scss";

const TermsPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Terms and Conditions</h1>
      <p>
        <em>Last Updated: [6th March, 2025]</em>
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
        <p className={styles.paragraph}>
          <strong>1.1 Binding Agreement.</strong> These Terms form a legally
          binding agreement between you and <strong>veeu.io</strong> (“we,”
          “us,” “our,” or the “Service”).
        </p>
        <p className={styles.paragraph}>
          <strong>1.2 Modifications.</strong> We reserve the right to change or
          modify these Terms at any time. Any changes will be posted on this
          page with a revised “Last Updated” date. By continuing to use the
          Platform after such changes are posted, you agree to the updated
          Terms.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>2. Eligibility</h2>
        <p className={styles.paragraph}>
          <strong>2.1 Legal Age.</strong> You must be at least the age of
          majority in your jurisdiction to use our Platform. By using the
          Platform, you represent and warrant that you meet this requirement.
        </p>
        <p className={styles.paragraph}>
          <strong>2.2 Compliance.</strong> You must comply with all applicable
          laws, rules, and regulations when using the Platform.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>3. Description of the Service</h2>
        <p className={styles.paragraph}>
          <strong>3.1 Open-Source &amp; Free.</strong> The Platform provides a
          free DNS provider and management tool, offered as an open-source
          project.
        </p>
        <p className={styles.paragraph}>
          <strong>3.2 DNS Management.</strong> Users may claim and manage DNS
          records for their chosen domain(s) within the Platform’s available
          features.
        </p>
        <p className={styles.paragraph}>
          <strong>3.3 No Payment.</strong> There is no payment or billing system
          on our Platform. The Service is provided at no cost.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>4. User Accounts</h2>
        <p className={styles.paragraph}>
          <strong>4.1 Registration.</strong> To use certain features of the
          Platform, you must create an account by providing your name and email
          address.
        </p>
        <p className={styles.paragraph}>
          <strong>4.2 Accuracy of Information.</strong> You agree to provide
          accurate and current information during registration and to promptly
          update any changes to this information.
        </p>
        <p className={styles.paragraph}>
          <strong>4.3 Account Security.</strong> You are responsible for
          maintaining the confidentiality of your account credentials and for
          any activity that occurs under your account. You agree to notify us
          immediately of any unauthorized use or security breach of your
          account.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>5. Data Collection and Privacy</h2>
        <p className={styles.paragraph}>
          <strong>5.1 Minimal Data.</strong> We only collect your name and email
          address for account creation and authentication. We do not collect or
          store additional personal data.
        </p>
        <p className={styles.paragraph}>
          <strong>5.2 Use of Data.</strong> Your data is used solely for
          providing and improving the Platform, account creation, and
          authentication.
        </p>
        <p className={styles.paragraph}>
          <strong>5.3 No Sale of Data.</strong> We do not sell, rent, or trade
          your personal information to any third party.
        </p>
        <p className={styles.paragraph}>
          <strong>5.4 Logs and Analytics.</strong> We may keep server logs or
          use analytics tools to track usage patterns in order to maintain and
          improve the Platform.
        </p>
        <p className={styles.paragraph}>
          <strong>5.5 Privacy Policy.</strong> Please refer to our Privacy
          Policy for further details on how we handle and protect your personal
          data.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>6. User Responsibilities</h2>
        <p className={styles.paragraph}>
          <strong>6.1 Lawful Use.</strong> You agree not to use the Platform for
          any unlawful, fraudulent, or malicious activities, including but not
          limited to the distribution of malware, phishing, spam, or any form of
          cyberattack.
        </p>
        <p className={styles.paragraph}>
          <strong>6.2 Content Ownership.</strong> You are solely responsible for
          any content, domain configurations, or DNS records you manage or
          publish through the Platform.
        </p>
        <p className={styles.paragraph}>
          <strong>6.3 Prohibited Conduct.</strong> You agree not to:
        </p>
        <ul className={styles.list}>
          <li>
            Violate any applicable local, state, national, or international law
            or regulation.
          </li>
          <li>
            Interfere with or disrupt the integrity or performance of the
            Platform.
          </li>
          <li>
            Attempt to gain unauthorized access to the Platform or its related
            systems or networks.
          </li>
          <li>Misrepresent or impersonate any person or entity.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>7. Intellectual Property</h2>
        <p className={styles.paragraph}>
          <strong>7.1 Open-Source License.</strong> The code for{" "}
          <strong>veeu.io</strong> is released under an open-source license.
          Please review the specific open-source license included in the
          project’s repository (e.g., on GitHub) for more details.
        </p>
        <p className={styles.paragraph}>
          <strong>7.2 User Content.</strong> Any data or content you submit to
          the Platform remains yours. You grant us a non-exclusive, worldwide,
          royalty-free license to host, store, and display such content solely
          for the purpose of providing and improving the Platform.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>8. Disclaimer of Warranties</h2>
        <p className={styles.paragraph}>
          <strong>8.1 As-Is Basis.</strong> The Platform is provided on an “AS
          IS” and “AS AVAILABLE” basis, without any warranties, express or
          implied.
        </p>
        <p className={styles.paragraph}>
          <strong>8.2 No Warranty.</strong> We make no warranties or
          representations regarding the accuracy, reliability, or completeness
          of any content or service provided through the Platform.
        </p>
        <p className={styles.paragraph}>
          <strong>8.3 No Guarantee of Availability.</strong> We do not guarantee
          that the Platform will be secure, error-free, or available at all
          times.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>9. Limitation of Liability</h2>
        <p className={styles.paragraph}>
          <strong>9.1 Indirect Damages.</strong> To the fullest extent permitted
          by law, we shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages arising out of or related to your
          use of (or inability to use) the Platform.
        </p>
        <p className={styles.paragraph}>
          <strong>9.2 Aggregate Liability.</strong> In no event shall our total
          liability exceed the total amount you paid us for the specific service
          giving rise to the claim (which is $0, since the Service is free)
        </p>
        <p className={styles.paragraph}>
          <strong>9.3 Release.</strong> By using the Platform, you agree to
          release us from any and all liability connected with any claims
          arising from your use of the Platform.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>10. Indemnification</h2>
        <p className={styles.paragraph}>
          You agree to defend, indemnify, and hold harmless{" "}
          <strong>veeu.io</strong>, its contributors, and affiliates from and
          against any claims, liabilities, damages, losses, and expenses
          (including reasonable attorneys’ fees) arising out of or in any way
          connected with your access to or use of the Platform, or your
          violation of these Terms.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>11. Termination</h2>
        <p className={styles.paragraph}>
          <strong>11.1 Termination by You.</strong> You may stop using the
          Platform at any time by deleting your account or ceasing to access the
          Platform.
        </p>
        <p className={styles.paragraph}>
          <strong>11.2 Termination by Us.</strong> We reserve the right to
          suspend or terminate your access to the Platform at any time, with or
          without notice, if we believe you have violated these Terms or engaged
          in any unlawful or fraudulent activity.
        </p>
        <p className={styles.paragraph}>
          <strong>11.3 Effect of Termination.</strong> Upon termination, all
          rights granted to you under these Terms will cease immediately, and we
          may delete your account and any related data.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>12. Contact Us</h2>
        <p className={styles.paragraph}>
          If you have any questions or concerns regarding these Terms, please
          contact us at{" "}
          <a href="mailto:developer.akash8@gmail.com">
            <strong>developer.akash8@gmail.com</strong>
          </a>
        </p>
      </section>

      <p className={styles.disclaimer}>
        By using <strong>veeu.io</strong>, you acknowledge that you have read,
        understood, and agree to be bound by these Terms and Conditions.
      </p>
    </div>
  );
};

export default TermsPage;
