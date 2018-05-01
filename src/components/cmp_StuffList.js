import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as stuffActions from '../actions/stuffActions';
import PropTypes from 'prop-types';
import React from 'react';

window.check = {};
class StuffList extends React.Component {
  componentDidMount(){
    console.log("~~Component Mounted~~")
    // console.log(this.props.stuffs);
    this.props.stuffActions.makeStuff('Dave',1);
    this.props.stuffActions.makeStuff('Brian',3);
    this.props.stuffActions.makeStuff('Anna',22);
    this.props.stuffActions.makeStuff('Dave',1);
    this.props.stuffActions.makeStuff('Zipp',3);
    this.props.stuffActions.makeStuff('Anna',50);
    console.log("~~End of DidMount~~")
    this.forceUpdate(()=>{console.log('Updating after componentDidMount')});
  }
  renderData() {
    var divs = [];
    var innerStr = "";
    for(let s = 0; s < this.props.stuffs.length; s++){
      innerStr = 'Stuff #'+s+': ';
      innerStr += JSON.stringify(this.props.stuffs[s]);
      divs[s] = <div key={s}>{innerStr}</div>
    }
    return divs;
  }
  render() {
    window.check = this.props.stuffs;
    return (
      <div className="">
          {(this.props.stuffs.length > 0 ) ?
            this.renderData()
            :
            <div className="steve">
              No Data
            </div>
          }
      </div>
    );
  }
}
StuffList.propTypes = {
  stuffActions: PropTypes.object,
  stuffs: PropTypes.array,
  ministate: PropTypes.object,
};
function mapStateToProps(state) {
  return {
    stuffs: state.stuffStore.stuffs,
    ministate: state,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    stuffActions: bindActionCreators(stuffActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StuffList);