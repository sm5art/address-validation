import { SEARCH_QUERY, LOADED } from '../constants/ActionTypes';


export function set(value) {
  return {
    type: SEARCH_QUERY,
    value: value
  }
}

export function load(coords){
  return {
    type: LOADED,
    value: coords
  }
}

export function api(value,coords) {
  return (dispatch) => {
    $.post('/api',{
      address:value
    },(data)=>{
      data = JSON.parse(data);
        const [x,y] = coords;
        data.sort(function(a,b){
          const [ax,ay] = [a.location.lon,a.location.lat]
          const adist = Math.pow(ax-x,2)+ Math.pow(ay-y,2);
          const [bx,by] = [b.location.lon,b.location.lat]
          const bdist = Math.pow(bx-x,2)+ Math.pow(by-y,2);
          return adist-bdist;
        })
        dispatch(set(data));
    });
  }
}
