import SectionHeading from "@/components/common/SectionHeading";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-[110px]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://rril-website.local.sharajman.com/wp-content/uploads/2025/11/energy-solutions-img.png"
              alt="Energy Storage Solutions"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div>
            <div className="mb-6">
              <SectionHeading
                badgeText="At"
                text="Renewable & Infrastructure Limited"
                showWatermark={false}
              />
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
              we recognize that the future of clean energy goes beyond
              generation; it demands <strong>reliable storage</strong> to ensure
              consistent, peak saving power. As part of our commitment to
              supporting India's clean energy transition, we offer{" "}
              <strong>advanced Energy Storage Solutions (ESS)</strong> designed
              for diverse applications across utility, commercial, and remote
              environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
