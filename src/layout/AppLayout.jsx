import PropTypes from "prop-types";
import { useAuthedUser } from "../hooks/useAuthedUser";
import LoaderSpinner from "../components/LoadingSpinner";
import LoginForm from "../components/LoginForm";

function AppLayout({ children }) {
	const { user, isLoading } = useAuthedUser();

	if (isLoading) {
		return <LoaderSpinner />;
	}

	if (!user) {
		return <LoginForm />;
	}

	return <section>{children}</section>;
}

AppLayout.propTypes = {
	children: PropTypes.node.isRequired
};

export default AppLayout;
