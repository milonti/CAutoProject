import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var uid = require('react-html-id');

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simple Sched App</h1>
        </header>
        <p className="App-intro">
          Look it's ELECTRON
        </p>
        <TimeSlot time="Early Morning" />
      </div>
    );
  }
}

class TimeSlot extends Component {
  constructor(props){
    super(props);
    uid.enableUniqueIds(this);
    this.time = props.time;
    this.state = {
      filled: false,
      person: "",
      phone: ""
    }
  }
  render() {
    return (
      <div className="timeSlot unselected" id={this.getUniqueId('timeslot')}>
        <p className="time">{this.time}</p>
      </div>
    )
  }
}


export default App;
