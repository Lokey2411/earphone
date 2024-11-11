export const createPage = (data, firstItemIndex, numItem = 10) => {
	let result = [];

	// Chặn firstItemIndex dưới 0
	if (firstItemIndex < 0) {
		firstItemIndex = 0;
	}

	// Chặn firstItemIndex vượt quá độ dài của mảng
	if (firstItemIndex >= data.length) {
		return result;
	}

	const finalIndex = Math.min(firstItemIndex + numItem, data.length);
	for (let i = firstItemIndex; i < finalIndex; i++) {
		result.push(data[i]);
	}
	return result;
};

export const getRouteName = (pathname) => {
	let parts = pathname.split("/");
	if (!parts[parts.length - 1]) parts.pop();
	// eslint-disable-next-line no-unused-vars
	const [_, ...routeName] = parts;
	return routeName.join("/");
};

// Hàm để giải mã HTML
function decodeHtml(html) {
	var txt = document.createElement("textarea");
	txt.innerHTML = html;
	return txt.value;
}

export const HtmlContent = ({ encodedHtml }) => {
	return <div dangerouslySetInnerHTML={{ __html: decodeHtml(encodedHtml) }} />;
};
const getRandomItem = (array) => {
	const index = Math.floor(Math.random() * array.length);
	var item = array[index];
	return { item, index };
};

export const getRandomSubItem = (array, numItem) => {
	if (!array) return [];
	let indexes = [];
	let result = [];
	if (array.length < numItem) return array; //if this mother fucker array is less than numItem item, return it
	for (let i = 0; i < numItem; i++) {
		const item = getRandomItem(array);
		if (!indexes.includes(item.index)) {
			// handle if this mother fucker item not added
			result.push(item.item);
			indexes.push(item.index);
		} else {
			// handle if this mother fucker item is added
			i--;
		}
	}
	return result;
};

export const formatCurrency = (value) => {
	return new Intl.NumberFormat("vi-VN", {
		style: "currency",
		currency: "VND",
	}).format(value);
};

export function convertToSlug(text) {
	return text
		.toLowerCase()
		.replace(/ /g, "-")
		.replace(/[áàảãạâấầẩẫậăắằẳẵặ]/g, "a")
		.replace(/[éèẻẽẹêếềểễệ]/g, "e")
		.replace(/[íìỉĩị]/g, "i")
		.replace(/[óòỏõọôốồổỗộơớờởỡợ]/g, "o")
		.replace(/[úùủũụưứừửữự]/g, "u")
		.replace(/[ýỳỷỹỵ]/g, "y")
		.replace(/[đ]/g, "d")
		.replace(/[^a-z0-9-]/g, "");
}
export function convertHtmlToTiengViet(text) {
	return text
		?.replace(/(<([^>]+)>)/gi, "")
		.replace(/&agrave;/gi, "à")
		.replace(/&aacute;/gi, "á")
		.replace(/&acirc;/gi, "â")
		.replace(/&atilde;/gi, "ã")
		.replace(/&egrave;/gi, "è")
		.replace(/&eacute;/gi, "é")
		.replace(/&ecirc;/gi, "ê")
		.replace(/&igrave;/gi, "ì")
		.replace(/&iacute;/gi, "í")
		.replace(/&ograve;/gi, "ò")
		.replace(/&oacute;/gi, "ó")
		.replace(/&ocirc;/gi, "ô")
		.replace(/&otilde;/gi, "õ")
		.replace(/&ugrave;/gi, "ù")
		.replace(/&uacute;/gi, "ú")
		.replace(/&yacute;/gi, "ý")
		.replace(/&Agrave;/gi, "À")
		.replace(/&Aacute;/gi, "Á")
		.replace(/&Acirc;/gi, "Â")
		.replace(/&Atilde;/gi, "Ã")
		.replace(/&Egrave;/gi, "È")
		.replace(/&Eacute;/gi, "É")
		.replace(/&Ecirc;/gi, "Ê")
		.replace(/&Igrave;/gi, "Ì")
		.replace(/&Iacute;/gi, "Í")
		.replace(/&Ograve;/gi, "Ò")
		.replace(/&Oacute;/gi, "Ó")
		.replace(/&Ocirc;/gi, "Ô")
		.replace(/&Otilde;/gi, "Õ")
		.replace(/&Ugrave;/gi, "Ù")
		.replace(/&Uacute;/gi, "Ú")
		.replace(/&Yacute;/gi, "Ý")
		.replace(/&amp;/gi, "&")
		.replace(/&nbsp;/gi, " ");
}
export const validateEmail = (email) => {
	var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	return validRegex.test(email);
};

export function validatePhoneNumber(number) {
	return /((^(\+84|84|0|0084){1})(3|5|7|8|9))+([0-9]{8})$/.test(number);
}

export function cocktailSort(a, callback) {
	if (!a) return [];
	let swapped = true;
	let start = 0;
	let end = a.length;
	while (swapped) {
		// reset the swapped flag on entering the
		// loop, because it might be true from a
		// previous iteration.
		swapped = false;

		// loop from bottom to top same as
		// the bubble sort
		for (let i = start; i < end - 1; ++i) {
			if (callback(a[i], a[i + 1], i) > 0) {
				let temp = a[i];
				a[i] = a[i + 1];
				a[i + 1] = temp;
				swapped = true;
			}
		}

		// if nothing moved, then array is sorted.
		if (!swapped) break;

		// otherwise, reset the swapped flag so that it
		// can be used in the next stage
		swapped = false;

		// move the end point back by one, because
		// item at the end is in its rightful spot
		end = end - 1;

		// from top to bottom, doing the
		// same comparison as in the previous stage
		for (let i = end - 1; i >= start; i--) {
			if (callback(a[i], a[i + 1], i) > 0) {
				let temp = a[i];
				a[i] = a[i + 1];
				a[i + 1] = temp;
				swapped = true;
			}
		}

		// increase the starting point, because
		// the last stage would have moved the next
		// smallest number to its rightful spot.
		start = start + 1;
	}
	return a;
}

export const env = (key) => {
	return process.env[`REACT_APP_${key}`];
};

export const downloadImages = () => {
	var link = document.createElement("a");
	link.href = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
	link.download = "file.pdf";
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
};

export const removeLastChar = (str) => {
	return (str = str.slice(0, -1));
};
