import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';
import responseReducer from './reducers/responseReducer';

const rootReducer = combineReducers({
	authState: authReducer,
	productState: productReducer,
	cartState: cartReducer,
	responseState: responseReducer,
});

export default rootReducer;
