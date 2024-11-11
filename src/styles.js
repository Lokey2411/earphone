import { keyframes } from "@mui/material/styles";
export const color = {
	primary: "#006241",
	blue: "rgb(96 165 250)",
};

export const RESPONSIVE_MOBILE = "@media (max-width: 768px)";
export const RESPONSIVE_DESKTOP = "@media (min-width: 1024px)";
export const RESPONSIVE_TABLET = "@media (min-width: 768px) and (max-width: 1024px)";

const slideIn = keyframes({
	from: {
		opacity: "0",
		transform: "translateX(-100%)",
	},
	to: {
		opacity: "1",
		transform: "translateX(0%)",
	},
});

const swipeIn = keyframes({
	from: {
		opacity: "0",
		transform: "translateX(100%)",
	},
	to: {
		opacity: "1",
		transform: "translateX(0%)",
	},
});

const flyIn = keyframes({
	from: {
		opacity: "0",
		transform: "translateY(100%)",
	},
	to: {
		opacity: "1",
		transform: "translateY(0%)",
	},
});

const floatIn = keyframes({
	from: {
		opacity: "0",
		transform: "translateY(-100%)",
	},
	to: {
		opacity: "1",
		transform: "translateY(0%)",
	},
});

export const appKeyFrames = {
	slideIn,
	swipeIn,
	flyIn,
	floatIn,
};

export const styles = {
	backgroundColor: {
		mauTrang: { backgroundColor: "#FFFFFF" },
		mauTra: {
			backgroundColor: "#F3F1EC",
		},
		xamdad8d4: {
			backgroundColor: "#dad8d4",
		},
		xamF2F2F2: { backgroundColor: "#F2F2F2;" },
		xanh083A1D: { backgroundColor: "#083A1D" },
		xanh00754A: { backgroundColor: "#00754A" },
		xamF5F5F7: { backgroundColor: "#F5F5F7" },
		xanhlacay06542D: { backgroundColor: "#06542D" },
		xamE6E6E6: { backgroundColor: "#E6E6E6;" },
		nau3A271B: { backgroundColor: "#3A271B" },
		xamD9: { backgroundColor: "#D9D9D9" },
		xamE4E3E1: { backgroundColor: "#E4E3E1" },
		xamF7: { backgroundColor: "#F7F7F7" },
		xanhNhat006241: { backgroundColor: color.primary },
	},
	fontColor: {
		xanh00754A: { color: "#00754A" },
		mauTrang: {
			color: "#FFFFFF",
		},
		xanhNhat006241: { color: color.primary },
		vangE0CB88: { color: "#E0CB88" },
		xam666666: { color: "#666666" },
		xam808080: { color: "#808080" },
	},
	centerFlex: {
		display: "flex",
		alignItems: "center",
	},
	fontSize13: { fontSize: "13px", fontFamily: `"Inter"` },
	pad20: { padding: "0px 24px" },
	heading: {
		1: {
			fontSize: "40px",
			[RESPONSIVE_TABLET]: {
				fontSize: "32px",
			},
			[RESPONSIVE_MOBILE]: {
				fontSize: "24px",
			},
		},
		1.5: {
			fontSize: "36px",
			[RESPONSIVE_TABLET]: {
				fontSize: "28px",
			},
			[RESPONSIVE_MOBILE]: {
				fontSize: "20px",
			},
		},
		2: {
			fontSize: "32px",
			[RESPONSIVE_TABLET]: {
				fontSize: "24px",
			},
			[RESPONSIVE_MOBILE]: {
				fontSize: "18px",
			},
		},
		3: {
			fontSize: "24px",
			[RESPONSIVE_TABLET]: {
				fontSize: "18px",
			},
			[RESPONSIVE_MOBILE]: {
				fontSize: "14px",
			},
		},
		4: {
			fontSize: "16px",
			[RESPONSIVE_TABLET]: {
				fontSize: "14px",
			},
			[RESPONSIVE_MOBILE]: {
				fontSize: "12px",
			},
		},
	},
	displayInDesktop: {
		display: "none",
		[RESPONSIVE_DESKTOP]: {
			display: "flex",
		},
	},
	hideInDesktop: {
		display: "flex",
		[RESPONSIVE_DESKTOP]: {
			display: "none",
		},
	},
};
