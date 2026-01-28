import { useState, useEffect, useMemo } from 'react';
import { investorApi, resolveImageUrl, type RelatedLinksCategory } from '@/services/api';

export default function RelatedLinksSection() {
  const [categories, setCategories] = useState<RelatedLinksCategory[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const [filterYear, setFilterYear] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  /** Section ids that are expanded when category is collapsible */
  const [expandedSectionIds, setExpandedSectionIds] = useState<number[]>([]);

  useEffect(() => {
    investorApi.getRelatedLinks()
      .then((data) => {
        setCategories(Array.isArray(data) ? data : []);
        if (Array.isArray(data) && data.length) {
          setSelectedCategoryId(data[0].id ?? null);
        }
      })
      .catch(() => setCategories([]))
      .finally(() => setLoading(false));
  }, []);

  const selectedCategory = useMemo(
    () => categories.find((c) => c.id === selectedCategoryId) ?? null,
    [categories, selectedCategoryId]
  );

  const filterOptions = useMemo(() => {
    const years = new Set<string>();
    selectedCategory?.sections?.forEach((sec) => {
      if (sec.labelType === 'financialYear' && sec.financialYear) {
        years.add(sec.financialYear);
      }
    });
    return ['all', ...Array.from(years).sort().reverse()];
  }, [selectedCategory]);

  const filteredSections = useMemo(() => {
    const sections = selectedCategory?.sections ?? [];
    if (filterYear === 'all') return sections;
    return sections.filter(
      (sec) => sec.labelType === 'financialYear' && sec.financialYear === filterYear
    );
  }, [selectedCategory, filterYear]);

  const allSectionsAreFinancialYear =
    filteredSections.length > 0 &&
    filteredSections.every((s) => s.labelType === 'financialYear');

  useEffect(() => {
    if (!selectedCategory?.collapsible) {
      setExpandedSectionIds([]);
      return;
    }
    const sections = selectedCategory?.sections ?? [];
    const filtered =
      filterYear === 'all'
        ? sections
        : sections.filter(
            (sec) => sec.labelType === 'financialYear' && sec.financialYear === filterYear
          );
    setExpandedSectionIds(filtered.length ? [filtered[0].id] : []);
  }, [selectedCategoryId, filterYear, selectedCategory?.collapsible]);

  const toggleSection = (sectionId: number) => {
    setExpandedSectionIds((prev) =>
      prev.includes(sectionId) ? prev.filter((id) => id !== sectionId) : [...prev, sectionId]
    );
  };

  const getSectionTitle = (sec: { name: string; labelType?: string; financialYear?: string }) => {
    if (sec.labelType === 'financialYear' && sec.financialYear) {
      return `FY ${sec.financialYear}`;
    }
    return sec.name || 'Section';
  };

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-[120px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black uppercase tracking-wider">Related Links</h2>
          </div>
          <div className="flex justify-center py-12">
            <p className="text-gray-500 text-sm">Loading...</p>
          </div>
        </div>
      </section>
    );
  }

  if (!categories.length) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-[120px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black uppercase tracking-wider">Related Links</h2>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 text-center text-gray-500 text-sm">
            No related links available.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-[120px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black uppercase tracking-wider">
            Related Links
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-8">
          {/* Left Column - Categories (30%) */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategoryId(cat.id);
                      setFilterYear('all');
                    }}
                    className={`text-left w-full text-sm py-2 border-b border-gray-100 transition-colors cursor-pointer ${
                      selectedCategoryId === cat.id
                        ? 'text-green-600 font-medium'
                        : 'text-gray-700 hover:text-green-600'
                    }`}
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - category name (when all FY) + filter in same row, ruler, sections & items */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex justify-between items-start gap-4 mb-4">
              {allSectionsAreFinancialYear && selectedCategory ? (
                <h3 className="text-xl font-bold text-[#2879B6]">
                  {selectedCategory.name}
                </h3>
              ) : (
                <span />
              )}
              {filterOptions.length > 1 && (
                <select
                  value={filterYear}
                  onChange={(e) => setFilterYear(e.target.value)}
                  className="ml-auto px-4 py-2 border border-gray-300 rounded-md text-sm cursor-pointer"
                >
                  <option value="all">All</option>
                  {filterOptions
                    .filter((o) => o !== 'all')
                    .map((year) => (
                      <option key={year} value={year}>
                        FY {year}
                      </option>
                    ))}
                </select>
              )}
            </div>
            <hr className="border-t border-gray-200 mb-6" />

            <div>
              {!selectedCategory ? (
                <p className="text-sm text-gray-500">Select a category.</p>
              ) : filteredSections.length === 0 ? (
                <p className="text-sm text-gray-500">No sections match the selected filter.</p>
              ) : selectedCategory.collapsible ? (
                <div className="space-y-6">
                  {filteredSections.map((section) => {
                    const isExpanded = expandedSectionIds.includes(section.id);
                    return (
                      <div key={section.id}>
                        <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                        <button
                          type="button"
                          onClick={() => toggleSection(section.id)}
                          className="w-full flex items-center gap-3 py-3 px-4 bg-gray-100 hover:bg-gray-50 border-b border-gray-200 text-left cursor-pointer"
                        >
                          <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-700">
                            {isExpanded ? (
                              <i className="ri-subtract-line text-lg" aria-hidden />
                            ) : (
                              <i className="ri-add-line text-lg" aria-hidden />
                            )}
                          </span>
                          <span className="text-sm font-medium text-gray-900">{getSectionTitle(section)}</span>
                        </button>
                        {isExpanded && (
                          <div className="p-4 space-y-4 border-t border-gray-200">
                            {(section.items ?? []).map((item) =>
                              item.isStatic && item.staticContent ? (
                                <div
                                  key={item.id}
                                  className="p-4 border border-gray-200 rounded-lg bg-white"
                                >
                                  <div
                                    className="text-sm text-gray-700 prose prose-sm max-w-none"
                                    dangerouslySetInnerHTML={{ __html: item.staticContent }}
                                  />
                                </div>
                              ) : (
                                <div
                                  key={item.id}
                                  className="flex items-start justify-between gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white"
                                >
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-start gap-3">
                                      <div className="w-8 h-8 flex-shrink-0">
                                        <img
                                          src="https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/invest-file.svg"
                                          alt="file"
                                          className="w-full h-full"
                                        />
                                      </div>
                                      <p className="text-sm font-medium text-gray-900">{item.name}</p>
                                    </div>
                                    {item.publishDate && (
                                      <p className="text-xs text-gray-500 mt-1 ml-11">{item.publishDate}</p>
                                    )}
                                    {item.imageUrl && !item.imageUrl.startsWith('data:') && (
                                      <div className="mt-2">
                                        <img
                                          src={resolveImageUrl(item.imageUrl)}
                                          alt=""
                                          className="w-20 h-28 lg:w-[25%] lg:h-auto object-cover rounded"
                                        />
                                      </div>
                                    )}
                                  </div>
                                  {item.pdfUrl ? (
                                    <div className="flex-shrink-0 flex gap-4 items-start">
                                      <div className="flex flex-col items-center">
                                        <a
                                          href={resolveImageUrl(item.pdfUrl)}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="text-sm text-green-600 hover:text-green-700 cursor-pointer"
                                        >
                                          View
                                        </a>
                                        <a
                                          href={resolveImageUrl(item.pdfUrl)}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="mt-1 cursor-pointer"
                                        >
                                          <img
                                            src="https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/visible.svg"
                                            alt="view"
                                            className="w-4 h-4"
                                          />
                                        </a>
                                      </div>
                                      <div className="flex flex-col items-center">
                                        <a
                                          href={resolveImageUrl(item.pdfUrl)}
                                          download
                                          className="text-sm text-green-600 hover:text-green-700 cursor-pointer"
                                        >
                                          Download
                                        </a>
                                        <a
                                          href={resolveImageUrl(item.pdfUrl)}
                                          download
                                          className="mt-1 cursor-pointer"
                                        >
                                          <img
                                            src="https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/investor-download.svg"
                                            alt="download"
                                            className="w-4 h-4"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  ) : null}
                                </div>
                              )
                            )}
                          </div>
                        )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                filteredSections.map((section) => {
                  const hasSectionName = !!(section.name || (section.labelType === 'financialYear' && section.financialYear));
                  const showSectionHeading = hasSectionName && !allSectionsAreFinancialYear;
                  return (
                  <div key={section.id} className="mb-8">
                    {showSectionHeading && (
                      <h3 className="text-xl font-bold text-[#2879B6] mb-4">
                        {getSectionTitle(section)}
                      </h3>
                    )}
                    <div className="space-y-4">
                      {(section.items ?? []).map((item) =>
                        item.isStatic && item.staticContent ? (
                          <div
                            key={item.id}
                            className="p-4 border border-gray-200 rounded-lg bg-white"
                          >
                            <div
                              className="text-sm text-gray-700 prose prose-sm max-w-none"
                              dangerouslySetInnerHTML={{ __html: item.staticContent }}
                            />
                          </div>
                        ) : (
                          <div
                            key={item.id}
                            className="flex items-start justify-between gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                          >
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start gap-3">
                                <div className="w-8 h-8 flex-shrink-0">
                                  <img
                                    src="https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/invest-file.svg"
                                    alt="file"
                                    className="w-full h-full"
                                  />
                                </div>
                                <p className="text-sm font-medium text-gray-900">{item.name}</p>
                              </div>
                              {item.publishDate && (
                                <p className="text-xs text-gray-500 mt-1 ml-11">{item.publishDate}</p>
                              )}
                              {item.imageUrl && !item.imageUrl.startsWith('data:') && (
                                <div className="mt-2">
                                  <img
                                    src={resolveImageUrl(item.imageUrl)}
                                    alt=""
                                    className="w-20 h-28 lg:w-[25%] lg:h-auto object-cover rounded"
                                  />
                                </div>
                              )}
                            </div>
                            {item.pdfUrl ? (
                              <div className="flex-shrink-0 flex gap-4 items-start">
                                <div className="flex flex-col items-center">
                                  <a
                                    href={resolveImageUrl(item.pdfUrl)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-green-600 hover:text-green-700 cursor-pointer"
                                  >
                                    View
                                  </a>
                                  <a
                                    href={resolveImageUrl(item.pdfUrl)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-1 cursor-pointer"
                                  >
                                    <img
                                      src="https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/visible.svg"
                                      alt="view"
                                      className="w-4 h-4"
                                    />
                                  </a>
                                </div>
                                <div className="flex flex-col items-center">
                                  <a
                                    href={resolveImageUrl(item.pdfUrl)}
                                    download
                                    className="text-sm text-green-600 hover:text-green-700 cursor-pointer"
                                  >
                                    Download
                                  </a>
                                  <a
                                    href={resolveImageUrl(item.pdfUrl)}
                                    download
                                    className="mt-1 cursor-pointer"
                                  >
                                    <img
                                      src="https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/investor-download.svg"
                                      alt="download"
                                      className="w-4 h-4"
                                    />
                                  </a>
                                </div>
                              </div>
                            ) : null}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
