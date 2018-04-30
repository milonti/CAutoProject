import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import TimeSlot from './components/cmp_TimeSlot.jsx'
import DaySched from './components/cmp_DaySched.jsx'
import WeekSched from './components/cmp_WeekSched.jsx'

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
        { /** <table className="weekCalendar">
          <tbody>
            <DaySched dayOfWeek="Sunday" dayType="weekend" />
          </tbody>
        </table>
        <table className="weekCalendar">
          <tbody>
            <DaySched dayOfWeek="Monday" />
          </tbody>
        </table>
        <table className="weekCalendar">
          <tbody>
            <DaySched dayOfWeek="Tuesday" />
          </tbody>
        </table>
        <table className="weekCalendar">
          <tbody>
            <DaySched dayOfWeek="Wednesday" />
          </tbody>
        </table>
        <table className="weekCalendar">
          <tbody>
            <DaySched dayOfWeek="Thursday" />
          </tbody>
        </table>
        <table className="weekCalendar">
          <tbody>
            <DaySched dayOfWeek="Friday" />
          </tbody>
        </table>
        <table className="weekCalendar">
          <tbody>
            <DaySched dayOfWeek="Saturday" dayType="weekend" />
          </tbody>
        </table> **/ }
        <WeekSched id='week1' />
      </div>
    );
  }
}


export default App;
