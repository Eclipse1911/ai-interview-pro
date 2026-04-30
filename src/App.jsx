import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import StudentDashboard from './pages/StudentDashboard';
import InterviewSetup from './pages/InterviewSetup';
import InterviewInterface from './pages/InterviewInterface';
import PerformanceFeedback from './pages/PerformanceFeedback';
import InterviewHistory from './pages/InterviewHistory';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ProfilePage from './pages/ProfilePage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ContactSupport from './pages/ContactSupport';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/support" element={<ContactSupport />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/setup" element={<InterviewSetup />} />
        <Route path="/interview" element={<InterviewInterface />} />
        <Route path="/feedback" element={<PerformanceFeedback />} />
        <Route path="/history" element={<InterviewHistory />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
