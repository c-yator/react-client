import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
	authState: authReducer,
});

export default rootReducer;
