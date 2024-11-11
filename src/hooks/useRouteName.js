import { useLocation } from "react-router-dom";
import { getRouteName } from "../functions/controller";

export const useRouteName = () => {
	const location = useLocation();
	return getRouteName(location.pathname);
};
