import * as types from './actionTypes';

function url(){
  return 'www.url.com';
}

export function receiveStuff(json) {
  return {type: types.RECEIVE_STUFF, stuff: json.stuff};
}

export function fetchStuff() {
  return dispatch => {
    return fetch(url(), {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'x-api-key': 'apiKey',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => dispatch(receiveStuff(json)));
  };
}

export function makeStuff(name,num){
  let json = {'stuff':{'name':name,'number':num}};
  return receiveStuff(json);

}

export function removeStuff(index){
  return {type: types.REMOVE_STUFF, ind:index};
}
