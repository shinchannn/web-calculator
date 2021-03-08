import React from "react";

const MiscButton = ({ symbol, text, setText }) => {
  const onMiscClick = () => {
    if (symbol === "C") {
      setText("0");
    } else if (symbol === "+/-") {
      setText(window.math.evaluate("-" + text).toString());
    } else if (symbol === "%") {
      setText(window.math.evaluate(text + "/100").toString());
    }
  };

  return (
    <button onClick={onMiscClick} className={`key misc`}>
      {symbol}
    </button>
  );
};

export default MiscButton;
