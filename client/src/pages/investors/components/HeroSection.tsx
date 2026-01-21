export default function HeroSection() {
  return (
    <section className="relative bg-gray-900 py-24 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=professional%20business%20meeting%20with%20investors%20discussing%20financial%20reports%20and%20charts%20in%20modern%20corporate%20office%20setting%20with%20laptops%20and%20documents%20on%20conference%20table%20warm%20lighting&width=1920&height=600&seq=investors-hero-bg-001&orientation=landscape)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-slideInLeft">
            Investors Relations
          </h1>
        </div>
      </div>
    </section>
  );
}
