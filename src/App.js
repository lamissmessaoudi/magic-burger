import React from "react";
import "./App.css";
import ToolBar from "./components/Toolbar/Toolbar";
import BurgerBuilder from "./components/BurgerBuilder/BurgerBuilder";

function App() {
  return (
    <div>
      <ToolBar />

      <BurgerBuilder />
    </div>
  );
}

export default App;
