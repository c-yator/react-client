import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import productReducer from './reducers/productReducer';
import responseReducer from './reducers/responseReducer';

const rootReducer = combineReducers({
	authState: authReducer,
	productState: productReducer,
	responseState: responseReducer,
});

export default rootReducer;
