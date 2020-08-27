import axios from 'axios';
import store from '../redux/store';

const instance = axios.create();

const {
	authState: { token },
} = store.getState();

instance.interceptors.request.use((config) => {
	if (
		config.method === 'POST' ||
		config.method === 'PATCH' ||
		config.method === 'PUT'
	)
		config.headers['Content-Type'] = 'application/json;charset=utf-8';

	const token = AuthService.getAccessToken();
	if (token) config.headers.Authorization = `Bearer ${token}`;

	return config;
});

export default instance;
