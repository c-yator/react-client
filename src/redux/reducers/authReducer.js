import {
	AUTH_USER,
	FETCH_USER,
	REGISTER_SUCCESS,
	LOGIN_SUCCESS,
	REFRESH_TOKEN_SUCCESS,
	LOGOUT_SUCCESS,
} from '../types';

const iniialState = {
	token: localStorage.getItem('user'),
	user: {
		username: 'Account',
	},
	userLoading: true,
	isAuthenticated: false,
};

const authReducer = (state = iniialState, action) => {
	switch (action.type) {
		case AUTH_USER:
			return {
				...state,
				isAuthenticated: true,
			};
		case FETCH_USER:
			return { ...state, user: action.payload, userLoading: false };
		case REGISTER_SUCCESS:
		case LOGIN_SUCCESS:
		case REFRESH_TOKEN_SUCCESS:
			localStorage.setItem('user', action.payload);
			return { ...state, isAuthenticated: true };
		case LOGOUT_SUCCESS:
			localStorage.removeItem('user');
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
