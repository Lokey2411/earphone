import { useLocation } from "react-router-dom";
import { getRouteName } from "../functions/controller";
import { useData } from "./useData";

export const useAbouts = () => {
	const location = useLocation();
	const routeName = getRouteName(location.pathname);
	const [abouts, refetch, isLoading] = useData("abouts/search/parent?parent=" + routeName);
	return [abouts, refetch, isLoading];
};
