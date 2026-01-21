import { useState } from 'react';

export function AccordionSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const items = [
    {
      title: 'Environment',
      image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/environment.jpg',
      content: 'We are committed to safeguarding the planet\'s natural resources through strategic policies and a robust environmental management system. By prioritizing eco-friendly technologies across all operations, we continuously strive to make our practices more sustainable. Our focus is on conserving resources, reducing carbon emissions, preserving water, and restoring ecosystems to their natural state.',
      imagePosition: 'left'
    },
    {
      title: 'Renewable Energy',
      image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/renewable-energy.jpg',
      content: 'Our renewable energy business aims to provide affordable solar energy to private and government agencies, and we have established our solar foothold in the Himalayas with our prestigious client BSF.',
      imagePosition: 'right'
    },
    {
      title: 'Ecosystem Restoration and Plantation Drive',
      image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Ecosystem-Restoration-and-Plantation-Drive.jpg',
      content: 'We prioritize biodiversity conservation and ecosystem restoration through plantation drives, barren land rehabilitation, and agro-farming practices, initiating a visionary program "Plant for the Future" to plant and nurture 100,000 saplings over the next 10 years.',
      imagePosition: 'left'
    },
    {
      title: 'Water Stewardship',
      image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Water-Stewardship.jpg',
      content: 'We aim to be water positive by 2030 by reducing freshwater demand through recycling, rainwater harvesting, and ground recharge at our sites and facility offices, prioritizing wise and judicious use of water resources.',
      imagePosition: 'right'
    },
    {
      title: 'Waste Management & Material Circularity',
      image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Waste-Management-Material-Circularity.jpg',
      content: 'Municipal Solid Waste (MSW) poses a serious challenge in India, creating pollution, land scarcity, and health hazards when unmanaged, but RRIL is turning this nuisance into opportunity through its Compressed Biogas (CBG) plants. MSW serves as a critical input for these plants, where the organic fraction is processed to produce clean, renewable CBG, while the residual by-product is converted into "Biodhanic", an eco-friendly organic manure. This dual output exemplifies material circularity—transforming waste into both energy and soil nutrients—while reducing dependence on fossil fuels and chemical fertilizers.',
      imagePosition: 'left'
    },
    {
      title: 'Health & Safety',
      image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Health-Safety.jpg',
      content: 'We\'re dedicated to achieving mission zero harm, prioritizing a safe workplace and the physical and mental well-being of our entire workforce. Our Occupational Health and Safety Management System (OHSMS) adhere to ISO 45001:2018, and we\'re proud to report zero fatalities or permanent disabilities to date.',
      imagePosition: 'right'
    },
    {
      title: 'Vamika',
      image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/physical-mental-and-career-wellness-support-to-women.jpg',
      content: 'Refex Renewables has established an internal networking forum called \'Vamika\' to provide physical, mental and career wellness support to women, including safety needs addressed through self-defense workshops and a "Wellness Work-from-Home policy".',
      imagePosition: 'left'
    },
    {
      title: 'Mental Health Awareness',
      image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Mental-Health-Awareness.jpg',
      content: 'Refex recognizes the importance of mental health and has initiated a program of mental health awareness for its employees through regular sessions with mental wellness experts.',
      imagePosition: 'right'
    },
    {
      title: 'Basic Health Surveillance',
      image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Basic-Health-Surveillance.jpg',
      content: 'Refex has implemented regular basic health screening for its staff and workers engaged in high-risk activities to identify and manage workplace-related incidents caused by poor health conditions. Tests include blood pressure, blood sugar levels, eyesight, hemoglobin count, breathing difficulties, and skin diseases.',
      imagePosition: 'left'
    },
    {
      title: 'Corporate Social Responsibility',
      image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Corporate-Social-Responsibility.jpg',
      content: 'At Refex Renewables, we believe in creating social value by giving back to the community. Our CSR activities are managed with the highest transparency, oversight, and impact assessment, focusing on four thematic areas. We strive for a sustainable business model connected with society to contribute to the underprivileged and marginalized sections.',
      imagePosition: 'right'
    },
    {
      title: 'Water and Sanitation',
      image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Water-and-Sanitation.jpg',
      content: 'Providing potable water through "Nirmal Jal" program and maintaining water supply network.',
      imagePosition: 'left'
    },
    {
      title: 'Ecosystem Restoration',
      image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Ecosystem-Restoration.jpg',
      content: 'Planting 100,000 trees, rehabilitating abandoned mines, and offering land and water for crop cultivation.',
      imagePosition: 'right'
    },
    {
      title: 'Child Education and Skill Training',
      image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Child-Education-and-Skill-Training.jpg',
      content: 'Access to quality education is vital for breaking the cycle of poverty and empowering future generations. By supporting child education, underprivileged children are given the opportunity to learn, grow, and dream beyond limitations. Skill training further equips youth and adults with practical capabilities, enabling them to secure livelihoods with dignity and confidence. Together, these efforts nurture not just individuals but also stronger, more resilient communities.',
      imagePosition: 'left'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {items.map((item, index) => (
            <div key={index} className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
              >
                <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                <i className={`ri-arrow-${openIndex === index ? 'up' : 'down'}-s-line text-3xl text-green-600`}></i>
              </button>
              
              {openIndex === index && (
                <div className="p-8 bg-white">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${item.imagePosition === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                    {item.imagePosition === 'left' ? (
                      <>
                        <div className="w-full h-96">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                          />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-gray-900 mb-4">{item.title}</h2>
                          <p className="text-lg text-gray-700 leading-relaxed">{item.content}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <h2 className="text-3xl font-bold text-gray-900 mb-4">{item.title}</h2>
                          <p className="text-lg text-gray-700 leading-relaxed">{item.content}</p>
                        </div>
                        <div className="w-full h-96">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
