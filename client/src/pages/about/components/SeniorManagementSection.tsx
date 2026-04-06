import FadeInUp from '@/components/common/FadeInUp';
import { useState } from 'react';

type ManagementMember = {
  name: string;
  position: string;
  image: string;
  bio: string[];
  company: string;
};

const SeniorManagementSection = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const managementMembers: ManagementMember[] = [
    {
      name: 'Purvesh Madhusudan Kapadia',
      position: 'Chief Human Resource Officer',
      company: "",
      image: '/wp-content/uploads/2025/10/Purvesh.jpg',
      bio: [
        'In a career span of 25+ Years – Purvesh has played multiple strategic pinnacle roles ranging from CHRO-Managing Partner-COO-Director HR etc.',
        'Throughout his career he has taken up several challenging assignments and has been instrumental in redefining the HR process for several leading organizations globally. Business process reengineering is his exclusive strength tested and proven in his career span. His innate process-driven approach has helped in achieving double-digit top-line and bottom-line growth for several organizations, he has been associated with.',
        'He has worked with several prestigious organizations such as Terex, Intervalve India Ltd, Sheetal Group etc. Purvesh has also spent 10+ years in the IT Education sector.',
        "Academically, he has a Master's in Human Resources – Development & Management from Jamnalal Bajaj Institute of Management Studies and Honours in Systems Management (Information Technology) from National Institute of Information Technology."
      ]
    },
    {
      name: 'Sahil Singla',
      position: 'President',
      company: "Corporate Finance",
      image: '/wp-content/uploads/2025/10/Sahil.jpg',
      bio: ['Sahil has over 19 years of experience in fundraising across sectors and has cumulatively raised more than USD 5 BN from Banks/ FIs/ Private Equity etc.',
        'He has a unique blend of technical, financial and legal domain knowledge which sets him apart.',
        'His expertise is Project Structuring/ Advisory, Equity Investments & Divestments, Financial Modelling, Business Analysis, Negotiations & Regulatory/ Policy Advocacy.',
        'He has demonstrated experience in spearheading strategic initiatives and managing large key accounts. In his earlier stints he has worked for various reputed organisations like JP Morgan, IL&FS Financial Services, SREI Infrastructure, PTC India Limited etc.',
        'Sahil has completed his MBA in Finance from IMT Ghaziabad and his Bachelors in Legal Science from Government law college, Mumbai and a University topper in Law.'
      ]
    },
    {
      name: 'Sonal Jain',
      position: 'Vice President',
      company: "Accounts & Taxation",
      image: '/wp-content/uploads/2025/10/Sonal.jpg',
      bio: ['Sonal is an accomplished Chartered Accountant with excellent knowledge of financial reporting and accounting, having over 19 years of experience in Manufacturing and service industry including Transmission, Solar and EPC.',
        'He has expertise in disclosure of information in financial reporting of the listed entities and evaluation of the Internal financial controls for the business and design and implementation of the internal controls in order to mitigate the financial risks.',
        'He has worked with numerous listed entities and has released quarterly/ annual results of listed entity as per the requirement of SEBI LODR.',
        'In his past, he has led the "Cost Reduction Team" for KEC International Limited, Jabalpur plant and was able to reduce the conversion cost of the plant by 25% over a period of 5 years.',
        'He was a member of various Capex/ Opex Negotiation committees and was able to make substantial savings.',
        'He is an expert in identifying revenue leakages and ways of fixing the same.',
        'Academically he graduated from Rani Durgavati University, Jabalpur and is a Fellow Member of ICAI.'
      ]
    },
    {
      name: 'Harini Sriraaman',
      position: 'Vice President',
      company: "Group General Counsel",
      image: '/wp-content/uploads/2025/10/Harini.jpg',
      bio: ['Harini comes with over 17 years of experience in handling and addressing corporate legal and commercial matters and litigations. She has worked with esteemed organizations like HCL Technologies Limited, Siva Group, Tattva Group (part of India Cements Group) apart from her association with the law office of M/s. Satish Parasaran at Chennai.',
        'At Refex, as a General Counsel, she handles Contracts review and management, IPR Management, Litigation management, Mergers & Acquisitions, Corporate Governance and compliances, Disputes Resolution etc. She also heads the POSH committee.',
        'Academically Harini is a qualified Commerce and Law graduate. She is a certified M&A Professional – Legal & Business Strategies from Indian Academy of Law & Management, New Delhi.'
      ]
    },
    {
      name: 'Srividya Nirmalkumar',
      position: 'Vice President',
      company: "Corporate Communications",
      image: '/wp-content/uploads/2025/10/Srividya.jpg',
      bio: ['Srividya is an extremely goal-oriented communication professional with over 20 years of work experience in various leading organizations. She is highly experienced in internal and external communication, social media, digital marketing and event management.',
        'Whether it is an analyst report or a marketing document, she is the go-to person. Srividya has also led diversity and inclusion and CSR initiatives in her career.',
        'She is very passionate about D&I, whether strategy or implementation and strives to make a difference to society. She has won several D&I awards and recognition for the various initiatives that she implemented.',
        "She has also been the head of the POSH committee. She has been recognized as a 'star performer' several times and has led award-winning teams.",
        'Her strengths include process definition and project management and has been highly acclaimed for the same. She has worked for highly reputed organizations such as Satyam, UST, Accenture, AGS Health etc.',
        "Academically she has completed her Master's in Public Administration and post-graduation in Digital Marketing from Mudra Institute of Communications, Ahmedabad.",
      ]
    },
    {
      name: 'Suhail Shariff',
      position: 'Vice President',
      company: "Administration & Facility",
      image: '/wp-content/uploads/2025/10/Suhail.jpg',
      bio: ['Suhail has over 23 years of Facility Management experience including Asset Management, Project Management, Security Services, Transitions and Change Management.',
        'A very goal-oriented leader, Suhail focuses on creating an enhanced customer experience through effective facility management solutions and has contributed to accomplishing critical FM transitions across India and global clients (APAC, EMEA & America Regions).',
        'He has previously worked for esteemed organizations such as CB Richard Ellis, Cushman & Wakefield, and Jones Lang Lasalle.',
        'Academically, Suhail holds a Commerce degree with a Certification in Leadership Programme issued by the Project Management Institute.'
      ]
    },
    // {
    //   name: 'Saravanan Vasanth',
    //   position: 'Chief of Staff',
    //   company: "MedTech & Renewables",
    //   image: 'https://refex.group/uploads/images/general/general/general-general-saravanan-cos-1766577062439-5058.png',
    //   bio: ['Saravanan has 11 years of experience in corporate development and strategic planning roles across the Sports, Media, Entertainment, and Manufacturing sectors. He is a chief of staff for MedTech. In his previous roles, he has managed auction strategy for an IPL franchise and ran an incubation business end-to-end. Saravanan specializes in shaping new strategic initiatives to unlock value-creation opportunities. He has worked with reputed organizations such as Times Group and Grundfos.',
    //     'Academically, Saravanan is an engineer from Madras Institute of Technology (MIT) and has an MBA from IIM Rohtak.',
    //   ]
    // },
    {
      name: 'Srivaths Varadharajan',
      position: 'Chief Technology Officer',
      company: "",
      image: '/wp-content/uploads/2025/10/Srivaths-CTO-new.jpg',
      bio: ['Srivaths Varadharajan is a senior technology and business executive with over 25 years of extensive experience across diverse industries including fintech, banking, insurance, capital markets, telecom, and BPO/KPO. He has held leadership positions such as CTO, CIO, COO, CDO & CEO, demonstrating strategic vision and execution in digital transformation, enterprise architecture, cybersecurity, and platform development. His core strengths lie in aligning technology with business strategy, leading cross-functional teams, and delivering scalable digital products using emerging technologies like AI/ML, blockchain & cloud infrastructure.',
        'Throughout his career, Srivaths has driven large-scale transformation initiatives at organizations like Spice Money, Niyogin Fintech, Kotak Securities, and Reliance Group. He has led the design and implementation of rule-based engines, smart automation tools, omni-channel platforms, and open-source digital ecosystems. As a founding team member at Niyogin Fintech, he helped build a paperless SME lending platform and led the creation of 21 applications and 42 microservices in just six months. At Spice Money, he was instrumental in expanding market share from 10.5% to 17.5% by modernizing the tech stack and building scalable, API-integrated platforms.',
        'Recognized with awards such as the CIO 100 Honouree, Skoch Innovation Award, and EMC Transformers Award, Srivaths is known for delivering measurable impact on topline growth, operational efficiency, and customer experience. He holds an MBA from K. J. Somaiya Institute and certifications in Six Sigma and Project Management. A forward-thinking leader, he continues to advise organizations as an independent consultant, enabling digital transformation through design thinking, data science, and secure, cloud-native solutions.'
      ]
    },
    {
      name: 'Jaya Krishna',
      position: 'Director',
      company: "Corporate Finance",
      image: '/wp-content/uploads/2025/10/Jayakrishna.jpg',
      bio: ['Jaya Krishna is a seasoned Chartered Accountant with over two decades of leadership experience across corporate finance, project funding, strategic planning, and international financial management.',
        "Academically, he completed his Master's in Business Administration from the Indian Institute of Management - Mumbai.",
        'He holds a professional license as a Chartered Accountant from the Institute of Chartered Accountants of India and a professional accountant in the UK.',
        "Before Refex, he was with MEIL Group.",
        "He has spearheaded critical financial functions for multinational companies, managing end-to-end finance operations including IPOs, M&A, private equity, treasury, international taxation, and regulatory compliance. His expertise spans diverse sectors and geographies, with a proven track record in handling large-scale greenfield projects, complex acquisition financing, and cross-border funding exceeding ₹15,000 Cr and USD 300+ Million.",
        "He has played a pivotal role in managing investor relations, board reporting, and global financial consolidation across India, the US, and Europe. His leadership extends to SAP/ERP implementation, cost optimization, risk management, and working capital strategies. With deep knowledge of IFRS, US GAAP, and Indian GAAP, he has ensured strong financial controls and governance while successfully leading audits, compliance, and tax functions. He has also overseen strategic initiatives including debt syndication, structured finance, capital expenditure control, and expansion projects.",
        "His key achievements include completing 6 successful M&A deals, securing large-scale financing from over 20 banks, leading global joint ventures, and setting up end-to-end finance, commercial, and IT systems. A strategic leader and mentor, he is committed to driving financial excellence, business growth, and long-term stakeholder value."
      ]
    },
    {
      name: "Mr. Rajeev Vaze",
      position: "Vice President",
      company: "Supply Chain Management (SCM)",
      image: '/wp-content/uploads/2025/10/Rajeev.jpg',
      bio: ["Rajeev Vaze is Vice President & Head SCM with over 30 years of extensive experience driving strategic initiatives across the renewable energy and infrastructure sectors.",
        "He is a recognized leader in Strategic Procurement, Cost Optimization, and Project Execution.",
        'He holds a Graduate degree in Mechanical Engineering from the University of Pune and a Post Graduate Diploma in Materials Management from Symbiosis Institute of Business Management, Pune.',
        "His proven track record includes impactful assignments at industry-leading companies such as Vikram Solar, Suzlon Energy, Kirloskar Brothers Ltd, and Thermax Ltd.",
      ]
    }
  ];

  return (
    <section id="senior-management" className="bg-gray-50 py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[110px]">
        <div className="mb-8 text-center sm:mb-12">
          <FadeInUp delay={0.2}>
            <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:mb-4 sm:text-3xl lg:text-4xl">Senior Management Personnel</h2>
          <p className="mx-auto max-w-3xl px-1 text-base text-gray-600 sm:text-lg">
            Our leadership team brings decades of combined experience across various domains
          </p>
          </FadeInUp>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {managementMembers.map((member, index) => (
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
              <div className="flex flex-col gap-1 p-6 text-left">
                <h3 className="text-lg font-bold leading-snug">{member.name}</h3>
                <p className="text-sm leading-snug text-white/90">
                  {member.position}
                </p>
                <p className="text-xs leading-snug text-white/80">
                  {member.company}
                </p>
              </div>
            </div>
          ))}
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
              aria-labelledby="senior-mgmt-modal-title"
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
                  id="senior-mgmt-modal-title"
                  className="pr-10 text-2xl font-bold text-gray-900"
                >
                  {managementMembers[selectedMember].name}
                </h3>
                <p className="text-brand mt-2 font-medium">
                  {managementMembers[selectedMember].position}
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  {managementMembers[selectedMember].company}
                </p>
                <div className="mt-4 space-y-3 leading-relaxed text-gray-700">
                  {managementMembers[selectedMember].bio.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SeniorManagementSection;
