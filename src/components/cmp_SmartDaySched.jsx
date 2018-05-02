import React, { Component } from 'react';
import SmartTimeSlot from './cmp_SmartTimeSlot.jsx';
/**
  * DaySched is a collection of populated <tr> tags
**/
class SmartDaySched extends Component {

  createTdRowFromComponent(comp,kVal){
    return (
      <tr key={kVal}>
        <td className={"hour"+kVal}  >
          {comp}
        </td>
      </tr>
    )
  }
  updateTimeSlotInfo(slotInfo, hour){

  }
  constructor(props){
    super(props);
    this.handleChildEvent = this.props.handler.bind(this);
    //Slots is going to map to table rows
    //As such rows 0,1,11 will have special initialization
    this.slots = [];
    this.slots[0] = (
      <tr key='header'>
        <th className={"dayHeader "+this.props.dayType} >
          <b>{this.props.dayOfWeek}</b>
        </th>
      </tr>
    )
    this.slots[1] = this.createTdRowFromComponent(<SmartTimeSlot time="Morning" id={this.props.dayOfWeek + 'Morning'} />,"Early");
    this.slots[11] = this.createTdRowFromComponent(<SmartTimeSlot time="Evening" id={this.props.dayOfWeek + 'Evening'}   />,"Late");
    var timeString = "";
    for(var hour = 2; hour < 11; hour++ ){
      //Ternary helps us get correct mapping to AM and PM and right hour number
      timeString = (hour+7<13 ? (hour+7)+"am" : (hour-5)+"pm")
      var slot = <SmartTimeSlot time={timeString} id={this.props.dayOfWeek + timeString} slot={this.props.slotInfo[hour]} handler={this.handleChildEvent} />
      this.slots[hour] = this.createTdRowFromComponent(slot,hour);
    }
    this.state = {
      slotComps : this.slots,
      slotInfo : this.props.slotInfo
    }

  }
  render(){
    return this.slots;
  }

}
SmartDaySched.defaultProps = {
  dayType : 'weekday',
  dayOfWeek : 'Nundinday',
  slotInfo : {
    2 : {'name':'','phone':'','type':''},
    3 : {'name':'','phone':'','type':''},
    4 : {'name':'','phone':'','type':''},
    5 : {'name':'','phone':'','type':''},
    6 : {'name':'','phone':'','type':''},
    7 : {'name':'','phone':'','type':''},
    8 : {'name':'','phone':'','type':''},
    9 : {'name':'','phone':'','type':''},
    10 : {'name':'','phone':'','type':''}
  }
}
export default SmartDaySched;