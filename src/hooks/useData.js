import { useEffect, useState } from "react";
import { getData } from "../api/get";
import { useQuery } from "@tanstack/react-query";

export const useData = (link) => {
	const [isLoading, setIsLoading] = useState(true);
	const { data, refetch } = useQuery({
		queryKey: [link],
		queryFn: async () => {
			return getData(link)
				.catch(console.log)
				.finally(() => {
					setIsLoading(false);
				});
		},
		options: {
			staleTime: 1000 * 60 * 5, // 5 phút
			refetchInterval: 1000 * 60 * 1, // 1p
		},
	});
	return [data, refetch, isLoading];
};
