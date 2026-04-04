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
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 lg:px-[110px]">
        <div className="mb-16 grid gap-12 md:grid-cols-2">
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

        <div className="grid gap-6 md:grid-cols-3">
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
                  className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
