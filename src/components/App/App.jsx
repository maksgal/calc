import { useState } from "react";

import styles from "./App.module.css";

import { ButtonGroup } from "../ButtonGroup/ButtonGroup";
import { Input } from "../Input/Input";
import { Result } from "../Result/Result";

export const App = () => {
  const [inputValue, setInputValue] = useState("");

  const [firstNum, setFirstNum] = useState(null);

  const [operator, setOperator] = useState(null);

  const [result, setResult] = useState("");

  const buttonHandler = (e) => {
    if (!firstNum) {
      setFirstNum(inputValue);
    }

    switch (e.target.value) {
      case "+":
        setOperator("+");
        setInputValue("");
        break;

      case "-":
        setOperator("-");
        setInputValue("");
        break;

      case "=":
        switch (operator) {
          case "+":
            setResult(firstNum + inputValue);
            break;

          case "-":
            setResult(firstNum - inputValue);
            break;
        }

        setFirstNum(null);
        setOperator(null);
        setInputValue("");
        break;
    }
  };

  return (
    <div className={styles.App}>
      <Input inputValue={inputValue} setInputValue={setInputValue} />
      <ButtonGroup buttonHandler={buttonHandler} />
      <Result result={result} />
    </div>
  );
};
