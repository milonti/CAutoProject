import {combineReducers} from 'redux';
import stuffStore from './stuffReducer';

const rootReducer = combineReducers({
  stuffStore
});

export default rootReducer;
