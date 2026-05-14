import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative px-4 text-white sm:px-6 lg:px-[90px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://static.readdy.ai/image/d0ead66ce635a168f1e83b108be94826/40572303efd77e1e21831440411cb52e.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto py-12 sm:px-2 lg:py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:gap-12">
            {/* About Us */}
            <div>
              <h3 className="text-base font-semibold mb-6 relative pb-3">
                About Us
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-green-500"></span>
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/about-us"
                    className="text-sm text-gray-300 hover:text-green-500 transition-colors flex items-center gap-2 group"
                  >
                    <i className="ri-arrow-right-s-line text-green-500 group-hover:text-green-400"></i>
                    <span>Vision & Mission</span>
                  </Link>
                </li>
                <li>
                  <a
                    href="/about-us#core-values"
                    className="text-sm text-gray-300 hover:text-green-500 transition-colors flex items-center gap-2 group"
                  >
                    <i className="ri-arrow-right-s-line text-green-500 group-hover:text-green-400"></i>
                    <span>Core Values</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/about-us#our-journey"
                    className="text-sm text-gray-300 hover:text-green-500 transition-colors flex items-center gap-2 group"
                  >
                    <i className="ri-arrow-right-s-line text-green-500 group-hover:text-green-400"></i>
                    <span>Our Journey</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/about-us#board-of-directors"
                    className="text-sm text-gray-300 hover:text-green-500 transition-colors flex items-center gap-2 group"
                  >
                    <i className="ri-arrow-right-s-line text-green-500 group-hover:text-green-400"></i>
                    <span>Board Of Directors</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.refex.group/careers/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-300 hover:text-green-500 transition-colors flex items-center gap-2 group"
                  >
                    <i className="ri-arrow-right-s-line text-green-500 group-hover:text-green-400"></i>
                    <span>Careers</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.refex.group/diversity-inclusion/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-300 hover:text-green-500 transition-colors flex items-center gap-2 group"
                  >
                    <i className="ri-arrow-right-s-line text-green-500 group-hover:text-green-400"></i>
                    <span>Diversity Inclusion</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.refex.group/gallery/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-300 hover:text-green-500 transition-colors flex items-center gap-2 group"
                  >
                    <i className="ri-arrow-right-s-line text-green-500 group-hover:text-green-400"></i>
                    <span>Gallery</span>
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
                  <Link
                    to="/solar-energy"
                    className="text-sm text-gray-300 hover:text-green-500 transition-colors flex items-center gap-2 group"
                  >
                    <i className="ri-arrow-right-s-line text-green-500 group-hover:text-green-400"></i>
                    <span>Solar Energy</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/compressed-bio-gas"
                    className="text-sm text-gray-300 hover:text-green-500 transition-colors flex items-center gap-2 group"
                  >
                    <i className="ri-arrow-right-s-line text-green-500 group-hover:text-green-400"></i>
                    <span>Compressed Bio-Gas</span>
                  </Link>
                </li>
              </ul>

              <h3 className="text-base font-semibold mb-6 relative pb-3">
                Sustainability
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-green-500"></span>
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/esg"
                    className="text-sm text-gray-300 hover:text-green-500 transition-colors flex items-center gap-2 group"
                  >
                    <i className="ri-arrow-right-s-line text-green-500 group-hover:text-green-400"></i>
                    <span>RRIL On ESG</span>
                  </Link>
                </li>
                <li>
                  <a
                    href="/esg#esg-policies"
                    className="text-sm text-gray-300 hover:text-green-500 transition-colors flex items-center gap-2 group"
                  >
                    <i className="ri-arrow-right-s-line text-green-500 group-hover:text-green-400"></i>
                    <span>ESG Policies</span>
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
                  <Link
                    to="/investors?tab=related-links&categoryKey=annual-reports"
                    className="text-sm text-gray-300 hover:text-green-500 transition-colors flex items-center gap-2 group"
                  >
                    <i className="ri-arrow-right-s-line text-green-500 group-hover:text-green-400"></i>
                    <span>Annual Reports</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/investors?tab=related-links&categoryKey=shareholding-pattern"
                    className="text-sm text-gray-300 hover:text-green-500 transition-colors flex items-center gap-2 group"
                  >
                    <i className="ri-arrow-right-s-line text-green-500 group-hover:text-green-400"></i>
                    <span>Shareholding Pattern</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/investors?tab=related-links&categoryKey=audited-financial-results"
                    className="text-sm text-gray-300 hover:text-green-500 transition-colors flex items-center gap-2 group"
                  >
                    <i className="ri-arrow-right-s-line text-green-500 group-hover:text-green-400"></i>
                    <span>Audited Financial Results</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/investors?tab=related-links&categoryKey=policies"
                    className="text-sm text-gray-300 hover:text-green-500 transition-colors flex items-center gap-2 group"
                  >
                    <i className="ri-arrow-right-s-line text-green-500 group-hover:text-green-400"></i>
                    <span>Policies</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/investors?tab=related-links&categoryKey=annual-return"
                    className="text-sm text-gray-300 hover:text-green-500 transition-colors flex items-center gap-2 group"
                  >
                    <i className="ri-arrow-right-s-line text-green-500 group-hover:text-green-400"></i>
                    <span>Annual Return</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/investors?tab=related-links&categoryKey=board-meeting-intimation-financial-results"
                    className="text-sm text-gray-300 hover:text-green-500 transition-colors flex items-center gap-2 group"
                  >
                    <i className="ri-arrow-right-s-line text-green-500 group-hover:text-green-400"></i>
                    <span>
                      Board Meeting Intimation Approving Financial Results
                    </span>
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
              <div className="mb-8 flex flex-wrap gap-3">
                <a
                  href="https://www.facebook.com/refexindustrieslimited/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center bg-blue-600 hover:bg-blue-700 rounded transition-all cursor-pointer"
                >
                  <i className="ri-facebook-fill text-base"></i>
                </a>
                <a
                  href="https://x.com/GroupRefex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center bg-black hover:bg-gray-800 rounded transition-all cursor-pointer"
                >
                  <i className="ri-twitter-x-line text-base"></i>
                </a>
                <a
                  href="https://www.youtube.com/@refexgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center bg-red-600 hover:bg-red-700 rounded transition-all cursor-pointer"
                >
                  <i className="ri-youtube-fill text-base"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/refex-group/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center bg-blue-700 hover:bg-blue-800 rounded transition-all cursor-pointer"
                >
                  <i className="ri-linkedin-fill text-base"></i>
                </a>
                <a
                  href="https://www.instagram.com/refexgroup/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:opacity-90 rounded transition-all cursor-pointer"
                >
                  <i className="ri-instagram-line text-base"></i>
                </a>
              </div>

              <h3 className="text-base font-semibold mb-6 relative pb-3">
                Registered Office
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-green-500"></span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <i className="ri-phone-line text-lg flex-shrink-0 mt-0.5 text-green-500"></i>
                  <a
                    href="tel:+914443405950"
                    className="text-sm text-gray-300 hover:text-green-500 transition-colors"
                  >
                    +91-44 – 4340 5950
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <i className="ri-map-pin-line text-lg flex-shrink-0 mt-0.5 text-green-500"></i>
                  <p className="text-sm text-gray-300">
                    2nd Floor, Refex Towers, Sterling Road Signal,
                    <br />
                    313, Valluvar Kottam High Road, Nungambakkam,
                    <br />
                    Chennai – 600 034, Tamil Nadu
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <i className="ri-mail-line text-lg flex-shrink-0 mt-0.5 text-green-500"></i>
                  <a
                    href="mailto:cs@refexrenewables.com"
                    className="text-sm text-gray-300 hover:text-green-500 transition-colors"
                  >
                    cs@refexrenewables.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20">
          <div className="container mx-auto px-4 py-6 sm:px-6">
            {/* <p className="mb-4 text-center text-xs text-gray-400">
              Location data includes information from{' '}
              <a
                href="https://www.openstreetmap.org/copyright"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-green-400"
              >
                OpenStreetMap
              </a>{' '}
              and{' '}
              <a
                href="https://github.com/dr5hn/countrystatecity-countries"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-green-400"
              >
                CountryStateCity
              </a>{' '}
              (ODbL-1.0).
            </p> */}
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-center text-sm text-gray-300 md:text-left">
                © 2025 Refex Renewables & Infrastructure Limited. All rights
                reserved
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:justify-end">
                <a
                  href="/terms-conditions"
                  className="text-sm text-gray-300 hover:text-green-500 transition-colors"
                >
                  Terms & Conditions
                </a>
                <a
                  href="/privacy-policy"
                  className="text-sm text-gray-300 hover:text-green-500 transition-colors"
                >
                  Privacy Policy
                </a>
                {/* <a href="/legal-disclaimer" className="text-sm text-gray-300 hover:text-green-500 transition-colors">
                Legal Disclaimer
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
