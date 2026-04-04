import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCurrentStockPrice, type StockPriceResponse } from '@/services/api';

export default function Navbar() {
  const navigate = useNavigate();
  const [isBusinessOpen, setIsBusinessOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isInvestorOpen, setIsInvestorOpen] = useState(false);
  const [isSolarOpen, setIsSolarOpen] = useState(false);
  const [isCBGOpen, setIsCBGOpen] = useState(false);
  const [isSmartODROpen, setIsSmartODROpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [mobileSubDropdown, setMobileSubDropdown] = useState<string | null>(null);
  const [stockData, setStockData] = useState<StockPriceResponse | null>(null);
  const [stockLoading, setStockLoading] = useState(true);

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    navigate('/about-us');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
    setIsAboutOpen(false);
  };

  const handleMobileSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    navigate('/about-us');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
    setIsMobileMenuOpen(false);
  };

  const handleESGSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    navigate('/esg');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  useEffect(() => {
    getCurrentStockPrice()
      .then((data) => {
        setStockData(data);
        setStockLoading(false);
      })
      .catch(() => {
        setStockLoading(false);
      });
  }, []);

  const getStockIcon = () => {
    if (!stockData) return 'ri-arrow-down-s-fill';
    return stockData.index.startsWith('+') ? 'ri-arrow-up-s-fill' : 'ri-arrow-down-s-fill';
  };

  const getStockColor = () => {
    if (!stockData) return 'text-red-400';
    return stockData.index.startsWith('+') ? 'text-green-400' : 'text-red-400';
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">

      {/* Main Header Section */}
      <div className="w-full bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-[110px]">
          <div className="flex items-center py-2 gap-8 lg:gap-[7rem]">
            {/* Left Container - Logo and Company Name */}
            <div className="flex flex-col flex-shrink-0">
              <Link to="/" className="flex-shrink-0 mb-2">
                <img 
                  src="https://rril-website.local.sharajman.com/wp-content/uploads/2023/07/refex-logo-seperate.svg" 
                  alt="Refex Logo" 
                  className="h-10 md:h-12"
                />
              </Link>
              {/* Company Name */}
              <div
                className="text-gray-800 uppercase"
                style={{
                  fontSize: '11.5px',
                  fontWeight: 500,
                  lineHeight: '15px',
                  letterSpacing: '0.3px',
                }}
              >
                REFEX RENEWABLES &<br />INFRASTRUCTURE LIMITED
              </div>
            </div>

            {/* Right Container - Stock Ticker, Ruler Line, and Navigation */}
            <div className="hidden lg:flex flex-col flex-1 ">
              {/* Stock Ticker */}
              <div className="mb-2">
                {stockLoading ? (
                  <div className="flex items-center gap-2 text-xs text-gray-800">
                    <span className="font-semibold">Loading BSE Data...</span>
                  </div>
                ) : stockData ? (
                  <div className="flex items-center gap-2 text-xs text-gray-800">
                    <span className="font-semibold">{stockData.exchange}</span>
                    <i className={`${getStockIcon()} ${stockData.index.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}></i>
                    <span className={`font-semibold ${stockData.index.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>₹ {stockData.current_price.toFixed(2)}</span>
                    <span className={`font-semibold ${stockData.index.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{stockData.index}</span>
                    <span className={stockData.index.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                      ({stockData.overall_index}%)
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-xs text-gray-800">
                    <span className="font-semibold">BSE</span>
                    <i className="ri-arrow-down-s-fill text-red-600"></i>
                    <span className="font-semibold text-red-600">₹ 310.00</span>
                    <span className="font-semibold text-red-600">-10.65</span>
                    <span className="text-red-600">(-4.03%)</span>
                  </div>
                )}
              </div>

              {/* Horizontal Ruler Line */}
              <div className="w-full border-b border-gray-200 mb-3"></div>

              {/* Navigation Links */}
              <div className="flex items-center gap-6 xl:gap-10">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-brand transition-colors whitespace-nowrap"
                style={{ fontSize: '16px', fontWeight: 600, textTransform: 'uppercase' }}
              >
                HOME
              </Link>
              
              {/* About Us Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setIsAboutOpen(true)}
                onMouseLeave={() => setIsAboutOpen(false)}
              >
                <Link 
                  to="/about-us" 
                  className="text-gray-700 hover:text-brand transition-colors whitespace-nowrap flex items-center gap-1"
                  style={{ fontSize: '16px', fontWeight: 600, textTransform: 'uppercase' }}
                >
                  ABOUT US
                  <i className="ri-arrow-down-s-line"></i>
                </Link>
                {isAboutOpen && (
                  <div className="absolute top-full left-0 mt-0 w-56 bg-white shadow-lg rounded-lg py-2 z-50">
                    <a 
                      href="/about-us#vision-mission" 
                      onClick={(e) => handleSectionClick(e, 'vision-mission')}
                      className="block px-4 py-2 text-gray-700 hover:bg-brand/10 hover:text-brand transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Vision & Mission
                    </a>
                    <a 
                      href="/about-us#core-values" 
                      onClick={(e) => handleSectionClick(e, 'core-values')}
                      className="block px-4 py-2 text-gray-700 hover:bg-brand/10 hover:text-brand transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Core Values
                    </a>
                    <a 
                      href="/about-us#our-journey" 
                      onClick={(e) => handleSectionClick(e, 'our-journey')}
                      className="block px-4 py-2 text-gray-700 hover:bg-brand/10 hover:text-brand transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Our Journey
                    </a>
                    <a 
                      href="/about-us#board-of-directors" 
                      onClick={(e) => handleSectionClick(e, 'board-of-directors')}
                      className="block px-4 py-2 text-gray-700 hover:bg-brand/10 hover:text-brand transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Board of Directors
                    </a>
                    <a href="https://www.refex.group/careers/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-700 hover:bg-brand/10 hover:text-brand transition-colors whitespace-nowrap">
                      Careers
                    </a>
                    <a href="https://www.refex.group/diversity-inclusion/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-700 hover:bg-brand/10 hover:text-brand transition-colors whitespace-nowrap">
                      Diversity Inclusion
                    </a>
                    <a href="https://www.refex.group/gallery/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-700 hover:bg-brand/10 hover:text-brand transition-colors whitespace-nowrap">
                      Gallery
                    </a>
                  </div>
                )}
              </div>

              {/* Businesses Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setIsBusinessOpen(true)}
                onMouseLeave={() => {
                  setIsBusinessOpen(false);
                  setIsSolarOpen(false);
                  setIsCBGOpen(false);
                }}
              >
                <button 
                  className="text-gray-700 hover:text-brand transition-colors whitespace-nowrap flex items-center gap-1"
                  style={{ fontSize: '16px', fontWeight: 600, textTransform: 'uppercase' }}
                >
                  BUSINESSES
                  <i className="ri-arrow-down-s-line"></i>
                </button>
                {isBusinessOpen && (
                  <div className="absolute top-full left-0 mt-0 w-64 bg-white shadow-lg rounded-lg py-2 z-50">
                    {/* Renewable IPP with Sub-dropdown */}
                    <div 
                      className="relative group/solar"
                      onMouseEnter={() => setIsSolarOpen(true)}
                      onMouseLeave={() => setIsSolarOpen(false)}
                    >
                      <Link to="/solar-energy" className="block px-4 py-2 text-gray-700 hover:bg-brand/10 hover:text-brand transition-colors whitespace-nowrap flex items-center justify-between">
                      Renewable IPP
                        <i className="ri-arrow-right-s-line"></i>
                      </Link>
                      {isSolarOpen && (
                        <div className="absolute left-full top-0 ml-0 w-64 bg-white shadow-lg rounded-lg py-2 z-50">
                                                    <Link to="/solar-energy" className="block px-4 py-2 text-gray-700 hover:bg-brand/10 hover:text-brand transition-colors whitespace-nowrap">
                            Solar Energy
                          </Link>
                                                <Link to="/energy-storage-solutions" className="block px-4 py-2 text-gray-700 hover:bg-brand/10 hover:text-brand transition-colors whitespace-nowrap">
                                                  Energy Storage Solutions
                                                </Link>
                                              </div>
                      )}
                    </div>

                    {/* Compressed Bio-Gas with Sub-dropdown */}
                    <div 
                      className="relative group/cbg"
                      onMouseEnter={() => setIsCBGOpen(true)}
                      onMouseLeave={() => setIsCBGOpen(false)}
                    >
                      <Link to="/compressed-bio-gas" className="block px-4 py-2 text-gray-700 hover:bg-brand/10 hover:text-brand transition-colors whitespace-nowrap flex items-center justify-between">
                        Compressed Bio-Gas
                        <i className="ri-arrow-right-s-line"></i>
                      </Link>
                      {isCBGOpen && (
                        <div className="absolute left-full top-0 ml-0 w-64 bg-white shadow-lg rounded-lg py-2 z-50">
                          <Link to="/spectrum-renewable" className="block px-4 py-2 text-gray-700 hover:bg-brand/10 hover:text-brand transition-colors whitespace-nowrap">
                            Spectrum Renewables
                          </Link>
                          <Link to="/vyzag-bio-energy" className="block px-4 py-2 text-gray-700 hover:bg-brand/10 hover:text-brand transition-colors whitespace-nowrap">
                            Vyzag Bio-Energy
                          </Link>
                          <Link to="/biodhanic" className="block px-4 py-2 text-gray-700 hover:bg-brand/10 hover:text-brand transition-colors whitespace-nowrap">
                            Refex Bio-Dhanic
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Investor Relations Dropdown 
              <div 
                className="relative group"
                onMouseEnter={() => setIsInvestorOpen(true)}
                onMouseLeave={() => {
                  setIsInvestorOpen(false);
                  setIsSmartODROpen(false);
                }}
              >
                <Link 
                  to="/investors" 
                  className="text-gray-700 hover:text-brand transition-colors whitespace-nowrap flex items-center gap-1"
                  style={{ fontSize: '16px', fontWeight: 600, textTransform: 'uppercase' }}
                >
                  INVESTOR RELATIONS
                  <i className="ri-arrow-down-s-line"></i>
                </Link>
                {isInvestorOpen && (
                  <div className="absolute top-full left-0 mt-0 w-64 bg-white shadow-lg rounded-lg py-2 z-50">
                    <div 
                      className="relative group/smartodr"
                      onMouseEnter={() => setIsSmartODROpen(true)}
                      onMouseLeave={() => setIsSmartODROpen(false)}
                    >
                      <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-brand/10 hover:text-brand transition-colors whitespace-nowrap flex items-center justify-between">
                        Smart ODR
                        <i className="ri-arrow-right-s-line"></i>
                      </button>
                      {isSmartODROpen && (
                        <div className="absolute left-full top-0 ml-0 w-64 bg-white shadow-lg rounded-lg py-2 z-50">
                          <a href="https://www.sebi.gov.in/legal/master-circulars/aug-2023/online-resolution-of-disputes-in-the-indian-securities-market_75220.html" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-700 hover:bg-brand/10 hover:text-brand transition-colors whitespace-nowrap">
                            SEBI Circular On ODR
                          </a>
                          <a href="https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=40" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-700 hover:bg-brand/10 hover:text-brand transition-colors whitespace-nowrap">
                            Online Dispute Resolution
                          </a>
                          <a href="https://smartodr.in/login" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-700 hover:bg-brand/10 hover:text-brand transition-colors whitespace-nowrap">
                            Link To SMART ODR
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
              */}

<Link 
                to="/investors" 
                className="text-gray-700 hover:text-brand transition-colors whitespace-nowrap"
                style={{ fontSize: '16px', fontWeight: 600, textTransform: 'uppercase' }}
              >
                INVESTOR RELATIONS
              </Link>

              <Link 
                to="/esg" 
                className="text-gray-700 hover:text-brand transition-colors whitespace-nowrap"
                style={{ fontSize: '16px', fontWeight: 600, textTransform: 'uppercase' }}
              >
                ESG
              </Link>

              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-brand transition-colors whitespace-nowrap"
                style={{ fontSize: '16px', fontWeight: 600, textTransform: 'uppercase' }}
              >
                CONTACT US
              </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-800 hover:text-brand transition-colors cursor-pointer"
            >
              <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="container mx-auto px-4 py-4">
            {/* Company Name - Mobile */}
            <div className="text-xs font-bold text-gray-800 leading-tight uppercase mb-4 pb-4 border-b border-gray-200">
              REFEX RENEWABLES &<br />INFRASTRUCTURE LIMITED
            </div>

            {/* Stock Ticker - Mobile */}
            <div className="sm:hidden flex items-center gap-2 text-xs mb-4 pb-4 border-b border-gray-200">
              {stockLoading ? (
                <span className="text-gray-800">Loading BSE Data...</span>
              ) : stockData ? (
                <>
                  <span className="font-semibold text-gray-800">{stockData.exchange}</span>
                  <i className={`${getStockIcon()} ${stockData.index.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}></i>
                  <span className={`font-semibold ${stockData.index.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>₹ {stockData.current_price.toFixed(2)}</span>
                  <span className={`font-semibold ${stockData.index.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{stockData.index}</span>
                  <span className={stockData.index.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                    ({stockData.overall_index}%)
                  </span>
                </>
              ) : (
                <>
                  <span className="font-semibold text-gray-800">BSE</span>
                  <i className="ri-arrow-down-s-fill text-red-600"></i>
                  <span className="font-semibold text-red-600">₹ 310.00</span>
                  <span className="font-semibold text-red-600">-10.65</span>
                  <span className="text-red-600">(-4.03%)</span>
                </>
              )}
            </div>

            <nav className="flex flex-col gap-2">
              <Link 
                to="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium text-gray-800 hover:bg-brand/10 hover:text-brand rounded-md transition-colors"
              >
                HOME
              </Link>
              
              {/* About Us Dropdown - Mobile */}
              <div>
                <button 
                  onClick={() => setMobileDropdown(mobileDropdown === 'about' ? null : 'about')}
                  className="w-full px-4 py-3 text-sm font-medium text-gray-800 hover:bg-brand/10 hover:text-brand rounded-md transition-colors flex items-center justify-between cursor-pointer"
                >
                  ABOUT US
                  <i className={`ri-arrow-${mobileDropdown === 'about' ? 'up' : 'down'}-s-line text-base`}></i>
                </button>
                {mobileDropdown === 'about' && (
                  <div className="pl-4 mt-1 flex flex-col gap-1">
                    <Link 
                      to="/about-us" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-4 py-2 text-sm text-gray-700 hover:text-brand transition-colors"
                    >
                      About Us
                    </Link>
                    <a 
                      href="/about-us#vision-mission" 
                      onClick={(e) => handleMobileSectionClick(e, 'vision-mission')}
                      className="px-4 py-2 text-sm text-gray-700 hover:text-brand transition-colors cursor-pointer"
                    >
                      Vision & Mission
                    </a>
                    <a 
                      href="/about-us#core-values" 
                      onClick={(e) => handleMobileSectionClick(e, 'core-values')}
                      className="px-4 py-2 text-sm text-gray-700 hover:text-brand transition-colors cursor-pointer"
                    >
                      Core Values
                    </a>
                    <a 
                      href="/about-us#our-journey" 
                      onClick={(e) => handleMobileSectionClick(e, 'our-journey')}
                      className="px-4 py-2 text-sm text-gray-700 hover:text-brand transition-colors cursor-pointer"
                    >
                      Our Journey
                    </a>
                    <a 
                      href="/about-us#board-of-directors" 
                      onClick={(e) => handleMobileSectionClick(e, 'board-of-directors')}
                      className="px-4 py-2 text-sm text-gray-700 hover:text-brand transition-colors cursor-pointer"
                    >
                      Board of Directors
                    </a>
                    <a 
                      href="https://www.refex.group/careers/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-4 py-2 text-sm text-gray-700 hover:text-brand transition-colors"
                    >
                      Careers
                    </a>
                    <a 
                      href="https://www.refex.group/diversity-inclusion/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-4 py-2 text-sm text-gray-700 hover:text-brand transition-colors"
                    >
                      Diversity Inclusion
                    </a>
                    <a 
                      href="https://www.refex.group/gallery/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-4 py-2 text-sm text-gray-700 hover:text-brand transition-colors"
                    >
                      Gallery
                    </a>
                  </div>
                )}
              </div>

              {/* Businesses Dropdown - Mobile */}
              <div>
                <button 
                  onClick={() => setMobileDropdown(mobileDropdown === 'business' ? null : 'business')}
                  className="w-full px-4 py-3 text-sm font-medium text-gray-800 hover:bg-brand/10 hover:text-brand rounded-md transition-colors flex items-center justify-between cursor-pointer"
                >
                  BUSINESSES
                  <i className={`ri-arrow-${mobileDropdown === 'business' ? 'up' : 'down'}-s-line text-base`}></i>
                </button>
                {mobileDropdown === 'business' && (
                  <div className="pl-4 mt-1 flex flex-col gap-1">
                    {/* Solar Energy with Sub-dropdown */}
                    <div>
                      <button 
                        onClick={() => setMobileSubDropdown(mobileSubDropdown === 'solar' ? null : 'solar')}
                        className="w-full px-4 py-2 text-sm text-gray-700 hover:text-brand transition-colors flex items-center justify-between cursor-pointer"
                      >
                        Solar Energy
                        <i className={`ri-arrow-${mobileSubDropdown === 'solar' ? 'up' : 'down'}-s-line text-base`}></i>
                      </button>
                      {mobileSubDropdown === 'solar' && (
                        <div className="pl-4 mt-1 flex flex-col gap-1">
                          <Link 
                            to="/solar-energy" 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="px-4 py-2 text-sm text-gray-600 hover:text-brand transition-colors"
                          >
                            Solar Energy
                          </Link>
                          <Link 
                            to="/energy-storage-solutions" 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="px-4 py-2 text-sm text-gray-600 hover:text-brand transition-colors"
                          >
                            Energy Storage Solutions
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Compressed Bio-Gas with Sub-dropdown */}
                    <div>
                      <button 
                        onClick={() => setMobileSubDropdown(mobileSubDropdown === 'cbg' ? null : 'cbg')}
                        className="w-full px-4 py-2 text-sm text-gray-700 hover:text-brand transition-colors flex items-center justify-between cursor-pointer"
                      >
                        Compressed Bio-Gas
                        <i className={`ri-arrow-${mobileSubDropdown === 'cbg' ? 'up' : 'down'}-s-line text-base`}></i>
                      </button>
                      {mobileSubDropdown === 'cbg' && (
                        <div className="pl-4 mt-1 flex flex-col gap-1">
                          <Link 
                            to="/compressed-bio-gas" 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="px-4 py-2 text-sm text-gray-600 hover:text-brand transition-colors"
                          >
                            Compressed Bio-Gas
                          </Link>
                          <Link 
                            to="/biodhanic" 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="px-4 py-2 text-sm text-gray-600 hover:text-brand transition-colors"
                          >
                            BioDhanic
                          </Link>
                          <Link 
                            to="/spectrum-renewable" 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="px-4 py-2 text-sm text-gray-600 hover:text-brand transition-colors"
                          >
                            Spectrum Renewables
                          </Link>
                          <Link 
                            to="/vyzag-bio-energy" 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="px-4 py-2 text-sm text-gray-600 hover:text-brand transition-colors"
                          >
                            Vyzag Bio-Energy
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Investor Relations - Mobile 
              <div>
                <button 
                  onClick={() => setMobileDropdown(mobileDropdown === 'investor' ? null : 'investor')}
                  className="w-full px-4 py-3 text-sm font-medium text-gray-800 hover:bg-brand/10 hover:text-brand rounded-md transition-colors flex items-center justify-between cursor-pointer"
                >
                  INVESTOR RELATIONS
                  <i className={`ri-arrow-${mobileDropdown === 'investor' ? 'up' : 'down'}-s-line text-base`}></i>
                </button>
                {mobileDropdown === 'investor' && (
                  <div className="pl-4 mt-1 flex flex-col gap-1">
                    <div>
                      <button 
                        onClick={() => setMobileSubDropdown(mobileSubDropdown === 'smartodr' ? null : 'smartodr')}
                        className="w-full px-4 py-2 text-sm text-gray-700 hover:text-brand transition-colors flex items-center justify-between cursor-pointer"
                      >
                        Smart ODR
                        <i className={`ri-arrow-${mobileSubDropdown === 'smartodr' ? 'up' : 'down'}-s-line text-base`}></i>
                      </button>
                      {mobileSubDropdown === 'smartodr' && (
                        <div className="pl-4 mt-1 flex flex-col gap-1">
                          <a 
                            href="https://www.sebi.gov.in/legal/master-circulars/aug-2023/online-resolution-of-disputes-in-the-indian-securities-market_75220.html" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="px-4 py-2 text-sm text-gray-600 hover:text-brand transition-colors"
                          >
                            SEBI Circular On ODR
                          </a>
                          <a 
                            href="https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=40" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="px-4 py-2 text-sm text-gray-600 hover:text-brand transition-colors"
                          >
                            Online Dispute Resolution
                          </a>
                          <a 
                            href="https://smartodr.in/login" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="px-4 py-2 text-sm text-gray-600 hover:text-brand transition-colors"
                          >
                            Link To SMART ODR
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
              */}

            <Link 
                to="/investors" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium text-gray-800 hover:bg-brand/10 hover:text-brand rounded-md transition-colors"
              >
                INVESTOR RELATIONS
              </Link>

              <Link 
                to="/esg" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium text-gray-800 hover:bg-brand/10 hover:text-brand rounded-md transition-colors"
              >
                ESG
              </Link>

              <Link 
                to="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium text-gray-800 hover:bg-brand/10 hover:text-brand rounded-md transition-colors"
              >
                CONTACT US
              </Link>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
}
