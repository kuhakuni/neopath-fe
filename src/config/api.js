import axios from "axios";
import { getToken } from "./SessionHelper";
const API_ENDPOINT = "http://103.52.114.33:8090";
const token = async () => await getToken();

const api = axios.create({
	baseURL: API_ENDPOINT,
	headers: {
		"Content-Type": "application/json",
	},
});

//get data with token
const getData = async (url, params = {}) => {
	return await api.get(url, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		params,
	});
};

const sendPost = async (url, data) => {
	return await api.post(url, data, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
};

const sendPut = async (url, data) => {
	return await api.put(url, data, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
};

const login = async (data) => {
	return await api.post("/student/login", data);
};

export const API_SERVICE = {
	student: {
		login: (data) => login(data),
		put: {
			updateProfile: (data) => sendPut("/student/profile", data),
		},
		get: {
			profile: () => getData("/student/profile"),
		},
	},
	mentor: {
		get: {
			all: () => getData("/mentor/all"),
			profile: (id) => getData("/mentor/details", id),
		},
	},
};
