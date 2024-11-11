/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: "tw-",
	content: ["./src/**/*.{html,js,jsx, }"],
	theme: {
		extend: {
			colors: {
				primary: "#006241",
				gray50: "#E4E3E5",
				beige: "#DEB887",
			},
			screens: {
				sm: "300px",
				md: "768px",
				lg: "1024px",
			},
			fontFamily: {
				Inter: "Inter",
				"Inter-Semibold": "Inter SemiBold",
				"Inter-Bold": "Inter Bold",
				"Inter-Extrabold": "Inter Extrabold",
			},
			animation: {
				"slide-in": "slide-in 0.5s ease-out",
				"slide-in": "slide-out 0.5s ease-out",
			},
			fontSize: (() => {
				// Tạo object tự động chứa các giá trị font-size từ 10px đến 50px
				const fontSizes = {};
				for (let i = 10; i <= 100; i++) {
					fontSizes[i] = `${i}px`;
				}
				return fontSizes;
			})(),
			keyframes: {
				"slide-in": {
					"0%": {
						opacity: 0,
						transform: "translateX(-50%)",
					},
					"100%": {
						opacity: 1,
						transform: "translateX(0)",
					},
				},
				"slide-out": {
					"0%": {
						opacity: 1,
						transform: "translateX(0)",
					},
					"100%": {
						opacity: 0,
						transform: "translateX(-100%)",
					},
				},
			},
			margin: {
				15: "60px",
			},
			padding: {
				15: "60px",
			},
		},
	},
	plugins: [],
};
