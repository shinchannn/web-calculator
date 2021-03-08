import React from "react";

const EqualButton = ({
  prev,
  operation,
  setOperation,
  text,
  setText,
  append,
  setAppend,
}) => {
  const onEqualClick = () => {
    if (!operation || !append) return;
    const math = window.math;
    setText(
      math.format(math.evaluate(prev + operation + text), { precision: 14 })
    );
    setOperation(null);
    setAppend(false);
  };
  return (
    <button onClick={onEqualClick} className="key function last">
      =
    </button>
  );
};

export default EqualButton;
