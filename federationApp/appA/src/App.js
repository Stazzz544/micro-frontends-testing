import React from "react";
import Headers from "./features/header/Header";
import Main from "./features/main/Main";
import "./App.css";

export const App = () => {
  return (
    <div className="mainWrapper">
      <Headers />
      <Main />
    </div>
  );
};

export default App;
