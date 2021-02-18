import { FETCH_ALL_OFFERS, FETCH_SINGLE_OFFER } from '../types';

const iniialState = {
	allOffers: [],
	offerIsLoading: true,
	singleOffer: {},
};

const offerReducer = (state = iniialState, action) => {
	switch (action.type) {
		case FETCH_ALL_OFFERS:
			return {
				...state,
				allOffers: action.payload,
				offerIsLoading: false,
			};

		case FETCH_SINGLE_OFFER:
			return {
				...state,
				singleOffer: action.payload,
			};

		default:
			return state;
	}
};

export default offerReducer;
