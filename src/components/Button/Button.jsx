import styles from "./Button.module.css";

export const Button = ({ sign }) => {
  return (
    <button className={styles.button} value={sign}>
      {sign}
    </button>
  );
};
