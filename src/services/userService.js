import Axios from 'axios';
import authHeader from '../config/authHeader';

const userService = {
	getUserProfile: async () => {
		const response = await Axios.get('auth/user', { headers: authHeader() });
		console.log('user info', response.data);
		return response.data;
	},
	getUserOrders: async () => {},
	getUserFavorites: async () => {},
};

export default userService;
