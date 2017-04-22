import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
    // equal to state.concat([action.payload.data]);
    return [ action.payload, ...state ];
    // make new array [ city, city, city ]
  }
  return state;
}
