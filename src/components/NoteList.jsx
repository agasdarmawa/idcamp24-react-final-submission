import { ArrayNoteItemProps } from "../utils";
import NoteItem from "./NoteItem";

function NoteList({ notes }) {
	return (
		<div className="notes-list">
			{notes.map((note) => (
				<NoteItem key={note.id} {...note} />
			))}
		</div>
	);
}

NoteList.propTypes = {
	notes: ArrayNoteItemProps
};

export default NoteList;
