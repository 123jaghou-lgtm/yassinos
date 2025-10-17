import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const { currentUser, logout } = useAuth();

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium ${
      isActive
        ? 'bg-secondary text-white'
        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
    }`;
    
  const handleLogout = async () => {
    try {
      await logout();
      setIsProfileMenuOpen(false);
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  const openLogin = () => {
    setShowSignupModal(false);
    setShowLoginModal(true);
  }

  const openSignup = () => {
    setShowLoginModal(false);
    setShowSignupModal(true);
  }

  return (
    <>
      <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                <span className="text-2xl font-bold text-primary dark:text-primary-light">Nador Connect</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink to="/" className={navLinkClass}>Accueil</NavLink>
                <NavLink to="/directory/magasins" className={navLinkClass}>Annuaire</NavLink>
                <NavLink to="/jobs" className={navLinkClass}>Emplois</NavLink>
                <NavLink to="/services" className={navLinkClass}>Services</NavLink>
                <NavLink to="/map" className={navLinkClass}>Carte</NavLink>
              </div>
            </div>
            <div className="flex items-center">
              <button onClick={toggleDarkMode} className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none">
                <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
              </button>
              
              {currentUser ? (
                <div className="relative ml-3">
                  <div>
                    <button onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)} className="max-w-xs bg-gray-200 dark:bg-gray-700 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Ouvrir le menu utilisateur</span>
                      <img className="h-8 w-8 rounded-full" src={currentUser.photoURL || `https://ui-avatars.com/api/?name=${currentUser.email}&background=0D8ABC&color=fff`} alt="User profile" />
                    </button>
                  </div>
                  {isProfileMenuOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => setIsProfileMenuOpen(false)}>Mon Profil</Link>
                        <Link to="/admin" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => setIsProfileMenuOpen(false)}>Tableau de bord</Link>
                        <button onClick={handleLogout} className="w-full text-left block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Déconnexion</button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="hidden md:flex items-center space-x-2 ml-2">
                    <button onClick={openLogin} className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">Connexion</button>
                    <button onClick={openSignup} className="px-3 py-2 rounded-md text-sm font-medium bg-primary text-white hover:bg-primary-dark">S'inscrire</button>
                </div>
              )}

              <div className="md:hidden ml-2">
                  <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none">
                      <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                  </button>
              </div>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <NavLink to="/" className="block text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700" onClick={() => setIsMenuOpen(false)}>Accueil</NavLink>
                  <NavLink to="/directory/magasins" className="block text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700" onClick={() => setIsMenuOpen(false)}>Annuaire</NavLink>
                  <NavLink to="/jobs" className="block text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700" onClick={() => setIsMenuOpen(false)}>Emplois</NavLink>
                  <NavLink to="/services" className="block text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700" onClick={() => setIsMenuOpen(false)}>Services</NavLink>
                  <NavLink to="/map" className="block text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700" onClick={() => setIsMenuOpen(false)}>Carte</NavLink>
                   {!currentUser && (
                      <div className="flex flex-col space-y-2 pt-2">
                           <button onClick={() => {openLogin(); setIsMenuOpen(false);}} className="text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">Connexion</button>
                           <button onClick={() => {openSignup(); setIsMenuOpen(false);}} className="text-left px-3 py-2 rounded-md text-sm font-medium bg-primary text-white hover:bg-primary-dark">S'inscrire</button>
                      </div>
                   )}
              </div>
          </div>
        )}
      </header>
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} onSwitchToSignup={openSignup} />}
      {showSignupModal && <SignupModal onClose={() => setShowSignupModal(false)} onSwitchToLogin={openLogin} />}
    </>
  );
};

export default Header;