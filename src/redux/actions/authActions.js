import instance from '../../config/axiosConfig';

export const fetchUser = () => (dispatch) => {
	instance
		.get('auth/user')
		.then((res) => console.log(res))
		.catch((err) => console.log(err));
};
