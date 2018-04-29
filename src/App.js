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
        <table className="weekCalendar">
          <tbody>
            <tr>
              <td>
                <TimeSlot time="Early Morning" />
              </td>
              <td>
                <TimeSlot time="Early Morning" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

class TimeSlot extends Component {
  constructor(props){
    super(props);
    uid.enableUniqueIds(this);
    this.state = {
      filled: false,
      person: "",
      phone: ""
    }
  }
  render() {
    return (
      <div className="timeSlot unselected" id={this.getUniqueId('timeslot')}>
        <p className="time">{this.props.time}</p>
      </div>
    )
  }
}


export default App;
