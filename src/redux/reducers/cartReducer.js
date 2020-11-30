import {
	ADD_TO_CART,
	INCREASE_QUANTITY,
	REMOVE_FROM_CART,
	DECREASE_QUANTITY,
	GET_SUBTOTAL,
} from '../types';

const iniialState = {
	cart: [],
	subtotal: 0,
	deliveryFees: null,
	total: 0,
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
		case GET_SUBTOTAL:
			return {
				...state,
				subtotal: payload,
			};
		default:
			return state;
	}
};

export default cartReducer;
