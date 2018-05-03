import React, { Component } from 'react';
import SmartDaySched from './cmp_SmartDaySched.jsx';
import PopupModal from './cmp_PopupModal.jsx';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as timeActions from '../actions/timeActions'

let disdis = {

type: 'FILL_SLOT',
slot: {
 name: 'dave',
 phone: '1234',
 id: 'Sunday2',
type:'stuff'
}

}

class SmartWeekSched extends Component {
  handleChildEvent(e,data){
    if(data.endsWith("close")){

    }
    let hour = parseInt(data.substring(data.search(/\d/),data.length-2));
    hour = (data.substring(data.length-2) === 'am' ? hour-7 : hour+5);
    let day = data.substring(data.search(/\d/),-1);
    var targ = e.target;
    while(targ.tagName !== "TD"){
      targ = targ.parentElement;
    }
    let modx = targ.getBoundingClientRect().x+targ.getBoundingClientRect().width;
    let mody = targ.getBoundingClientRect().y;
    if(day === 'Friday' || day === 'Saturday'){
        this.modal.getWrappedInstance().toggleModal(modx,mody,day+hour,true);
    }
    else{
      this.modal.getWrappedInstance().toggleModal(modx,mody,day+hour);
    }
  }
  clearTimeSlotChild(e,data){
    let hour = parseInt(data.substring(data.search(/\d/),data.length-2));
    hour = (data.substring(data.length-2) === 'am' ? hour-7 : hour+5);
    let day = data.substring(data.search(/\d/),-1);
    let newState = Object.assign(this.state);
    newState.daySlots[day][hour] = {'name':'','phone':'','type':'Phone Call'}
    this.setState(newState);
  }
  updateInfoFromChildren(e,data){
    let hour = parseInt(data.id.substring(data.id.search(/\d/)));
    let day = data.id.substring(0,data.id.search(/\d/));
    let sslot = this.props.filledSlots[day+hour]
    let newState = Object.assign(this.state);
    newState.daySlots[day][hour] = sslot;
    this.setState(newState);
  }
  componentDidMount(){
    //initialization of store slot values
    for(let d in this.daySlots){
      let day = this.daySlots[d];
      for(let hour in day){
        this.props.actions.makeSlot(d+hour);
      }
    }
  }
  constructor(props) {
    super(props);
    this.updateInfoFromChildren = this.updateInfoFromChildren.bind(this);
    this.handleChildEvent = this.handleChildEvent.bind(this);
    this.clearTimeSlotChild = this.clearTimeSlotChild.bind(this);
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
    this.daySlots = {};
    for(let d in this.dow){
      this.daySlots[this.dow[d]] = {}
      for(let hour = 2; hour < 11; hour++){
        this.daySlots[this.dow[d]][hour] = {'name':'','phone':'','type':''};
      }
    }
    this.state = {
      daySlots : this.daySlots,
      dayTables: this.days,
      dow: this.dow
    }
  }
  render(){
    this.days = []
    for(let d in this.dow){
      this.days[d] = (
        <table key={'day'+d} className='weekCalendar'>
          <tbody>
            <SmartDaySched
              dayOfWeek={this.dow[d]} dayType={(d >= 5)?'weekend':'weekday'}
              handler={this.handleChildEvent} slotInfo={this.state.daySlots[this.dow[d]]}
              handler2={this.clearTimeSlotChild} />
          </tbody>
        </table>
      )
    }
    return (
      <div>
        <PopupModal ref={modal => {this.modal = modal;}} handler={this.updateInfoFromChildren} />
        <div className='weekSchedule' id={this.props.id}>
          {this.days}
        </div>
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
