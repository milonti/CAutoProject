import initialState from './initialState';
import {FILL_SLOT, EMPTY_SLOT, MAKE_SLOT} from '../actions/actionTypes';

export default function timeStore(state = initialState.timeStore, action){
  let newState,slot;
  newState = Object.assign(state);
  switch(action.type){
    case FILL_SLOT:
      slot = {};
      slot.name = action.slot.name;
      slot.phone = action.slot.phone;
      slot.type = action.slot.type;
      newState.filledSlots[action.slot.id] = slot;
      return newState;
    case MAKE_SLOT:
      slot = {'name':'','phone':'','type':''}
      newState.filledSlots[action.id] = slot;
      return newState;
    case EMPTY_SLOT:
      newState.filledSlots[action.id] = {'name':'','phone':'','type':''};
      return newState;
    default:
      return state;
  }
}
