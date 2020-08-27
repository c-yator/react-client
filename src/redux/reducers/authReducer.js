import {
	FETCH_USER,
	AUTH_USER,
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
	switch (action.types) {
		case AUTH_USER:
			return { ...state, isAuthenticated: true };
		case FETCH_USER:
			return { ...state, user: action.payload, userLoading: false };
		case LOGIN_SUCCESS:
		case REFRESH_TOKEN_SUCCESS:
			return { ...state, token: action.payload };
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
