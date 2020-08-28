import instance from '../../config/axiosConfig';
import {
	REFRESH_TOKEN_SUCCESS,
	LOGIN_SUCCESS,
	REGISTER_SUCCESS,
	FETCH_USER,
	LOGOUT_SUCCESS,
} from '../types';

export const register = (newUser) => async (dispatch) => {
	try {
		const res = await instance.post('auth/register', { ...newUser });
		console.log('register', res);
		const { accessToken } = res.data;
		dispatch({
			type: REGISTER_SUCCESS,
			payload: accessToken,
		});
	} catch (err) {
		console.log(err);
	}
};

export const login = (credentials) => async (dispatch) => {
	try {
		const res = await instance.post('auth/login', { ...credentials });
		console.log('login', res.data);
		const { accessToken } = res.data;
		dispatch({
			type: LOGIN_SUCCESS,
			payload: accessToken,
		});
	} catch (err) {
		console.log(err);
	}
};

export const refresh = () => async (dispatch) => {
	try {
		const res = await instance.post('auth/refresh-token');
		console.log('refresh', res.data);
		const { accessToken } = res.data;
		dispatch({
			type: REFRESH_TOKEN_SUCCESS,
			payload: accessToken,
		});
	} catch (err) {
		console.log(err);
	}
};

export const fetchUser = () => async (dispatch) => {
	try {
		const res = await instance.get('auth/user');
		console.log('fetch user', res);

		dispatch({
			type: FETCH_USER,
			payload: res.data,
		});
	} catch (err) {
		console.log(err);
	}
};

export const logout = () => async (dispatch) => {
	try {
		const res = await instance.delete('auth/logout');
		console.log(res.data);
		dispatch({
			type: LOGOUT_SUCCESS,
		});
	} catch (err) {
		console.log(err);
	}
};
