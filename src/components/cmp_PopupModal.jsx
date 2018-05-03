import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as timeActions from '../actions/timeActions.js'

class PopupModal extends Component {
  openAtPos(xp,yp,id,renderLeft){
    xp = (renderLeft ? xp-423:xp);
    this.setState({
      open:true,
      x: xp,
      y: yp,
      slotid: id,
      modalName: '',
      modalPhone: '',
      modalType:'Phone Call',
    })
  }
  closeModal(){
    this.setState({open:false});
  }
  toggleModal(xp,yp,id,renderLeft = false){
    if(this.state.open){
      this.close()
    }
    else this.open(xp,yp,id,renderLeft);
  }
  sendInfo(e){
    var data = {};
    data.id = this.state.slotid;
    data.name = this.state.modalName;
    data.phone = this.state.modalPhone;
    data.type = this.state.modalType;
    this.close();
    this.props.actions.fillSlot(data);
    this.props.handler(e,data);
  }
  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }
  constructor(props){
    super(props);
    this.sendInfo = this.sendInfo.bind(this);
    this.state ={
      open : false,
      modalName: '',
      modalPhone: '',
      modalType:'Phone Call',
      slotid: '',
      x: this.props.x,
      y: this.props.y,
      definedTypes : [
        'Phone Call','Interview','Technical Screen','Meeting','Presentation'
      ]
    }
    this.options = [];
    for(var t = 0; t < this.state.definedTypes.length; t++){
      this.options[t] = <option key={t} value={this.state.definedTypes[t]}>{this.state.definedTypes[t]}</option>
    }
    this.open = this.openAtPos.bind(this);
    this.close = this.closeModal.bind(this);
    this.toggle = this.toggleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  render()
  {
    var mstyle = {
      position: 'absolute',
      backgroundColor: 'black',
      color: '#00ff00',
      border: '2px solid #00ffff',
      zIndex: '9',
      width: '300px',
      textAlign: 'left',
      padding: '4px',
      top: this.state.y +'px',
      left: this.state.x+'px',
    }
    if(this.state.open){

      return (
        <div id='modalBox' style={mstyle}>
          <div>{this.state.slotid}</div>
          <table>
            <tbody>
            <tr>
              <td className='label'><span>Name:&nbsp; </span> </td>
              <td><input type="text" id='modalName' name='modalName' onChange={this.handleChange} ></input></td>
              <td className='close'><div className='closeModBtn' onClick={this.close}>X</div></td>
            </tr>
            <tr>
              <td className='label'><span>Phone:&nbsp; </span> </td>
              <td><input type="text" id='modalPhone' name='modalPhone' onChange={this.handleChange} ></input></td>
            </tr>
            <tr>
              <td className='label'><span>Type:&nbsp; </span> </td>
              <td><select name="modalType" id='modalType' onChange={this.handleChange} >
                  {this.options}
              </select></td>
            </tr>
            <tr>
              <td width="40%"></td>
              <td  className='modSubmit'><div onClick={this.sendInfo}>Submit</div></td>
              <td width="40%"></td>
            </tr>
            </tbody>
          </table>
        </div>
      )
    }
    else return null;
  }
}
function mapStateToProps(state) {
  return {

  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(timeActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {withRef:true}
)(PopupModal);
