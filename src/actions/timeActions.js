import * as types from './actionTypes';

function url(){
  return 'www.url.com';
}

export function fillSlot(slotInfo) {
  let slot = {};
  slot.id     = slotInfo.id;
  slot.name   = slotInfo.name;
  slot.phone  = slotInfo.phone;
  slot.type   = slotInfo.type;
  return {type: types.FILL_SLOT, slotObj: slot};
}

export function emptySlot(slotInfo) {
  let slotid = slotInfo.id;
  return {type: types.EMPTY_SLOT, id: slotid};
}
