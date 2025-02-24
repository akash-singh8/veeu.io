import styles from "@/styles/page.module.scss";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <p>404</p>
      <p>{"< Page Not Found />"}</p>
    </div>
  );
};

export default NotFound;
