import { toast } from 'react-toastify';
import {
	REFRESH_TOKEN_SUCCESS,
	LOGIN_SUCCESS,
	REGISTER_SUCCESS,
	// FETCH_USER_SUCCESS,
	LOGOUT_SUCCESS,
	CLEAR_CART,
	// USER_LOADING,
	// USER_LOADED,
} from '../types';
import authService from '../../services/authService';

export const register = (newUser) => async (dispatch) => {
	try {
		const user = await authService.register(newUser);
		console.log('register user', user);
		dispatch({
			type: REGISTER_SUCCESS,
			payload: { user },
		});
	} catch (error) {
		console.log('register error response', error.response);
		const message =
			error.response?.data?.message || error.message || error.toString();
		toast.error(message);
	}
};

export const login = (credentials) => async (dispatch) => {
	try {
		const user = await authService.login(credentials);
		console.log('login user', user);
		dispatch({
			type: LOGIN_SUCCESS,
			payload: { user },
		});
	} catch (error) {
		console.log('login error response', error.response);
		const message =
			error.response?.data?.message || error.message || error.toString();
		toast.error(message);
	}
};

export const refresh = () => async (dispatch) => {
	try {
		const user = await authService.refresh();
		console.log('refresh user', user);
		dispatch({
			type: REFRESH_TOKEN_SUCCESS,
			payload: { user },
		});
	} catch (error) {
		console.log('refresh error response', error.response);
		const message =
			error.response?.data?.message || error.message || error.toString();
		toast.error(message);
	}
};

// export const fetchUser = () => async (dispatch) => {
// 	try {
// 		dispatch({
// 			type: USER_LOADING,
// 		});
// 		const res = await instance.get('auth/user');
// 		console.log('fetch user', res);

// 		dispatch({
// 			type: FETCH_USER_SUCCESS,
// 			payload: res.data,
// 		});
// 		dispatch({
// 			type: USER_LOADED,
// 		});
// 	} catch (error) {
// 		console.log('fetch user error response', error.response);
// 		const message =
// 			error.response?.data?.message || error.message || error.toString();
// 		console.log(message);
// 		dispatch(setResponse(message));
// 	}
// };

export const logout = (history) => async (dispatch) => {
	try {
		const status = await authService.logout();
		console.log('logout response status', status);

		if (status === 204) {
			dispatch({
				type: LOGOUT_SUCCESS,
			});
			dispatch({
				type: CLEAR_CART,
			});
			history.push('/');
		}
	} catch (error) {
		console.log('logout error response', error.response);
		const message =
			error.response?.data?.message || error.message || error.toString();
		toast.error(message);
	}
};
