import React from "react";
import { reversedMap } from "./helper/mappings";

const EqualButton = ({
  prev,
  operation,
  setOperation,
  text,
  setText,
  append,
  setAppend,
  sendRecord,
}) => {
  const onEqualClick = () => {
    if (!operation || !append) return;
    const math = window.math;
    const result = math.format(math.evaluate(prev + operation + text), {
      precision: 14,
    });
    setText(result);
    sendRecord(`${prev} ${reversedMap.get(operation)} ${text} = ${result}`); // send record to server for broadcasting
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
