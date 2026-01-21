import { useState } from 'react';

const SeniorManagementSection = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const managementMembers = [
    {
      name: 'Purvesh Madhusudan Kapadia',
      position: 'Chief Human Resource Officer',
      image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Purvesh.jpg',
      bio: 'In a career span of 25+ Years – Purvesh has played multiple strategic pinnacle roles ranging from CHRO-Managing Partner-COO-Director HR etc. Throughout his career he has taken up several challenging assignments and has been instrumental in redefining the HR process for several leading organizations globally.'
    },
    {
      name: 'Sahil Singla',
      position: 'President Corporate Finance',
      image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Sahil.jpg',
      bio: 'Sahil has over 19 years of experience in fundraising across sectors and has cumulatively raised more than USD 5 BN from Banks/ FIs/ Private Equity etc. He has a unique blend of technical, financial and legal domain knowledge which sets him apart.'
    },
    {
      name: 'Sonal Jain',
      position: 'Vice-President Accounts & Taxation',
      image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Sonal.jpg',
      bio: 'Sonal is an accomplished Chartered Accountant with excellent knowledge of financial reporting and accounting, having over 19 years of experience in Manufacturing and service industry including Transmission, Solar and EPC.'
    },
    {
      name: 'Harini Sriraaman',
      position: 'Vice-President Group General Counsel',
      image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Harini.jpg',
      bio: 'Harini comes with over 17 years of experience in handling and addressing corporate legal and commercial matters and litigations. At Refex, as a General Counsel, she handles Contracts review and management, IPR Management, Litigation management, Mergers & Acquisitions, Corporate Governance and compliances.'
    },
    {
      name: 'Srividya Nirmalkumar',
      position: 'Vice-President Corporate Communications',
      image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Srividya.jpg',
      bio: 'Srividya is an extremely goal-oriented communication professional with over 20 years of work experience in various leading organizations. She is highly experienced in internal and external communication, social media, digital marketing and event management.'
    },
    {
      name: 'Suhail Shariff',
      position: 'Vice-President Administration & Facility',
      image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Suhail.jpg',
      bio: 'Suhail has over 23 years of Facility Management experience including Asset Management, Project Management, Security Services, Transitions and Change Management. A very goal-oriented leader, Suhail focuses on creating an enhanced customer experience.'
    },
    {
      name: 'Gagan Bihari Pattnaik',
      position: 'General Manager ESG & Sustainability',
      image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Gagan.jpg',
      bio: 'Gagan is a chartered environmentalist and sustainability professional with over 18 years of international experience. His assignments include geographies such as India, USA, and the Middle East in Sustainability and ESG domain.'
    },
    {
      name: 'Srivaths Varadharajan',
      position: 'Chief Technology Officer',
      image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Srivaths-CTO-new.jpg',
      bio: 'Srivaths Varadharajan is a senior technology and business executive with over 25 years of extensive experience across diverse industries including fintech, banking, insurance, capital markets, telecom, and BPO/KPO.'
    }
  ];

  return (
    <section id="senior-management" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Senior Management Personnel</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our leadership team brings decades of combined experience across various domains
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {managementMembers.map((member, index) => (
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
      </div>

      {/* Modal for member details */}
      {selectedMember !== null && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMember(null)}
        >
          <div 
            className="bg-white rounded-lg max-w-2xl w-full p-8 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors cursor-pointer"
            >
              <i className="ri-close-line text-xl"></i>
            </button>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img 
                  src={managementMembers[selectedMember].image}
                  alt={managementMembers[selectedMember].name}
                  className="w-full aspect-square object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {managementMembers[selectedMember].name}
                </h3>
                <p className="text-green-600 font-medium mb-4">
                  {managementMembers[selectedMember].position}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {managementMembers[selectedMember].bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SeniorManagementSection;
