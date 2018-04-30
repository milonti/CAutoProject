import React, { Component } from 'react';
import TimeSlot from './cmp_TimeSlot.jsx';
class DaySched extends Component {
  createTdRowFromComponent(comp,kVal){
    return (
      <tr key={kVal}>
        <td className={"hour"+kVal}>
          {comp}
        </td>
      </tr>
    )
  }
  constructor(props){
    super(props);
    //Slots is going to map to table rows
    //As such rows 0,1,11 will have special initialization
    this.slots = [];
    this.slots[0] = (
      <tr key='header'>
        <th className="dayHeader {this.props.dayType}" >
          <b>{this.props.dayOfWeek}</b>
        </th>
      </tr>
    )
    this.slots[1] = this.createTdRowFromComponent(<TimeSlot time="Morning" />,"Early");
    this.slots[11] = this.createTdRowFromComponent(<TimeSlot time="Evening" />,"Late");
    for(var hour = 2; hour < 11; hour++ ){
      //Ternary helps us get correct mapping to AM and PM and right hour number
      var slot = <TimeSlot time={(hour+7<13 ? (hour+7)+"am" : (hour-5)+"pm")} />
      this.slots[hour] = this.createTdRowFromComponent(slot,hour);
    }
    this.state = {
      timeSlots : this.slots
    }
  }
  render(){
    return this.slots;
  }
}
DaySched.defaultProps = {
  dayType : 'weekday',
  dayOfWeek : 'Nundinday'
}
export default DaySched;
