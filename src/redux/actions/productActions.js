import instance from '../../config/axiosConfig';
import { toast } from 'react-toastify';
import { FETCH_ALL_PRODUCTS, FETCH_SINGLE_PRODUCT } from '../types';

// import { setResponse } from '../actions/responseActions';

export const fetchAllProducts = () => async (dispatch) => {
	try {
		const res = await instance.get('api/products');

		console.log('fetchAllProducts', res);
		dispatch({
			type: FETCH_ALL_PRODUCTS,
			payload: res.data,
		});
	} catch (error) {
		console.log('fetchAllProducts', error.response);
		// const errorId = "fetchAllProducts";
		const message =
			error.response?.data?.message || error.message || error.toString();

		// dispatch(setResponse({ errorId, message }));
		toast.error(message);
	}
};

export const fetchSingleProduct = (id) => async (dispatch) => {
	try {
		const res = await instance.get(`api/products/${id}`);
		console.log('fetchSingleProduct', res);
		dispatch({
			type: FETCH_SINGLE_PRODUCT,
			payload: res.data,
		});
	} catch (error) {
		console.log('fetchSingleProduct', error.response);

		const message =
			error.response?.data?.message || error.message || error.toString();
		toast.error(message);
		// dispatch(setResponse(message));
	}
};

export const createProduct = (newProduct) => async (dispatch) => {
	try {
		const res = await instance.post('api/products', { ...newProduct });
		console.log('createProduct', res);
	} catch (error) {
		console.log('createProduct', error.response);

		const message =
			error.response?.data?.message || error.message || error.toString();
		toast.error(message);
		// dispatch(setResponse(message));
	}
};

export const updateProduct = (id, update) => async (dispatch) => {
	try {
		const res = await instance.patch(`api/products/${id}`, { ...update });
		console.log('updateProduct', res);
	} catch (error) {
		console.log('updateProduct', error.response);

		const message =
			error.response?.data?.message || error.message || error.toString();
		toast.error(message);
		// dispatch(setResponse(message));
	}
};

export const deleteProduct = (id) => async (dispatch) => {
	try {
		const res = await instance.delete(`api/products/${id}`);
		console.log('deleteProduct', res);
	} catch (error) {
		console.log('deleteProduct', error.response);

		const message =
			error.response?.data?.message || error.message || error.toString();
		toast.error(message);
		// dispatch(setResponse(message));
	}
};
