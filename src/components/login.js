import "../App.css";
// import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.xsrfHeaderName = "X-CSRFToken";
// axios.defaults.withCredentials = true;

function Login() {
	// const [currentUser, setCurrentUser] = useState(false);
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	return (
		<div className="center">
			<h1>Login</h1>
			<form onSubmit={() => navigate("/quiz")}>
				<div className="user__input">
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
				<button onClick={() => navigate("/quiz")}>Submit</button>
				<p className="register">
					Don't have an account? <a href="/register">Register</a>
				</p>
			</form>
		</div>
	);
}

export default Login;
