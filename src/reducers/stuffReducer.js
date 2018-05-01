import initialState from './initialState';
import {FETCH_STUFF, RECEIVE_STUFF, MAKE_STUFF, REMOVE_STUFF} from '../actions/actionTypes';

export default function stuffs(state = initialState, action) {
  let newState = state;
  switch (action.type) {
    case FETCH_STUFF:
      console.log('FETCH_STUFF Action')
      return newState;
    case MAKE_STUFF:
      console.log('MAKE_STUFF Action')
      return newState;
    case RECEIVE_STUFF:
      console.log(newState,action)
      newState.stuffs[newState.stuffs.length] = action.stuff;
      console.log('RECEIVE_STUFF Action')
      return newState;
    case REMOVE_STUFF:
      console.log('REMOVE_STUFF Action');
      if(action.ind !== undefined) newState.stuffs.splice(action.ind,1);
      return newState;
    default:
      return state;
  }
}
