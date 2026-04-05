import FadeInUp from "@/components/common/FadeInUp";

const CommitteesSection = () => {
  const committees = [
    {
      name: 'Audit Committee',
      members: [
        { name: 'Ms. Talluri Jayanthi', designation: 'Independent Director', category: 'Chairperson' },
        { name: 'Mr. Dinesh Kumar Agarwal', designation: 'Non-Executive Director', category: 'Member' },
        { name: 'Mr. Pillappan Amalnathan', designation: 'Independent Director', category: 'Member' }
      ]
    },
    {
      name: 'Nomination and Remuneration Committee',
      members: [
        { name: 'Ms. Talluri Jayanthi', designation: 'Independent Director', category: 'Chairperson' },
        { name: 'Mr. Anil Jain', designation: 'Non-Executive Director', category: 'Member' },
        { name: 'Mr. Pillappan Amalnathan', designation: 'Independent Director', category: 'Member' }
      ]
    },
    {
      name: 'Stakeholders Relationship Committee',
      members: [
        { name: 'Mr. Pillappan Amalnathan', designation: 'Independent Director', category: 'Chairperson' },
        { name: 'Mr. Anil Jain', designation: 'Non-Executive Director', category: 'Member' },
        { name: 'Mr. Dinesh Kumar Agarwal', designation: 'Non-Executive Director', category: 'Member' }
      ]
    }
  ];

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[110px]">
        <div className="mb-8 text-center sm:mb-12">
          <FadeInUp delay={0.2}>
          <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:mb-4 sm:text-3xl lg:text-4xl">
            Composition of Committees
          </h2>
          </FadeInUp>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-brand text-white">
                <th className="px-3 py-3 text-left text-sm font-semibold sm:px-4 sm:py-4 sm:text-base lg:px-6 lg:text-lg">
                  Name of Committee
                </th>
                <th className="px-3 py-3 text-left text-sm font-semibold sm:px-4 sm:py-4 sm:text-base lg:px-6 lg:text-lg">
                  Name of Committee Members
                </th>
                <th className="px-3 py-3 text-left text-sm font-semibold sm:px-4 sm:py-4 sm:text-base lg:px-6 lg:text-lg">
                  Designation
                </th>
                <th className="px-3 py-3 text-left text-sm font-semibold sm:px-4 sm:py-4 sm:text-base lg:px-6 lg:text-lg">
                  Category
                </th>
              </tr>
            </thead>
            <tbody>
              {committees.map((committee, committeeIndex) => (
                <>
                  {committee.members.map((member, memberIndex) => (
                    <tr 
                      key={`${committeeIndex}-${memberIndex}`}
                      className={`border-b border-gray-200 ${committeeIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                    >
                      {memberIndex === 0 && (
                        <td 
                          rowSpan={committee.members.length}
                          className="px-3 py-3 align-top text-sm font-medium text-gray-900 sm:px-4 sm:py-4 sm:text-base lg:px-6"
                        >
                          {committee.name}
                        </td>
                      )}
                      <td className="px-3 py-3 text-sm text-gray-700 sm:px-4 sm:py-4 sm:text-base lg:px-6">
                        {member.name}
                      </td>
                      <td className="px-3 py-3 text-sm text-gray-700 sm:px-4 sm:py-4 sm:text-base lg:px-6">
                        {member.designation}
                      </td>
                      <td className="px-3 py-3 text-sm text-gray-700 sm:px-4 sm:py-4 sm:text-base lg:px-6">
                        {member.category}
                      </td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CommitteesSection;
