import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import productReducer from './reducers/productReducer';
import offerReducer from './reducers/offerReducer';
import cartReducer from './reducers/cartReducer';
import userReducer from './reducers/userReducer';
import responseReducer from './reducers/responseReducer';
import favoritesReducer from './reducers/favoritesReducer';

const rootReducer = combineReducers({
	authState: authReducer,
	productState: productReducer,
	offerState: offerReducer,
	cartState: cartReducer,
	favoritesState: favoritesReducer,
	userState: userReducer,
	responseState: responseReducer,
});

export default rootReducer;
