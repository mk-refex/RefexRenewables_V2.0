import SectionHeading from '../../../components/common/SectionHeading';
import FadeInUp from '../../../components/common/FadeInUp';

export default function ProjectsSection() {
  const projects = [
    {
      city: 'Trichy',
      capacity: '100 TPD',
      feedstock: 'Municipal Solid Waste'
    },
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
        <FadeInUp delay={0} className="text-center mb-16 flex flex-col items-center">
          <SectionHeading
            badgeText="OUR"
            text="Upcoming Projects"
            className="justify-center"
            watermarkAlign="center"
          />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 leading-tight">
            Greenfield Project <br/> of 800 TPD input and 38 TPD CBG output
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.2}>
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
        </FadeInUp>
      </div>
    </section>
  );
}
