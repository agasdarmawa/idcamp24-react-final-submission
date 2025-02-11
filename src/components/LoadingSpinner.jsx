import "../styles/loader.css";

function Loader() {
	return <span className="loader"></span>;
}

function LoaderSpinner() {
	return (
		<div className="content-loader">
			<Loader />
		</div>
	);
}

export default LoaderSpinner;
