import { useNavigate } from "react-router-dom";
import { useInput } from "../hooks/useInput";
import "../styles/form.css";
import { useContext, useState } from "react";
import { addNotePage } from "../utils/lang";
import AppContext from "../contexts/AppContext";
import { addNote } from "../utils/network-data";
import LoadingButton from "./LoadingButton";

function AddNoteForm() {
	const { locale } = useContext(AppContext);
	const navigate = useNavigate();

	const [isLoading, setIsLoading] = useState(false);
	const [title, onTitleChange] = useInput("");
	const [body, onBodyChange] = useInput("");

	const message = addNotePage[locale].alertMessage;

	async function handleSubmit(event) {
		event.preventDefault();

		setIsLoading(true);
		try {
			const res = await addNote({ title, body });
			if (!res.error) {
				alert(message);
				navigate("/");
			}
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<section className="wrapper-form">
			<div className="ctn-box-forms">
				<h2>{addNotePage[locale].heading}</h2>
				<p>{addNotePage[locale].description}</p>
				<form onSubmit={handleSubmit} className="form-wrapper">
					<div>
						<label htmlFor="title">Title</label>
						<input
							type="text"
							id="title"
							placeholder="Title"
							value={title}
							onChange={onTitleChange}
						/>
					</div>
					<div>
						<label htmlFor="body">Body</label>
						<textarea
							id="body"
							rows="8"
							placeholder="Body"
							value={body}
							onChange={onBodyChange}
						></textarea>
					</div>

					<button disabled={isLoading} type="submit">
						{isLoading && <LoadingButton />}
						Submit
					</button>
				</form>
			</div>
		</section>
	);
}

export default AddNoteForm;
