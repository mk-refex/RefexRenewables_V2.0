export function ReportsSection() {
  const reports = [
    {
      title: 'Sustainability report',
      image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/environment.jpg',
      link: 'https://www.refex.group/wp-content/uploads/2025/01/Sustainability-Report-2023-24.pdf'
    },
    {
      title: 'ESG Dashboard',
      image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/renewable-energy.jpg',
      link: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/RRIL-ESG-Dashboard-FY25.pdf'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reports.map((report, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-96 overflow-hidden">
                <img 
                  src={report.image} 
                  alt={report.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-900/50 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h5 className="text-2xl font-bold mb-4">{report.title}</h5>
                <a 
                  href={report.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md transition-colors duration-300 whitespace-nowrap cursor-pointer"
                >
                  View Report
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
