const mockUsers = [
	{
		username: 'Lee',
		email: 'lee@yale.com',
		password: 'lee123',
	},
	{
		username: 'Karen',
		email: 'karen@yale.com',
		password: 'karen123',
	},
];

const generateToken = (user) => {
	return btoa(
		JSON.stringify({
			id: user.username,
			email: user.email,
		})
	);
};

export const login = (username, password) => {
	const user = mockUsers.find((u) => u.username === username && u.password === password);
	if (user) {
		const token = generateToken(user);
		localStorage.setItem('token', token);
		return {
			success: true,
			token,
		};
	}
	return {
		success: false,
		message: 'Sorry! Invalid credentials.',
	};
};

export const register = (username, email, password) => {
	if (mockUsers.find((u) => u.username === username || u.email === email)) {
		return {
			success: false,
			message: 'Username or email already exists'
		};
	}
	const newUser = { username, email, password };
	mockUsers.push(newUser);
	const token = generateToken(newUser);
	localStorage.setItem('token', token);
	return { success: true, token };
};

export const logout = () => {
	localStorage.removeItem('token');
};

export const isAuthenticated = () => {
	const token = localStorage.getItem('token');
	return !!token;
};

export const getUser = () => {
	const token = localStorage.getItem('token');
	if (token) {
		return JSON.parse(atob(token));
	}
	return null;
};