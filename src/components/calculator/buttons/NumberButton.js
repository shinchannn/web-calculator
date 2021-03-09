import React from "react";

const NumberButton = ({ number, text, setText, append, setAppend }) => {
  const double = number === "0" ? "double" : "";

  const onNumberClick = () => {
    // if not append mode, display newly inputed number and flip it back
    if (!append) {
      // if "." comes, put "0" in the front
      setText(number === "." ? "0." : number);
      setAppend(true);
      return;
    }
    // avoid two dots in 'text'
    if (number === "." && text.includes(".")) {
      return;
    }
    // avoid 0xx
    if (text === "0" && number !== ".") {
      setText(number);
      return;
    }
    setText(text + number);
  };

  return (
    <button onClick={onNumberClick} className={`key numeric ${double}`}>
      {number}
    </button>
  );
};

export default NumberButton;
