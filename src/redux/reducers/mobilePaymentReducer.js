import {
	SET_MOBILE_PAYMENT_RESPONSE,
	SET_PAYMENT_SUCCESS,
	CLEAR_MOBILE_PAYMENT_RESPONSE,
} from '../types';

const initialState = {
	serverResponded: false,
	CheckoutRequestID: null,
	ResponseCode: null,
	isSuccessful: false,
};

const mobilePaymentReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case SET_MOBILE_PAYMENT_RESPONSE:
			return {
				...state,
				serverResponded: true,
				CheckoutRequestID: payload.CheckoutRequestID,
				ResponseCode: payload.ResponseCode,
			};
		case SET_PAYMENT_SUCCESS:
			return {
				...state,
				isSuccessful: true,
			};
		case CLEAR_MOBILE_PAYMENT_RESPONSE:
			return {
				...state,
				serverResponded: false,
				MerchantRequestID: null,
				CheckoutRequestID: null,
				ResponseCode: null,
				ResponseDescription: null,
			};
		default:
			return state;
	}
};

export default mobilePaymentReducer;
