import SectionHeading from "@/components/common/SectionHeading";
import FadeInUp from "@/components/common/FadeInUp";

const FADE_THRESHOLD = 0.98;

export default function LaunchSection() {
  const galleryImages = [
    "/wp-content/uploads/2025/10/biodhanicgallery01.jpg",
    "/wp-content/uploads/2025/10/biodhanicgallery02.jpg",
    "/wp-content/uploads/2025/10/biodhanicgallery03.jpg",
    "/wp-content/uploads/2025/10/biodhanicgallery04.jpg",
    "/wp-content/uploads/2025/10/biodhanicgallery05.jpg",
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[110px]">
        <div className="mb-10 grid gap-8 sm:mb-12 md:mb-16 md:grid-cols-2 md:gap-10 lg:gap-12">
          <FadeInUp
            delay={0}
            threshold={FADE_THRESHOLD}
            className="flex h-full min-h-0 items-center"
          >
            <SectionHeading
              badgeText="LAUNCH OF"
              text="REFEX BIO-DHANIC"
              showWatermark={false}
            />
          </FadeInUp>
          <FadeInUp delay={0.15} threshold={FADE_THRESHOLD}>
            <p className="text-lg leading-relaxed text-gray-700">
              Refex BioDhanic was proudly launched in Kolhapur, Maharashtra, by
              Mr. Sandeep Tambe, Technical Officer (Fertilizers),
              Commissionerate of Agriculture, Pune and Mr. Vishal Manjarekar
              (District In-Charge, Kolhapur) - Rashtriya Chemicals and
              Fertilizers.
            </p>
          </FadeInUp>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <FadeInUp
              key={index}
              delay={0.05 * index}
              threshold={FADE_THRESHOLD}
            >
              <div className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image}
                  alt={`BioDhanic Launch Event ${index + 1}`}
                  className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-110 sm:h-64 md:h-72 lg:h-80"
                />
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
