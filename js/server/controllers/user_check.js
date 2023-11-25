export const userCheck = (roles) => {
	const user = JSON.parse(localStorage.getItem("token"));
	if (user) {
		return user.roles === roles;
	}

	return false;
};
