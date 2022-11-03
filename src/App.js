import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Shop from './Components/Shop';

class App extends Component {
  render() {
    return (
       <div>
        <Navbar/>
        <div className="container">
        <Shop/>
        </div>

        </div>
    );
  }
}

export default App;
