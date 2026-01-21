import { Link } from 'react-router-dom';

export function ContactSection() {
  return (
    <section 
      className="relative py-32 bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Vjzag-gallery04.jpg)'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
      
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Contact Information
        </h2>
        <div className="max-w-2xl mx-auto space-y-3 text-lg mb-8">
          <p className="font-semibold">Vyzag Bio Energy Fuel Private Limited.</p>
          <p>Survey No. 410/P, Kapuluppada Dumping Yard,</p>
          <p>Visakhapatnam District,</p>
          <p>Andhra Pradesh – 531163</p>
        </div>
        
        <Link 
          to="/contact"
          className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 whitespace-nowrap"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
