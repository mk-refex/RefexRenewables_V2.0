import { useState } from "react";

const project = {
  id: "leh-ladakh-storage",
  name: "Indian Army 2 MW Project",
  location: "Leh, Ladakh (Partapur & Siachen Base Camps)",
  capacity: "2 MWp with 4 MWhr of BESS",
  description:
    "Solar project at the highest altitude in India",
  details:
    "Project Completed in July 2022.",
  extraDetails:
    "Name of off-taker – Indian Army",
  images: [
    "https://refex.group/uploads/images/general/general/general-general-renewables-projects-leh-ladak-1-1766686551455-424737.jpg",
    "https://refex.group/uploads/images/general/general/general-general-renewables-projects-leh-ladak-2-1766686559986-99377.jpg",
    "https://refex.group/uploads/images/general/general/general-general-renewables-projects-leh-ladak-3-1766686568337-360877.jpg",
    "https://refex.group/uploads/images/general/general/general-general-renewables-projects-leh-ladak-6-1766686576292-88688.jpg"
  ],
};

const backgroundImage =
  "https://rril-website.local.sharajman.com/wp-content/uploads/2025/11/energy-solution-gallery01.jpg";

const getImageSrc = (imagePath: any): string => {
  if (!imagePath) return "";
  if (typeof imagePath === "string") return imagePath;
  return String(imagePath || "");
};

export default function ProjectsSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const allImages = project.images || [];
  const currentImageSrc = getImageSrc(allImages[currentImageIndex]);

  const goToPrevious = () => {
    if (!allImages.length) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? allImages.length - 1 : prev - 1,
    );
  };

  const goToNext = () => {
    if (!allImages.length) return;
    setCurrentImageIndex((prev) =>
      prev === allImages.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <section className="relative py-12 pb-24 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "linear-gradient(178deg, #131111 0%, #1E2227D6 87%)",
          transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
        }}
      ></div>

      <div className="container mx-auto px-6 lg:px-[110px] relative z-10">
        {/* Header (reusing FeaturedProjects style) */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Leh and Ladakh – 1 MW / 2 MWh solar‑plus‑storage installation
            designed for high‑altitude, remote operations.
          </p>
        </div>

        {/* Content layout similar to FeaturedProjects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {project.images.map((image, index) => {
              const imageSrc = getImageSrc(image);
              if (!imageSrc) return null;

              return (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg aspect-video bg-gray-800 cursor-pointer group"
                  onClick={() => {
                    setCurrentImageIndex(index);
                    setLightboxOpen(true);
                  }}
                >
                  <img
                    src={imageSrc}
                    alt={`Leh & Ladakh Energy Storage ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
              );
            })}
          </div>

          {/* Right: Project Details */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">{project.name}</h3>

            <div
              className="flex items-center gap-2"
              style={{ color: "#7dc144" }}
            >
              <i className="ri-map-pin-line text-xl"></i>
              <span className="text-lg">{project.location}</span>
            </div>

            <div className="space-y-4">
              <p className="text-white text-lg font-bold">
                Capacity – {project.capacity}
              </p>

              <div className="text-white text-base leading-relaxed space-y-4">
                {project.description && <p>{project.description}</p>}
                {project.details && <p>{project.details}</p>}
                {project.extraDetails && <p>{project.extraDetails}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Lightbox */}
      {lightboxOpen && allImages.length > 0 && currentImageSrc && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/90"
            onClick={() => setLightboxOpen(false)}
          ></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pointer-events-none">
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full pointer-events-auto transition-colors"
              aria-label="Close"
            >
              <i className="ri-close-line text-2xl"></i>
            </button>

            <div className="max-w-5xl w-full flex items-center justify-center gap-4 pointer-events-auto">
              <button
                onClick={goToPrevious}
                className="text-white bg-black/40 hover:bg-black/60 rounded-full p-3 transition-colors"
                aria-label="Previous image"
              >
                <i className="ri-arrow-left-line text-2xl"></i>
              </button>

              <img
                src={currentImageSrc}
                alt={`${project.name} ${currentImageIndex + 1}`}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />

              <button
                onClick={goToNext}
                className="text-white bg-black/40 hover:bg-black/60 rounded-full p-3 transition-colors"
                aria-label="Next image"
              >
                <i className="ri-arrow-right-line text-2xl"></i>
              </button>
            </div>

            <div className="mt-4 text-sm text-gray-300 pointer-events-auto">
              {currentImageIndex + 1} / {allImages.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
