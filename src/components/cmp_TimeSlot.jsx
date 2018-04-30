import React, { Component } from 'react';
var uid = require('react-html-id');

class TimeSlot extends Component {
  constructor(props){
    super(props);
    uid.enableUniqueIds(this);
    this.fillState = {
      UNFILLED  :'unfilled',
      FILLING   :'filling',
      FILLED    :'filled'
    }
    this.state = {
      filled: this.fillState.UNFILLED,
      person: "testPerson",
      phone: "(123) 456-7890",
      type: "Phone Call"
    }
    this.id = this.getUniqueId('timeslot');
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    if(this.state.filled !== this.fillState.FILLED ){
      return this.renderUnfilled();
    }
    else return this.renderFilled();
  }
  renderUnfilled() {
    return (
      <div className="timeSlot unfilled" id={this.id} onClick={this.handleClick}>
        <span className="time">{this.props.time}</span>
      </div>
    )
  }
  renderFilled() {
    return (
      <div className="timeSlot filled" id={this.id} onClick={this.handleClick} >
        <span className="time">{this.props.time}</span>
        <span className="meetingInfo">Name: {this.state.person}</span>
        <span className="meetingInfo">Phone #: {this.state.phone}</span>
        <span className="personName">Event Type: {this.state.type}</span>
      </div>
    )
  }
  handleClick(e){
    this.setState(prevState => ({
      filled: (prevState.filled === this.fillState.UNFILLED ? this.fillState.FILLED : this.fillState.UNFILLED),
    }))
  }
}
TimeSlot.defaultProps = {
  time: "Midnight"
}

export default TimeSlot;
