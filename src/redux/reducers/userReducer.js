import { SET_USER_ADDRESS } from '../types';

const initialState = {
	address: {},
	favorites: {},
	previousOrders: [],
};

const userReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case SET_USER_ADDRESS:
			return {
				...state,
				address: payload,
			};

		default:
			return state;
	}
};

export default userReducer;
