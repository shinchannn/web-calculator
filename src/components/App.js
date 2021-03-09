import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import RecordableCalculator from "./RecordableCalculator";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Route path="/" component={RecordableCalculator} />
      </BrowserRouter>
    </div>
  );
};

export default App;
