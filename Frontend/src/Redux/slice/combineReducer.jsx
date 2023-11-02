import { combineReducers } from 'redux';
import questionReducer from './questionReducer';

const rootReducer = combineReducers({
  questions: questionReducer,
  // Add more reducers as needed
});

export default rootReducer;
