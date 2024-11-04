// import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";

function Login() {
	// const [currentUser, setCurrentUser] = useState(false);
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const result = await login(username, password);
		if (result.success) {
			navigate("/");
		} else {
			setError(result.message);
		}
	};


	return (
		<div className="login-container">
			<h1>Login</h1>
			{ error && <p className="error-message">{error}</p> }
			

			<form className="user-input" onSubmit={handleSubmit}>
				<div>
					<label>Username:</label>
					<input
						type="text"
						placeholder="Philip Harris"
						id="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</div>
				<div className="user__input">
					<label>Email:</label>
					<input
						type="email"
						placeholder="someone@yale.com"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						/>
				</div>
				<div className="user__input">
					<label>Password:</label>
					<input
						type="password"
						placeholder="Password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<button type="submit">
					Login
				</button>
				<p className="register">
					Don't have an account? <a href="/register">Register</a>
				</p>
			</form>
		</div>
	);
}

export default Login;
