import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as stuffActions from '../actions/stuffActions';
import PropTypes from 'prop-types';
import React from 'react';

class StuffList extends React.Component {
  componentDidMount(){
    this.props.stuffActions.makeStuff('Dave',1);
    this.props.stuffActions.makeStuff('Brian',3);
    this.props.stuffActions.makeStuff('Anna',22);
    this.props.stuffActions.makeStuff('Dave',1);
    this.props.stuffActions.makeStuff('Zipp',3);
    this.props.stuffActions.makeStuff('Anna',50);
  }
  renderData() {
    return <div>{this.props.stuffs}</div>;
  }
  render() {
    console.log(this.props.stuffs);
    return (
      <div className="">
          {(this.props.stuffs.length > 0 ) ?
            this.renderData()
            :
            <div className="steve">
            {console.log(this.props.stuffs)}
              No Data
            </div>
          }
      </div>
    );
  }
}
StuffList.propTypes = {
  stuffActions: PropTypes.object,
  stuffs: PropTypes.array
};

function mapStateToProps(state) {
  return {
    stuffs: state.stuffs
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
