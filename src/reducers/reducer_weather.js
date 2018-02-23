import {FETCH_WEATHER} from '../actions/index';
export default function (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      console.log('action -> ', action);
      // ALWAYS return new instance of state, DO NOT mutate current state
      return action.payload.data ? [action.payload.data, ...state] : state;
      // return state.concat([action.payload.data])
      return state;
    default:
      return state;
  }
}