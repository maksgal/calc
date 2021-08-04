import { useState } from "react";

import styles from "./App.module.css";

import { ButtonGroup } from "../ButtonGroup/ButtonGroup";
import { Input } from "../Input/Input";
import { Result } from "../Result/Result";

function App() {
  const [inputValue, setInputValue] = useState("");

  const [firstNum, setFirstNum] = useState(null);

  const [operator, setOperator] = useState(null);

  const [finalResult, setFinalResult] = useState("");

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
            setFinalResult(firstNum + inputValue);
            break;

          case "-":
            setFinalResult(firstNum - inputValue);
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
      <Result finalResult={finalResult} />
    </div>
  );
}

export default App;
