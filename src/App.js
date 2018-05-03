import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SmartWeekSched from './components/cmp_SmartWeekSched.jsx'
import PopupModal from './components/cmp_PopupModal.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SmartWeekSched id='week1' ></SmartWeekSched>
      </div>
    );
  }
}


export default App;
