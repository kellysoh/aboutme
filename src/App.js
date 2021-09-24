import React, { Component } from 'react';
import './App.css';

import {About, Navigation, TimelinePage, Modal } from './components';




class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false 
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this); 
  }

  showModal = () => {
    this.setState({ show:true});
  };

  hideModal = () => {
    this.setState({ show: false});
  };

render() {
  return (
    <div> 
      <Navigation /> 
      <About />
      <Modal show={this.state.show} handleClose={this.hideModal}>
        <p>Modal</p>
      </Modal>
      <TimelinePage oncClick ={this.showModal} />

    </div>
  );
}
}

export default App;
