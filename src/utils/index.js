import PropTypes from "prop-types";

const NoteItemProps = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	archived: PropTypes.bool.isRequired,
	createdAt: PropTypes.string.isRequired
};

const ArrayNoteItemProps = PropTypes.arrayOf(
	PropTypes.shape(NoteItemProps)
).isRequired;

const showFormattedDate = (date, locale = "id") => {
	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric"
	};

	const dateLocale = locale === "id" ? "id-ID" : "en-EN";

	return new Date(date).toLocaleDateString(dateLocale, options);
};

export { showFormattedDate, NoteItemProps, ArrayNoteItemProps };
