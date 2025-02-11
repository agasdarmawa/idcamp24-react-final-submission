import { useEffect, useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AppContext from "./contexts/AppContext";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import NotFoundPage from "./pages/NotFoundPage";
import RegisterForm from "./components/RegisterForm";
import AddNotesPage from "./pages/AddNotesPage";
import ArchivedNotesPage from "./pages/ArchivedNotesPage";
import DetailNotePage from "./pages/DetailNotePage";

function App() {
	const [locale, setLocale] = useState(() => {
		return localStorage.getItem("locale") || "id";
	});
	const [theme, setTheme] = useState(() => {
		return localStorage.getItem("theme") || "light";
	});

	const toggleLocale = () => {
		setLocale((prevLocale) => {
			return prevLocale === "id" ? "en" : "id";
		});
		localStorage.setItem("locale", locale);
	};

	const toggleTheme = () => {
		setTheme((prevTheme) => {
			return prevTheme === "light" ? "dark" : "light";
		});
		localStorage.setItem("theme", theme);
	};

	useEffect(() => {
		localStorage.setItem("locale", locale);
	}, [locale]);

	useEffect(() => {
		localStorage.setItem("theme", theme);
		document.documentElement.setAttribute("data-theme", theme);
	}, [theme]);

	const appContextValue = useMemo(() => {
		return {
			locale,
			toggleLocale,
			theme,
			toggleTheme
		};
	}, [locale, theme]);

	return (
		<>
			<AppContext.Provider value={appContextValue}>
				<Navbar />
				<main>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/register" element={<RegisterForm />} />
						<Route path="/notes/new" element={<AddNotesPage />} />
						<Route path="/notes/:id" element={<DetailNotePage />} />
						<Route path="/archives" element={<ArchivedNotesPage />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</main>
			</AppContext.Provider>
		</>
	);
}

export default App;
