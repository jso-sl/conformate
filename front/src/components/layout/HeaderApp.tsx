import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthUtils } from '../../hooks/useAuthUtils';

const HeaderApp: React.FC = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { user, getFullName, getInitials, handleLogout } = useAuthUtils();
  const navigate = useNavigate();

  const onLogout = () => {
    handleLogout(true);
    navigate('/');
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo et navigation */}
          <div className="flex items-center">
            <Link to="/app/dashboard" className="flex-shrink-0">
              <h1 className="text-xl font-bold text-blue-600">Conformate</h1>
            </Link>
          </div>

          {/* Menu utilisateur */}
          <div className="flex items-center space-x-4">
            {user && (
              <>
                <span className="text-sm text-gray-700">
                  {user.organization}
                </span>
                
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center space-x-2 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-medium">
                      {getInitials()}
                    </div>
                    <span className="hidden md:block font-medium text-gray-700">
                      {getFullName()}
                    </span>
                    <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>

                  {/* Dropdown menu */}
                  {showUserMenu && (
                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                      <div className="py-1">
                        <div className="px-4 py-2 text-sm text-gray-900 border-b border-gray-100">
                          <div className="font-medium">{getFullName()}</div>
                          <div className="text-gray-500">{user.email}</div>
                          <div className="text-xs text-blue-600 font-medium">
                            {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                          </div>
                        </div>
                        
                        <Link
                          to="/app/profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setShowUserMenu(false)}
                        >
                          Mon profil
                        </Link>
                        
                        <Link
                          to="/app/settings"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setShowUserMenu(false)}
                        >
                          Paramètres
                        </Link>
                        
                        <button
                          onClick={() => {
                            setShowUserMenu(false);
                            onLogout();
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                        >
                          Se déconnecter
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Fermer le menu si on clique ailleurs */}
      {showUserMenu && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowUserMenu(false)}
        />
      )}
    </header>
  );
};

export default HeaderApp;
