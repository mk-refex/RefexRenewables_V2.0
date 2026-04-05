import { useState, useEffect } from "react";

// Temporary static projects (no API / CMS)
const staticProjects = [
  {
    id: "bhilai-project",
    name: "Bhilai Project",
    location: "Bhilai, Chhattisgarh",
    capacity: "75 MWp",
    description: "Ongoing Project.",
    details: "Off-taker – Indian Railways – AAA rated 1st solar project.",
    extraDetails: "",
    images: [
      "https://refex.group/uploads/images/general/general/general-general-1-pv-plant-aerial-view-1767183625925-342165.jpg",
      "https://refex.group/uploads/images/general/general/general-general-renewables-projects-bhilai-2-1766685525133-770964.jpg",
      "https://refex.group/uploads/images/general/general/general-general-renewables-projects-bhilai-3-1766685533545-638959.jpg",
      "https://refex.group/uploads/images/general/general/general-general-renewables-projects-bhilai-4-1766685542714-655824.jpg",
    ],
  },
  {
    id: "diwana-project",
    name: "Diwana Project",
    location: "Panipat, Haryana",
    capacity: "2.93 MWp",
    description: "1st solar project alongside the railway track",
    details: "Project Completed in September 2020.",
    extraDetails: "Name of off-taker – Indian Railways- AAA rated",
    images: [
      "https://refex.group/uploads/images/general/general/general-general-diwana-1-medium-1766686616610-910029.jpeg",
      "https://refex.group/uploads/images/general/general/general-general-diwana-2-medium-1766686625844-899326.jpeg",
      "https://refex.group/uploads/images/general/general/general-general-diwana-1-medium-1766686616610-910029.jpeg",
      "https://refex.group/uploads/images/general/general/general-general-diwana-4-medium-1766686644358-236390.jpeg",
    ],
  },
];

export default function FeaturedProjects() {
  const displayProjects = staticProjects;
  const [activeProject, setActiveProject] = useState(displayProjects[0]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Handle keyboard navigation and body scroll lock
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeProject) return;
      const allImages = activeProject.images || [];
      const totalImages = allImages.length;

      if (e.key === "Escape") {
        setLightboxOpen(false);
      } else if (e.key === "ArrowLeft") {
        setCurrentImageIndex((prev) =>
          prev === 0 ? totalImages - 1 : prev - 1,
        );
      } else if (e.key === "ArrowRight") {
        setCurrentImageIndex((prev) =>
          prev === totalImages - 1 ? 0 : prev + 1,
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, activeProject]);

  // Static title / description / visuals (no API)
  const title = "Featured Projects";
  const description =
    "Explore a few of our flagship solar projects that showcase Refex’s engineering excellence, execution capability and long-term asset management.";

  const backgroundImage =
    "https://refex.group/uploads/images/general/general/general-general-renewables-projects-leh-ladak-3-1766685574032-995676.jpg";

  // Helper to get image path – here images are already full URLs
  const getImageSrc = (imagePath: any): string => {
    if (!imagePath) return "";
    if (typeof imagePath === "string") return imagePath;
    return String(imagePath || "");
  };

  return (
    <section className="relative overflow-hidden py-10 pb-16 sm:py-12 sm:pb-20 lg:py-12 lg:pb-24">
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

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-[110px]">
        {/* Header */}
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="mb-3 text-2xl font-bold text-white sm:mb-4 sm:text-3xl lg:text-4xl">
            {title}
          </h2>
          <p className="mx-auto max-w-3xl px-1 text-sm text-gray-300 sm:text-base lg:text-lg">
            {description}
          </p>
        </div>

        {/* Project Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {displayProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(project)}
              data-active={activeProject.id === project.id}
              className={`project-button-fill px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 whitespace-normal sm:whitespace-nowrap cursor-pointer relative overflow-hidden group text-sm sm:text-base ${
                activeProject.id === project.id
                  ? "bg-[#4AAB3D] text-black"
                  : "bg-white text-black"
              }`}
            >
              <span className="relative z-10">{project.name}</span>
            </button>
          ))}
        </div>

        {/* Project Content */}
        <div className="grid grid-cols-1 items-start gap-6 sm:gap-8 lg:grid-cols-2">
          {/* Left: Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {(activeProject?.images || []).map((image: any, index: number) => {
              const imageSrc = getImageSrc(image);
              if (!imageSrc) return null; // Don't render if no valid image

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
                    alt={`${activeProject.name} ${index + 1}`}
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
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              {activeProject.name}
            </h3>

            <div
              className="flex items-center gap-2"
              style={{ color: "#7dc144" }}
            >
              <i className="ri-map-pin-line text-lg sm:text-xl"></i>
              <span className="text-base sm:text-lg">{activeProject.location}</span>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <p className="text-base font-bold text-white sm:text-lg">
                Capacity – {activeProject.capacity}
              </p>

              <div className="space-y-3 text-sm leading-relaxed text-white sm:space-y-4 sm:text-base">
                {activeProject.id === "indian-army" ? (
                  <>
                    <p className="font-bold">
                      Solar project at the highest altitude in India
                    </p>
                    <p>{activeProject.details}</p>
                    {activeProject.extraDetails && (
                      <p>{activeProject.extraDetails}</p>
                    )}
                  </>
                ) : (
                  <>
                    {activeProject.description && (
                      <p>{activeProject.description}</p>
                    )}
                    {activeProject.details && <p>{activeProject.details}</p>}
                    {activeProject.extraDetails && (
                      <p>{activeProject.extraDetails}</p>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Gallery */}
      {lightboxOpen &&
        activeProject &&
        (() => {
          const allImages = activeProject.images || [];
          const currentImage = allImages[currentImageIndex];
          const currentImageSrc = getImageSrc(currentImage);
          const totalImages = allImages.length;

          const goToPrevious = () => {
            setCurrentImageIndex((prev) =>
              prev === 0 ? totalImages - 1 : prev - 1,
            );
          };

          const goToNext = () => {
            setCurrentImageIndex((prev) =>
              prev === totalImages - 1 ? 0 : prev + 1,
            );
          };

          const handleFullscreen = () => {
            if (!document.fullscreenElement) {
              document.documentElement
                .requestFullscreen()
                .then(() => setIsFullscreen(true));
            } else {
              document.exitFullscreen().then(() => setIsFullscreen(false));
            }
          };

          const handleShare = async () => {
            if (navigator.share) {
              try {
                await navigator.share({
                  title: activeProject.name,
                  text: `Check out ${activeProject.name}`,
                  url: window.location.href,
                });
              } catch (err) {
                // User cancelled or error occurred
              }
            } else {
              // Fallback: copy to clipboard
              navigator.clipboard.writeText(window.location.href);
              alert("Link copied to clipboard!");
            }
          };

          return (
            <div className="fixed inset-0 z-50">
              {/* Backdrop - closes lightbox when clicked */}
              <div
                className="absolute inset-0 bg-black/95"
                onClick={() => setLightboxOpen(false)}
              ></div>

              {/* Content Container */}
              <div className="absolute inset-0 flex flex-col pointer-events-none">
                {/* Header */}
                <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 py-3 sm:py-4 bg-[#2a2a2a] border-b border-gray-700 pointer-events-auto">
                  {/* Left: Counter and Logo */}
                  <div className="flex items-center gap-4">
                    <span className="text-white text-sm font-medium">
                      {currentImageIndex + 1}/{totalImages}
                    </span>
                    <div className="text-[#ff6b35] text-xl font-bold">
                      refex
                    </div>
                  </div>

                  {/* Right: Navigation and Actions */}
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    {/* Navigation Links (hidden on mobile) */}
                    <div className="hidden md:flex items-center gap-6 text-white text-sm">
                      <a
                        href="/"
                        className="hover:text-[#ff6b35] transition-colors"
                      >
                        Home
                      </a>
                      <a
                        href="/about-us"
                        className="hover:text-[#ff6b35] transition-colors"
                      >
                        About Us
                      </a>
                      {/* <a href="/business" className="hover:text-[#ff6b35] transition-colors">Business</a> */}
                      <a
                        href="/investors"
                        className="hover:text-[#ff6b35] transition-colors"
                      >
                        Investor Relations
                      </a>
                      <a
                        href="/esg"
                        className="hover:text-[#ff6b35] transition-colors"
                      >
                        ESG
                      </a>
                    </div>

                    {/* Action Icons */}
                    <button
                      onClick={handleFullscreen}
                      className="text-white hover:text-[#ff6b35] transition-colors p-2"
                      title="Fullscreen"
                    >
                      <i className="ri-fullscreen-line text-xl"></i>
                    </button>
                    <button
                      onClick={() => {
                        // Zoom functionality - can be enhanced later
                        const img = document.querySelector(
                          ".lightbox-main-image",
                        ) as HTMLImageElement;
                        if (img) {
                          img.style.transform =
                            img.style.transform === "scale(2)"
                              ? "scale(1)"
                              : "scale(2)";
                        }
                      }}
                      className="text-white hover:text-[#ff6b35] transition-colors p-2"
                      title="Zoom"
                    >
                      <i className="ri-zoom-in-line text-xl"></i>
                    </button>
                    <button
                      onClick={handleShare}
                      className="text-white hover:text-[#ff6b35] transition-colors p-2"
                      title="Share"
                    >
                      <i className="ri-share-line text-xl"></i>
                    </button>
                    <button
                      onClick={() => setLightboxOpen(false)}
                      className="text-white hover:text-[#ff6b35] transition-colors p-2"
                      title="Close"
                    >
                      <i className="ri-close-line text-xl"></i>
                    </button>
                  </div>
                </div>

                {/* Main Image Area */}
                <div className="flex-1 relative flex items-center justify-center p-4">
                  {/* Left Thumbnails - Hidden on mobile, shown on large screens */}
                  <div className="hidden lg:flex flex-col gap-4 absolute left-2 lg:left-4 z-10 max-h-[80vh] overflow-y-auto pointer-events-auto">
                    {allImages.map((img: any, idx: number) => {
                      const thumbSrc = getImageSrc(img);
                      return (
                        <div
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-24 h-16 rounded overflow-hidden cursor-pointer border-2 transition-all ${
                            idx === currentImageIndex
                              ? "border-[#ff6b35] opacity-100"
                              : "border-transparent opacity-50 hover:opacity-75"
                          }`}
                        >
                          <img
                            src={thumbSrc}
                            alt={`Thumbnail ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      );
                    })}
                  </div>

                  {/* Main Image */}
                  <div className="relative max-w-5xl w-full h-full flex items-center justify-center pointer-events-auto px-2 sm:px-4">
                    <img
                      src={currentImageSrc}
                      alt={`${activeProject.name} ${currentImageIndex + 1}`}
                      className="lightbox-main-image max-w-full max-h-full object-contain transition-transform duration-300"
                    />

                    {/* Navigation Arrows */}
                    <button
                      onClick={goToPrevious}
                      className="absolute left-4 lg:left-16 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 transition-all pointer-events-auto"
                      title="Previous"
                    >
                      <i className="ri-arrow-left-line text-2xl"></i>
                    </button>
                    <button
                      onClick={goToNext}
                      className="absolute right-4 lg:right-16 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 transition-all pointer-events-auto"
                      title="Next"
                    >
                      <i className="ri-arrow-right-line text-2xl"></i>
                    </button>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 bg-[#2a2a2a] border-t border-gray-700 pointer-events-auto">
                  <div className="text-white text-sm">
                    Renewables - Projects - {activeProject.name}
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      <style>{`
        .project-button-fill {
          position: relative;
        }
        
        .project-button-fill:not([data-active="true"]):before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 0;
          height: 100%;
          background-color: #4AAB3D;
          transition: width 0.7s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 0;
          border-radius: 9999px;
        }
        
        .project-button-fill:not([data-active="true"]):hover:before {
          width: 100%;
        }
        
        .project-button-fill:not([data-active="true"]):hover {
          color: black;
        }
        
        .project-button-fill span {
          transition: color 0.3s ease 0.1s;
        }
      `}</style>
    </section>
  );
}
