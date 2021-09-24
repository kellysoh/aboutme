import React, { Component } from 'react';
import './App.css';

import {About, Navigation } from './components';




class App extends Component {
  render() {
    return (
      <div> 
        <Navigation /> 
        <About />
      </div>
    );
  }
}

export default App;
