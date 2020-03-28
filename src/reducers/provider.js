import {FETCH_PROVIDERS} from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_PROVIDERS:
    return [action.payload.data, ...state];
  }
  return state;
}
