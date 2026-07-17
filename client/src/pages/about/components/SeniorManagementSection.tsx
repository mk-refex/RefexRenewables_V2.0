import FadeInUp from "@/components/common/FadeInUp";
import { useEffect, useState } from "react";
import {
  resolveImageUrl,
  seniorManagementApi,
  type SeniorManagementMember,
} from "@/services/api";

const SeniorManagementSection = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  const [title, setTitle] = useState("Senior Management Personnel");
  const [description, setDescription] = useState(
    "Our leadership team brings decades of combined experience across various domains"
  );
  const [managementMembers, setManagementMembers] = useState<SeniorManagementMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await seniorManagementApi.get();
        if (cancelled) return;
        setTitle(data.title || "Senior Management Personnel");
        setDescription(
          data.description ||
            "Our leadership team brings decades of combined experience across various domains"
        );
        setManagementMembers(Array.isArray(data.members) ? data.members : []);
      } catch (error) {
        console.error("Failed to load senior management:", error);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section
      id="senior-management"
      className="bg-gray-50 py-12 sm:py-16 lg:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-[110px]">
        <div className="mb-8 text-center sm:mb-12">
          <FadeInUp delay={0.2}>
            <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:mb-4 sm:text-3xl lg:text-4xl">
              {title}
            </h2>
            <p className="mx-auto max-w-3xl px-1 text-base text-gray-600 sm:text-lg">
              {description}
            </p>
          </FadeInUp>
        </div>

        {loading ? (
          <div className="py-12 text-center text-gray-500">Loading…</div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {managementMembers.map((member, index) => (
              <div
                key={member.id ?? index}
                className="bg-brand text-white rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() =>
                  setSelectedMember(selectedMember === index ? null : index)
                }
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={resolveImageUrl(member.image)}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col gap-1 p-6 text-left">
                  <h3 className="text-lg font-bold leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-sm leading-snug text-white/90">
                    {member.position}
                  </p>
                  <p className="text-xs leading-snug text-white/80">
                    {member.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedMember !== null && managementMembers[selectedMember] && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/50"
          onClick={() => setSelectedMember(null)}
          role="presentation"
        >
          <div className="flex min-h-full items-start justify-center px-4 py-8 sm:px-6 sm:py-10">
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="senior-mgmt-modal-title"
              className="relative w-full max-w-2xl rounded-lg bg-white shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close"
                onClick={() => setSelectedMember(null)}
                className="absolute right-3 top-3 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200"
              >
                <i className="ri-close-line text-xl"></i>
              </button>

              <div className="max-h-[min(85vh,calc(100dvh-4rem))] overflow-y-auto overscroll-y-contain px-6 pb-8 pt-14 sm:px-8 sm:pt-16">
                <h3
                  id="senior-mgmt-modal-title"
                  className="pr-10 text-2xl font-bold text-gray-900"
                >
                  {managementMembers[selectedMember].name}
                </h3>
                <p className="text-brand mt-2 font-medium">
                  {managementMembers[selectedMember].position}
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  {managementMembers[selectedMember].company}
                </p>
                <div className="mt-4 space-y-3 leading-relaxed text-gray-700">
                  {(managementMembers[selectedMember].bio || []).map(
                    (paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SeniorManagementSection;
