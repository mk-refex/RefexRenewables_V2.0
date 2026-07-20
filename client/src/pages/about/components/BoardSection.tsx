import FadeInUp from "@/components/common/FadeInUp";
import { useEffect, useState } from "react";
import {
  boardOfDirectorsApi,
  resolveImageUrl,
  type BoardDirectorMember,
  type BoardCeasedButton,
} from "@/services/api";

const BoardSection = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  const [title, setTitle] = useState("Board of Directors");
  const [description, setDescription] = useState(
    "Our board comprises experienced professionals who provide strategic guidance and governance"
  );
  const [boardMembers, setBoardMembers] = useState<BoardDirectorMember[]>([]);
  const [ceasedButton, setCeasedButton] = useState<BoardCeasedButton>({
    label: "RRIL - Directors Ceased",
    url: "/wp-content/uploads/2025/10/RRIL-Ceased-Directors.pdf",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await boardOfDirectorsApi.get();
        if (cancelled) return;
        setTitle(data.title || "Board of Directors");
        setDescription(
          data.description ||
            "Our board comprises experienced professionals who provide strategic guidance and governance"
        );
        setBoardMembers(Array.isArray(data.members) ? data.members : []);
        if (data.ceasedButton) {
          setCeasedButton(data.ceasedButton);
        }
      } catch (error) {
        console.error("Failed to load board of directors:", error);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="board-of-directors" className="bg-white py-8 sm:py-10 lg:py-16">
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
          <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
            {boardMembers.map((member, index) => (
              <div
                key={member.id ?? index}
                className="w-full max-w-[300px] bg-brand text-white rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer sm:w-[calc(50%-0.75rem)] sm:max-w-none lg:w-[calc(33.333%-1rem)]"
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
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">{member.name}</h3>
                  <p className="text-sm text-white/90">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {ceasedButton.url ? (
          <div className="mt-8 text-center sm:mt-12">
            <a
              href={resolveImageUrl(ceasedButton.url)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block cursor-pointer whitespace-nowrap rounded-lg bg-brand px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-hover sm:px-8 sm:py-3 sm:text-base"
            >
              {ceasedButton.label || "RRIL - Directors Ceased"}
            </a>
          </div>
        ) : null}
      </div>

      {selectedMember !== null && boardMembers[selectedMember] && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/50"
          onClick={() => setSelectedMember(null)}
          role="presentation"
        >
          <div className="flex min-h-full items-start justify-center px-4 py-8 sm:px-6 sm:py-10">
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="board-member-modal-title"
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
                  id="board-member-modal-title"
                  className="pr-10 text-2xl font-bold text-gray-900"
                >
                  {boardMembers[selectedMember].name}
                </h3>
                <p className="text-brand mt-2 font-medium">
                  {boardMembers[selectedMember].position}
                </p>
                {boardMembers[selectedMember].din ? (
                  <p className="mt-1 text-sm text-gray-600">
                    DIN: {boardMembers[selectedMember].din}
                  </p>
                ) : null}
                <div className="mt-4 space-y-3 leading-relaxed text-gray-700">
                  {(boardMembers[selectedMember].bio || []).map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                {(boardMembers[selectedMember].directorships || []).length > 0 ? (
                  <div className="mt-6 border-t border-gray-200 pt-4">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between text-left text-base font-semibold text-gray-900"
                      onClick={(e) => {
                        e.stopPropagation();
                        const detailsDiv = e.currentTarget
                          .nextElementSibling as HTMLElement | null;
                        if (detailsDiv) {
                          detailsDiv.style.display =
                            detailsDiv.style.display === "none"
                              ? "block"
                              : "none";
                        }
                      }}
                    >
                      <span className="pr-2">
                        Directorship and Designated Partnership Details
                      </span>
                      <i className="ri-arrow-down-s-line shrink-0 text-xl"></i>
                    </button>
                    <div style={{ display: "none" }}>
                      <ol className="mt-3 list-inside list-decimal space-y-2 text-gray-700">
                        {boardMembers[selectedMember].directorships.map(
                          (company, idx) => (
                            <li key={idx}>{company}</li>
                          )
                        )}
                      </ol>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BoardSection;
