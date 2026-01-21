import { Link } from "react-router-dom";

export default function ContactSection() {
  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/spectrum-bg-scaled.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold text-white mb-6">
            Contact Information
          </h2>
          <div className="text-white text-lg space-y-2 mb-8">
            <p className="font-semibold">
              Spectrum Renewable Energy Private Limited
            </p>
            <p>Gat.No.1165, Warananagar, AP-Kodoli</p>
            <p>Panhala -Taluka, Kolhapur Dist</p>
            <p>PIN – 416113, Maharashtra.</p>
          </div>
          <Link
            to="/contact"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
