// reducers/index.js
import { combineReducers } from 'redux';
import userReducer from '../Actions/UserActions';

const rootReducer = combineReducers({
  user: userReducer,
  // Other reducers if you have them
});

export default rootReducer;
