import React from "react";
import "./App.scss";
import NavBar from "./Components/NavBar";
function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <NavBar />
        <div className="main-content"></div>
      </div>
    </div>
  );
}

export default App;
