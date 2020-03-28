import { combineReducers } from 'redux';
import ProvidersReducer from './provider';

const rootReducer = combineReducers({
  providers: ProvidersReducer,
});

export default rootReducer;