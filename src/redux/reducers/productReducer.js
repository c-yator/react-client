import { FETCH_ALL_PRODUCTS, FETCH_SINGLE_PRODUCT } from '../types';

const iniialState = {
	allProducts: [],
	productIsLoading: true,
	singleProduct: {},
};

const productReducer = (state = iniialState, action) => {
	switch (action.type) {
		case FETCH_ALL_PRODUCTS:
			return {
				...state,
				allProducts: action.payload,
				productIsLoading: false,
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

export default productReducer;
