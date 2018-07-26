import { combineReducers } from 'redux';

import commentsReducer from './commentsReducer';

const rootReducer = combineReducers({
  commentsReducer,
});

export default rootReducer;
