let filter_col = document.querySelector("#filter-col");

document.querySelector("#filter-toggle").addEventListener("click", () => filter_col.classList.toggle("active"));

document.querySelector("#filter-close").addEventListener("click", () => filter_col.classList.toggle("active"));
//login
let login = document.querySelector(".login-form");
document.querySelector("#user-circle").onclick = () => {
	login.classList.toggle("active");
	cart.classList.remove("active");
};
//cart
let cart = document.querySelector(".cart");
document.querySelector("#cart-icon").onclick = () => {
	cart.classList.toggle("active");
	login.classList.remove("active");
};
