import { renderNode } from "./server/controllers/product/client_control.js";
import { addBuyingList, createProduct, fetchProductData } from "./server/controllers/product/server_control.js";
import { products } from "./server/data/product_data.js";

let slide_index = 0;
let slide_play = true;
let slides = document.querySelectorAll(".slide");

const hideAllSlide = () => {
	slides.forEach((e) => {
		e.classList.remove("active");
	});
};

const showSlide = () => {
	hideAllSlide();
	slides[slide_index]?.classList.add("active");
};

const nextSlide = () => (slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1);

const prevSlide = () => (slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1);

// pause slide when hover slider

document.querySelector(".slider")?.addEventListener("mouseover", () => (slide_play = false));

// enable slide when mouse leave out slider
document.querySelector(".slider")?.addEventListener("mouseleave", () => (slide_play = true));

// slider controll

document.querySelector(".slide-next")?.addEventListener("click", () => {
	nextSlide();
	showSlide();
});

document.querySelector(".slide-prev")?.addEventListener("click", () => {
	prevSlide();
	showSlide();
});

showSlide();

// setInterval(() => {
//     if (!slide_play) return
//     nextSlide()
//     showSlide()
// }, 3000);

// render products

let product_list = document.querySelector("#latest-products");
let best_product_list = document.querySelector("#best-products");

products.map((e) => {
	const addBtnHandler = () => {
		// alert("pressed");
		addBuyingList(e.id);
	};
	let prod = `
        <div class="col-3 col-md-6 col-sm-12">
            <div class="product-card">
                <div class="product-card-img">
                    <img src="${e.image1}" alt="">
                    <img src="${e.image2}" alt="">
                </div>
                <div class="product-card-info">
                    <div class="product-btn">
                        <button class="btn-flat btn-hover btn-shop-now">shop now</button>
                        <button class="btn-flat btn-hover btn-cart-add js-add-btn-${e.id}" >
                            <i class='bx bxs-cart-add'></i>
                        </button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-heart'></i>
                        </button>
                    </div>
                    <div class="product-card-name">
                        ${e.name}
                    </div>
                    <div class="product-card-price">
                        <span><del>$${e.old_price}</del></span>
                        <span class="curr-price">$${e.curr_price}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
	product_list?.insertAdjacentHTML("beforeend", prod);
	best_product_list?.insertAdjacentHTML("afterbegin", prod);
	const thisItem = document.getElementsByClassName(`js-add-btn-${e.id}`)[0];
	// console.log(thisItem);
	thisItem?.addEventListener("click", addBtnHandler);
	// item.parentElement.click();
});
// add

//cart
let cart = document.querySelector(".cart");
document.querySelector("#cart-icon").onclick = () => {
	cart?.classList.toggle("active");
	// login?.classList.remove("active");
};

createProduct();
// renderProducts();
renderNode(await fetchProductData().catch(console.log));
