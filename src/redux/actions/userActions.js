import { SET_USER_ADDRESS } from '../types';

export const setUserAddress = (address) => ({
	type: SET_USER_ADDRESS,
	payload: address,
});
