import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import LandingPage from './pages/LandingPage';
import IntroPage from './pages/IntroPage';
import QuizPage from './pages/QuizPage';
import PlanPage from './pages/PlanPage';

const Router = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<LandingPage />} />
			<Route path="/intro" element={<IntroPage />} />
			<Route path="/survey" element={<QuizPage />} />
			<Route path="/plan" element={<PlanPage />} />
			<Route path="/login" element={<Login />} />
			<Route path="register" element={<Register />} />
		</Routes>
	</BrowserRouter>
);

export default Router;
