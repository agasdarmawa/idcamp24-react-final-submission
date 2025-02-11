import { useNavigate } from "react-router-dom";
import { errorPage } from "../utils/lang";
import { useContext } from "react";
import AppContext from "../contexts/AppContext";

function NotFoundPage() {
	const { locale } = useContext(AppContext);
	const navigate = useNavigate();

	function redirectPage() {
		navigate("/");
	}

	return (
		<div className="not-found">
			<img src="/404.png" alt="404 Not Found" />
			<h2>{errorPage[locale].message}</h2>
			<button onClick={redirectPage}>{errorPage[locale].btnText}</button>
		</div>
	);
}

export default NotFoundPage;
