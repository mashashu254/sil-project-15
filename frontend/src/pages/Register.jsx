// import axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/authService'


function Register() {
	// const [currentUser, setCurrentUser] = useState(false);
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const navigate = useNavigate();


	const handleSubmit = async (e) => {
		e.preventDefault();
		const result = await register(username, email, password);
		if(result.success) {
			navigate('/');
		} else {
			setError(result.message);
		}
	}

	return (
		<div className="register-container">
			<h1>Register</h1>
			{ error && <p className="error-message">{error}</p> }

			<form className='user-input' onSubmit={handleSubmit}>
				<div>
					<label>Username:</label>
					<input 
						type="text" 
						id="username" 
						value={username} 
						onChange={(e) => setUsername(e.target.value)} 
						required
					/>
				</div>
				<div>
					<label>Email:</label>
					<input 
						type="email" 
						id="email" 
						value={email} 
						onChange={(e) => setEmail(e.target.value)} 
					/>
				</div>
				<div>
					<label>Password:</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<button type="submit">
					Submit
				</button>
				<p className="login">
					Already have an account? <a href="/login">Login</a>
				</p>
			</form>
		</div>
	);
}

export default Register;
