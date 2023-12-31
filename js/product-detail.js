document.querySelectorAll(".product-img-item").forEach((e) => {
	e.addEventListener("click", () => {
		let img = e.querySelector("img").getAttribute("src");
		document.querySelector("#product-img > img").setAttribute("src", img);
	});
});

document.querySelector("#view-all-description").addEventListener("click", () => {
	let content = document.querySelector(".product-detail-description-content");
	content.classList.toggle("active");
	document.querySelector("#view-all-description").innerHTML = content.classList.contains("active") ? "view less" : "view all";
});

let products = [
	{
		name: "JBL E55BT KEY BLACK",
		image1: "../images/JBL_E55BT_KEY_BLACK_6175_FS_x1-1605x1605px.png",
		image2: "../images/JBL_LIVE650BTNC_Product Image_Folded_Black.webp",
		old_price: "400",
		curr_price: "300",
	},
	{
		name: "JBL JR 310BT",
		image1: "../images/JBL_JR 310BT_Product Image_Hero_Skyblue.png",
		image2: "../images/JBL_JR 310BT_Product Image_Detail_Skyblue.png",
		old_price: "400",
		curr_price: "300",
	},
	{
		name: "JBL TUNE 750BTNC",
		image1: "../images/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png",
		image2: "../images/JBL_E55BT_KEY_RED_6063_FS_x1-1605x1605px.webp",
		old_price: "400",
		curr_price: "300",
	},
	{
		name: "JBL Horizon",
		image1: "../images/JBLHorizon_001_dvHAMaster.png",
		image2: "../images/JBLHorizon_BLK_002_dvHAMaster.webp",
		old_price: "400",
		curr_price: "300",
	},
	{
		name: "JBL Tune 220TWS",
		image1: "../images/JBL_TUNE220TWS_ProductImage_Pink_ChargingCaseOpen.png",
		image2: "../images/JBL_TUNE220TWS_ProductImage_Pink_Back.png",
		old_price: "400",
		curr_price: "300",
	},
	{
		name: "UA Project Rock",
		image1: "../images/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_HERO.png",
		image2: "../images/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_BACK.png",
		old_price: "400",
		curr_price: "300",
	},
];

let product_list = document.querySelector("#related-products");

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
