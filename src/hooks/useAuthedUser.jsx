import { useEffect, useState } from "react";
import { getAccessToken, getUserLogged } from "../utils/network-data";

function useAuthedUser() {
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const accessToken = getAccessToken();

	useEffect(() => {
		const loadData = async () => {
			try {
				const res = await getUserLogged();
				setUser(res.data);
			} catch (error) {
				console.error(error);
			} finally {
				setIsLoading(false);
			}
		};

		loadData();

		return () => {
			setUser(null);
		};
	}, [accessToken]);

	return { user, isLoading };
}

export { useAuthedUser };
