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
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Composition of Committees
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="py-4 px-6 text-left font-semibold text-base lg:text-lg">
                  Name of Committee
                </th>
                <th className="py-4 px-6 text-left font-semibold text-base lg:text-lg">
                  Name of Committee Members
                </th>
                <th className="py-4 px-6 text-left font-semibold text-base lg:text-lg">
                  Designation
                </th>
                <th className="py-4 px-6 text-left font-semibold text-base lg:text-lg">
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
                          className="py-4 px-6 text-gray-900 font-medium align-top"
                        >
                          {committee.name}
                        </td>
                      )}
                      <td className="py-4 px-6 text-gray-700">
                        {member.name}
                      </td>
                      <td className="py-4 px-6 text-gray-700">
                        {member.designation}
                      </td>
                      <td className="py-4 px-6 text-gray-700">
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
