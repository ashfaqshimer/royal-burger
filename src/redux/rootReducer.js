import { combineReducers } from 'redux';
import userReducer from './user/userReducer';
import burgerReducer from './burger/burgerReducer';

export default combineReducers({
	user: userReducer,
	burger: burgerReducer
});
