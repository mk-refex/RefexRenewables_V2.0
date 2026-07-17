import { SeniorManagement } from "../models/index.js";

/** Default seed — matches previous hardcoded SeniorManagementSection */
const DEFAULT_TITLE = "Senior Management Personnel";
const DEFAULT_DESCRIPTION =
  "Our leadership team brings decades of combined experience across various domains";

const DEFAULT_MEMBERS = [
  {
    id: 1,
    name: "Mr. Rajeev Vaze",
    position: "Chief Operating Officer",
    company: "Compressed Bio-Gas (“CBG”) business",
    image: "/uploads/wp-content/uploads/2025/10/Rajeev.jpg",
    bio: [
      "Rajeev Vaze, Vice President, has over 30 years of extensive experience driving strategic initiatives across the renewable energy and infrastructure sectors.",
      "He is a recognized leader in Strategic Procurement, Cost Optimization, and Project Execution.",
      "He holds a Graduate degree in Mechanical Engineering from the University of Pune and a Post Graduate Diploma in Materials Management from Symbiosis Institute of Business Management, Pune.",
      "His proven track record includes impactful assignments at industry-leading companies such as Vikram Solar, Suzlon Energy, Kirloskar Brothers Ltd, and Thermax Ltd.",
      "He had been handling SCM at organisation al level and now, w.e.f. May 01, 2026, he has been designated as Chief Operating Officer – Compressed Bio-Gas (“CBG”) Business, in the category of ‘senior managerial person’.",
    ],
    order: 0,
  },
  {
    id: 2,
    name: "Purvesh Madhusudan Kapadia",
    position: "Chief Human Resource Officer",
    company: "",
    image: "/wp-content/uploads/2025/10/Purvesh_img.jpg",
    bio: [
      "In a career span of 25+ Years – Purvesh has played multiple strategic pinnacle roles ranging from CHRO-Managing Partner-COO-Director HR etc.",
      "Throughout his career he has taken up several challenging assignments and has been instrumental in redefining the HR process for several leading organizations globally. Business process reengineering is his exclusive strength tested and proven in his career span. His innate process-driven approach has helped in achieving double-digit top-line and bottom-line growth for several organizations, he has been associated with.",
      "He has worked with several prestigious organizations such as Terex, Intervalve India Ltd, Sheetal Group etc. Purvesh has also spent 10+ years in the IT Education sector.",
      "Academically, he has a Master's in Human Resources – Development & Management from Jamnalal Bajaj Institute of Management Studies and Honours in Systems Management (Information Technology) from National Institute of Information Technology.",
    ],
    order: 1,
  },
  {
    id: 3,
    name: "Sahil Singla",
    position: "President",
    company: "Corporate Finance",
    image: "/wp-content/uploads/2025/10/Sahil.jpg",
    bio: [
      "Sahil has over 19 years of experience in fundraising across sectors and has cumulatively raised more than USD 5 BN from Banks/ FIs/ Private Equity etc.",
      "He has a unique blend of technical, financial and legal domain knowledge which sets him apart.",
      "His expertise is Project Structuring/ Advisory, Equity Investments & Divestments, Financial Modelling, Business Analysis, Negotiations & Regulatory/ Policy Advocacy.",
      "He has demonstrated experience in spearheading strategic initiatives and managing large key accounts. In his earlier stints he has worked for various reputed organisations like JP Morgan, IL&FS Financial Services, SREI Infrastructure, PTC India Limited etc.",
      "Sahil has completed his MBA in Finance from IMT Ghaziabad and his Bachelors in Legal Science from Government law college, Mumbai and a University topper in Law.",
    ],
    order: 2,
  },
  {
    id: 4,
    name: "Sonal Jain",
    position: "Vice President",
    company: "Accounts & Taxation",
    image: "/wp-content/uploads/2025/10/Sonal.jpg",
    bio: [
      "Sonal is an accomplished Chartered Accountant with excellent knowledge of financial reporting and accounting, having over 19 years of experience in Manufacturing and service industry including Transmission, Solar and EPC.",
      "He has expertise in disclosure of information in financial reporting of the listed entities and evaluation of the Internal financial controls for the business and design and implementation of the internal controls in order to mitigate the financial risks.",
      "He has worked with numerous listed entities and has released quarterly/ annual results of listed entity as per the requirement of SEBI LODR.",
      'In his past, he has led the "Cost Reduction Team" for KEC International Limited, Jabalpur plant and was able to reduce the conversion cost of the plant by 25% over a period of 5 years.',
      "He was a member of various Capex/ Opex Negotiation committees and was able to make substantial savings.",
      "He is an expert in identifying revenue leakages and ways of fixing the same.",
      "Academically he graduated from Rani Durgavati University, Jabalpur and is a Fellow Member of ICAI.",
    ],
    order: 3,
  },
  {
    id: 5,
    name: "Harini Sriraaman",
    position: "Vice President",
    company: "Group General Counsel",
    image: "/wp-content/uploads/2025/10/Harini.jpg",
    bio: [
      "Harini comes with over 17 years of experience in handling and addressing corporate legal and commercial matters and litigations. She has worked with esteemed organizations like HCL Technologies Limited, Siva Group, Tattva Group (part of India Cements Group) apart from her association with the law office of M/s. Satish Parasaran at Chennai.",
      "At Refex, as a General Counsel, she handles Contracts review and management, IPR Management, Litigation management, Mergers & Acquisitions, Corporate Governance and compliances, Disputes Resolution etc. She also heads the POSH committee.",
      "Academically Harini is a qualified Commerce and Law graduate. She is a certified M&A Professional – Legal & Business Strategies from Indian Academy of Law & Management, New Delhi.",
    ],
    order: 4,
  },
  {
    id: 6,
    name: "Srividya Nirmalkumar",
    position: "Vice President",
    company: "Corporate Communications",
    image: "/wp-content/uploads/2025/10/Srividya.jpg",
    bio: [
      "Srividya is an extremely goal-oriented communication professional with over 20 years of work experience in various leading organizations. She is highly experienced in internal and external communication, social media, digital marketing and event management.",
      "Whether it is an analyst report or a marketing document, she is the go-to person. Srividya has also led diversity and inclusion and CSR initiatives in her career.",
      "She is very passionate about D&I, whether strategy or implementation and strives to make a difference to society. She has won several D&I awards and recognition for the various initiatives that she implemented.",
      "She has also been the head of the POSH committee. She has been recognized as a 'star performer' several times and has led award-winning teams.",
      "Her strengths include process definition and project management and has been highly acclaimed for the same. She has worked for highly reputed organizations such as Satyam, UST, Accenture, AGS Health etc.",
      "Academically she has completed her Master's in Public Administration and post-graduation in Digital Marketing from Mudra Institute of Communications, Ahmedabad.",
    ],
    order: 5,
  },
  {
    id: 7,
    name: "Suhail Shariff",
    position: "Vice President",
    company: "Administration & Facility",
    image: "/wp-content/uploads/2025/10/Suhail.jpg",
    bio: [
      "Suhail has over 23 years of Facility Management experience including Asset Management, Project Management, Security Services, Transitions and Change Management.",
      "A very goal-oriented leader, Suhail focuses on creating an enhanced customer experience through effective facility management solutions and has contributed to accomplishing critical FM transitions across India and global clients (APAC, EMEA & America Regions).",
      "He has previously worked for esteemed organizations such as CB Richard Ellis, Cushman & Wakefield, and Jones Lang Lasalle.",
      "Academically, Suhail holds a Commerce degree with a Certification in Leadership Programme issued by the Project Management Institute.",
    ],
    order: 6,
  },
  {
    id: 8,
    name: "Srivaths Varadharajan",
    position: "Chief Technology Officer",
    company: "",
    image: "/wp-content/uploads/2025/10/Srivaths-CTO-new.jpg",
    bio: [
      "Srivaths Varadharajan is a senior technology and business executive with over 25 years of extensive experience across diverse industries including fintech, banking, insurance, capital markets, telecom, and BPO/KPO. He has held leadership positions such as CTO, CIO, COO, CDO & CEO, demonstrating strategic vision and execution in digital transformation, enterprise architecture, cybersecurity, and platform development. His core strengths lie in aligning technology with business strategy, leading cross-functional teams, and delivering scalable digital products using emerging technologies like AI/ML, blockchain & cloud infrastructure.",
      "Throughout his career, Srivaths has driven large-scale transformation initiatives at organizations like Spice Money, Niyogin Fintech, Kotak Securities, and Reliance Group. He has led the design and implementation of rule-based engines, smart automation tools, omni-channel platforms, and open-source digital ecosystems. As a founding team member at Niyogin Fintech, he helped build a paperless SME lending platform and led the creation of 21 applications and 42 microservices in just six months. At Spice Money, he was instrumental in expanding market share from 10.5% to 17.5% by modernizing the tech stack and building scalable, API-integrated platforms.",
      "Recognized with awards such as the CIO 100 Honouree, Skoch Innovation Award, and EMC Transformers Award, Srivaths is known for delivering measurable impact on topline growth, operational efficiency, and customer experience. He holds an MBA from K. J. Somaiya Institute and certifications in Six Sigma and Project Management. A forward-thinking leader, he continues to advise organizations as an independent consultant, enabling digital transformation through design thinking, data science, and secure, cloud-native solutions.",
    ],
    order: 7,
  },
];

function normalizeMembers(members) {
  if (!Array.isArray(members)) return [];
  return members
    .map((m, index) => ({
      id: Number(m.id) || index + 1,
      name: String(m.name || "").trim(),
      position: String(m.position || "").trim(),
      company: String(m.company || "").trim(),
      image: String(m.image || "").trim(),
      bio: Array.isArray(m.bio)
        ? m.bio.map((p) => String(p || "").trim()).filter(Boolean)
        : String(m.bio || "")
            .split(/\n\s*\n/)
            .map((p) => p.trim())
            .filter(Boolean),
      order: Number.isFinite(Number(m.order)) ? Number(m.order) : index,
    }))
    .sort((a, b) => a.order - b.order)
    .map((m, index) => ({ ...m, order: index }));
}

async function ensureRow() {
  const [row, created] = await SeniorManagement.findOrCreate({
    where: { id: 1 },
    defaults: {
      id: 1,
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      members: DEFAULT_MEMBERS,
    },
  });

  if (!created && (!Array.isArray(row.members) || row.members.length === 0)) {
    await row.update({
      title: row.title || DEFAULT_TITLE,
      description: row.description || DEFAULT_DESCRIPTION,
      members: DEFAULT_MEMBERS,
    });
    await row.reload();
  }

  return row;
}

export async function getSeniorManagement(_req, res) {
  try {
    const row = await ensureRow();
    return res.json({
      title: row.title,
      description: row.description,
      members: normalizeMembers(row.members),
    });
  } catch (error) {
    console.error("getSeniorManagement error:", error);
    return res.status(500).json({ message: "Failed to load senior management" });
  }
}

export async function saveSeniorManagement(req, res) {
  try {
    const body = req.body && typeof req.body === "object" ? req.body : {};
    const title = String(body.title ?? DEFAULT_TITLE).trim() || DEFAULT_TITLE;
    const description = String(body.description ?? "").trim();
    const members = normalizeMembers(body.members);

    for (const member of members) {
      if (!member.name) {
        return res.status(400).json({ message: "Each member must have a name" });
      }
    }

    const row = await ensureRow();
    await row.update({ title, description, members });
    await row.reload();

    return res.json({
      title: row.title,
      description: row.description,
      members: normalizeMembers(row.members),
    });
  } catch (error) {
    console.error("saveSeniorManagement error:", error);
    return res.status(500).json({ message: "Failed to save senior management" });
  }
}
