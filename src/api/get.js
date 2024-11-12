import { makeRequest } from "../makeRequest";

export var decodeEntities = (function () {
	// this prevents any overhead from creating the object each time
	var element = document.createElement("div");

	function decodeHTMLEntities(str) {
		if (str && typeof str === "string") {
			// strip script/html tags
			str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, "");
			str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, "");
			element.innerHTML = str;
			str = element.textContent;
			element.textContent = "";
		}
		return str;
	}
	return decodeHTMLEntities;
})();

export function truncate(array, callback) {
	const map = new Map();
	if (!array) return [];
	for (const item of array) {
		const key = callback ? callback(item) : item;
		if (!map.has(key)) {
			map.set(key, item);
		}
	}
	return Array.from(map.values());
}

export const getData = async (url) => {
	const res = await makeRequest
		.get(url, {
			headers: {
				"Content-Type": "application/json",
			},
		})
		.catch((err) => {
			console.log(err);
		});
	// console.log(res.data);
	const data = res.data;
	return data;
};
