import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Calculator from "./Calculator";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header></Header>
        <Route path="/" component={Calculator}></Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
