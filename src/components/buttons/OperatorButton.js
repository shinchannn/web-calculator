import React from "react";

const map = new Map([
  ["+", "+"],
  ["-", "-"],
  ["×", "*"],
  ["÷", "/"],
]);

const OperatorButton = ({
  operator,
  append,
  text,
  setText,
  prev,
  setPrev,
  operation,
  setOperation,
  setAppend,
}) => {
  const onOperatorClick = () => {
    if (operation) {
      if (!append) {
        // ready to accept new number
        // update operator only
        setOperation(map.get(operator));
      } else {
        // number is in
        const math = window.math;
        const result = math.format(math.evaluate(prev + operation + text), {
          precision: 14,
        });

        setText(result);
        setPrev(result);
        setOperation(map.get(operator)); // consume an operation
        setAppend(false);
      }
    } else {
      // no active operation at all
      setPrev(text);
      setOperation(map.get(operator));
      setAppend(false);
    }
  };

  return (
    <button onClick={onOperatorClick} className="key function ">
      {operator}
    </button>
  );
};

export default OperatorButton;
