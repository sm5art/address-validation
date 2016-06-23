import { INCREMENT_COUNTER, DECREMENT_COUNTER, SEARCH_QUERY } from '../constants/ActionTypes';

export default function search(state = [], action) {
  switch (action.type) {
  case SEARCH_QUERY:
    return action.value;
  default:
    return state;
  }
}
