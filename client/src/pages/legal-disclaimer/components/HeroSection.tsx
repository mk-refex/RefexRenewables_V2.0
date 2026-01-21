export default function HeroSection() {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://refexrenewables.com/assets/images/pvt.jpg"
          alt="Legal Disclaimer"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Legal Disclaimer</h1>
        <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
      </div>
    </section>
  );
}
