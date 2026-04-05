import SectionHeading, {
  sectionMainHeadingClassName,
} from "../../../components/common/SectionHeading";
import PageFadeInUp from "./PageFadeInUp";

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
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-4">
        <PageFadeInUp
          delay={0}
          className="mb-10 flex flex-col items-center text-center sm:mb-12 lg:mb-16"
        >
          <SectionHeading
            badgeText="OUR"
            text="Upcoming Projects"
            className="justify-center"
            watermarkAlign="center"
          />
          <h2
            className={`${sectionMainHeadingClassName} mt-3 text-gray-900 max-w-4xl px-1`}
          >
            <span className="block sm:inline">Greenfield Project </span>
            <span className="block sm:inline">
              of 800 TPD input and 38 TPD CBG output
            </span>
          </h2>
        </PageFadeInUp>
        <PageFadeInUp delay={0.2}>
          <div className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-lg bg-white shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[520px]">
                  <thead>
                    <tr className="bg-emerald-600 text-white">
                      <th className="px-3 py-3 text-left text-sm font-semibold sm:px-6 sm:py-4 sm:text-base">
                        City
                      </th>
                      <th className="px-3 py-3 text-left text-sm font-semibold sm:px-6 sm:py-4 sm:text-base">
                        Plant Capacity
                      </th>
                      <th className="px-3 py-3 text-left text-sm font-semibold sm:px-6 sm:py-4 sm:text-base">
                        Feedstock Type
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((project, index) => (
                      <tr
                        key={index}
                        className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} transition-colors hover:bg-emerald-50`}
                      >
                        <td className="px-3 py-3 text-sm font-medium text-gray-900 sm:px-6 sm:py-4 sm:text-base">
                          {project.city}
                        </td>
                        <td className="px-3 py-3 text-sm text-gray-700 sm:px-6 sm:py-4 sm:text-base">
                          {project.capacity}
                        </td>
                        <td className="px-3 py-3 text-sm text-gray-700 sm:px-6 sm:py-4 sm:text-base">
                          {project.feedstock}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </PageFadeInUp>
      </div>
    </section>
  );
}
