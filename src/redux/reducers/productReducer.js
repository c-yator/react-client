import { FETCH_ALL_PRODUCTS, FETCH_SINGLE_PRODUCT } from '../types';

const iniialState = {
	allProducts: [],
	isLoading: true,
	singleProduct: {},
};

const authReducer = (state = iniialState, action) => {
	switch (action.type) {
		case FETCH_ALL_PRODUCTS:
			return {
				...state,
				allProducts: action.payload,
				isLoading: false,
			};

		case FETCH_SINGLE_PRODUCT:
			return {
				...state,
				singleProduct: action.payload,
			};

		default:
			return state;
	}
};

export default authReducer;
