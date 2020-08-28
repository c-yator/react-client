import { FETCH_ALL_PRODUCTS, FETCH_SINGLE_PRODUCT } from '../types';

const iniialState = {
	allProducts: {
		isLoading: true,
		value: [],
	},
	singleProduct: {
		isLoading: true,
		value: {},
	},
};

const authReducer = (state = iniialState, action) => {
	switch (action.type) {
		case FETCH_ALL_PRODUCTS:
			return {
				...state,
				allProducts: { value: action.payload, isLoading: false },
			};
		case FETCH_SINGLE_PRODUCT:
			return {
				...state,
				singleProduct: { value: action.payload, isLoading: false },
			};

		default:
			return state;
	}
};

export default authReducer;
