import { Link, useNavigate } from "react-router-dom";
import { useInput } from "../hooks/useInput";
import "../styles/form.css";
import { register } from "../utils/network-data";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { formsPage } from "../utils/lang";
import AppContext from "../contexts/AppContext";
import LoadingButton from "./LoadingButton";

function RegisterForm() {
	const { locale } = useContext(AppContext);
	const navigate = useNavigate();

	const [name, onNameChange] = useInput("");
	const [email, onEmailChange] = useInput("");
	const [password, onPasswordChange] = useInput("");
	const [confirmPassword, onConfirmPasswordChange] = useInput("");
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const message = formsPage[locale].register.alertMessage;

	async function handleSubmit(event) {
		event.preventDefault();
		setIsLoading(true);
		try {
			if (password !== confirmPassword) {
				alert(formsPage[locale].register.alertConfirmPass);
				return;
			}

			const res = await register({ name, email, password });

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
				<h2>{formsPage[locale].register.heading}</h2>
				<p>{formsPage[locale].register.description}</p>
				<form onSubmit={handleSubmit} className="form-wrapper">
					<div>
						<label htmlFor="name">Name</label>
						<input
							type="text"
							id="name"
							placeholder="Name"
							value={name}
							onChange={onNameChange}
						/>
					</div>
					<div>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							placeholder="Email"
							value={email}
							onChange={onEmailChange}
						/>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input
							type={showPassword ? "text" : "password"}
							placeholder="Password"
							id="password"
							minLength="6"
							autoComplete="current-password"
							value={password}
							onChange={onPasswordChange}
						/>
						<div onClick={() => setShowPassword((prevType) => !prevType)}>
							{showPassword ? (
								<FaEyeSlash className="icon-pass" />
							) : (
								<FaEye className="icon-pass" />
							)}
						</div>
					</div>
					<div>
						<label htmlFor="confirmPassword">Confirm Password</label>
						<input
							type={showConfirmPassword ? "text" : "password"}
							placeholder="Confirmation Password"
							id="confirmPassword"
							minLength="6"
							autoComplete="current-password"
							value={confirmPassword}
							onChange={onConfirmPasswordChange}
						/>
						<div
							onClick={() => setShowConfirmPassword((prevType) => !prevType)}
						>
							{showConfirmPassword ? (
								<FaEyeSlash className="icon-pass" />
							) : (
								<FaEye className="icon-pass" />
							)}
						</div>
					</div>
					<button disabled={isLoading} type="submit">
						{isLoading && <LoadingButton />}
						Register
					</button>
					<p>
						{formsPage[locale].register.infoText}?{" "}
						<Link to="/">{formsPage[locale].register.ctaText}</Link>{" "}
					</p>
				</form>
			</div>
		</section>
	);
}

export default RegisterForm;
