import React, { Component } from "react";
import "../App.css";
import NavBar from "../Login/NavBar";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
