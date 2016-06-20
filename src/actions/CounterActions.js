import { SEARCH_QUERY } from '../constants/ActionTypes';


export function set(value) {
  return {
    type: SEARCH_QUERY,
    value: value
  }
}

export function api(value) {
  return (dispatch) => {
    $.post('/api',{
      city:value,
      state : "California"
    },(data)=>{
      dispatch(set(JSON.parse(data)));
    });
  }
}
