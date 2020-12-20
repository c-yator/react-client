import {
	ADD_TO_CART,
	INCREASE_QUANTITY,
	REMOVE_FROM_CART,
	DECREASE_QUANTITY,
	CLEAR_CART,
} from '../types';

const iniialState = {
	cart: [],
};

const cartReducer = (state = iniialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case ADD_TO_CART:
			return {
				...state,
				cart: [...state.cart, payload],
			};

		case REMOVE_FROM_CART:
			return {
				...state,
				cart: payload,
			};
		case CLEAR_CART:
			return {
				...state,
				cart: [],
				subtotal: 0,
				deliveryFees: null,
				total: 0,
			};
		case INCREASE_QUANTITY:
			return {
				...state,
				cart: payload,
			};
		case DECREASE_QUANTITY:
			return {
				...state,
				cart: payload,
			};

		default:
			return state;
	}
};

export default cartReducer;
