export default function HeroSection() {
  return (
    <section className="relative h-[300px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Modern%20industrial%20renewable%20energy%20facility%20with%20solar%20panels%20and%20green%20technology%20infrastructure%2C%20professional%20corporate%20building%20exterior%20with%20blue%20sky%20background%2C%20clean%20energy%20business%20headquarters&width=1920&height=300&seq=contact-hero-bg&orientation=landscape"
          alt="Contact Us"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-5xl font-bold text-white animate-slideInLeft">Contact us</h1>
      </div>
    </section>
  );
}
