import React, { Component } from "react";
import "./App.css";
import Header from "./Component/Header";
import Main from "./Component/Main";

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}
