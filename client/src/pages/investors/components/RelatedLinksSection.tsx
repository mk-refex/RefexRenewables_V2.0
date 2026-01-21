import { useState } from 'react';

export default function RelatedLinksSection() {
  const [selectedYear, setSelectedYear] = useState('2024-25');

  const investorLinks = [
    { title: 'Annual Reports', url: '/annual-reports' },
    { title: 'Shareholding Pattern', url: '/shareholding-pattern' },
    { title: 'Unaudited Quarterly Financial Results', url: '/unaudited-quarterly-financial-results' },
    { title: 'Audited Financial Results', url: '/audited-financial-results' },
    { title: 'Policies', url: '/policies' },
    { title: 'Board Meeting Intimation Approving Financial Results', url: '/board-meeting-intimation-approving-financial-results' },
    { title: 'Subsidiaries Financial Statement', url: '/subsidiaries-financial-statement' },
    { title: 'EGM Notice', url: '/egm-notice' },
    { title: 'Postal Ballot', url: '/postal-ballot-notice' },
    { title: 'Scrutinizer Report', url: '/scrutinizer-report' },
    { title: 'Annual Return', url: '/annual-return' },
    { title: 'AGM Notice', url: '/agm-notice' },
    { title: 'News Publication of Financial Results', url: '/news-publication-of-financial-results' },
    { title: 'Trading Window Intimation', url: '/trading-window-intimation' },
    { title: 'Miscellaneous Information', url: '/miscellaneous-information' },
    { title: 'Charter Documents', url: '/charter-documents' },
    { title: 'Disclosure of Material Event and Information', url: '/disclosure-of-material-event-and-information' },
    { title: 'Non-Convertible Debentures', url: '/non-convertible-debentures' },
    { title: 'Employee Benefit Scheme', url: '/employee-benefit-scheme' },
    { title: 'Documents for Inspection', url: '/documents-for-inspection' },
    { title: 'Proceeding of General Meeting and Voting Results', url: '/proceeding-of-general-meeting-and-voting-results' },
    { title: 'Miscellaneous Announcements/Intimation/Disclosures', url: '/miscellaneous-announcements-intimation-disclosures' },
    { title: 'Online Dispute Resolution (for disputes pertaining to Company\'s Securities)', url: '/online-dispute-resolution-for-disputes-pertaining-to-companys-securities' },
  ];

  const years = [
    '2024-25', '2023-24', '2022-23', '2021-22', '2020-21', 
    '2019-20', '2018-19', '2017-18', '2016-17', '2015-16', 
    '2014-15', '2012-13', '2011-12'
  ];

  const annualReports = [
    { year: '2024-25', title: 'RRIL Annual Report FY25', thumbnail: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/03/rril-annual-reports.png', url: 'https://rril-website.local.sharajman.com/wp-content/uploads/investor-media/pdf/RRIL_Annual_Report_FY2024-25.pdf' },
    { year: '2023-24', title: 'RRIL Annual Report FY24', url: 'https://rril-website.local.sharajman.com/wp-content/uploads/investor-media/pdf/RRIL-Annual-Report-FY24.pdf' },
    { year: '2022-23', title: 'RRIL Annual Report FY23', url: 'https://rril-website.local.sharajman.com/wp-content/uploads/investor-media/pdf/RRIL-Annual-Report-FY2023.pdf' },
    { year: '2021-22', title: 'RRIL Annual Report FY22', url: 'https://rril-website.local.sharajman.com/wp-content/uploads/investor-media/pdf/SIL-Annual-Report-FY22.pdf' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Links</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Links */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <ul className="space-y-3">
              {investorLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-gray-700 hover:text-green-600 transition-colors text-sm block py-2 border-b border-gray-100 cursor-pointer"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Annual Reports */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="mb-6">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm cursor-pointer"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    FY {year}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Annual Reports</h4>
              <div className="space-y-4">
                {annualReports
                  .filter((report) => report.year === selectedYear)
                  .map((report, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                      {report.thumbnail && (
                        <div className="flex-shrink-0">
                          <img
                            src={report.thumbnail}
                            alt={report.title}
                            className="w-20 h-28 object-cover rounded"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-8 h-8 flex-shrink-0">
                            <img
                              src="https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/invest-file.svg"
                              alt="file"
                              className="w-full h-full"
                            />
                          </div>
                          <p className="text-sm font-medium text-gray-900">{report.title}</p>
                        </div>
                        <div className="flex gap-4">
                          <a
                            href={report.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-green-600 hover:text-green-700 cursor-pointer"
                          >
                            View
                            <img
                              src="https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/visible.svg"
                              alt="view"
                              className="w-4 h-4"
                            />
                          </a>
                          <a
                            href={report.url}
                            download
                            className="inline-flex items-center gap-2 text-sm text-green-600 hover:text-green-700 cursor-pointer"
                          >
                            Download
                            <img
                              src="https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/investor-download.svg"
                              alt="download"
                              className="w-4 h-4"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
