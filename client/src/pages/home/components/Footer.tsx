import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Us */}
          <div>
            <h3 className="text-base font-semibold mb-6 relative pb-3">
              About Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-green-500"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about-us" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <i className="ri-arrow-right-s-line text-green-500"></i>
                  Vision & Mission
                </Link>
              </li>
              <li>
                <a href="/about-us#core-values" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <i className="ri-arrow-right-s-line text-green-500"></i>
                  Core Values
                </a>
              </li>
              <li>
                <a href="/about-us#our-journey" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <i className="ri-arrow-right-s-line text-green-500"></i>
                  Our Journey
                </a>
              </li>
              <li>
                <a href="/about-us#board-of-directors" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <i className="ri-arrow-right-s-line text-green-500"></i>
                  Board Of Directors
                </a>
              </li>
              <li>
                <a href="https://www.refex.group/careers/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <i className="ri-arrow-right-s-line text-green-500"></i>
                  Careers
                </a>
              </li>
              <li>
                <a href="https://www.refex.group/diversity-inclusion/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <i className="ri-arrow-right-s-line text-green-500"></i>
                  Diversity Inclusion
                </a>
              </li>
              <li>
                <a href="https://www.refex.group/gallery/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <i className="ri-arrow-right-s-line text-green-500"></i>
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Business & Sustainability */}
          <div>
            <h3 className="text-base font-semibold mb-6 relative pb-3">
              Business
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-green-500"></span>
            </h3>
            <ul className="space-y-3 mb-8">
              <li>
                <Link to="/solar-energy" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <i className="ri-arrow-right-s-line text-green-500"></i>
                  Solar Energy
                </Link>
              </li>
              <li>
                <Link to="/compressed-bio-gas" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <i className="ri-arrow-right-s-line text-green-500"></i>
                  Compressed Bio-Gas
                </Link>
              </li>
            </ul>

            <h3 className="text-base font-semibold mb-6 relative pb-3">
              Sustainability
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-green-500"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/esg" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <i className="ri-arrow-right-s-line text-green-500"></i>
                  RRIL On ESG
                </Link>
              </li>
              <li>
                <a href="/esg#esg-policies" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <i className="ri-arrow-right-s-line text-green-500"></i>
                  ESG Policies
                </a>
              </li>
            </ul>
          </div>

          {/* Investors */}
          <div>
            <h3 className="text-base font-semibold mb-6 relative pb-3">
              Investors
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-green-500"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/investors" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <i className="ri-arrow-right-s-line text-green-500"></i>
                  Annual Reports
                </Link>
              </li>
              <li>
                <Link to="/investors" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <i className="ri-arrow-right-s-line text-green-500"></i>
                  Shareholding Pattern
                </Link>
              </li>
              <li>
                <Link to="/investors" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <i className="ri-arrow-right-s-line text-green-500"></i>
                  Audited Financial Results
                </Link>
              </li>
              <li>
                <Link to="/investors" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <i className="ri-arrow-right-s-line text-green-500"></i>
                  Policies
                </Link>
              </li>
              <li>
                <Link to="/investors" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <i className="ri-arrow-right-s-line text-green-500"></i>
                  Annual Return
                </Link>
              </li>
              <li>
                <Link to="/investors" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <i className="ri-arrow-right-s-line text-green-500"></i>
                  Board Meeting Intimation Approving Financial Results
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us & Contact */}
          <div>
            <h3 className="text-base font-semibold mb-6 relative pb-3">
              Follow Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-green-500"></span>
            </h3>
            <div className="flex gap-3 mb-8">
              <a href="https://www.facebook.com/refexindustrieslimited/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center bg-blue-600 hover:bg-blue-700 rounded transition-all cursor-pointer">
                <i className="ri-facebook-fill text-base"></i>
              </a>
              <a href="https://x.com/GroupRefex" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center bg-black hover:bg-gray-800 rounded transition-all cursor-pointer">
                <i className="ri-twitter-x-line text-base"></i>
              </a>
              <a href="https://www.youtube.com/@refexgroup" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center bg-red-600 hover:bg-red-700 rounded transition-all cursor-pointer">
                <i className="ri-youtube-fill text-base"></i>
              </a>
              <a href="https://www.linkedin.com/company/refex-group/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center bg-blue-700 hover:bg-blue-800 rounded transition-all cursor-pointer">
                <i className="ri-linkedin-fill text-base"></i>
              </a>
              <a href="https://www.instagram.com/refexgroup/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:opacity-90 rounded transition-all cursor-pointer">
                <i className="ri-instagram-line text-base"></i>
              </a>
            </div>

            <h3 className="text-base font-semibold mb-6 relative pb-3">
              Corporate Office
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-green-500"></span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <i className="ri-phone-line text-lg flex-shrink-0 mt-0.5 text-green-500"></i>
                <a href="tel:+914443405950" className="text-sm text-gray-300 hover:text-white transition-colors">
                  +91-44 – 4340 5950
                </a>
              </div>
              <div className="flex items-start gap-3">
                <i className="ri-map-pin-line text-lg flex-shrink-0 mt-0.5 text-green-500"></i>
                <p className="text-sm text-gray-300">
                  Refex Building, 67, Bazullah Road,<br />
                  Parthasarathy Puram, T Nagar,<br />
                  Chennai – 600 017, Tamil Nadu
                </p>
              </div>
              <div className="flex items-start gap-3">
                <i className="ri-mail-line text-lg flex-shrink-0 mt-0.5 text-green-500"></i>
                <a href="mailto:cs@refexrenewables.com" className="text-sm text-gray-300 hover:text-white transition-colors">
                  cs@refexrenewables.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © 2025 Refex Renewables & Infrastructure Limited. All rights reserved
            </p>
            <div className="flex items-center gap-6">
              <a href="/terms-conditions" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Use
              </a>
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-emerald-500 transition-colors text-sm whitespace-nowrap"
              >
                Privacy Policy
              </Link>
              <Link
                to="/legal-disclaimer"
                className="text-gray-400 hover:text-emerald-500 transition-colors text-sm whitespace-nowrap"
              >
                Legal Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
