import React, { Component } from 'react';
import SmartDaySched from './cmp_SmartDaySched.jsx';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as timeActions from '../actions/timeActions'

class SmartWeekSched extends Component {
  handleChildEvent(e,data){
    console.log('Open modal for slot: ' + data);
  }
  componentDidMount(){

  }
  constructor(props) {
    super(props);
    this.handleChildEvent = this.handleChildEvent.bind(this);
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
    var daySlots = {};
    for(var d in this.dow){
      daySlots[this.dow[d]] = {}
      for(var hour = 2; hour < 11; hour++){
        daySlots[this.dow[d]][hour] = {'name':'','phone':'','type':''};
      }
      this.days[d] = (
        <table key={'day'+d} className='weekCalendar'>
          <tbody>
            <SmartDaySched
              dayOfWeek={this.dow[d]} dayType={(d >= 5)?'weekend':'weekday'}
              handler={this.handleChildEvent} slotInfo={daySlots[this.dow[d]]} />
          </tbody>
        </table>
      )
    }
    this.daySlots = daySlots;
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

function mapStateToProps(state) {
  return {
    filledSlots: state.timeStore.filledSlots
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(timeActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SmartWeekSched);
