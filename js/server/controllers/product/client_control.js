import { products } from "../../data/product_data.js";
import { removeBuying } from "./server_control.js";

export const renderNode = (data) => {
	const rootElem = document.querySelector(".cart-content");
	console.log(rootElem);
	// console.log(data);
	if (!data || data.length < 0) return;
	data.forEach((item) => {
		console.log(item);
		console.log("Succesfully fetch");
		const productElem = document.createElement("div");
		productElem.className = "cart-box";
		const deleteItem = document.createElement("i");
		deleteItem.className = "bx bxs-trash";
		deleteItem.addEventListener("click", () => {
			productElem.remove();
			removeBuying(item.id);
		});
		productElem.innerHTML += `
								<img
									src="${item.image1}"
									alt=""
								/>
								<div class="cart-text">
									<h3>${item.name}</h3>
									<span>$${item.curr_price}</span>
									<span>x1</span>
								</div>
                `;
		productElem.prepend(deleteItem);

		rootElem.insertAdjacentHTML("afterbegin", productElem.innerHTML);
	});
};

export const renderProducts = () => {
	const parentNode = document.querySelector(".product-cart-info");
	products.map((item) => {
		const addBtnHandler = () => {
			console.log("Pressed");
			alert(item.name);
		};
		const controllers = document.createElement("div");
		controllers.className = "product-btn";
		const shopNowBtn = document.createElement("button");
		shopNowBtn.innerText = "Shop ";
		const addBtn = document.createElement("button");
		addBtn.innerHTML = `<i class='bx bxs-cart-add'></i>`;
		addBtn.classList.add("btn-flat");
		addBtn.classList.add("btn-hover");
		addBtn.classList.add("btn-cart-add");
		addBtn.addEventListener("click", addBtnHandler);
		const favBtn = document.createElement("button");
		favBtn.innerHTML = `<i class='bx bxs-heart'></i>`;
		controllers.appendChild(shopNowBtn);
		controllers.appendChild(addBtn);
		controllers.appendChild(favBtn);
		const cardName = document.createElement("div");
		cardName.className = "product-card-name";
		cardName.innerText = item.name + "ajosdnaksjdnaksj nfadskjfnaskjdf n";
		const cardPrice = document.createElement("div");
		cardPrice.className = "product-card-price";
		cardPrice.innerHTML = `
			                    <span><del>$${item.old_price}</del></span>
                                <span class="curr-price">$${item.curr_price}</span>
		`;
		parentNode?.appendChild(controllers);
		parentNode?.appendChild(cardName);
		parentNode?.appendChild(cardPrice);
	});
};
