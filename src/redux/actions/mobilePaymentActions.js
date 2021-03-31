import instance from '../../config/axiosConfig';
import { toast } from 'react-toastify';
import { SET_MOBILE_PAYMENT_RESPONSE, SET_PAYMENT_SUCCESS } from '../types';

export const mobilepaymentQuery = (CheckoutRequestID) => async (dispatch) => {
	try {
		const res = await instance.post('stk/query', {
			CheckoutRequestID,
		});
		const { ResultCode } = res.data;
		console.log('query ResultCode ', ResultCode);
		if (ResultCode === 0) {
			dispatch({
				type: SET_PAYMENT_SUCCESS,
			});
			toast.success(res.data?.ResponseDescription);
		}
	} catch (error) {
		console.log('mobilepaymentQuery', error.response);

		const message =
			error.response?.data?.message || error.message || error.toString();

		toast.error(message);
	}
};

export const mobilePaymentRequest = (
	cartTotal,
	PhoneNumber,
	TransactionDesc
) => async (dispatch) => {
	try {
		console.log(
			'cartTotal',
			cartTotal,
			'PhoneNumber',
			PhoneNumber,
			'TransactionDesc',
			TransactionDesc
		);
		const res = await instance.post('stk', {
			Amount: cartTotal,
			PhoneNumber,
			TransactionDesc,
		});
		console.log('mpesaPaymentRequest', res.data);
		dispatch({
			type: SET_MOBILE_PAYMENT_RESPONSE,
			payload: res.data,
		});
		toast.success(res.data?.ResponseDescription);
	} catch (error) {
		console.log('mpesaPaymentRequest', error.response);

		const message =
			error.response?.data?.message || error.message || error.toString();

		toast.error(message);
	}
};
