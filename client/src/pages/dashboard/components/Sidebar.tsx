import { useState } from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activePage: string;
  onPageChange: (page: string) => void;
}

const Sidebar = ({ isOpen, onClose, activePage, onPageChange }: SidebarProps) => {
  const pages = [
    { id: 'overview', label: 'Overview', icon: 'ri-dashboard-line' },
    { id: 'media', label: 'Media Library', icon: 'ri-image-line' },
    { id: 'users', label: 'Users', icon: 'ri-user-line' },
    { id: 'header', label: 'Header', icon: 'ri-layout-top-line' },
    { id: 'footer', label: 'Footer', icon: 'ri-layout-bottom-line' },
    { id: 'home', label: 'Home', icon: 'ri-home-line' },
    { id: 'about', label: 'About Us', icon: 'ri-information-line' },
    { id: 'solar', label: 'Solar Energy', icon: 'ri-sun-line' },
    { id: 'cbg', label: 'Compressed Bio Gas', icon: 'ri-gas-station-line' },
    { id: 'ess', label: 'Energy Storage Solutions', icon: 'ri-battery-charging-line' },
    { id: 'biodhanic', label: 'Biodhanic', icon: 'ri-leaf-line' },
    { id: 'spectrum', label: 'Spectrum Renewable', icon: 'ri-restart-line' },
    { id: 'vyzag', label: 'Vyzag Bio Energy', icon: 'ri-lightbulb-line' },
    { id: 'esg', label: 'ESG', icon: 'ri-plant-line' },
    { id: 'investors', label: 'Investors', icon: 'ri-stock-line' },
    { id: 'contact', label: 'Contact', icon: 'ri-mail-line' },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 z-50 transition-transform duration-300 w-64 overflow-y-auto sidebar-scroll ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="h-16 border-b border-gray-200 flex items-center justify-center px-6 flex-shrink-0">
            <img
              src="https://static.readdy.ai/image/d0ead66ce635a168f1e83b108be94826/e39f619d8b2f51ea2c6a4ca0ad43f95d.png"
              alt="RRIL Logo"
              className="h-8 w-auto object-contain"
            />
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-1">
              {pages.map((page) => (
                <button
                  key={page.id}
                  onClick={() => {
                    onPageChange(page.id);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors whitespace-nowrap ${
                    activePage === page.id
                      ? 'bg-green-600 text-white'
                      : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
                  }`}
                >
                  <i className={`${page.icon} text-lg ${activePage === page.id ? 'text-white' : ''}`}></i>
                  <span className="text-sm font-medium">{page.label}</span>
                </button>
              ))}
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
