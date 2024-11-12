import axios from "axios";

export const makeRequest = axios.create({
	baseURL: "http://localhost:8000/api", //local: http://localhost:8000/, domain: process.env.REACT_APP_API_DOMAIN
	withCredentials: true,
	headers: {
		"Content-Type": "multipart/form-data",
	},
});
