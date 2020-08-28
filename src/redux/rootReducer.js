import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import productReducer from './reducers/productReducer';

const rootReducer = combineReducers({
	authState: authReducer,
	productState: productReducer,
});

export default rootReducer;
