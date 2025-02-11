import PropTypes from "prop-types";
import { useInput } from "../hooks/useInput";
import "../styles/form.css";
import { useSearchParams } from "react-router-dom";
import { searchInput } from "../utils/lang";

function SearchBar({ onSearch, locale, keyword }) {
	const [_, setSearchParams] = useSearchParams();

	const [search, onSearchChange] = useInput("");

	function changeSearchParams(keyword) {
		setSearchParams({ keyword });
		onSearch(keyword);
	}

	function inputHandler(event) {
		const { value } = event.target;

		onSearchChange(event);
		changeSearchParams(value);
	}

	return (
		<div className="search-bar">
			<input
				type="text"
				value={search || keyword}
				placeholder={searchInput[locale].placeholder}
				onChange={inputHandler}
			/>
		</div>
	);
}

SearchBar.propTypes = {
	onSearch: PropTypes.func.isRequired,
	locale: PropTypes.string.isRequired,
	keyword: PropTypes.string.isRequired
};

export default SearchBar;
