import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={styles.emblemContainer}>
      <div className={styles.emblem}></div>
      <div className={styles.textOverlay}>Apollos Cleaning</div>
    </div>
  );
}
