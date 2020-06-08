import { IAircraft, IAircraftEnvelope } from './../models/aircraft';
import axios, { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { history } from '../../index';

axios.defaults.baseURL = 'https://localhost:5001/api';

axios.interceptors.response.use(undefined, (error) => {
	if (error.message === 'Network Error' && !error.response) {
		toast.error('Network error - make sure API is running!');
	}
	const { status, data, config, headers } = error.response;
	if (status === 404) {
		history.push('/notfound');
	}
	if (
		status === 401 &&
		String(headers['www-authenticate']).indexOf(
			'error_description="The token expired at'
		) >= 0
	) {
		window.localStorage.removeItem('jwt');
		history.push('/');
		toast.info('Your session has expired, please login again');
	}
	if (
		status === 400 &&
		config.method === 'get' &&
		data.errors.hasOwnProperty('id')
	) {
		//history.push('/notfound');
	}
	if (status === 500) {
		toast.error('Server error - check the terminal for more info!');
	}
	throw error.response;
});

const responseBody = (response: AxiosResponse) => response.data;

const sleep = (ms: number) => (response: AxiosResponse) =>
	new Promise<AxiosResponse>((resolve) =>
		setTimeout(() => resolve(response), ms)
	);
const requests = {
	get: (url: string) => axios.get(url).then(sleep(2000)).then(responseBody),
};

const Aircrafts = {
	list: (params: URLSearchParams): Promise<IAircraftEnvelope> =>
		axios.get('/aircraft', { params }).then(sleep(1000)).then(responseBody),
};

export default { Aircrafts };
