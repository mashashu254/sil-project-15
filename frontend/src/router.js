import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
// import Quiz from './components/quiz/quiz';
import LandingPage from './pages/LandingPage';
import IntroPage from './pages/IntroPage';
import SurveyPage from './pages/SurveyPage';
import PlanPage from './pages/PlanPage';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/intro" element={<IntroPage />} />
      <Route path="/survey" element={<SurveyPage />} />
      <Route path="/plan" element={<PlanPage />} />
      <Route path="/login" element={<Login />} key="login" />
      <Route path="register" element={<Register />} key="register" />
    </Routes>
  </BrowserRouter>
);

export default Router;
