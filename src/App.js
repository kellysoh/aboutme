import React, { Component } from 'react';
import './App.css';
import {About,Card, Navigation, Timeline} from './components';

class App extends Component {
  render() {
    return (
      <div> 
        <Navigation /> 
        <About />
        <Timeline />
      </div>
    );
  }
}

export default App;
