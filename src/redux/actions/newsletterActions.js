import instance from '../../config/axiosConfig';

export const subscribeToNewsletter = (email) => async (dispatch) => {
	console.log(email);
	const res = await instance.post('newsletter', email);
	console.log('subscribeToNewsletter', res);
};
