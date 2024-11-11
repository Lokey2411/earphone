import { useEffect, useState } from "react";
export const useComponentWidth = (id) => {
	const [componentWidth, setComponentWidth] = useState(0);

	useEffect(() => {
		const element = document.getElementById(id);

		const updateWidth = () => {
			if (element) {
				setComponentWidth(element.clientWidth);
			}
		};

		if (element && element.complete) {
			updateWidth();
		} else if (element) {
			element.addEventListener("load", updateWidth);
		}

		const resizeObserver = new ResizeObserver((entries) => {
			for (let entry of entries) {
				setComponentWidth(entry.contentRect.width);
			}
		});

		if (element) {
			resizeObserver.observe(element);
		}

		return () => {
			if (element) {
				element.removeEventListener("load", updateWidth);
				resizeObserver.unobserve(element);
			}
		};
	}, [id]);

	return componentWidth;
};
