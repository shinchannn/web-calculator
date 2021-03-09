import React from "react";

const ClearButton = ({ reset, isClear }) => {
  return (
    <button onClick={reset} className={`key misc`}>
      {isClear() ? "AC" : "C"}
    </button>
  );
};

export default ClearButton;
