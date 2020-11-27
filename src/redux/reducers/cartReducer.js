import {
	ADD_TO_CART,
	INCREASE_QUANTITY,
	REMOVE_FROM_CART,
	DECREASE_QUANTITY,
} from '../types';

const iniialState = {
	cart: [],
};

const cartReducer = (state = iniialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			return {
				...state,
				cart: [...state.cart, action.payload],
			};

		case REMOVE_FROM_CART:
			return {
				...state,
				cart: action.payload,
			};
		case INCREASE_QUANTITY:
			return {
				...state,
				cart: action.payload,
			};
		case DECREASE_QUANTITY:
			return {
				...state,
				cart: action.payload,
			};
		default:
			return state;
	}
};

export default cartReducer;
