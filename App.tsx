import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Directory from './pages/Directory';
import Jobs from './pages/Jobs';
import Services from './pages/Services';
import MapPage from './pages/MapPage';
import Profile from './pages/Profile';
import AdminDashboard from './pages/AdminDashboard';
import useDarkMode from './hooks/useDarkMode';
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const location = useLocation();

  // Simple check to render main layout or not
  const showLayout = location.pathname !== '/reset-confirmation';

  return (
    <div className="flex flex-col min-h-screen">
      {showLayout && <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/directory/:categorySlug" element={<Directory />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        </Routes>
      </main>
      {showLayout && <Footer />}
    </div>
  );
};

export default App;