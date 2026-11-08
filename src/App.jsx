import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import StudentProfile from './pages/StudentProfile';
import LiteraryAnalyses from './pages/LiteraryAnalyses';
import LiteraryWorkDetail from './pages/LiteraryWorkDetail';
import FavoriteMasterpiece from './pages/FavoriteMasterpiece';
import SummaryOfLearning from './pages/SummaryOfLearning';
import PersonalReflection from './pages/PersonalReflection';

// Scroll to top helper on navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-ivory text-charcoal font-sans selection:bg-gold/30 selection:text-forest-dark">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Viewport */}
        <main className="flex-1 pb-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<StudentProfile />} />
            <Route path="/analyses" element={<LiteraryAnalyses />} />
            <Route path="/analyses/:id" element={<LiteraryWorkDetail />} />
            <Route path="/favorite" element={<FavoriteMasterpiece />} />
            <Route path="/summary" element={<SummaryOfLearning />} />
            <Route path="/reflection" element={<PersonalReflection />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Academic Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
