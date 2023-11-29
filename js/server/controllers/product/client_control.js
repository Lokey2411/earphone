import { products } from "../../data/product_data.js";
import { removeBuying } from "./server_control.js";

export const renderNode = (data) => {
	const rootElem = document.querySelector(".cart-content");
	if (!data || data.length < 0) return;
	data.forEach((item) => {
		const deleteItemHandler = () => {
			productElem.remove();
			removeBuying(item.id);
		};
		const productElem = document.createElement("div");
		productElem.className = "cart-box";

		productElem.innerHTML += `
								<img
									src="${item.image1}"
									alt=""
									style="width: 100px; height: 100px;"
								/>
								<div class="cart-text">
									<h3>${item.name}</h3>
									<span>$${item.curr_price}</span>
									<span>x1</span>
								</div>
                `;
		const deleteItem = document.createElement("i");
		deleteItem.className = "bx bxs-trash";
		deleteItem.onclick = deleteItemHandler;
		productElem.prepend(deleteItem);

		rootElem.prepend(productElem);
	});
};
