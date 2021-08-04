export const Input = ({ inputValue, setInputValue }) => {
  const inputHandler = (e) => {
    setInputValue(+e.target.value);
  };

  return (
    <input type="number" onChange={inputHandler} value={inputValue}></input>
  );
};
