import React, { useState } from 'react';
import { ArrowRight, Lock, User } from 'lucide-react';

interface Props {
  onLogin: () => void;
}

export const LoginPage: React.FC<Props> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 800);
  };

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
      style={{ 
        // Using a public image of the PIF Tower (CMA Tower) in Riyadh to match your upload
        backgroundImage: `url('https://images.unsplash.com/photo-1667672202673-455b7681467a?q=80&w=2574&auto=format&fit=crop')` 
      }}
    >
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-boubyan-red/90 mix-blend-multiply opacity-80"></div>
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 w-full max-w-md px-4">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-gray-50 px-8 py-6 border-b border-gray-100 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-boubyan-red/10 text-boubyan-red mb-3">
              <Lock size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
            <p className="text-gray-500 text-sm mt-1">Sign in to access the Service Portal</p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="p-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-boubyan-red focus:border-boubyan-red transition-colors"
                  placeholder="Enter your username"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={18} className="text-gray-400" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-boubyan-red focus:border-boubyan-red transition-colors"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex justify-end mt-1">
                <button type="button" className="text-xs font-medium text-boubyan-red hover:text-red-800">
                  Forgot password?
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 bg-boubyan-red hover:bg-red-800 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              ) : (
                <>
                  Sign In <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 text-center text-xs text-gray-500">
            FDN: this has been built for simulation purposes only
          </div>
        </div>
      </div>
    </div>
  );
};