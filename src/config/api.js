import axios from "axios";
const API_ENDPOINT = "http://103.37.124.173:8090";

const api = axios.create({
	baseURL: API_ENDPOINT,
	headers: {
		"Content-Type": "application/json",
	},
});

//get data with token
const getData = async (token, url, params = {}) => {
	return await api.get(url, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		params,
	});
};

const sendPost = async (token, url, data) => {
	return await api.post(url, data, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
};

const sendPut = async (token, url, data) => {
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
		post: {
			reflection: (token, data) =>
				sendPost(token, "/reflection/answer", data),
		},
		put: {
			updateProfile: (data) => sendPut("/student/profile", data),
		},
		get: {
			profile: (token) => getData(token, "/student/profile"),
			result: (token) => getData(token, "/reflection/evaluation"),
			question: (token, url) => getData(token, url),
			course: (token) =>
				getData(token, "/course/meta?role=UX%20Designer"),
			detailCourse: (token, id) => getData(token, `/course/data/${id}`),
		},
	},
	mentor: {
		get: {
			all: (token) => getData(token, "/mentor/all"),
			profile: (token, id) => getData(token, "/mentor/details", id),
		},
	},
};
