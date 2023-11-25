import { doc, setDoc, query, where, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
import { firestore } from "../firebase/index.js";
import { ROLES } from "../data/roles.js";

export const logInHandler = async (username, password) => {
	// Perform login logic here using the username and password
	alert(username);
	alert(password);
	let docRef,
		docSnap,
		isExisted = false;
	const userCollectionRef = collection(firestore, "users");
	const field = username.includes("@") ? "email" : "username";
	const q = query(userCollectionRef, where(field, "==", username));
	// console.log(q);
	const data = await getDocs(q);
	console.log(data);
	if (data.docs && data.docs.length) {
		docSnap = data.docs[0].data();
		isExisted = true;
	}
	if (isExisted) {
		//check password
		if (docSnap.password === password) {
			//sign in successfully
			alert("Sign in successful!");
			if (docSnap.roles === ROLES.USER) {
				window.location = "/user";
			} else window.location = "/admin";
		} else {
			alert("Wrong password");
		}
		localStorage.setItem("token", JSON.stringify(docSnap));
	} else {
		alert("User does not exist");
		return;
	}

	// Example: Display a success message
	// console.log("Login successful!");
};

export const signUpHandler = (formData = { username, email, password, reEnteredPassword }) => {
	// Perform sign up logic here using the username and password
	const docRef = doc(firestore, "users", formData.username);
	const isValid = formData.password.length >= 9 && formData.password === formData.reEnteredPassword;
	if (isValid) {
		//sign up successfully
		console.log("Sign up successful!");
		// const { user } = createUserWithEmailAndPassword(auth, username, password);
		setDoc(docRef, {
			...formData,
			roles: ROLES.USER,
		});
	} else {
		if (formData.password.length < 9) alert("Invalid information. Your password has less than 9 letters ");
		else if (formData.password !== formData.reEnteredPassword) alert("Invalid information. Password does not match");
		console.log(formData.password, formData.reEnteredPassword);
	}

	// Example: Display a success message
	// console.log("Sign up successful!");
};
