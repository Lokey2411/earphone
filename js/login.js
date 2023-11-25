import { logInHandler, signUpHandler } from "./server/controllers/firebase.js";
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const logInHandlerButton = document.querySelector("#login-controller");
const signUpHandlerButton = document.querySelector("#signUp-controller");
const usernameField = document.querySelector("#username-field");
const passwordField = document.querySelector("#password-field");
const signUpForm = {
	username: document.querySelector("#sign-up-username"),
	password: document.querySelector("#sign-up-password"),
	email: document.querySelector("#sign-up-email"),
	reEnteredPassword: document.querySelector("#sign-up-re-enter-pass"),
};
let formData = {
	username: "",
	password: "",
	email: "",
	reEnteredPassword: "",
};

const setFormData = (key, value) => {
	formData = {
		...formData,
		[key]: value,
	};
};

sign_up_btn.addEventListener("click", () => {
	console.log("Hello");
	container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
	container.classList.remove("sign-up-mode");
});

logInHandlerButton?.addEventListener("click", () => {
	setFormData("username", usernameField.value);
	setFormData("password", passwordField.value);
	logInHandler(formData.username, formData.password);
});

signUpHandlerButton?.addEventListener("click", () => {
	setFormData("username", signUpForm.username.value);
	setFormData("password", signUpForm.password.value);
	setFormData("reEnteredPassword", signUpForm.reEnteredPassword.value);
	setFormData("email", signUpForm.email.value);
	console.log(formData);
	signUpHandler(formData);
});
