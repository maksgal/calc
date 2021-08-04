import styles from "./ButtonGroup.module.css";

import { Button } from "../Button/Button";

export const ButtonGroup = ({ buttonHandler }) => {
  return (
    <div className={styles.buttongroup} onClick={buttonHandler}>
      <Button sign="+" />
      <Button sign="-" />
      <Button sign="=" />
    </div>
  );
};
