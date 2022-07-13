import { combineReducers } from 'redux';

import vote from './vote';
import history from './history';

export default combineReducers({
  v : vote,
  h : history
});