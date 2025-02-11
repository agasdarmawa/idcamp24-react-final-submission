import { Link, useNavigate } from "react-router-dom";
import AppContext from "../contexts/AppContext";
import { useContext } from "react";
import "../styles/navbar.css";
import { navigations } from "../utils/lang";
import { FaMoon, FaSun, FaLanguage } from "react-icons/fa6";
import { removeAccessToken } from "../utils/network-data";
import { useAuthedUser } from "../hooks/useAuthedUser";
import { FaSignOutAlt } from "react-icons/fa";

function Navbar() {
	const navigate = useNavigate();
	const { locale, toggleLocale, theme, toggleTheme } = useContext(AppContext);
	const { user } = useAuthedUser();

	function handleLogout() {
		if (confirm(navigations[locale].alertConfirmation)) {
			alert(navigations[locale].alertMessage);
			removeAccessToken();
			navigate("/");
		}
	}

	return (
		<nav>
			<div className="content-container nav-wrapper">
				<Link to="/">
					<h2>{navigations[locale].appName}</h2>
				</Link>
				<div>
					<ul>
						<li>
							<Link to="/">{navigations[locale].home}</Link>
						</li>
						<li>
							<Link to="/archives">{navigations[locale].archives}</Link>
						</li>
						<li>
							<Link to="/notes/new">{navigations[locale].btnAddNote}</Link>
						</li>
					</ul>
				</div>
				<div>
					<ul>
						<li>
							<div onClick={toggleTheme} className="menu-toggle">
								{theme === "light" ? <FaMoon /> : <FaSun />}
							</div>
						</li>
						<li>
							<div onClick={toggleLocale} className="locale-toggle">
								<FaLanguage className="icon-lang" />{" "}
								{locale === "id" ? "ID" : "EN"}
							</div>
						</li>
						<li>
							<div className="menu-profile">
								{user && (
									<div className="profile-user">
										<h4>{user.name || "User"}</h4>
										<button onClick={handleLogout}>
											<FaSignOutAlt className="icon" />
											Logout
										</button>
									</div>
								)}
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
