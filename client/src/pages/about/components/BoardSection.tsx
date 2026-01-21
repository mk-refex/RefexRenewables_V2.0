import { useState } from 'react';

const BoardSection = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const boardMembers = [
    {
      name: 'Mr. Kalpesh Kumar',
      position: 'Managing Director',
      din: '07966090',
      image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2023/05/Kalpesh-Kumar-HQ.jpg',
      bio: 'Mr. Kalpesh Kumar (age 41 years), is a commerce graduate from M.D.S. University, Ajmer and did his Post Graduate Diploma in Business Management (PGDBM) at M.S. Ramaiah Institute of Management (MSRIM), Bangalore, specializing in Finance and Marketing and Executive Leadership Programme (EPLM) from IIM Calcutta. Mr. Kalpesh has 18+ years of experience in the solar and renewables space, corporate finance and M&A and investor relations. He understands both financial and business metrics very well which helps to lead the business understanding its nuances. From the initial stages, Mr. Kalpesh has been responsible for Solar Commercial & Industrial (C&I) business right from strategy to winning the business and to execute and finance. His experience has provided him the expertise to forecast short term and long-term financial needs of the company based on business plan and projects on hand, identify sources and mobilize funds at a low cost.',
      directorships: [
        'Sherisha Solar SPV Two Private Limited',
        'Taper Solar Energy Limited',
        'Wither Solar Energy Private Limited',
        'Broil Solar Energy Private Limited',
        'Refex Green Power Limited (Managing Director)',
        'Sherisha Rooftop Solar SPV Three Private Limited',
        'Sherisha Rooftop Solar SPV Four Private Limited',
        'Sherisha Agriculture Private Limited',
        'STPL Horticulture Private Limited'
      ]
    },
    {
      name: 'Mr. Anil Jain',
      position: 'Non-Executive Director',
      din: '00181960',
      image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2023/05/Anil-Jain.jpg',
      bio: 'Mr. Anil Jain is a leading industrialist with a vision and drive to establish a successful Refex business portfolio. Gifted with innate talent in business and acuity, Anil has grown his businesses into many successful diversified business units with the purpose of creating sustainable solutions and providing environment-friendly energy alternatives in India. He has also been instrumental in setting up the angel investment & incubation Center of JITO for pan-India operation when he was the Secretary General of Jain International Trade Organization.',
      directorships: [
        'Venwind Refex Power Limited',
        'R.L.Fine Chem Private Limited',
        'PHD Chamber of Commerce & Industry',
        'Venwind Refex Limited',
        'Lee Pharma Limited',
        'EMCO Limited',
        'Refex Holding Private Limited (Managing Director)',
        'Refex Industries Limited (Managing Director)',
        '3I Medical Technologies Private Limited',
        'SILRES Energy Solutions Private Limited',
        'Refex Green Power Limited',
        'Refex Airports and Transportation Private Limited',
        'Refex Beverages Private Limited',
        'AJ Incubation Forum'
      ]
    },
    {
      name: 'Mr. Dinesh Kumar Agarwal',
      position: 'Non-Executive Director',
      din: '07544757',
      image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2023/05/Dinesh.jpg',
      bio: 'Mr. Dinesh Kumar Agarwal has honed his entrepreneurial skills across several business domains and has always been successful in all his business endeavour. His expertise with numbers has helped several businesses to move up in the growth trajectory. His business acumen in Corporate Finance spanning Audit, Financial Accounting and Planning, Tax and Fundraising has helped raise over ₹3,000 crores (Equity + Debt) for clients. Mr. Dinesh has made a significant difference to our business since he joined us in 2014. His expertise combined with his passion and zeal to grow Refex business reflects in our growth journey. In the past, Dinesh has been working in reputed organizations Aircel and Brisk specializing in streamlining internal processes and functions. His diverse experience includes Solar EPC segments and Utility-scale projects, consulting for start-ups, SMEs, established Corporate Houses, and International NGOs. Mr. Dinesh has received several industry recognitions for his contribution to management and related areas.',
      directorships: [
        'Venwind Refex Limited',
        'Venwind Refex Power Limited',
        'Refex Holding Private Limited (WTD, CFO & CEO)',
        'Refex Industries Limited (WTD & CFO)',
        'Refex Solar Power Private Limited',
        'EMCO Limited',
        'Anam Medical Solutions Private Limited',
        'Aj Incubation Forum',
        'Torrid Solar Power Private Limited',
        'Refex Life Sciences Private Limited',
        'Refex Pharma Services Private Limited',
        'VS Lignite Power Private Limited',
        'Sourashakthi Energy Private Limited',
        'Spangle Energy Private Limited',
        'Sherisha Infrastructure Private Limited',
        'Scorch Solar Energy Private Limited',
        'Singe Solar Energy Private Limited',
        'Sparzana Aviation Private Limited'
      ]
    },
    {
      name: 'Ms. Talluri Jayanthi',
      position: 'Independent Director',
      din: '09272993',
      image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2023/05/Ms.-Talluri-Jayanthi.jpg',
      bio: 'Ms. Talluri Jayanthi is a legal professional with an extensive experience of more than 24 years comprising of successful litigant counsel and in-house Corporate Counsel in varied sectors including but not limited to Healthcare, IT& ITES, Infrastructure, Real Estate, Commercial Corporate matters, Airports, Domestic & Family disputes, Labour Laws, Property Laws, Corporate Litigation. A Tech Savvy Legal Entrepreneur, Founder & Managing Director of Talluri Law Consultancy Private Limited, handling corporate litigation, with solution-oriented analysis and providing full life cycle legal solutions & legal strategy.',
      directorships: [
        'Securekloud Technologies Limited',
        'Talluri\'s Kitchen Temple Private Limited',
        'Som Datt Finance Corporation Limited',
        'Talluri Law Consultancy (OPC) Private Limited',
        'International Conveyors Limited'
      ]
    },
    {
      name: 'Mr. Pillappan Amalnathan',
      position: 'Independent Director',
      din: '08730795',
      image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2023/05/Mr.-Pillappan-Amalnathan.jpg',
      bio: 'Mr. Pillappan Amalanathan has an established independent practice for the past 20 years with a well-equipped library, office and three junior associates. He appeared in many cases relating to political fronts, commercial matters for several private concerns and companies including matters relating to Company Law such as winding up, amalgamation and reconstitution and have advised on company formation, tax planning, pre-litigation settlements, international contracts formation. He has wide exposure and experience in diverse fields of law and enjoy a good reputation in the Bar.',
      directorships: [
        'Krish Solar Ventures Private Limited',
        'Torrid Solar Power Private Limited',
        'V Tree Traders Private Limited'
      ]
    },
    {
      name: 'Ms. Latha Venkatesh',
      position: 'Independent Director',
      din: '06983347',
      image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2023/05/Ms.-Latha-Venkatesh-new.jpg',
      bio: 'Ms. Latha Venkatesh is a senior Auditor with eleven years of experience in practice. Having worked with clients in multiple industries, she has good knowledge and vast experience in cost audit, internal audits, processes and standards that significantly improve the opinion on company records, banking practices and management & taxation, technology driven performances. She has engaged with multiple business sectors like Engineering & Manufacturing, Construction & Civil Engineering and Banking.',
      directorships: [
        'K.S.Oils Limited',
        'Torrid Solar Power Private Limited',
        'Refex Industries Limited'
      ]
    }
  ];

  return (
    <section id="board-of-directors" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Board of Directors</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our board comprises experienced professionals who provide strategic guidance and governance
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {boardMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-green-600 text-white rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedMember(selectedMember === index ? null : index)}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">{member.name}</h3>
                <p className="text-sm text-white/90">{member.position}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a 
            href="https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/RRIL-Ceased-Directors.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors whitespace-nowrap cursor-pointer"
          >
            RRIL - Directors Ceased
          </a>
        </div>
      </div>

      {/* Modal for member details */}
      {selectedMember !== null && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedMember(null)}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl w-full p-8 relative my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors cursor-pointer z-10"
            >
              <i className="ri-close-line text-xl"></i>
            </button>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img 
                  src={boardMembers[selectedMember].image}
                  alt={boardMembers[selectedMember].name}
                  className="w-full aspect-square object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {boardMembers[selectedMember].name}
                </h3>
                <p className="text-green-600 font-medium mb-1">
                  {boardMembers[selectedMember].position}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  DIN: {boardMembers[selectedMember].din}
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {boardMembers[selectedMember].bio}
                </p>
                
                {/* Directorship Details */}
                <div className="border-t pt-4">
                  <button 
                    className="flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-3"
                    onClick={(e) => {
                      e.stopPropagation();
                      const detailsDiv = e.currentTarget.nextElementSibling as HTMLElement;
                      if (detailsDiv) {
                        detailsDiv.style.display = detailsDiv.style.display === 'none' ? 'block' : 'none';
                      }
                    }}
                  >
                    <span>DIRECTORSHIP DETAILS</span>
                    <i className="ri-arrow-down-s-line text-xl"></i>
                  </button>
                  <div style={{ display: 'none' }}>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      {boardMembers[selectedMember].directorships.map((company, idx) => (
                        <li key={idx}>{company}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BoardSection;
