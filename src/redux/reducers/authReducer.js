import {
	// USER_LOADING,
	// USER_LOADED,
	AUTH_USER_SUCCESS,
	// AUTH_USER_FAIL,
	FETCH_USER_SUCCESS,
	// FETCH_USER_FAIL,
	REGISTER_SUCCESS,
	// REGISTER_FAIL,
	LOGIN_SUCCESS,
	// LOGIN_FAIL,
	REFRESH_TOKEN_SUCCESS,
	// REFRESH_TOKEN_FAIL,
	LOGOUT_SUCCESS,
} from '../types';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = user
	? { isAuthenticated: true, user }
	: { isAuthenticated: false, user: null };

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		// case USER_LOADING:
		// 	return {
		// 		...state,
		// 		userLoading: true,
		// 	};
		// case USER_LOADED: {
		// 	return {
		// 		...state,
		// 		userLoading: false,
		// 	};
		// }
		case AUTH_USER_SUCCESS:
			return {
				...state,
				isAuthenticated: true,
			};
		case FETCH_USER_SUCCESS:
			return { ...state, user: action.payload };
		case REGISTER_SUCCESS:
		case LOGIN_SUCCESS:
		case REFRESH_TOKEN_SUCCESS:
			return {
				...state,
				user: action.payload.user,
				isAuthenticated: true,
				token: action.payload.accessToken,
			};
		case LOGOUT_SUCCESS:
			// case REGISTER_FAIL:
			// case LOGIN_FAIL:
			// case REFRESH_TOKEN_FAIL:
			return {
				...state,
				user: {
					username: 'Account',
					token: null,
				},
				// userLoading: false,
				isAuthenticated: false,
			};
		default:
			return state;
	}
};

export default authReducer;
