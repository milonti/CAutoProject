import {combineReducers} from 'redux';
import stuffStore from './stuffReducer';
import timeStore from './timeReducer';

const rootReducer = combineReducers({
  stuffStore,
  timeStore
});

export default rootReducer;
