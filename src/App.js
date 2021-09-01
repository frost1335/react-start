import React, { Component } from "react";
import "./App.css";
import Nav from "./Navbar/navbar.js";
import Header from "./Header/header";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
      </div>
    );
  }
}

export default App;
