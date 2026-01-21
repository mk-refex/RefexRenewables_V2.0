export default function ProjectsSection() {
  const projects = [
    {
      city: 'Salem',
      capacity: '200 TPD',
      feedstock: 'Municipal Solid Waste'
    },
    {
      city: 'Coimbatore',
      capacity: '250 TPD',
      feedstock: 'Municipal Solid Waste'
    },
    {
      city: 'Madurai',
      capacity: '250 TPD',
      feedstock: 'Municipal Solid Waste'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">
            OUR <span className="text-gray-800">Current Projects</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 leading-tight">
            Greenfield Project<br />
            of 700 TPD input and 33 TPD CBG output
          </h2>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-emerald-600 text-white">
                  <th className="px-6 py-4 text-left font-semibold">City</th>
                  <th className="px-6 py-4 text-left font-semibold">Plant Capacity</th>
                  <th className="px-6 py-4 text-left font-semibold">Feedstock Type</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-emerald-50 transition-colors`}>
                    <td className="px-6 py-4 text-gray-900 font-medium">{project.city}</td>
                    <td className="px-6 py-4 text-gray-700">{project.capacity}</td>
                    <td className="px-6 py-4 text-gray-700">{project.feedstock}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
