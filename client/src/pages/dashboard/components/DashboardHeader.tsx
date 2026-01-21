import { useState } from 'react';

interface DashboardHeaderProps {
  onMenuClick: () => void;
}

const DashboardHeader = ({ onMenuClick }: DashboardHeaderProps) => {
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    window.location.href = '/admin-login';
  };

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200 h-16">
      <div className="h-full flex items-center justify-between px-6">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-all whitespace-nowrap"
          >
            <i className="ri-menu-line text-xl text-gray-700"></i>
          </button>

          {/* RRIL CMS Title */}
          <h1 className="text-xl font-bold text-gray-900 whitespace-nowrap">RRIL CMS</h1>

          {/* Search Bar */}
          <div className="hidden md:block ml-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="ri-search-line text-gray-400"></i>
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="w-80 pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
              />
            </div>
          </div>
        </div>

        {/* Right Section - User Profile */}
        <div className="flex items-center gap-3">
          {/* Visit Website Link */}
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium text-green-700 hover:text-green-800 hover:bg-green-50 rounded-lg transition-all whitespace-nowrap"
          >
            <i className="ri-external-link-line"></i>
            <span>Visit Website</span>
          </a>

          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-all whitespace-nowrap"
            >
              <div className="w-8 h-8 flex items-center justify-center bg-green-600 rounded-full">
                <i className="ri-user-line text-white text-sm"></i>
              </div>
              <div className="hidden sm:block text-left">
                <p className="text-sm font-medium text-gray-900">Admin User</p>
                <p className="text-xs text-gray-500">admin@rril.com</p>
              </div>
              <i className={`ri-arrow-${showUserMenu ? 'up' : 'down'}-s-line text-gray-500`}></i>
            </button>

            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                <div className="px-4 py-3 border-b border-gray-200">
                  <p className="text-sm font-semibold text-gray-900">Admin User</p>
                  <p className="text-xs text-gray-500 mt-1">admin@rril.com</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-red-50 transition-all"
                >
                  <i className="ri-logout-box-line text-red-600"></i>
                  <span className="text-sm font-medium text-red-600">Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
