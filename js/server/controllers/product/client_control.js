import { products } from "../../data/product_data.js";
import { removeBuying } from "./server_control.js";

export const renderNode = (data) => {
	const rootElem = document.querySelector(".cart-content");
	if (!data || data.length < 0) return;
	data.reduceRight((_, item) => {
		const deleteItemHandler = () => {
			productElem.remove();
			removeBuying(item.id);
			numberElement.innerHTML = `${data.length - 1} Items`;
			totalElement.innerHTML = `Total:$${sum - item.curr_price};`;
		};
		const productElem = document.createElement("div");
		productElem.className = "cart-box";
		const deleteItem = document.createElement("i");
		deleteItem.className = "bx bxs-trash";
		deleteItem.onclick = deleteItemHandler;
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

		productElem.appendChild(deleteItem);

		rootElem.prepend(productElem);
	}, null);
	const numberElement = document.querySelector("#js-control-statistic>h3");
	const totalElement = document.querySelector("#js-control-statistic>span");
	const sum = data.reduce((currentValue, currentItem) => {
		return currentValue + Number(currentItem.curr_price);
	}, 0);
	numberElement.innerHTML = `${data.length} Items`;
	totalElement.innerHTML = `Total:$${sum};`;
};
