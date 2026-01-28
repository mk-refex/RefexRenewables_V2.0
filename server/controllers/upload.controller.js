import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadsPdfPath = path.join(__dirname, "../uploads/pdf");
if (!fs.existsSync(uploadsPdfPath)) {
  fs.mkdirSync(uploadsPdfPath, { recursive: true });
}

const pdfStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, "../uploads/pdf");
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase() || ".pdf";
    const name = path.basename(file.originalname, path.extname(file.originalname));
    const safe = `${name}-${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
    cb(null, safe);
  },
});

const pdfFilter = (req, file, cb) => {
  const ok = /\.pdf$/i.test(file.originalname) || file.mimetype === "application/pdf";
  cb(null, ok);
};

export const uploadPdf = multer({
  storage: pdfStorage,
  limits: { fileSize: 15 * 1024 * 1024 },
  fileFilter: pdfFilter,
});

/**
 * Generic image upload – saves to uploads/images/ via multer.
 * Expects req.file from multer.single('image').
 * Returns { imageUrl: "/uploads/images/filename" }.
 */
export async function uploadImage(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No image file provided" });
    }
    const imageUrl = `/uploads/images/${req.file.filename}`;
    return res.json({ imageUrl });
  } catch (error) {
    console.error("Upload image error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

/**
 * PDF upload – saves to uploads/pdf/ via multer.
 * Expects req.file from multer.single('pdf').
 * Returns { pdfUrl: "/uploads/pdf/filename.pdf" }.
 */
export async function uploadPdfHandler(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No PDF file provided" });
    }
    const pdfUrl = `/uploads/pdf/${req.file.filename}`;
    return res.json({ pdfUrl });
  } catch (error) {
    console.error("Upload PDF error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
