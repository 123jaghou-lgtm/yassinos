import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

interface LoginModalProps {
  onClose: () => void;
  onSwitchToSignup: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose, onSwitchToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, loginWithGoogle, loginWithFacebook } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      onClose();
    } catch (err: any) {
      setError('Échec de la connexion. Veuillez vérifier votre e-mail et votre mot de passe.');
      console.error(err);
    }
    setLoading(false);
  };

  const handleSocialLogin = async (provider: 'google' | 'facebook') => {
    setError('');
    setLoading(true);
    try {
      if (provider === 'google') await loginWithGoogle();
      if (provider === 'facebook') await loginWithFacebook();
      onClose();
    } catch (err: any) {
      setError('Échec de la connexion avec votre compte social.');
      console.error(err);
    }
    setLoading(false);
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 w-full max-w-md relative animate-fade-in-down text-left">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
          <i className="fas fa-times text-2xl"></i>
        </button>
        <h2 className="text-2xl font-bold text-center text-primary dark:text-primary-light mb-6">Connexion</h2>
        {error && <p className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adresse e-mail</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required />
          </div>
          <button type="submit" disabled={loading} className="w-full text-white bg-primary hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-primary-light font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:bg-gray-400">
            {loading ? 'Connexion en cours...' : 'Se connecter'}
          </button>
        </form>
        <div className="text-center my-4">
            <span className="text-sm text-gray-500 dark:text-gray-400">OU</span>
        </div>
        <div className="flex flex-col space-y-2">
            <button onClick={() => handleSocialLogin('google')} disabled={loading} className="w-full flex items-center justify-center gap-2 text-white bg-[#4285F4] hover:bg-[#4285F4]/90 font-medium rounded-lg text-sm px-5 py-2.5">
                <i className="fab fa-google"></i> Continuer avec Google
            </button>
            <button onClick={() => handleSocialLogin('facebook')} disabled={loading} className="w-full flex items-center justify-center gap-2 text-white bg-[#3b5998] hover:bg-[#3b5998]/90 font-medium rounded-lg text-sm px-5 py-2.5">
                <i className="fab fa-facebook-f"></i> Continuer avec Facebook
            </button>
        </div>
        <p className="text-sm text-center mt-6">
          Pas de compte ? <button onClick={onSwitchToSignup} className="font-medium text-primary hover:underline">Inscrivez-vous</button>
        </p>
      </div>
       <style>{`
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default LoginModal;