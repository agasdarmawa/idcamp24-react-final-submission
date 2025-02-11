import { Link, useNavigate } from "react-router-dom";
import { useInput } from "../hooks/useInput";
import "../styles/form.css";
import { login, putAccessToken } from "../utils/network-data";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useContext, useState } from "react";
import { formsPage } from "../utils/lang";
import AppContext from "../contexts/AppContext";
import LoadingButton from "./LoadingButton";

function LoginForm() {
	const { locale } = useContext(AppContext);
	const navigate = useNavigate();

	const [email, onEmailChange] = useInput("");
	const [password, onPasswordChange] = useInput("");
	const [showPassword, setShowPassword] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const message = formsPage[locale].login.alertMessage;

	async function handleSubmit(event) {
		event.preventDefault();
		setIsLoading(true);
		try {
			const res = await login({ email, password });

			if (!res.error) {
				// set access token
				alert(message);
				putAccessToken(res.data.accessToken);
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
				<h2>{formsPage[locale].login.heading}</h2>
				<p>{formsPage[locale].login.description}</p>
				<form onSubmit={handleSubmit} className="form-wrapper">
					<div>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							placeholder="Email"
							required
							value={email}
							onChange={onEmailChange}
						/>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input
							type={showPassword ? "text" : "password"}
							placeholder="Password"
							required
							id="password"
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
					<button disabled={isLoading} type="submit">
						{isLoading && <LoadingButton />}
						Login
					</button>
					<p>
						{formsPage[locale].login.infoText}?{" "}
						<Link to="/register">{formsPage[locale].login.ctaText}</Link>{" "}
					</p>
				</form>
			</div>
		</section>
	);
}

export default LoginForm;
