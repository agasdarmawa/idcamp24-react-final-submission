import AppLayout from "../layout/AppLayout";
import SearchBar from "../components/SearchBar";
import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "../styles/card.css";
import NoteList from "../components/NoteList";
import AppContext from "../contexts/AppContext";
import { notesPage } from "../utils/lang";
import { getAccessToken, getArchivedNotes } from "../utils/network-data";

function ArchivedNotesPage() {
	const { locale } = useContext(AppContext);
	const [notes, setNotes] = useState([]);
	const [searchParams] = useSearchParams();
	const [filteredNotes, setFilteredNotes] = useState([]);
	const accessToken = getAccessToken();

	const keyword = searchParams.get("keyword") || "";

	useEffect(() => {
		const loadData = async () => {
			const res = await getArchivedNotes();
			setNotes(res.data);
		};

		loadData();
		return () => {};
	}, [accessToken]);

	useEffect(() => {
		handleFilter(keyword);
	}, [keyword, notes]);

	function handleFilter(keyword) {
		const filteredNotes = keyword
			? [...notes].filter((note) =>
					note.title.toLowerCase().includes(keyword.toLowerCase())
			  )
			: notes;
		setFilteredNotes(filteredNotes);
	}
	return (
		<>
			<AppLayout>
				<section className="content-container">
					<div className="header-search">
						<h2>{notesPage[locale].archive.heading}</h2>
						<SearchBar
							onSearch={handleFilter}
							locale={locale}
							keyword={keyword}
						/>
					</div>
					{Array.isArray(filteredNotes) && filteredNotes.length ? (
						<NoteList notes={filteredNotes} />
					) : (
						<div className="notes-list-empty">
							<p>{notesPage[locale].archive.emptyText}</p>
						</div>
					)}
				</section>
			</AppLayout>
		</>
	);
}

export default ArchivedNotesPage;
