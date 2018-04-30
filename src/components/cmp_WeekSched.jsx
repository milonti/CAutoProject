import React, { Component } from 'react';
import DaySched from './cmp_DaySched.jsx';

class WeekSched extends Component {
  constructor(props) {
    super(props);
    this.dow = {
      1:'Monday',
      2:'Tuesday',
      3:'Wednesday',
      4:'Thursday',
      5:'Friday',
      6:'Saturday',
      0:'Sunday'
    }
    this.days = [];
    for(var d in this.dow){
      this.days[d] = (
        <table key={'day'+d} className='weekCalendar'>
          <tbody>
            <DaySched dayOfWeek={this.dow[d]} dayType={(d >= 5)?'weekend':'weekday'} />
          </tbody>
        </table>
      )
    }
    this.state = {
      dayTables: this.days,
      dow: this.dow
    }
  }
  render(){
    return (
      <div className='weekSchedule' id={this.props.id}>
        {this.days}
      </div>
    );
  }
}

export default WeekSched;
