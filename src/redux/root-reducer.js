import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';

export default combineReducers({
	// Individual pice of state we want to modigy
	user: userReducer,
});
