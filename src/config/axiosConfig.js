import axios from 'axios';
import { refresh } from '../redux/actions/authActions';
import store from '../redux/store';

const instance = axios.create();

instance.interceptors.request.use((request) => {
	if (
		request.method === 'POST' ||
		request.method === 'PATCH' ||
		request.method === 'PUT'
	)
		request.headers['Content-Type'] = 'application/json;charset=utf-8';

	const {
		authState: { token },
	} = store.getState();

	if (token) request.headers.Authorization = `Bearer ${token}`;

	return request;
});

instance.interceptors.response.use(
	(response) => response,
	(err) => {
		if (err.response.status === 404) {
			throw new Error(`${err.config.url} not found`);
		}

		if (
			err.response.status === 401 &&
			err.response.data.error.message === 'jwt expired'
		) {
			store.dispatch(refresh());
		}

		return Promise.reject(err);
	}
);

export default instance;
