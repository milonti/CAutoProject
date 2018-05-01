import initialState from './initialState';
import {FILL_SLOT, EMPTY_SLOT} from '../actions/actionTypes';

export default function timeStore(state = initialState.timeStore, action){
  let newState;
  newState = Object.assign(state);
  switch(action.type){
    case FILL_SLOT:
      var slot = {};
      slot.name = action.slot.name;
      slot.phone = action.slot.phone;
      slot.type = action.slot.type;
      newState.filledSlots[action.slot.id] = slot;
      return newState;
    case EMPTY_SLOT:
      delete(newState.filledSlots[action.id]);
      return newState;
    default:
      return state;
  }
}
