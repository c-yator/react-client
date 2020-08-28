import {
	FETCH_USER,
	REGISTER_SUCCESS,
	LOGIN_SUCCESS,
	REFRESH_TOKEN_SUCCESS,
	LOGOUT_SUCCESS,
} from '../types';

const iniialState = {
	token: null,
	user: {},
	userLoading: true,
	isAuthenticated: false,
};

const authReducer = (state = iniialState, action) => {
	switch (action.type) {
		case FETCH_USER:
			return { ...state, user: action.payload, userLoading: false };
		case REGISTER_SUCCESS:
		case LOGIN_SUCCESS:
		case REFRESH_TOKEN_SUCCESS:
			return { ...state, token: action.payload, isAuthenticated: true };
		case LOGOUT_SUCCESS:
			return {
				...state,
				token: null,
				user: {},
				userLoading: true,
				isAuthenticated: false,
			};
		default:
			return state;
	}
};

export default authReducer;
