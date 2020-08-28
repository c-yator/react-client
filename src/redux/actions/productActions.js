import instance from '../../config/axiosConfig';

import { FETCH_ALL_PRODUCTS, FETCH_SINGLE_PRODUCT } from '../types';

export const fetchAllProducts = () => async (dispatch) => {
	try {
		const res = await instance.get('api/products');
		console.log('fetchAllProducts', res);
		dispatch({
			type: FETCH_ALL_PRODUCTS,
			payload: res.data,
		});
	} catch (err) {
		console.log(err);
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
	} catch (err) {
		console.log(err);
	}
};

export const createProduct = (newProduct) => async (dispatch) => {
	try {
		const res = await instance.post('api/products', { ...newProduct });
		console.log('createProduct', res);
	} catch (err) {
		console.log(err);
	}
};

export const updateProduct = (id, update) => async (dispatch) => {
	try {
		const res = await instance.patch(`api/products/${id}`, { ...update });
		console.log('updateProduct', res);
	} catch (err) {
		console.log(err);
	}
};

export const deleteProduct = (id) => async (dispatch) => {
	try {
		const res = await instance.delete(`api/products/${id}`);
		console.log('deleteProduct', res);
	} catch (err) {
		console.log(err);
	}
};
