import React, { Component } from 'react';
import './App.css';
import _fonts from "./components/variables/_fonts.css"
import Title from './components/atoms/Title.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title className="main-color" content="Hello ! I am an Atomic Component" />
      </div>
    );
  }
}

export default App;
