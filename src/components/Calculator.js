import React, { useState } from "react";
import NumberButton from "./buttons/NumberButton";
import OperatorButton from "./buttons/OperatorButton";
import EqualButton from "./buttons/EqualButton";
import ClearButton from "./buttons/ClearButton";
import MiscButton from "./buttons/MiscButton";
import Display from "./Display";
import "./Calculator.css";

const Calculator = () => {
  const [text, setText] = useState("0");
  const [prev, setPrev] = useState("0");
  const [operation, setOperation] = useState(null);
  const [append, setAppend] = useState(true);

  const resetAll = () => {
    setText("0");
    setPrev("0");
    setOperation(null);
    setAppend(true);
  };

  const isClear = () => {
    return text === "0" && prev === "0" && !operation && append;
  };

  return (
    <div className="calculator">
      <Display text={text} />
      <div className="keys">
        <div className="row">
          <ClearButton reset={resetAll} isClear={isClear} />
          <MiscButton symbol="+/-" text={text} setText={setText} />
          <MiscButton symbol="%" text={text} setText={setText} />
          <OperatorButton
            operator="÷"
            text={text}
            setText={setText}
            prev={prev}
            setPrev={setPrev}
            operation={operation}
            setOperation={setOperation}
            append={append}
            setAppend={setAppend}
          />
        </div>
        <div className="row">
          <NumberButton
            number="7"
            text={text}
            setText={setText}
            append={append}
            setAppend={setAppend}
          />
          <NumberButton
            number="8"
            text={text}
            setText={setText}
            append={append}
            setAppend={setAppend}
          />
          <NumberButton
            number="9"
            text={text}
            setText={setText}
            append={append}
            setAppend={setAppend}
          />
          <OperatorButton
            operator="×"
            text={text}
            setText={setText}
            prev={prev}
            setPrev={setPrev}
            operation={operation}
            setOperation={setOperation}
            append={append}
            setAppend={setAppend}
          />
        </div>
        <div className="row">
          <NumberButton
            number="4"
            text={text}
            setText={setText}
            append={append}
            setAppend={setAppend}
          />
          <NumberButton
            number="5"
            text={text}
            setText={setText}
            append={append}
            setAppend={setAppend}
          />
          <NumberButton
            number="6"
            text={text}
            setText={setText}
            append={append}
            setAppend={setAppend}
          />
          <OperatorButton
            operator="+"
            text={text}
            setText={setText}
            prev={prev}
            setPrev={setPrev}
            operation={operation}
            setOperation={setOperation}
            append={append}
            setAppend={setAppend}
          />
        </div>
        <div className="row">
          <NumberButton
            number="1"
            text={text}
            setText={setText}
            append={append}
            setAppend={setAppend}
          />
          <NumberButton
            number="2"
            text={text}
            setText={setText}
            append={append}
            setAppend={setAppend}
          />
          <NumberButton
            number="3"
            text={text}
            setText={setText}
            append={append}
            setAppend={setAppend}
          />
          <OperatorButton
            operator="-"
            text={text}
            setText={setText}
            prev={prev}
            setPrev={setPrev}
            operation={operation}
            setOperation={setOperation}
            append={append}
            setAppend={setAppend}
          />
        </div>
        <div className="row">
          <NumberButton
            number="0"
            text={text}
            setText={setText}
            append={append}
            setAppend={setAppend}
          />
          <NumberButton
            number="."
            text={text}
            setText={setText}
            append={append}
            setAppend={setAppend}
          />
          <EqualButton
            prev={prev}
            operation={operation}
            setOperation={setOperation}
            text={text}
            setText={setText}
            append={append}
            setAppend={setAppend}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
