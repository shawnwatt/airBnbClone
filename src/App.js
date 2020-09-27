import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Components/Chat";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/room/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <h2>welcome to home screen</h2>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
