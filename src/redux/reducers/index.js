import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import apiCallsInProgress from './apiStatusReducer';

const rootReducer = combineReducers({
  apiCallsInProgress,
  authors,
  courses
});

export default rootReducer;
