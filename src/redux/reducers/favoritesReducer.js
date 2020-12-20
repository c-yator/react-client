import {
	ADD_TO_FAVORITES,
	REMOVE_FROM_FAVORITES,
	CLEAR_FAVORITES,
} from '../types';

const iniialState = {
	favorites: [],
};

const favoritesReducer = (state = iniialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case ADD_TO_FAVORITES:
			return {
				...state,
				favorites: [...state.favorites, payload],
			};
		case REMOVE_FROM_FAVORITES:
			return {
				...state,
				favorites: payload,
			};

		case CLEAR_FAVORITES:
			return {
				...state,
				favorites: [],
			};

		default:
			return state;
	}
};

export default favoritesReducer;
