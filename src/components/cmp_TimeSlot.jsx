import React, { Component } from 'react';
var uid = require('react-html-id');
class TimeSlot extends Component {
  constructor(props){
    super(props);
    uid.enableUniqueIds(this);
    this.state = {
      filled: false,
      person: "",
      phone: ""
    }
    this.id = this.getUniqueId('timeslot');
  }
  render() {
    if(this.state.filled){
      return this.renderFilled();
    }
    else return this.renderUnfilled();
  }
  renderUnfilled() {
    return (
      <div className="timeSlot unfilled" id={this.id}>
        <span className="time">{this.props.time}</span>
      </div>
    )
  }
  renderFilled() {
      <div className="timeSlot filled" id={this.id}>
        <span className="time">{this.props.time}</span>
        <span className="meetingInfo">Name: {this.state.person}</span>
        <span className="meetingInfo">Phone #: {this.state.phone}</span>
        <span className="personName">Event Type: {this.state.type}</span>
      </div>
  }
}
TimeSlot.defaultProps = {
  time: "Midnight"
}

export default TimeSlot;
