export function PoliciesSection() {
  const policies = [
    {
      title: "QHSE Policy",
      image: "/wp-content/uploads/2025/10/environment.jpg",
      link: "https://refex.group/uploads/documents/Refex_Group_QHSE_Policy.pdf",
    },
    // {
    //   title: "EHS Policy",
    //   image:
    //     "/wp-content/uploads/2025/10/renewable-energy.jpg",
    //   link: "https://www.refex.group/wp-content/uploads/2023/03/EHS-Policy.pdf",
    // },
    {
      title: "Sustainability Policy",
      image:
        "/wp-content/uploads/2025/10/Ecosystem-Restoration-and-Plantation-Drive.jpg",
      link: "https://www.refex.group/wp-content/uploads/2023/03/Sustainability-ESG-Policy.pdf",
    },
    {
      title: "Grievance Policy",
      image: "/wp-content/uploads/2025/10/Water-Stewardship.jpg",
      link: "https://www.refex.group/wp-content/uploads/2023/02/Grievance-Policy.pdf",
    },
    {
      title: "Signed ABAC Policy",
      image:
        "/wp-content/uploads/2025/10/Waste-Management-Material-Circularity.jpg",
      link: "https://www.refex.group/wp-content/uploads/2025/06/Anti-Bribery-Anti-Corruption-ABAC-Policy.pdf",
    },
    {
      title: "Signed Supplier Vendor Code of Conduct",
      image: "/wp-content/uploads/2025/10/Health-Safety.jpg",
      link: "https://www.refex.group/wp-content/uploads/2025/06/Vendor-Code-of-Conduct.pdf",
    },
  ];

  const firstRowPolicies = policies.slice(0, 2);
  const secondRowPolicies = policies.slice(2);

  const renderPolicyCard = (
    policy: (typeof policies)[number],
    index: number,
  ) => (
    <div
      key={`${policy.title}-${index}`}
      className="group relative w-full max-w-sm overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl"
    >
      <div className="relative h-80 overflow-hidden">
        <img
          src={policy.image}
          alt={policy.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-900/50 to-transparent"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white sm:p-5 lg:p-6">
        <h5 className="mb-3 text-lg font-bold sm:mb-4 sm:text-xl">
          {policy.title}
        </h5>
        <a
          href={policy.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block cursor-pointer whitespace-nowrap rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-brand-hover sm:px-6 sm:text-base"
        >
          View Policy
        </a>
      </div>
    </div>
  );

  return (
    <section id="esg-policies" className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[110px]">
        <div className="mb-10 text-center sm:mb-14 lg:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:mb-5 sm:text-4xl lg:mb-6 lg:text-5xl">
            ESG Policies
          </h2>
          <p className="mx-auto max-w-4xl text-base leading-relaxed text-gray-700 sm:text-lg lg:text-lg">
            Sustainable development is a core value that we take very seriously.
            Our management team is fully committed to this goal, and we strive
            to reflect this in our policies and procedures that address
            environmental, social, and governance aspects. We invite you to
            learn more about our policies by clicking on the link provided.
          </p>
        </div>

        <div className="space-y-8">
          <div className="flex flex-wrap justify-center gap-8">
            {firstRowPolicies.map((policy, index) =>
              renderPolicyCard(policy, index),
            )}
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {secondRowPolicies.map((policy, index) =>
              renderPolicyCard(policy, firstRowPolicies.length + index),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
