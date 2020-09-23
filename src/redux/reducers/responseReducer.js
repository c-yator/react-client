import { SET_RESPONSE, CLEAR_RESPONSE } from '../types';

const initialState = {
	message: '',
};

const responseReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case SET_RESPONSE:
			return {
				...state,
				message: payload,
			};
		case CLEAR_RESPONSE:
			return {
				...state,
				message: '',
			};
		default:
			return state;
	}
};

export default responseReducer;
