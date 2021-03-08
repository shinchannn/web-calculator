import React from "react";

const Display = ({ text }) => {
  return <input readOnly className="readout" value={text} />;
};

export default Display;
