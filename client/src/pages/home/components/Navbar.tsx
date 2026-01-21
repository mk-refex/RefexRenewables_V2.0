
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
        {/* Top Bar with Logo and Stock Ticker */}
        <div className="w-full bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center py-3">
              {/* Logo */}
              <Link to="/" className="flex-shrink-0">
                <img 
                  src="https://rril-website.local.sharajman.com/wp-content/uploads/2023/07/refex-logo-seperate.svg" 
                  alt="Refex Logo" 
                  className="h-12"
                />
              </Link>
              
              {/* Stock Ticker */}
              <div className="flex items-center gap-2 text-xs ml-8">
                <span className="font-semibold text-gray-800">BSE</span>
                <i className="ri-arrow-down-s-fill text-red-600"></i>
                <span className="font-semibold text-red-600">₹ 310</span>
                <span className="text-red-600">(-2.82%)</span>
              </div>
            </div>
          </div>
          {/* Horizontal line that stops at logo */}
          <div className="container mx-auto px-4 lg:px-8">
            <div className="border-b border-gray-200" style={{ marginLeft: '140px' }}></div>
          </div>
        </div>

        {/* Main Navigation Bar with Company Name */}
        <div className="w-full bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between py-3">
              {/* Company Name */}
              <div className="hidden lg:block">
                <h2 className="text-xs font-bold text-gray-800 leading-tight uppercase">
                  REFEX RENEWABLES &<br />INFRASTRUCTURE LIMITED
                </h2>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-6 xl:gap-8 ml-8">
                <Link to="/" className="text-sm font-bold text-gray-800 hover:text-green-600 transition-colors whitespace-nowrap">
                  HOME
                </Link>
                
                <div className="relative group">
                  <button className="text-sm font-bold text-gray-800 hover:text-green-600 transition-colors whitespace-nowrap flex items-center gap-1">
                    ABOUT US
                    <i className="ri-arrow-down-s-line text-base"></i>
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <Link to="/about-us" className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">About Us</Link>
                    <a href="/about-us#vision-mission" className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Vision & Mission</a>
                    <a href="/about-us#core-values" className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Core Values</a>
                    <a href="/about-us#our-journey" className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Our Journey</a>
                    <a href="/about-us#board-of-directors" className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Board of Directors</a>
                    <a href="https://www.refex.group/careers/" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Careers</a>
                    <a href="https://www.refex.group/diversity-inclusion/" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Diversity Inclusion</a>
                    <a href="https://www.refex.group/gallery/" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Gallery</a>
                  </div>
                </div>

                <div className="relative group">
                  <button className="text-sm font-bold text-gray-800 hover:text-green-600 transition-colors whitespace-nowrap flex items-center gap-1">
                    BUSINESSES
                    <i className="ri-arrow-down-s-line text-base"></i>
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <Link to="/solar-energy" className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Solar Energy</Link>
                    <Link to="/compressed-bio-gas" className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Compressed Bio-Gas</Link>
                  </div>
                </div>

                <div className="relative group">
                  <button className="text-sm font-bold text-gray-800 hover:text-green-600 transition-colors whitespace-nowrap flex items-center gap-1">
                    INVESTOR RELATIONS
                    <i className="ri-arrow-down-s-line text-base"></i>
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <Link to="/investors" className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Investor Relations</Link>
                  </div>
                </div>

                <Link to="/esg" className="text-sm font-bold text-gray-800 hover:text-green-600 transition-colors whitespace-nowrap">
                  ESG
                </Link>

                <Link to="/contact" className="text-sm font-bold text-gray-800 hover:text-green-600 transition-colors whitespace-nowrap">
                  CONTACT US
                </Link>
              </nav>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-800 hover:text-green-600 transition-colors cursor-pointer"
              >
                <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col gap-2">
                <Link to="/" className="px-4 py-3 text-sm font-medium text-gray-800 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors">
                  HOME
                </Link>
                
                <div>
                  <button 
                    onClick={() => setOpenDropdown(openDropdown === 'about' ? null : 'about')}
                    className="w-full px-4 py-3 text-sm font-medium text-gray-800 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors flex items-center justify-between cursor-pointer"
                  >
                    ABOUT US
                    <i className={`ri-arrow-${openDropdown === 'about' ? 'up' : 'down'}-s-line text-base`}></i>
                  </button>
                  {openDropdown === 'about' && (
                    <div className="pl-4 mt-1 flex flex-col gap-1">
                      <Link to="/about-us" className="px-4 py-2 text-sm text-gray-700 hover:text-green-600 transition-colors">About Us</Link>
                      <a href="/about-us#vision-mission" className="px-4 py-2 text-sm text-gray-700 hover:text-green-600 transition-colors">Vision & Mission</a>
                      <a href="/about-us#core-values" className="px-4 py-2 text-sm text-gray-700 hover:text-green-600 transition-colors">Core Values</a>
                      <a href="/about-us#our-journey" className="px-4 py-2 text-sm text-gray-700 hover:text-green-600 transition-colors">Our Journey</a>
                      <a href="/about-us#board-of-directors" className="px-4 py-2 text-sm text-gray-700 hover:text-green-600 transition-colors">Board of Directors</a>
                    </div>
                  )}
                </div>

                <div>
                  <button 
                    onClick={() => setOpenDropdown(openDropdown === 'business' ? null : 'business')}
                    className="w-full px-4 py-3 text-sm font-medium text-gray-800 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors flex items-center justify-between cursor-pointer"
                  >
                    BUSINESSES
                    <i className={`ri-arrow-${openDropdown === 'business' ? 'up' : 'down'}-s-line text-base`}></i>
                  </button>
                  {openDropdown === 'business' && (
                    <div className="pl-4 mt-1 flex flex-col gap-1">
                      <Link to="/solar-energy" className="px-4 py-2 text-sm text-gray-700 hover:text-green-600 transition-colors">Solar Energy</Link>
                      <Link to="/compressed-bio-gas" className="px-4 py-2 text-sm text-gray-700 hover:text-green-600 transition-colors">Compressed Bio-Gas</Link>
                    </div>
                  )}
                </div>

                <Link to="/investors" className="px-4 py-3 text-sm font-medium text-gray-800 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors">
                  INVESTOR RELATIONS
                </Link>

                <Link to="/esg" className="px-4 py-3 text-sm font-medium text-gray-800 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors">
                  ESG
                </Link>

                <Link to="/contact" className="px-4 py-3 text-sm font-medium text-gray-800 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors">
                  CONTACT US
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
