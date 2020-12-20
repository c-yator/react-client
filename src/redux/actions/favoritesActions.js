import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../types';
import { toast } from 'react-toastify';

export const addToFavorites = (product) => (dispatch, getState) => {
	try {
		const { favorites } = getState().favoritesState;
		const isFound = favorites.some(({ id }) => product.id === id);
		console.log(isFound);
		if (!isFound) {
			dispatch({ type: ADD_TO_FAVORITES, payload: { ...product } });
		} else {
			throw new Error(`${product.name} is already in favorites`);
		}
	} catch (error) {
		console.log('addToFavorites error', error.message);
		const message = error.message || error.toString();
		console.log(message);
		toast.error(message);
	}
};

export const removeFromFavorites = (productId) => (dispatch, getState) => {
	try {
		const { favorites } = getState().favoritesState;
		const filtered = favorites.filter(({ id }) => id !== productId);
		dispatch({ type: REMOVE_FROM_FAVORITES, payload: filtered });
	} catch (error) {
		console.log('removeFromFavorites error', error.message);
		const message = error.message || error.toString();
		console.log(message);
		toast.error(message);
	}
};
