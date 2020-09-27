import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="app">
      <h1>slack clone</h1>
      <Header />
      <div className="app__body">
        <Sidebar />
      </div>
      
      {/* sidebar */}
      {/* React-Router -> chatscreen*/}
    </div>
  );
}

export default App;
