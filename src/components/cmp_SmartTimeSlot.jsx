import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as timeActions from '../actions/timeActions';
import PropTypes from 'prop-types';

class SmartTimeSlot extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    if(this.props.slot == undefined ){
      return this.renderUnfilled();
    }
    else return this.renderFilled();
  }
  renderUnfilled() {
    return (
      <div className="timeSlot unfilled" id={this.props.id} onClick={this.handleClick}>
        <span className="time">{this.props.time}</span>
      </div>
    )
  }
  renderFilled() {
    return (
      <div className="timeSlot filled" id={this.props.id} onClick={this.handleClick} >
        <span className="time">{this.props.time}</span>
        <span className="meetingInfo">Name: {this.props.slot.person}</span>
        <span className="meetingInfo">Phone #: {this.props.slot.phone}</span>
        <span className="personName">Event Type: {this.props.slot.type}</span>
      </div>
    )
  }
  handleClick(e){
    console.log('Click: ',e);
  }
}
TimeSlot.defaultProps = {
  time: "Midnight",
  id: "MondayMidnight"
}
function mapStateToProps(state) {
  return {
    slot: state.timeStore.filledSlots[this.props.id],
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(timeActions, dispatch)
  };
}

export default SmartTimeSlot;
