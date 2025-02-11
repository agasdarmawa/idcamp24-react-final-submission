import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
	archiveNote,
	deleteNote,
	getNote,
	unarchiveNote
} from "../utils/network-data";
import { showFormattedDate } from "../utils";
import LoaderSpinner from "../components/LoadingSpinner";
import AppLayout from "../layout/AppLayout";
import AppContext from "../contexts/AppContext";
import { detailNotePage } from "../utils/lang";
import LoadingButton from "../components/LoadingButton";

function DetailNotePage() {
	const { locale } = useContext(AppContext);
	const navigate = useNavigate();
	const [note, setNote] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [btnLoading, setBtnLoading] = useState(false);

	const { id } = useParams();

	useEffect(() => {
		const loadData = async () => {
			setIsLoading(true);
			try {
				const res = await getNote(id);
				setNote(res.data);
			} catch (err) {
				console.error(err);
			} finally {
				setIsLoading(false);
			}
		};

		loadData();
		return () => {
			setNote(null);
			setIsLoading(false);
		};
	}, [id]);

	async function handleDelete() {
		setBtnLoading(true);
		try {
			if (confirm(detailNotePage[locale].alertConfirmation)) {
				const res = await deleteNote(id);
				if (!res.error) {
					alert(detailNotePage[locale].alertMessage);
					navigate("/");
				}
			}
		} catch (err) {
			console.error(err);
		} finally {
			setBtnLoading(false);
		}
	}

	async function handleArchive() {
		setBtnLoading(true);
		try {
			if (note.archived) {
				await unarchiveNote(id);
			} else {
				await archiveNote(id);
			}
			navigate("/");
		} catch (err) {
			console.error(err);
		} finally {
			setBtnLoading(false);
		}
	}

	if (isLoading) {
		return <LoaderSpinner />;
	}

	return (
		<AppLayout>
			{note ? (
				<div className="content-container">
					<div className="detail-page">
						<h2 className="detail-page__title">{note.title}</h2>
						<p className="detail-page__createdAt">
							{showFormattedDate(note.createdAt, locale)}
						</p>
						<p className="detail-page__body">{note.body}</p>

						<div className="detail-page__btns">
							<button
								className="btn-delete"
								disabled={btnLoading}
								onClick={handleDelete}
							>
								{btnLoading && <LoadingButton />}
								{detailNotePage[locale].btnDelete}
							</button>
							<button
								className="btn-archive"
								disabled={btnLoading}
								onClick={handleArchive}
							>
								{btnLoading && <LoadingButton />}
								{note.archived
									? detailNotePage[locale].btnUnarchive
									: detailNotePage[locale].btnArchive}
							</button>
						</div>
					</div>
				</div>
			) : (
				<div className="note-detail-empty">
					<p>Detail catatan tidak ditemukan</p>
				</div>
			)}
		</AppLayout>
	);
}

export default DetailNotePage;
