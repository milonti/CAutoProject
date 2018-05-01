import * as types from './actionTypes';

export function fillSlot(slotInfo) {
  let slot = {};
  slot.id     = slotInfo.id;
  slot.name   = slotInfo.name;
  slot.phone  = slotInfo.phone;
  slot.type   = slotInfo.type;
  return {type: types.FILL_SLOT, slot: slot};
}

export function emptySlot(slotInfo) {
  let slotid = slotInfo.id;
  return {type: types.EMPTY_SLOT, id: slotid};
}
