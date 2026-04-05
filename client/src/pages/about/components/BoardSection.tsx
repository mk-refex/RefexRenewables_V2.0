import FadeInUp from '@/components/common/FadeInUp';
import { useState } from 'react';

const BoardSection = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const boardMembers = [
    {
      name: 'Mr. Kalpesh Kumar',
      position: 'Managing Director',
      din: '07966090',
      image: '/wp-content/uploads/2023/05/Kalpesh-Kumar-HQ.jpg',
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
        'STPL Horticulture Private Limited',
        'Spectrum Renewable Energy Private Limited',
        'Sherisha Solar LLP'
      ]
    },
    {
      name: 'Mr. Anil Jain',
      position: 'Non-Executive Director',
      din: '00181960',
      image: '/wp-content/uploads/2023/05/Anil-Jain.jpg',
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
        'AJ Incubation Forum',
        'Refex Life Sciences Private Limited',
        'STPL Solutions LLP',
        'LSM Developers LLP',
        'Traction Infra LLP',
        'Refex Capital Advisors LLP',
        'Aabhuti Special Situations Advisory LLP',
        'Coastalview Estates LLP',
        'Smartdwell Realty LLP',
        'Sherisha Solar LLP'

      ]
    },
    {
      name: 'Mr. Dinesh Kumar Agarwal',
      position: 'Non-Executive Director',
      din: '07544757',
      image: '/wp-content/uploads/2023/05/Dinesh.jpg',
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
        'Sparzana Aviation Private Limited',
        'Traction Infra LLP',
        'Refex Capital Advisors LLP',
        'Aabhuti Special Situations Advisory LLP',
        'Coastalview Estates LLP',
        'Smartdwell Realty LLP',
        'SKCNP Infraparks LLP',
        'LSM Developers LLP',
        'RKMR Consultants LLP',
        'RKMR Estates LLP',

      ]
    },
    {
      name: 'Ms. Talluri Jayanthi',
      position: 'Independent Director',
      din: '09272993',
      image: '/wp-content/uploads/2023/05/Ms.-Talluri-Jayanthi.jpg',
      bio: 'Ms. Talluri Jayanthi is a legal professional with an extensive experience of more than 24 years comprising of successful litigant counsel and in-house Corporate Counsel in varied sectors including but not limited to Healthcare, IT& ITES, Infrastructure, Real Estate, Commercial Corporate matters, Airports, Domestic & Family disputes, Labour Laws, Property Laws, Corporate Litigation. A Tech Savvy Legal Entrepreneur, Founder & Managing Director of Talluri Law Consultancy Private Limited, handling corporate litigation, with solution-oriented analysis and providing full life cycle legal solutions & legal strategy.',
      directorships: [
        'Securekloud Technologies Limited',
        'Talluri\'s Kitchen Temple Private Limited',
        // 'Som Datt Finance Corporation Limited',
        'Talluri Law Consultancy (OPC) Private Limited',
        'International Conveyors Limited',
        'Crescentis Capital Limited',
      ]
    },
    {
      name: 'Mr. Pillappan Amalnathan',
      position: 'Independent Director',
      din: '08730795',
      image: '/wp-content/uploads/2023/05/Mr.-Pillappan-Amalnathan.jpg',
      bio: 'Mr. Pillappan Amalanathan has an established independent practice for the past 20 years with a well-equipped library, office and three junior associates. He appeared in many cases relating to political fronts, commercial matters for several private concerns and companies including matters relating to Company Law such as winding up, amalgamation and reconstitution and have advised on company formation, tax planning, pre-litigation settlements, international contracts formation. He has wide exposure and experience in diverse fields of law and enjoy a good reputation in the Bar.',
      directorships: [
        'Krish Solar Ventures Private Limited',
        // 'Torrid Solar Power Private Limited',
        'V Tree Traders Private Limited'
      ]
    },
    {
      name: 'Ms. Latha Venkatesh',
      position: 'Independent Director',
      din: '06983347',
      image: '/wp-content/uploads/2023/05/Ms.-Latha-Venkatesh-new.jpg',
      bio: 'Ms. Latha Venkatesh is a senior Auditor with eleven years of experience in practice. Having worked with clients in multiple industries, she has good knowledge and vast experience in cost audit, internal audits, processes and standards that significantly improve the opinion on company records, banking practices and management & taxation, technology driven performances. She has engaged with multiple business sectors like Engineering & Manufacturing, Construction & Civil Engineering and Banking.',
      directorships: [
        'K.S.Oils Limited',
        // 'Torrid Solar Power Private Limited',
        'Refex Industries Limited',
        'Kwick Forensic Solutions Limited'
      ]
    }
  ];

  return (
    <section id="board-of-directors" className="bg-white py-8 sm:py-10 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[110px]">
        <div className="mb-8 text-center sm:mb-12">
          <FadeInUp delay={0.2}>
          <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:mb-4 sm:text-3xl lg:text-4xl">Board of Directors</h2>
          <p className="mx-auto max-w-3xl px-1 text-base text-gray-600 sm:text-lg">
            Our board comprises experienced professionals who provide strategic guidance and governance
          </p>
          </FadeInUp>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {boardMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-brand text-white rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer"
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
        <div className="mt-8 text-center sm:mt-12">
          <a 
            href="/wp-content/uploads/2025/10/RRIL-Ceased-Directors.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block cursor-pointer whitespace-nowrap rounded-lg bg-brand px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-hover sm:px-8 sm:py-3 sm:text-base"
          >
            RRIL - Directors Ceased
          </a>
        </div>
      </div>

      {/* Modal — text only; height capped so content scrolls inside the viewport */}
      {selectedMember !== null && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/50"
          onClick={() => setSelectedMember(null)}
          role="presentation"
        >
          <div className="flex min-h-full items-start justify-center px-4 py-8 sm:px-6 sm:py-10">
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="board-member-modal-title"
              className="relative w-full max-w-2xl rounded-lg bg-white shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close"
                onClick={() => setSelectedMember(null)}
                className="absolute right-3 top-3 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200"
              >
                <i className="ri-close-line text-xl"></i>
              </button>

              <div className="max-h-[min(85vh,calc(100dvh-4rem))] overflow-y-auto overscroll-y-contain px-6 pb-8 pt-14 sm:px-8 sm:pt-16">
                <h3
                  id="board-member-modal-title"
                  className="pr-10 text-2xl font-bold text-gray-900"
                >
                  {boardMembers[selectedMember].name}
                </h3>
                <p className="text-brand mt-2 font-medium">
                  {boardMembers[selectedMember].position}
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  DIN: {boardMembers[selectedMember].din}
                </p>
                <p className="mt-4 leading-relaxed text-gray-700">
                  {boardMembers[selectedMember].bio}
                </p>

                <div className="mt-6 border-t border-gray-200 pt-4">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between text-left text-base font-semibold text-gray-900"
                    onClick={(e) => {
                      e.stopPropagation();
                      const detailsDiv = e.currentTarget
                        .nextElementSibling as HTMLElement | null;
                      if (detailsDiv) {
                        detailsDiv.style.display =
                          detailsDiv.style.display === "none"
                            ? "block"
                            : "none";
                      }
                    }}
                  >
                    <span className="pr-2">
                      Directorship and Designated Partnership Details
                    </span>
                    <i className="ri-arrow-down-s-line shrink-0 text-xl"></i>
                  </button>
                  <div style={{ display: "none" }}>
                    <ol className="mt-3 list-inside list-decimal space-y-2 text-gray-700">
                      {boardMembers[selectedMember].directorships.map(
                        (company, idx) => (
                          <li key={idx}>{company}</li>
                        ),
                      )}
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
