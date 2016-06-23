import { LOADED } from '../constants/ActionTypes';

export default function load(state = {status: false}, action) {
  switch (action.type) {
  case LOADED:
    return {status:true,coords:action.value};
  default:
    return state;
  }
}
