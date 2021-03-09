import React, { useEffect, useState } from "react";
import Calculator from "./calculator/Calculator";
import Records from "./Records";
import io from "socket.io-client";

let socket;

const RecordableCalculator = () => {
  const [records, setRecords] = useState([]);

  const ENDPOINT = "https://web-calculator-server-xin.herokuapp.com";

  const callback = () => {};

  useEffect(() => {
    var connectionOptions = {
      "force new connection": true,
      reconnectionAttempts: "Infinity",
      timeout: 10000,
      transports: ["websocket"],
    };

    socket = io.connect(ENDPOINT, connectionOptions);

    socket.emit("join", {}, callback);
  }, []);

  useEffect(() => {
    socket.on("record", (record) => {
      setRecords((prevRecords) => [record, ...prevRecords]);
    });
  }, []);

  const sendRecord = (r) => {
    const auth = window.gapi.auth2.getAuthInstance();
    const username = auth.isSignedIn.get() ? "google" : null;
    socket.emit("sendRecord", { r, username }, () => {});
  };

  return (
    <div>
      <Calculator sendRecord={sendRecord} />
      <Records records={records} />
    </div>
  );
};

export default RecordableCalculator;
