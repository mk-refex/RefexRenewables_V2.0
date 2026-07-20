import { KeyManagerialPersonnel } from "../models/index.js";

const DEFAULT_TITLE = "Key Managerial Personnel";
const DEFAULT_DESCRIPTION =
  "Our key managerial personnel drive strategy, compliance, and day-to-day leadership across the organization";

const DEFAULT_MEMBERS = [];

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
  const [row] = await KeyManagerialPersonnel.findOrCreate({
    where: { id: 1 },
    defaults: {
      id: 1,
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      members: DEFAULT_MEMBERS,
    },
  });

  return row;
}

export async function getKeyManagerialPersonnel(_req, res) {
  try {
    const row = await ensureRow();
    return res.json({
      title: row.title,
      description: row.description,
      members: normalizeMembers(row.members),
    });
  } catch (error) {
    console.error("getKeyManagerialPersonnel error:", error);
    return res
      .status(500)
      .json({ message: "Failed to load key managerial personnel" });
  }
}

export async function saveKeyManagerialPersonnel(req, res) {
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
    console.error("saveKeyManagerialPersonnel error:", error);
    return res
      .status(500)
      .json({ message: "Failed to save key managerial personnel" });
  }
}
