import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { MobileContextProvider } from "./store/context/Mobile";
import moment from "moment-timezone";
import "moment/locale/vi";

// Thiết lập ngôn ngữ tiếng Việt cho Moment.js
moment.locale("vi");
// Thiết lập timezone cho Việt Nam
moment.tz.setDefault("Asia/Ho_Chi_Minh");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<React.StrictMode>
			<HelmetProvider>
				<MobileContextProvider>
					<ThemeProvider theme={theme}>
						<App />
					</ThemeProvider>
				</MobileContextProvider>
			</HelmetProvider>
		</React.StrictMode>
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
