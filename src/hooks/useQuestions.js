import { useLocation } from "react-router-dom";
import { getRouteName } from "../functions/controller";
import { useData } from "./useData";

export const useQuestions = () => {
	const location = useLocation();
	const routeName = getRouteName(location.pathname);
	const [questions, refetch] = useData("questions/search/type?type=" + routeName);
	return [questions, refetch];
};
