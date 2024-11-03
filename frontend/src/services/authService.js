export const checkYaleAuthentication = async () => { 
	return new Promise((resolve) => {
		setTimeout(() => {
			const isAuthenticated = Math.random() < 0.5;
			resolve(isAuthenticated);
		}, 5000);
	})
}