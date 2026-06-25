export function ReportsSection() {
  const reports = [
    {
      title: "Sustainability report",
      image: "/wp-content/uploads/2025/10/environment.jpg",
      link: "https://www.refex.group/wp-content/uploads/2025/01/Sustainability-Report-2023-24.pdf",
    },
    {
      title: "ESG Dashboard",
      image: "/wp-content/uploads/2025/10/renewable-energy.jpg",
      link: "/wp-content/uploads/2025/10/RRIL-ESG-Dashboard-FY25.pdf",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[110px]">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {reports.map((report, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden sm:h-80 md:h-96">
                <img
                  src={report.image}
                  alt={report.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-900/50 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-6 lg:p-8">
                <h5 className="mb-3 text-xl font-bold sm:mb-4 sm:text-2xl">
                  {report.title}
                </h5>
                <a
                  href={report.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block cursor-pointer whitespace-nowrap rounded-md bg-brand px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-brand-hover sm:px-6 sm:py-3 sm:text-base"
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
