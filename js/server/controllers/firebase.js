import { doc, setDoc, query, where, getDocs, collection, getDoc } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
import { firestore } from "../firebase/index.js";
import { ROLES } from "../data/roles.js";
import { verifyEmail } from "./rules.js";

export const logInHandler = async (username, password) => {
	// Perform login logic here using the username and password
	let docSnap,
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

export const signUpHandler = async (formData = { username, email, password, reEnteredPassword }) => {
	// Perform sign up logic here using the username and password
	//catch username has exist error
	const docRef = doc(firestore, "users", formData.username);
	const docSnap = (await getDoc(docRef)).data();
	//catch email exist error
	const userCollectionRef = collection(firestore, "users");
	const q = query(userCollectionRef, where("email", "==", formData.email));
	const { docs } = await getDocs(q);
	const dataIsExist = docs.length > 0;
	if (dataIsExist) console.log(docs[0]);
	const isValid = formData.password.length >= 9 && formData.password === formData.reEnteredPassword && verifyEmail(formData.email) && !docSnap && !dataIsExist;

	if (isValid) {
		console.log("Sign up successful!");
		// const { user } = createUserWithEmailAndPassword(auth, username, password);
		setDoc(docRef, {
			...formData,
			roles: ROLES.USER,
		});
	} else {
		if (formData.password.length < 9) alert("Invalid information. Your password has less than 9 letters ");
		if (formData.password !== formData.reEnteredPassword) alert("Invalid information. Password does not match");
		if (!verifyEmail(formData.email)) alert("Invalid information. Wrong email");
		if (dataIsExist || !!docSnap) alert("Your account has been existed");
		return;
	}

	// Example: Display a success message
	// console.log("Sign up successful!");
};

export const storeData = async (data, path, id = "") => await setDoc(doc(firestore, path, id), data);

export const getData = async (path, id) => (await getDoc(doc(firestore, path, id))).data();
