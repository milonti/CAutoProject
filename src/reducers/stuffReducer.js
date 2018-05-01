import initialState from './initialState';
import {FETCH_STUFF, RECEIVE_STUFF, MAKE_STUFF, REMOVE_STUFF} from '../actions/actionTypes';

export default function stuffStore(state = initialState.stuffStore, action) {
  let newState = {};
  switch (action.type) {
    case FETCH_STUFF:
      console.log('FETCH_STUFF Action')
      return state;
    case MAKE_STUFF:
      console.log('MAKE_STUFF Action')
      return state;
    case RECEIVE_STUFF:
      newState.stuffs = state.stuffs.slice(0);
      newState.stuffs.push(action.stuff);
      newState.stuffsLength = newState.stuffs.length;
      console.log('RECEIVE_STUFF Action')
      return newState;
    case REMOVE_STUFF:
      newState.stuffs = state.stuffs.slice(0);
      newState.stuffsLength = state.stuffsLength - 0;
      console.log('REMOVE_STUFF Action');
      if(action.ind !== undefined && action.ind < newState.stuffsLength) {
        newState.stuffs.splice(action.ind,1);
        newState.stuffsLength = state.stuffsLength - 1;
        return newState;
      }
      else return state;
    default:
      return state;
  }
}
