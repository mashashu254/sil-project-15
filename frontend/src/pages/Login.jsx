// import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.xsrfHeaderName = "X-CSRFToken";
// axios.defaults.withCredentials = true;

function Login() {
	// const [currentUser, setCurrentUser] = useState(false);
	const location = useLocation();
	const message = location.state?.message;
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	return (
		<div className="login-container">
			<h1>Login</h1>
			{ message && <p className="info-message">{message}</p> }

			<form className="user-input" onSubmit={() => navigate("/intro")}>
				<div>
					<label>Username:</label>
					<input
						type="text"
						id="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div className="user__input">
					<label>Email:</label>
					<input
						type="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="user__input">
					<label>Password:</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button onClick={() => navigate("/survey")}>Submit</button>
				<p className="register">
					Don't have an account? <a href="/register">Register</a>
				</p>
			</form>
		</div>
	);
}

export default Login;
