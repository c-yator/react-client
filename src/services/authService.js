import Axios from 'axios';

const authService = {
	register: async ({ username, email, password }) => {
		console.log('register sevice called');
		const response = await Axios.post('/auth/register', {
			username,
			email,
			password,
		});
		setUser(response.data);
		return response.data;
	},
	login: async ({ email, password }) => {
		const response = await Axios.post('/auth/login', { email, password });
		setUser(response.data);
		return response.data;
	},
	refresh: async () => {
		const response = await Axios.post('/auth/refresh-token');
		setUser(response.data);
		return response.data;
	},
	logout: async () => {
		const response = await Axios.delete('/auth/logout');
		localStorage.removeItem('user');
		return response.status;
	},
};

function setUser(user) {
	if (user.token) {
		localStorage.setItem('user', JSON.stringify(user));
	}
}

export default authService;
