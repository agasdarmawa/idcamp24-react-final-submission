import { Link } from "react-router-dom";
import { NoteItemProps, showFormattedDate } from "../utils";
import { useContext } from "react";
import AppContext from "../contexts/AppContext";
import { notesPage } from "../utils/lang";

function NoteItem({ id, title, body, archived, createdAt }) {
	const { locale } = useContext(AppContext);
	const formattedDate = showFormattedDate(createdAt, locale);

	return (
		<div className="note-item">
			<div className="note-item__content">
				<h2 className="note-item__title">{title}</h2>
				<h6 className="note-item__createdAt">{formattedDate}</h6>
				<p className="note-item__body">{body}</p>
			</div>
			<div className="note-item__action">
				<Link to={`/notes/${id}`}>
					<button>{notesPage[locale].btnText}</button>
				</Link>
			</div>
		</div>
	);
}

NoteItem.propTypes = NoteItemProps;

export default NoteItem;
