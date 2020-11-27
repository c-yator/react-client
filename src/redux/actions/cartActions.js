import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	INCREASE_QUANTITY,
	DECREASE_QUANTITY,
} from '../types';
import { toast } from 'react-toastify';
export const addToCart = ({ product }) => (dispatch, getState) => {
	try {
		const { cart } = getState().cartState;

		const isFound = cart.some(({ id }) => product.id === id);
		console.log(isFound);
		if (!isFound) {
			dispatch({ type: ADD_TO_CART, payload: { ...product, quantity: '1' } });
		} else {
			throw new Error(`${product.name} is already in cart`);
		}
	} catch (error) {
		console.log('addToCart error', error.message);
		const message = error.message || error.toString();
		console.log(message);
		toast.error(message);
	}
};

export const removeFromCart = (productId) => (dispatch, getState) => {
	try {
		const { cart } = getState().cartState;

		const filtered = cart.filter(({ id }) => id !== productId);

		dispatch({ type: REMOVE_FROM_CART, payload: filtered });
	} catch (error) {
		console.log('removeFromCart', error.message);
		const message = error.message || error.toString();
		console.log(message);
		toast.error(message);
	}
};

export const increaseQuantity = (productId) => (dispatch, getState) => {
	const { cart } = getState().cartState;

	const updated = cart.map((product) => {
		if (product.id === productId) {
			product.quantity++;
		}
		return product;
	});

	dispatch({
		type: INCREASE_QUANTITY,
		payload: updated,
	});
};

export const decreaseQuantity = (productId) => (dispatch, getState) => {
	const { cart } = getState().cartState;

	const updated = cart.map((product) => {
		if (product.id === productId) {
			product.quantity > 0 && product.quantity--;
		}
		return product;
	});

	dispatch({
		type: DECREASE_QUANTITY,
		payload: updated,
	});
};
