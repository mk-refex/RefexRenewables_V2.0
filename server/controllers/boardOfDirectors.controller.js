import { BoardOfDirectors } from "../models/index.js";

const DEFAULT_TITLE = "Board of Directors";
const DEFAULT_DESCRIPTION =
  "Our board comprises experienced professionals who provide strategic guidance and governance";

const DEFAULT_CEASED_BUTTON = {
  label: "RRIL - Directors Ceased",
  url: "/wp-content/uploads/2025/10/RRIL-Ceased-Directors.pdf",
};

/** Default seed — matches previous hardcoded BoardSection */
const DEFAULT_MEMBERS = [
  {
    id: 1,
    name: "Mr. Kalpesh Kumar",
    position: "Managing Director",
    din: "07966090",
    image: "/wp-content/uploads/2023/05/Kalpesh-Kumar-HQ.jpg",
    bio: [
      "Mr. Kalpesh Kumar (age 41 years), is a commerce graduate from M.D.S. University, Ajmer and did his Post Graduate Diploma in Business Management (PGDBM) at M.S. Ramaiah Institute of Management (MSRIM), Bangalore, specializing in Finance and Marketing and Executive Leadership Programme (EPLM) from IIM Calcutta. Mr. Kalpesh has 18+ years of experience in the solar and renewables space, corporate finance and M&A and investor relations. He understands both financial and business metrics very well which helps to lead the business understanding its nuances. From the initial stages, Mr. Kalpesh has been responsible for Solar Commercial & Industrial (C&I) business right from strategy to winning the business and to execute and finance. His experience has provided him the expertise to forecast short term and long-term financial needs of the company based on business plan and projects on hand, identify sources and mobilize funds at a low cost.",
    ],
    directorships: [
      "Sherisha Solar SPV Two Private Limited",
      "Taper Solar Energy Limited",
      "Wither Solar Energy Private Limited",
      "Broil Solar Energy Private Limited",
      "Refex Green Power Limited (Managing Director)",
      "Sherisha Rooftop Solar SPV Three Private Limited",
      "Sherisha Rooftop Solar SPV Four Private Limited",
      "Sherisha Agriculture Private Limited",
      "STPL Horticulture Private Limited",
      "Spectrum Renewable Energy Private Limited",
      "Sherisha Solar LLP",
    ],
    order: 0,
  },
  {
    id: 2,
    name: "Mr. Anil Jain",
    position: "Non-Executive Director",
    din: "00181960",
    image: "/wp-content/uploads/2023/05/Anil-Jain.jpg",
    bio: [
      "Mr. Anil Jain is a leading industrialist with a vision and drive to establish a successful Refex business portfolio. Gifted with innate talent in business and acuity, Anil has grown his businesses into many successful diversified business units with the purpose of creating sustainable solutions and providing environment-friendly energy alternatives in India. He has also been instrumental in setting up the angel investment & incubation Center of JITO for pan-India operation when he was the Secretary General of Jain International Trade Organization.",
    ],
    directorships: [
      "Venwind Refex Power Limited",
      "R.L.Fine Chem Private Limited",
      "PHD Chamber of Commerce & Industry",
      "Venwind Refex Limited",
      "Lee Pharma Limited",
      "EMCO Limited",
      "Refex Holding Private Limited (Managing Director)",
      "Refex Industries Limited (Managing Director)",
      "3I Medical Technologies Private Limited",
      "SILRES Energy Solutions Private Limited",
      "Refex Green Power Limited",
      "Refex Airports and Transportation Private Limited",
      "Refex Beverages Private Limited",
      "AJ Incubation Forum",
      "Refex Life Sciences Private Limited",
      "STPL Solutions LLP",
      "LSM Developers LLP",
      "Traction Infra LLP",
      "Refex Capital Advisors LLP",
      "Aabhuti Special Situations Advisory LLP",
      "Coastalview Estates LLP",
      "Smartdwell Realty LLP",
      "Sherisha Solar LLP",
    ],
    order: 1,
  },
  {
    id: 3,
    name: "Mr. Dinesh Kumar Agarwal",
    position: "Non-Executive Director",
    din: "07544757",
    image: "/wp-content/uploads/2023/05/Dinesh.jpg",
    bio: [
      "Mr. Dinesh Kumar Agarwal has honed his entrepreneurial skills across several business domains and has always been successful in all his business endeavour. His expertise with numbers has helped several businesses to move up in the growth trajectory. His business acumen in Corporate Finance spanning Audit, Financial Accounting and Planning, Tax and Fundraising has helped raise over ₹3,000 crores (Equity + Debt) for clients. Mr. Dinesh has made a significant difference to our business since he joined us in 2014. His expertise combined with his passion and zeal to grow Refex business reflects in our growth journey. In the past, Dinesh has been working in reputed organizations Aircel and Brisk specializing in streamlining internal processes and functions. His diverse experience includes Solar EPC segments and Utility-scale projects, consulting for start-ups, SMEs, established Corporate Houses, and International NGOs. Mr. Dinesh has received several industry recognitions for his contribution to management and related areas.",
    ],
    directorships: [
      "Venwind Refex Limited",
      "Venwind Refex Power Limited",
      "Refex Holding Private Limited (WTD, CFO & CEO)",
      "Refex Industries Limited (WTD & CFO)",
      "Refex Solar Power Private Limited",
      "EMCO Limited",
      "Anam Medical Solutions Private Limited",
      "Aj Incubation Forum",
      "Torrid Solar Power Private Limited",
      "Refex Life Sciences Private Limited",
      "Refex Pharma Services Private Limited",
      "VS Lignite Power Private Limited",
      "Sourashakthi Energy Private Limited",
      "Spangle Energy Private Limited",
      "Sherisha Infrastructure Private Limited",
      "Scorch Solar Energy Private Limited",
      "Singe Solar Energy Private Limited",
      "Sparzana Aviation Private Limited",
      "Traction Infra LLP",
      "Refex Capital Advisors LLP",
      "Aabhuti Special Situations Advisory LLP",
      "Coastalview Estates LLP",
      "Smartdwell Realty LLP",
      "SKCNP Infraparks LLP",
      "LSM Developers LLP",
      "RKMR Consultants LLP",
      "RKMR Estates LLP",
    ],
    order: 2,
  },
  {
    id: 4,
    name: "Ms. Talluri Jayanthi",
    position: "Independent Director",
    din: "09272993",
    image: "/wp-content/uploads/2023/05/Ms.-Talluri-Jayanthi.jpg",
    bio: [
      "Ms. Talluri Jayanthi is a legal professional with an extensive experience of more than 24 years comprising of successful litigant counsel and in-house Corporate Counsel in varied sectors including but not limited to Healthcare, IT& ITES, Infrastructure, Real Estate, Commercial Corporate matters, Airports, Domestic & Family disputes, Labour Laws, Property Laws, Corporate Litigation. A Tech Savvy Legal Entrepreneur, Founder & Managing Director of Talluri Law Consultancy Private Limited, handling corporate litigation, with solution-oriented analysis and providing full life cycle legal solutions & legal strategy.",
    ],
    directorships: [
      "Securekloud Technologies Limited",
      "Talluri's Kitchen Temple Private Limited",
      "Talluri Law Consultancy (OPC) Private Limited",
      "International Conveyors Limited",
      "Crescentis Capital Limited",
    ],
    order: 3,
  },
  {
    id: 5,
    name: "Mr. Pillappan Amalnathan",
    position: "Independent Director",
    din: "08730795",
    image: "/wp-content/uploads/2023/05/Mr.-Pillappan-Amalnathan.jpg",
    bio: [
      "Mr. Pillappan Amalanathan has an established independent practice for the past 20 years with a well-equipped library, office and three junior associates. He appeared in many cases relating to political fronts, commercial matters for several private concerns and companies including matters relating to Company Law such as winding up, amalgamation and reconstitution and have advised on company formation, tax planning, pre-litigation settlements, international contracts formation. He has wide exposure and experience in diverse fields of law and enjoy a good reputation in the Bar.",
    ],
    directorships: [
      "Krish Solar Ventures Private Limited",
      "V Tree Traders Private Limited",
    ],
    order: 4,
  },
  {
    id: 6,
    name: "Ms. Latha Venkatesh",
    position: "Independent Director",
    din: "06983347",
    image: "/wp-content/uploads/2023/05/Ms.-Latha-Venkatesh-new.jpg",
    bio: [
      "Ms. Latha Venkatesh is a senior Auditor with eleven years of experience in practice. Having worked with clients in multiple industries, she has good knowledge and vast experience in cost audit, internal audits, processes and standards that significantly improve the opinion on company records, banking practices and management & taxation, technology driven performances. She has engaged with multiple business sectors like Engineering & Manufacturing, Construction & Civil Engineering and Banking.",
    ],
    directorships: [
      "K.S.Oils Limited",
      "Refex Industries Limited",
      "Kwick Forensic Solutions Limited",
    ],
    order: 5,
  },
];

function normalizeBio(bio) {
  if (Array.isArray(bio)) {
    return bio.map((p) => String(p ?? "").trim()).filter(Boolean);
  }
  const text = String(bio ?? "").trim();
  if (!text) return [];
  return text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}

function normalizeDirectorships(list) {
  if (!Array.isArray(list)) return [];
  return list.map((item) => String(item ?? "").trim()).filter(Boolean);
}

function normalizeMembers(raw) {
  if (!Array.isArray(raw)) return [];
  return raw
    .map((m, index) => ({
      id: Number.isFinite(Number(m?.id)) ? Number(m.id) : index + 1,
      name: String(m?.name ?? "").trim(),
      position: String(m?.position ?? "").trim(),
      din: String(m?.din ?? "").trim(),
      image: String(m?.image ?? "").trim(),
      bio: normalizeBio(m?.bio),
      directorships: normalizeDirectorships(m?.directorships),
      order: Number.isFinite(Number(m?.order)) ? Number(m.order) : index,
    }))
    .sort((a, b) => a.order - b.order)
    .map((m, index) => ({ ...m, order: index }));
}

function normalizeCeasedButton(raw) {
  const src =
    raw && typeof raw === "object" ? raw : DEFAULT_CEASED_BUTTON;
  return {
    label:
      String(src.label ?? DEFAULT_CEASED_BUTTON.label).trim() ||
      DEFAULT_CEASED_BUTTON.label,
    url: String(src.url ?? DEFAULT_CEASED_BUTTON.url).trim(),
  };
}

async function ensureRow() {
  const [row, created] = await BoardOfDirectors.findOrCreate({
    where: { id: 1 },
    defaults: {
      id: 1,
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      members: DEFAULT_MEMBERS,
      ceasedButton: DEFAULT_CEASED_BUTTON,
    },
  });

  if (!created && (!Array.isArray(row.members) || row.members.length === 0)) {
    await row.update({
      title: row.title || DEFAULT_TITLE,
      description: row.description || DEFAULT_DESCRIPTION,
      members: DEFAULT_MEMBERS,
      ceasedButton: row.ceasedButton || DEFAULT_CEASED_BUTTON,
    });
    await row.reload();
  }

  return row;
}

export async function getBoardOfDirectors(_req, res) {
  try {
    const row = await ensureRow();
    return res.json({
      title: row.title,
      description: row.description,
      members: normalizeMembers(row.members),
      ceasedButton: normalizeCeasedButton(row.ceasedButton),
    });
  } catch (error) {
    console.error("getBoardOfDirectors error:", error);
    return res.status(500).json({ message: "Failed to load board of directors" });
  }
}

export async function saveBoardOfDirectors(req, res) {
  try {
    const body = req.body && typeof req.body === "object" ? req.body : {};
    const title = String(body.title ?? DEFAULT_TITLE).trim() || DEFAULT_TITLE;
    const description = String(body.description ?? "").trim();
    const members = normalizeMembers(body.members);
    const ceasedButton = normalizeCeasedButton(body.ceasedButton);

    for (const member of members) {
      if (!member.name) {
        return res.status(400).json({ message: "Each member must have a name" });
      }
    }

    const row = await ensureRow();
    await row.update({ title, description, members, ceasedButton });
    await row.reload();

    return res.json({
      title: row.title,
      description: row.description,
      members: normalizeMembers(row.members),
      ceasedButton: normalizeCeasedButton(row.ceasedButton),
    });
  } catch (error) {
    console.error("saveBoardOfDirectors error:", error);
    return res.status(500).json({ message: "Failed to save board of directors" });
  }
}
