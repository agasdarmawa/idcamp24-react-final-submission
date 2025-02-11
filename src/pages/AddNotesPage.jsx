import AddNoteForm from "../components/AddNoteForm";
import AppLayout from "../layout/AppLayout";
import { useAuthedUser } from "../hooks/useAuthedUser";

function AddNotesPage() {
	return (
		<>
			<AppLayout>
				<AddNoteForm />
			</AppLayout>
		</>
	);
}

export default AddNotesPage;
