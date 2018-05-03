import React, { Component } from 'react';
import * as timeActions from '../actions/timeActions'

class SmartTimeSlot extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.props.handler.bind(this);
  }
  render() {
    if(this.props.slot.name === undefined || this.props.slot.name === ''){
      return this.renderUnfilled();
    }
    else return this.renderFilled();
  }
  renderUnfilled() {
    return (
      <div className="timeSlot unfilled" id={this.props.id} onClick={(e)=>this.handleClick(e,this.props.id)}>
        <span className="time">{this.props.time}</span>
      </div>
    )
  }
  renderFilled() {
    return (
      <div className="timeSlot filled" id={this.props.id} onClick={(e)=>this.handleClick(e,this.props.id)} >
        <span className="time">{this.props.time}</span><br />
        <span className="meetingInfo">Name: {this.props.slot.name}</span><br />
        <span className="meetingInfo">Phone #: {this.props.slot.phone}</span><br />
        <span className="personName">Type: {this.props.slot.type}</span><br />
      </div>
    )
  }
  // handleClick(e,data){
  //   e.persist();
  //   console.log('Click: ',e);
  //   console.log('Data: ',data)
  // }
}
SmartTimeSlot.defaultProps = {
  time: "Midnight",
  id: "MondayMidnight",
  slot: {'name':'','phone':'','type':''},
  handler: () => {}
}


export default SmartTimeSlot;
