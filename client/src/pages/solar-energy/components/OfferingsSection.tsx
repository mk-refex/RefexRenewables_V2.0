import FadeInUp from "@/components/common/FadeInUp";
import SectionHeading from "@/components/common/SectionHeading";

export default function OfferingsSection() {
  const offerings = [
    {
      icon: "ri-sun-line",
      title: "Ground-mounted Solar & Rooftop Solar Installation",
    },
    {
      icon: "ri-battery-charge-line",
      title: "Energy Storage",
    },
    {
      icon: "ri-flashlight-line",
      title: "Solar & Wind Open Access",
    },
    {
      icon: "ri-plug-line",
      title: "ISTS-connected (Inter-State Transmission System) Supply",
    },
  ];

  return (
    <section className="py-20 bg-[#F6F7F9]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[866px] rounded-lg overflow-hidden">
            <img
              src="https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/solar-services-image-new.jpg"
              alt="Solar Installation Team"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <div className="mb-8">
              <FadeInUp delay={0.2}>
                <SectionHeading
                  badgeText="WHAT DO"
                  text="WE OFFER"
                  showWatermark={false}
                />
              </FadeInUp>
              <FadeInUp delay={0.2}>
                <h2
                  style={{
                    fontSize: "48px",
                    fontWeight: 700,
                    lineHeight: "63px",
                    margin: "0px 0px 0px 0px",
                  }}
                >
                  We offer end-to-end project support from concept to
                  commissioning ensuring efficiency, reliability, and optimal
                  ROI.
                </h2>
              </FadeInUp>
            </div>

            <div className="space-y-6">
              {offerings.map((offering, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      fontSize: "24px",
                      fontWeight: 700,
                    }}
                  >
                    <i className={`${offering.icon} text-white`}></i>
                  </div>
                  <div>
                    <h3
                      style={{
                        color: "#1f1f25",
                        fontFamily: "DM Sans, sans-serif",
                        fontSize: "30px",
                        lineHeight: "40px",
                      }}
                    >
                      {offering.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
