// import axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.xsrfHeaderName = "X-CSRFToken";
// axios.defaults.withCredentials = true;

function Register() {
	// const [currentUser, setCurrentUser] = useState(false);
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	return (
		<div className="register-container">
			<h1>Register</h1>
			<form className='user-input' onSubmit={() => navigate('/intro')}>
				<div>
					<label>Username:</label>
					<input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
				</div>
				<div>
					<label>Email:</label>
					<input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
				</div>
				<div>
					<label>Password:</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button onClick={() => navigate('/survey')}>Submit</button>
				<p className="login">
					Already have an account? <a href="/login">Login</a>
				</p>
			</form>
		</div>
	);
}

export default Register;
