import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import TimeSlot from './components/cmp_TimeSlot.jsx'
// import DaySched from './components/cmp_DaySched.jsx'
import WeekSched from './components/cmp_WeekSched.jsx'
import StuffList from './components/cmp_StuffList.js'
import SmartDaySched from './components/cmp_SmartDaySched.jsx'
import SmartWeekSched from './components/cmp_SmartWeekSched.jsx'

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
        <div>
          {/*<table>
            <tbody>
              <SmartDaySched dayOfWeek="Monday" handler={this.handleChildEvent} />
            </tbody>
          </table>*/}

           {/*<StuffList />*/}
        </div><br></br>
        {/**<WeekSched id='week1' />**/}
        <SmartWeekSched id='week1' />
      </div>
    );
  }
}


export default App;
