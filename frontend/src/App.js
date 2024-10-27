import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Quiz from './components/quiz/quiz';

function Root() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/quiz" element={<Quiz />}></Route>
				<Route path="/register" element={<Register />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Root;
