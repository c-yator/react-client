import instance from '../../config/axiosConfig';
import { toast } from 'react-toastify';
import { FETCH_ALL_OFFERS, FETCH_SINGLE_OFFER } from '../types';

// import { setResponse } from '../actions/responseActions';

export const fetchAllOffers = () => async (dispatch) => {
	try {
		const res = await instance.get('api/offers');

		console.log('fetchAllOffers', res.data);
		dispatch({
			type: FETCH_ALL_OFFERS,
			payload: res.data,
		});
	} catch (error) {
		console.log('fetchAllOffers', error.response);
		// const errorId = "fetchAllProducts";
		const message =
			error.response?.data?.message || error.message || error.toString();

		// dispatch(setResponse({ errorId, message }));
		toast.error(message);
	}
};

export const fetchSingleOffer = (id) => async (dispatch) => {
	try {
		const res = await instance.get(`api/offerss/${id}`);
		console.log('fetchSingleOffer', res);
		dispatch({
			type: FETCH_SINGLE_OFFER,
			payload: res.data,
		});
	} catch (error) {
		console.log('fetchSingleOffer', error.response);

		const message =
			error.response?.data?.message || error.message || error.toString();
		toast.error(message);
		// dispatch(setResponse(message));
	}
};

export const createOffer = (newOffer) => async (dispatch) => {
	try {
		const res = await instance.post('api/offers', { ...newOffer });
		console.log('createOffer', res);
	} catch (error) {
		console.log('createOffer', error.response);

		const message =
			error.response?.data?.message || error.message || error.toString();
		toast.error(message);
		// dispatch(setResponse(message));
	}
};

export const updateOffer = (id, update) => async (dispatch) => {
	try {
		const res = await instance.patch(`api/offers/${id}`, { ...update });
		console.log('updateOffer', res);
	} catch (error) {
		console.log('updateOffer', error.response);

		const message =
			error.response?.data?.message || error.message || error.toString();
		toast.error(message);
		// dispatch(setResponse(message));
	}
};

export const deleteOffer = (id) => async (dispatch) => {
	try {
		const res = await instance.delete(`api/offers/${id}`);
		console.log('deleteOffer', res);
	} catch (error) {
		console.log('deleteOffer', error.response);

		const message =
			error.response?.data?.message || error.message || error.toString();
		toast.error(message);
		// dispatch(setResponse(message));
	}
};
