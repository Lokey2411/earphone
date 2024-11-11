export const addFavorite = (id) => {
	const oldFavorite = localStorage.getItem("yeuthich") ? JSON.parse(localStorage.getItem("yeuthich")) : [];
	localStorage.setItem("yeuthich", JSON.stringify([...oldFavorite, id]));
};

export const removeFavorite = (id) => {
	const oldFavorite = localStorage.getItem("yeuthich") ? JSON.parse(localStorage.getItem("yeuthich")) : [];
	localStorage.setItem("yeuthich", JSON.stringify(oldFavorite.filter((item) => item.id !== id.id)));
};
