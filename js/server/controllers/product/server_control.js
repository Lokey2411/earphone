import { doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
import { getData, storeData } from "../firebase.js";
import { products } from "../../data/product_data.js";
import { firestore } from "../../firebase/index.js";

// Fetches the buying list of the current user from the local storage
export const fetchProductData = async () => {
	const { buyingList } = JSON.parse(localStorage.getItem("token"));
	if (buyingList) {
		return Promise.all(
			buyingList.map(async (item) => {
				const docRef = doc(firestore, "product", item);
				const docSnap = await getDoc(docRef);
				return docSnap.data();
			})
		);
	}
	return null;
};

// Creates a new product document in the Firestore database for each product in the products array
export const createProduct = () => {
	products.map(async (product) => {
		const docRef = doc(firestore, "product", product.id);
		await setDoc(docRef, {
			...product,
		});
	});
};

// Updates the buying list of the current user in the local storage
export const storeProduct = (data) => {
	const user = JSON.parse(localStorage.getItem("token"));
	const newUser = {
		...user,
		buyingList: data,
	};
	storeData(newUser, "users", user.username);
	localStorage.setItem("token", JSON.stringify(newUser));
};

// Adds a product to the buying list of the current user
export const addBuyingList = async (id) => {
	const userID = JSON.parse(localStorage.getItem("token")).username;
	console.log(userID);
	if (userID) {
		const docRef = doc(firestore, "users", userID);
		const user = (await getDoc(docRef)).data();
		if (user.buyingList) {
			const prevList = (await getDoc(docRef)).data().buyingList;
			if (!prevList.includes(id)) {
				storeProduct([...prevList, id]);
			}
		} else {
			let newUser = { ...user, buyingList: [id] };
			storeData(newUser, "users", user.username);
		}
		console.log("Successfully store");
	} else alert("you have to sign in to use this function");
};

// Removes a product from the buying list of the current user
export const removeBuying = (id) => {
	const userID = JSON.parse(localStorage.getItem("token")).username;
	const prevList = doc(firestore, "users", userID);
	storeProduct([prevList.filter((item) => item !== id), id]);
};
//
//This code provides functions for managing a user's buying list. The buying list is stored in local storage of the user browser. The functions allow the user to fetch their buying list, create new products, add products to their buying list, and remove products from their buying list..</s>
