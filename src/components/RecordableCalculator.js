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

  const getUserName = () => {
    if (!window.gapi.auth2) return;
    const auth = window.gapi.auth2.getAuthInstance();
    return auth.isSignedIn.get()
      ? auth.currentUser.get().getBasicProfile().getName()
      : null;
  };

  const sendRecord = (r) => {
    const username = getUserName();
    socket.emit(
      "sendRecord",
      { r, username, createdTime: new Date().toLocaleTimeString() },
      () => {}
    );
  };

  return (
    <div>
      <Calculator sendRecord={sendRecord} />
      <Records records={records} />
    </div>
  );
};

export default RecordableCalculator;
