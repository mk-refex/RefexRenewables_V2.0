import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { investorApi, resolveImageUrl, type RelatedLinksCategory } from '@/services/api';

const normalize = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

const matchesCategoryKey = (key: string, categoryName: string) => {
  const name = normalize(categoryName);
  switch (key) {
    case 'annual-reports':
      return name.includes('annual reports');
    case 'shareholding-pattern':
      return name.includes('shareholding pattern');
    case 'audited-financial-results':
      return name.includes('audited financial results');
    case 'policies':
      return name.includes('policies');
    case 'annual-return':
      return name.includes('annual return');
    case 'board-meeting-intimation-financial-results':
      return (
        name.includes('board meeting') &&
        name.includes('intimation') &&
        name.includes('financial results')
      );
    default:
      return false;
  }
};

export default function RelatedLinksSection() {
  const location = useLocation();
  const [categories, setCategories] = useState<RelatedLinksCategory[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const [filterYear, setFilterYear] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  /** Section ids that are expanded when category is collapsible */
  const [expandedSectionIds, setExpandedSectionIds] = useState<number[]>([]);

  const requestedCategoryName = useMemo(() => {
    return new URLSearchParams(location.search).get('category')?.trim() ?? '';
  }, [location.search]);
  const requestedCategoryKey = useMemo(() => {
    return new URLSearchParams(location.search).get('categoryKey')?.trim() ?? '';
  }, [location.search]);

  useEffect(() => {
    investorApi.getRelatedLinks()
      .then((data) => {
        const parsed = Array.isArray(data) ? data : [];
        setCategories(parsed);
        if (parsed.length) {
          const requested = normalize(requestedCategoryName);
          const matchedByKey = requestedCategoryKey
            ? parsed.find((cat) =>
                matchesCategoryKey(requestedCategoryKey, cat.name ?? ''),
              )
            : null;
          const matchedByName = requested
            ? parsed.find((cat) => normalize(cat.name ?? '') === requested)
            : null;
          const matchedByContains = requested
            ? parsed.find((cat) => normalize(cat.name ?? '').includes(requested))
            : null;
          const matched = matchedByKey ?? matchedByName ?? matchedByContains;
          setSelectedCategoryId((matched ?? parsed[0]).id ?? null);
          setFilterYear('all');
        }
      })
      .catch(() => setCategories([]))
      .finally(() => setLoading(false));
  }, [requestedCategoryKey, requestedCategoryName]);

  useEffect(() => {
    if (!categories.length || (!requestedCategoryName && !requestedCategoryKey))
      return;
    const requested = normalize(requestedCategoryName);
    const matchedByKey = requestedCategoryKey
      ? categories.find((cat) =>
          matchesCategoryKey(requestedCategoryKey, cat.name ?? ''),
        )
      : null;
    const matchedByName = requested
      ? categories.find((cat) => normalize(cat.name ?? '') === requested)
      : null;
    const matchedByContains = requested
      ? categories.find((cat) => normalize(cat.name ?? '').includes(requested))
      : null;
    const matched = matchedByKey ?? matchedByName ?? matchedByContains;
    if (matched?.id !== undefined && matched.id !== selectedCategoryId) {
      setSelectedCategoryId(matched.id);
      setFilterYear('all');
    }
  }, [
    categories,
    requestedCategoryKey,
    requestedCategoryName,
    selectedCategoryId,
  ]);

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
      <section className="bg-white py-10 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-[120px]">
          <div className="mb-6 text-center sm:mb-10 lg:mb-12">
            <h2 className="text-xl font-bold uppercase tracking-wider text-black sm:text-2xl lg:text-3xl">Related Links</h2>
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
      <section className="bg-white py-10 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-[120px]">
          <div className="mb-6 text-center sm:mb-10 lg:mb-12">
            <h2 className="text-xl font-bold uppercase tracking-wider text-black sm:text-2xl lg:text-3xl">Related Links</h2>
          </div>
          <div className="rounded-lg bg-white p-5 text-center text-sm text-gray-500 shadow-md sm:p-8">
            No related links available.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-10 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[120px]">
        {/* <div className="mb-6 text-center sm:mb-10 lg:mb-12">
          <h2 className="text-xl font-bold uppercase tracking-wider text-black sm:text-2xl lg:text-3xl">
            Related Links
          </h2>
        </div> */}

        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-[30%_70%] lg:gap-8">
          {/* Left Column - Categories (30%) */}
          <div className="rounded-lg bg-white p-4 shadow-md sm:p-6 lg:p-8">
            <ul className="space-y-0.5">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategoryId(cat.id);
                      setFilterYear('all');
                    }}
                    className={`w-full cursor-pointer border-b border-gray-100 py-1.5 text-left text-sm transition-colors sm:text-base ${
                      selectedCategoryId === cat.id
                        ? 'font-medium text-brand'
                        : 'text-gray-700 hover:text-brand'
                    }`}
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - category name (when all FY) + filter in same row, ruler, sections & items */}
          <div className="rounded-lg bg-white p-4 shadow-md sm:p-6 lg:p-8">
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              {allSectionsAreFinancialYear && selectedCategory ? (
                <h3 className="text-lg font-bold text-[#2879B6] sm:text-xl">
                  {selectedCategory.name}
                </h3>
              ) : (
                <span />
              )}
              {filterOptions.length > 1 && (
                <select
                  value={filterYear}
                  onChange={(e) => setFilterYear(e.target.value)}
                  className="w-full cursor-pointer rounded-md border border-gray-300 px-3 py-2 text-sm sm:ml-auto sm:w-auto sm:px-4"
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
                                  className="flex flex-col gap-3 rounded-lg border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md sm:flex-row sm:items-start sm:justify-between sm:gap-4"
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
                                    <div className="flex shrink-0 flex-row gap-6 sm:gap-4">
                                      <div className="flex flex-col items-center">
                                        <a
                                          href={resolveImageUrl(item.pdfUrl)}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="cursor-pointer text-sm text-brand hover:text-brand-hover"
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
                                          className="cursor-pointer text-sm text-brand hover:text-brand-hover"
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
                            className="flex flex-col gap-3 rounded-lg border border-gray-200 p-4 transition-shadow hover:shadow-md sm:flex-row sm:items-start sm:justify-between sm:gap-4"
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
                              <div className="flex shrink-0 flex-row gap-6 sm:gap-4">
                                <div className="flex flex-col items-center">
                                  <a
                                    href={resolveImageUrl(item.pdfUrl)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cursor-pointer text-sm text-brand hover:text-brand-hover"
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
                                    className="cursor-pointer text-sm text-brand hover:text-brand-hover"
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
