import { useCallback, useEffect, useState } from "react";
import {
  investorApi,
  resolveImageUrl,
  uploadImage,
  uploadPdf,
} from "@/services/api";

type NotifyFn = (message: string, type?: "success" | "error" | "info") => void;

type RelatedLinkSectionLabelType = "name" | "financialYear";

export type RelatedLinkItem = {
  id: number;
  name: string;
  publishDate: string;
  pdfUrl: string;
  imageUrl: string;
  isStatic: boolean;
  staticContent: string;
  order: number;
};

export type RelatedLinkSection = {
  id: number;
  name: string;
  labelType?: RelatedLinkSectionLabelType;
  financialYear?: string;
  order: number;
  items: RelatedLinkItem[];
};

export type RelatedLinkCategory = {
  id: number;
  name: string;
  order: number;
  collapsible?: boolean;
  sections: RelatedLinkSection[];
};

type ItemFormState = {
  id?: number;
  name: string;
  publishDate: string;
  pdfUrl: string;
  imageUrl: string;
  isStatic: boolean;
  staticContent: string;
};

type SectionFormState = {
  id?: number;
  name: string;
  labelType: RelatedLinkSectionLabelType;
  financialYear: string;
};

type CategoryFormState = {
  id?: number;
  name: string;
  collapsible: boolean;
};

const EMPTY_ITEM: ItemFormState = {
  name: "",
  publishDate: "",
  pdfUrl: "",
  imageUrl: "",
  isStatic: false,
  staticContent: "",
};

const EMPTY_SECTION: SectionFormState = {
  name: "",
  labelType: "name",
  financialYear: "",
};

const EMPTY_CATEGORY: CategoryFormState = {
  name: "",
  collapsible: false,
};

const MIN_YEAR = 2010;
const MAX_YEAR = 2030;

function parseFinancialYear(fy: string | undefined): { startYear: number; endYear: number } {
  const curr = new Date().getFullYear();
  if (!fy || !fy.trim()) return { startYear: curr, endYear: curr + 1 };
  const parts = fy
    .split("-")
    .map((p) => parseInt(p.trim(), 10))
    .filter((n) => !isNaN(n));
  if (parts.length < 2) return { startYear: curr, endYear: curr + 1 };
  let start = parts[0];
  let end = parts[1];
  if (end < 100) end = end >= 90 ? 1900 + end : 2000 + end;
  return { startYear: start, endYear: end };
}

function formatFinancialYear(startYear: number, endYear: number): string {
  return `${startYear}-${endYear}`;
}

function reorderList<T extends { order: number }>(list: T[], from: number, to: number): T[] {
  if (from === to || from < 0 || to < 0 || from >= list.length || to >= list.length) {
    return list;
  }
  const next = [...list];
  const [item] = next.splice(from, 1);
  next.splice(to, 0, item);
  return next.map((m, index) => ({ ...m, order: index + 1 }));
}

type Props = {
  showNotification: NotifyFn;
};

export default function RelatedLinksCMS({ showNotification }: Props) {
  const [categories, setCategories] = useState<RelatedLinkCategory[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const [expandedSections, setExpandedSections] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [catDragIndex, setCatDragIndex] = useState<number | null>(null);
  const [catDragOver, setCatDragOver] = useState<number | null>(null);
  const [secDragIndex, setSecDragIndex] = useState<number | null>(null);
  const [secDragOver, setSecDragOver] = useState<number | null>(null);
  const [itemDragIndex, setItemDragIndex] = useState<number | null>(null);
  const [itemDragOver, setItemDragOver] = useState<number | null>(null);
  const [itemDragSectionId, setItemDragSectionId] = useState<number | null>(null);

  const [categoryFormOpen, setCategoryFormOpen] = useState(false);
  const [categoryForm, setCategoryForm] = useState<CategoryFormState>(EMPTY_CATEGORY);
  const [sectionFormOpen, setSectionFormOpen] = useState(false);
  const [sectionForm, setSectionForm] = useState<SectionFormState>(EMPTY_SECTION);
  const [itemFormOpen, setItemFormOpen] = useState(false);
  const [itemForm, setItemForm] = useState<ItemFormState>(EMPTY_ITEM);
  const [itemFormSectionId, setItemFormSectionId] = useState<number | null>(null);
  const [uploadingPdf, setUploadingPdf] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

  const selectedCategory = categories.find((c) => c.id === selectedCategoryId) ?? null;

  const load = useCallback(async () => {
    try {
      setLoading(true);
      const data = await investorApi.getRelatedLinks();
      const list = (Array.isArray(data) ? data : []) as RelatedLinkCategory[];
      setCategories(list);
      setSelectedCategoryId((prev) => {
        if (prev != null && list.some((c) => c.id === prev)) return prev;
        return list[0]?.id ?? null;
      });
    } catch (error: any) {
      showNotification(error?.message || "Failed to load related links", "error");
    } finally {
      setLoading(false);
    }
  }, [showNotification]);

  useEffect(() => {
    load();
  }, [load]);

  const handleSave = async () => {
    try {
      setSaving(true);
      const normalized = categories.map((cat, ci) => ({
        ...cat,
        order: ci + 1,
        sections: cat.sections.map((sec, si) => ({
          ...sec,
          order: si + 1,
          items: sec.items.map((item, ii) => ({ ...item, order: ii + 1 })),
        })),
      }));
      await investorApi.saveRelatedLinks(normalized);
      setCategories(normalized);
      showNotification("Related links saved successfully!", "success");
    } catch (error: any) {
      showNotification(error?.message || "Failed to save related links", "error");
    } finally {
      setSaving(false);
    }
  };

  const handleReset = async () => {
    if (!window.confirm("Reload content from the database? Unsaved changes will be lost.")) {
      return;
    }
    await load();
    setExpandedSections([]);
    showNotification("Content reloaded", "info");
  };

  /* ── Categories ── */
  const openCreateCategory = () => {
    setCategoryForm(EMPTY_CATEGORY);
    setCategoryFormOpen(true);
  };

  const openEditCategory = (cat: RelatedLinkCategory, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCategoryForm({
      id: cat.id,
      name: cat.name,
      collapsible: !!cat.collapsible,
    });
    setCategoryFormOpen(true);
  };

  const saveCategoryForm = () => {
    const name = categoryForm.name.trim();
    if (!name) {
      showNotification("Category name is required", "error");
      return;
    }
    if (categoryForm.id != null) {
      setCategories((prev) =>
        prev.map((c) =>
          c.id === categoryForm.id
            ? { ...c, name, collapsible: categoryForm.collapsible }
            : c
        )
      );
    } else {
      const nextId = categories.reduce((max, c) => Math.max(max, c.id), 0) + 1;
      const created: RelatedLinkCategory = {
        id: nextId,
        name,
        order: 1,
        collapsible: categoryForm.collapsible,
        sections: [],
      };
      // New category goes to the top; drag later to reposition
      setCategories((prev) =>
        [created, ...prev].map((c, i) => ({ ...c, order: i + 1 }))
      );
      setSelectedCategoryId(nextId);
    }
    setCategoryFormOpen(false);
    setCategoryForm(EMPTY_CATEGORY);
  };

  const deleteCategory = (categoryId: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!window.confirm("Delete this category and all its sections/items?")) return;
    setCategories((prev) =>
      prev
        .filter((c) => c.id !== categoryId)
        .map((c, i) => ({ ...c, order: i + 1 }))
    );
    if (selectedCategoryId === categoryId) {
      setSelectedCategoryId(null);
      setExpandedSections([]);
    }
  };

  const onCategoryDrop = (toIndex: number) => {
    if (catDragIndex == null) return;
    setCategories((prev) => reorderList(prev, catDragIndex, toIndex));
    setCatDragIndex(null);
    setCatDragOver(null);
  };

  /* ── Sections ── */
  const openCreateSection = () => {
    if (!selectedCategoryId) return;
    setSectionForm(EMPTY_SECTION);
    setSectionFormOpen(true);
  };

  const openEditSection = (section: RelatedLinkSection, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSectionForm({
      id: section.id,
      name: section.name,
      labelType: section.labelType === "financialYear" ? "financialYear" : "name",
      financialYear: section.financialYear || "",
    });
    setSectionFormOpen(true);
  };

  const saveSectionForm = () => {
    if (!selectedCategoryId) return;
    if (sectionForm.labelType === "name" && !sectionForm.name.trim()) {
      showNotification("Section name is required", "error");
      return;
    }
    if (sectionForm.labelType === "financialYear" && !sectionForm.financialYear.trim()) {
      showNotification("Financial year is required", "error");
      return;
    }

    setCategories((prev) =>
      prev.map((cat) => {
        if (cat.id !== selectedCategoryId) return cat;
        if (sectionForm.id != null) {
          return {
            ...cat,
            sections: cat.sections.map((sec) =>
              sec.id === sectionForm.id
                ? {
                    ...sec,
                    name: sectionForm.name.trim(),
                    labelType: sectionForm.labelType,
                    financialYear:
                      sectionForm.labelType === "financialYear"
                        ? sectionForm.financialYear
                        : "",
                  }
                : sec
            ),
          };
        }
        const nextId = cat.sections.reduce((max, s) => Math.max(max, s.id), 0) + 1;
        const created: RelatedLinkSection = {
          id: nextId,
          name: sectionForm.name.trim() || sectionForm.financialYear,
          labelType: sectionForm.labelType,
          financialYear:
            sectionForm.labelType === "financialYear" ? sectionForm.financialYear : "",
          order: 1,
          items: [],
        };
        setExpandedSections((ids) => [...ids, nextId]);
        // New section goes to the top; drag later to reposition
        return {
          ...cat,
          sections: [created, ...cat.sections].map((s, i) => ({ ...s, order: i + 1 })),
        };
      })
    );
    setSectionFormOpen(false);
    setSectionForm(EMPTY_SECTION);
  };

  const deleteSection = (sectionId: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedCategoryId) return;
    if (!window.confirm("Delete this section and all its items?")) return;
    setCategories((prev) =>
      prev.map((cat) => {
        if (cat.id !== selectedCategoryId) return cat;
        return {
          ...cat,
          sections: cat.sections
            .filter((s) => s.id !== sectionId)
            .map((s, i) => ({ ...s, order: i + 1 })),
        };
      })
    );
    setExpandedSections((ids) => ids.filter((id) => id !== sectionId));
  };

  const toggleSection = (sectionId: number) => {
    setExpandedSections((ids) =>
      ids.includes(sectionId) ? ids.filter((id) => id !== sectionId) : [...ids, sectionId]
    );
  };

  const onSectionDrop = (toIndex: number) => {
    if (secDragIndex == null || !selectedCategoryId) return;
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === selectedCategoryId
          ? { ...cat, sections: reorderList(cat.sections, secDragIndex, toIndex) }
          : cat
      )
    );
    setSecDragIndex(null);
    setSecDragOver(null);
  };

  /* ── Items ── */
  const openCreateItem = (sectionId: number) => {
    setItemForm(EMPTY_ITEM);
    setItemFormSectionId(sectionId);
    setItemFormOpen(true);
  };

  const openEditItem = (sectionId: number, item: RelatedLinkItem) => {
    setItemForm({
      id: item.id,
      name: item.name,
      publishDate: item.publishDate || "",
      pdfUrl: item.pdfUrl || "",
      imageUrl: item.imageUrl || "",
      isStatic: !!item.isStatic,
      staticContent: item.staticContent || "",
    });
    setItemFormSectionId(sectionId);
    setItemFormOpen(true);
  };

  const closeItemForm = () => {
    setItemFormOpen(false);
    setItemForm(EMPTY_ITEM);
    setItemFormSectionId(null);
  };

  const saveItemForm = () => {
    if (!selectedCategoryId || itemFormSectionId == null) return;
    if (!itemForm.isStatic && !itemForm.name.trim()) {
      showNotification("Item name is required", "error");
      return;
    }

    setCategories((prev) =>
      prev.map((cat) => {
        if (cat.id !== selectedCategoryId) return cat;
        return {
          ...cat,
          sections: cat.sections.map((sec) => {
            if (sec.id !== itemFormSectionId) return sec;
            if (itemForm.id != null) {
              return {
                ...sec,
                items: sec.items.map((item) =>
                  item.id === itemForm.id
                    ? {
                        ...item,
                        name: itemForm.name.trim(),
                        publishDate: itemForm.publishDate,
                        pdfUrl: itemForm.pdfUrl.trim(),
                        imageUrl: itemForm.imageUrl.trim(),
                        isStatic: itemForm.isStatic,
                        staticContent: itemForm.staticContent,
                      }
                    : item
                ),
              };
            }
            const nextId = sec.items.reduce((max, i) => Math.max(max, i.id), 0) + 1;
            const created: RelatedLinkItem = {
              id: nextId,
              name: itemForm.name.trim() || "New Document",
              publishDate: itemForm.publishDate,
              pdfUrl: itemForm.pdfUrl.trim(),
              imageUrl: itemForm.imageUrl.trim(),
              isStatic: itemForm.isStatic,
              staticContent: itemForm.staticContent,
              order: 1,
            };
            // New item goes to the top; drag later to reposition
            return {
              ...sec,
              items: [created, ...sec.items].map((i, idx) => ({ ...i, order: idx + 1 })),
            };
          }),
        };
      })
    );
    closeItemForm();
  };

  const deleteItem = (sectionId: number, itemId: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedCategoryId) return;
    if (!window.confirm("Delete this item?")) return;
    setCategories((prev) =>
      prev.map((cat) => {
        if (cat.id !== selectedCategoryId) return cat;
        return {
          ...cat,
          sections: cat.sections.map((sec) => {
            if (sec.id !== sectionId) return sec;
            return {
              ...sec,
              items: sec.items
                .filter((i) => i.id !== itemId)
                .map((i, idx) => ({ ...i, order: idx + 1 })),
            };
          }),
        };
      })
    );
  };

  const onItemDrop = (sectionId: number, toIndex: number) => {
    if (itemDragIndex == null || itemDragSectionId !== sectionId || !selectedCategoryId) return;
    setCategories((prev) =>
      prev.map((cat) => {
        if (cat.id !== selectedCategoryId) return cat;
        return {
          ...cat,
          sections: cat.sections.map((sec) =>
            sec.id === sectionId
              ? { ...sec, items: reorderList(sec.items, itemDragIndex, toIndex) }
              : sec
          ),
        };
      })
    );
    setItemDragIndex(null);
    setItemDragOver(null);
    setItemDragSectionId(null);
  };

  const handleItemPdfUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setUploadingPdf(true);
      const pdfUrl = await uploadPdf(file);
      setItemForm((prev) => ({ ...prev, pdfUrl }));
      showNotification("PDF uploaded", "success");
    } catch {
      showNotification("PDF upload failed", "error");
    } finally {
      setUploadingPdf(false);
      e.target.value = "";
    }
  };

  const handleItemImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setUploadingImage(true);
      const imageUrl = await uploadImage(file);
      setItemForm((prev) => ({ ...prev, imageUrl }));
      showNotification("Image uploaded", "success");
    } catch {
      showNotification("Image upload failed", "error");
    } finally {
      setUploadingImage(false);
      e.target.value = "";
    }
  };

  const sectionDisplayName = (section: RelatedLinkSection) => {
    if (section.labelType === "financialYear" && section.financialYear) {
      return section.financialYear;
    }
    return section.name || "Untitled section";
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16 text-gray-500">
        Loading related links…
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gray-600">
          Drag to reorder. Expand a section to manage items. Item create/edit opens a popup.
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
          >
            <i className="ri-refresh-line" />
            Reset
          </button>
          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 rounded-lg bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand-hover disabled:opacity-50"
          >
            <i className="ri-save-line" />
            {saving ? "Saving…" : "Save"}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
        {/* Left — Categories */}
        <div className="w-full shrink-0 rounded-xl border border-gray-200 bg-white lg:w-[35%]">
          <div className="flex items-center justify-between border-b border-gray-200 px-3 py-3">
            <h3 className="text-sm font-semibold text-gray-900">Categories</h3>
            <button
              type="button"
              onClick={openCreateCategory}
              className="flex h-7 w-7 items-center justify-center rounded-md bg-brand text-white hover:bg-brand-hover"
              title="Add category"
            >
              <i className="ri-add-line" />
            </button>
          </div>

          {categoryFormOpen ? (
            <div className="space-y-2 border-b border-gray-100 bg-gray-50 px-3 py-3">
              <p className="text-xs font-semibold text-gray-700">
                {categoryForm.id != null ? "Edit category" : "New category"}
              </p>
              <input
                type="text"
                value={categoryForm.name}
                onChange={(e) =>
                  setCategoryForm((p) => ({ ...p, name: e.target.value }))
                }
                className="w-full rounded border border-gray-300 px-2 py-1.5 text-sm"
                placeholder="Category name"
                autoFocus
              />
              <label className="flex items-center gap-1.5 text-xs text-gray-600">
                <input
                  type="checkbox"
                  checked={categoryForm.collapsible}
                  onChange={(e) =>
                    setCategoryForm((p) => ({
                      ...p,
                      collapsible: e.target.checked,
                    }))
                  }
                />
                Collapsible sections
              </label>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setCategoryFormOpen(false);
                    setCategoryForm(EMPTY_CATEGORY);
                  }}
                  className="rounded px-2 py-1 text-xs text-gray-600 hover:bg-white"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={saveCategoryForm}
                  className="rounded bg-brand px-2 py-1 text-xs font-medium text-white hover:bg-brand-hover"
                >
                  {categoryForm.id != null ? "Update" : "Add"}
                </button>
              </div>
            </div>
          ) : null}

          {categories.length === 0 ? (
            <div className="px-3 py-10 text-center text-xs text-gray-500">
              No categories. Click + to add.
            </div>
          ) : (
            <ul className="max-h-[70vh] space-y-1 overflow-y-auto p-2">
              {categories.map((category, index) => (
                <li
                  key={category.id}
                  draggable
                  onDragStart={() => setCatDragIndex(index)}
                  onDragOver={(e) => {
                    e.preventDefault();
                    setCatDragOver(index);
                  }}
                  onDrop={() => onCategoryDrop(index)}
                  onDragEnd={() => {
                    setCatDragIndex(null);
                    setCatDragOver(null);
                  }}
                  className={`rounded-lg border transition-all ${
                    selectedCategoryId === category.id
                      ? "border-brand bg-brand/5"
                      : "border-gray-200 bg-white"
                  } ${catDragOver === index ? "ring-2 ring-brand/30" : ""} ${
                    catDragIndex === index ? "opacity-50" : ""
                  }`}
                >
                  <div className="flex items-center gap-1 px-1.5 py-1.5">
                    <span className="cursor-grab px-0.5 text-gray-400">
                      <i className="ri-draggable text-sm" />
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCategoryId(category.id);
                        setExpandedSections([]);
                      }}
                      className="min-w-0 flex-1 text-left"
                    >
                      <p
                        className={`truncate text-sm font-medium ${
                          selectedCategoryId === category.id
                            ? "text-brand"
                            : "text-gray-900"
                        }`}
                      >
                        {category.name}
                      </p>
                      <p className="text-[10px] text-gray-500">
                        {category.sections.length} sections
                      </p>
                    </button>
                    <button
                      type="button"
                      onClick={(e) => openEditCategory(category, e)}
                      className="flex h-7 w-7 items-center justify-center rounded text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                      title="Edit"
                      aria-label="Edit category"
                    >
                      <i className="ri-pencil-line text-sm" />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => deleteCategory(category.id, e)}
                      className="flex h-7 w-7 items-center justify-center rounded text-red-500 hover:bg-red-50"
                      title="Delete"
                      aria-label="Delete category"
                    >
                      <i className="ri-delete-bin-line text-sm" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* Right — Sections + Items */}
        <div className="min-w-0 flex-1 rounded-xl border border-gray-200 bg-white lg:w-[65%]">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-200 px-4 py-3">
            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-gray-900">
                Sections
                {selectedCategory ? (
                  <span className="ml-2 font-normal text-gray-500">
                    · {selectedCategory.name}
                  </span>
                ) : null}
              </h3>
              {selectedCategory ? (
                <label className="mt-1 inline-flex items-center gap-1.5 text-xs text-gray-600">
                  <input
                    type="checkbox"
                    checked={!!selectedCategory.collapsible}
                    onChange={(e) =>
                      setCategories((prev) =>
                        prev.map((c) =>
                          c.id === selectedCategory.id
                            ? { ...c, collapsible: e.target.checked }
                            : c
                        )
                      )
                    }
                    className="rounded"
                  />
                  Sections are collapsible on website
                </label>
              ) : null}
            </div>
            <button
              type="button"
              onClick={openCreateSection}
              disabled={!selectedCategory}
              className="flex items-center gap-1.5 rounded-lg bg-brand px-3 py-1.5 text-sm font-medium text-white hover:bg-brand-hover disabled:opacity-40"
            >
              <i className="ri-add-line" />
              Section
            </button>
          </div>

          {sectionFormOpen ? (
            <div className="space-y-2 border-b border-gray-100 bg-gray-50 px-4 py-3">
              <p className="text-xs font-semibold text-gray-700">
                {sectionForm.id != null ? "Edit section" : "New section"}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <label className="flex items-center gap-1 text-xs text-gray-700">
                  <input
                    type="radio"
                    checked={sectionForm.labelType === "name"}
                    onChange={() =>
                      setSectionForm((p) => ({ ...p, labelType: "name" }))
                    }
                  />
                  Name
                </label>
                <label className="flex items-center gap-1 text-xs text-gray-700">
                  <input
                    type="radio"
                    checked={sectionForm.labelType === "financialYear"}
                    onChange={() => {
                      const { startYear, endYear } = parseFinancialYear(
                        sectionForm.financialYear
                      );
                      setSectionForm((p) => ({
                        ...p,
                        labelType: "financialYear",
                        financialYear: formatFinancialYear(startYear, endYear),
                      }));
                    }}
                  />
                  Financial Year
                </label>
              </div>
              {sectionForm.labelType === "financialYear" ? (
                (() => {
                  const { startYear, endYear } = parseFinancialYear(
                    sectionForm.financialYear
                  );
                  return (
                    <div className="flex flex-wrap items-center gap-2">
                      <input
                        type="number"
                        min={MIN_YEAR}
                        max={MAX_YEAR}
                        value={startYear}
                        onChange={(e) => {
                          const y = parseInt(e.target.value, 10);
                          if (!isNaN(y)) {
                            setSectionForm((p) => ({
                              ...p,
                              financialYear: formatFinancialYear(y, endYear),
                            }));
                          }
                        }}
                        className="w-24 rounded border border-gray-300 px-2 py-1.5 text-sm"
                      />
                      <span className="text-xs text-gray-500">to</span>
                      <input
                        type="number"
                        min={MIN_YEAR}
                        max={MAX_YEAR}
                        value={endYear}
                        onChange={(e) => {
                          const y = parseInt(e.target.value, 10);
                          if (!isNaN(y)) {
                            setSectionForm((p) => ({
                              ...p,
                              financialYear: formatFinancialYear(startYear, y),
                            }));
                          }
                        }}
                        className="w-24 rounded border border-gray-300 px-2 py-1.5 text-sm"
                      />
                    </div>
                  );
                })()
              ) : (
                <input
                  type="text"
                  value={sectionForm.name}
                  onChange={(e) =>
                    setSectionForm((p) => ({ ...p, name: e.target.value }))
                  }
                  className="w-full rounded border border-gray-300 px-3 py-1.5 text-sm"
                  placeholder="Section name"
                  autoFocus
                />
              )}
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setSectionFormOpen(false);
                    setSectionForm(EMPTY_SECTION);
                  }}
                  className="rounded px-3 py-1 text-xs text-gray-600 hover:bg-white"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={saveSectionForm}
                  className="rounded bg-brand px-3 py-1 text-xs font-medium text-white hover:bg-brand-hover"
                >
                  {sectionForm.id != null ? "Update" : "Add"}
                </button>
              </div>
            </div>
          ) : null}

          {!selectedCategory ? (
            <div className="px-4 py-16 text-center text-sm text-gray-500">
              Select a category on the left to manage sections.
            </div>
          ) : selectedCategory.sections.length === 0 ? (
            <div className="px-4 py-12 text-center text-sm text-gray-500">
              No sections yet. Click “Section” to add one.
            </div>
          ) : (
            <div className="space-y-2 p-3">
              {selectedCategory.sections.map((section, sectionIndex) => {
                const expanded = expandedSections.includes(section.id);
                return (
                  <div
                    key={section.id}
                    draggable
                    onDragStart={() => setSecDragIndex(sectionIndex)}
                    onDragOver={(e) => {
                      e.preventDefault();
                      setSecDragOver(sectionIndex);
                    }}
                    onDrop={() => onSectionDrop(sectionIndex)}
                    onDragEnd={() => {
                      setSecDragIndex(null);
                      setSecDragOver(null);
                    }}
                    className={`overflow-hidden rounded-lg border bg-white transition-all ${
                      secDragOver === sectionIndex
                        ? "border-brand ring-2 ring-brand/20"
                        : "border-gray-200"
                    } ${secDragIndex === sectionIndex ? "opacity-50" : ""}`}
                  >
                    <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1.5">
                      <span
                        className="cursor-grab px-1 text-gray-400"
                        title="Drag to reorder"
                      >
                        <i className="ri-draggable text-sm" />
                      </span>
                      <button
                        type="button"
                        onClick={() => toggleSection(section.id)}
                        className="flex min-w-0 flex-1 items-center gap-2 rounded px-1.5 py-1 text-left hover:bg-white"
                      >
                        <i
                          className={`ri-arrow-${expanded ? "down" : "right"}-s-line shrink-0 text-gray-500`}
                        />
                        <span className="w-5 shrink-0 text-center text-[10px] font-semibold text-gray-400">
                          {sectionIndex + 1}
                        </span>
                        <span className="truncate text-sm font-medium text-gray-900">
                          {sectionDisplayName(section)}
                        </span>
                        <span className="shrink-0 rounded bg-gray-200 px-1.5 py-0.5 text-[10px] text-gray-600">
                          {section.items.length} items
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={(e) => openEditSection(section, e)}
                        className="flex h-7 w-7 items-center justify-center rounded text-gray-500 hover:bg-white hover:text-gray-800"
                        title="Edit"
                        aria-label="Edit section"
                      >
                        <i className="ri-pencil-line text-sm" />
                      </button>
                      <button
                        type="button"
                        onClick={(e) => deleteSection(section.id, e)}
                        className="flex h-7 w-7 items-center justify-center rounded text-red-500 hover:bg-red-50"
                        title="Delete"
                        aria-label="Delete section"
                      >
                        <i className="ri-delete-bin-line text-sm" />
                      </button>
                    </div>

                    {expanded ? (
                      <div className="border-t border-gray-100 bg-white p-2">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-xs font-medium text-gray-500">Items</span>
                          <button
                            type="button"
                            onClick={() => openCreateItem(section.id)}
                            className="flex items-center gap-1 rounded bg-brand/10 px-2 py-1 text-xs font-medium text-brand hover:bg-brand/20"
                          >
                            <i className="ri-add-line" />
                            Add Item
                          </button>
                        </div>

                        {section.items.length === 0 ? (
                          <div className="rounded border border-dashed border-gray-200 py-6 text-center text-xs text-gray-400">
                            No items. Click “Add Item”.
                          </div>
                        ) : (
                          <ul className="space-y-1">
                            {section.items.map((item, itemIndex) => (
                              <li
                                key={item.id}
                                draggable
                                onDragStart={(e) => {
                                  e.stopPropagation();
                                  setItemDragIndex(itemIndex);
                                  setItemDragSectionId(section.id);
                                }}
                                onDragOver={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  setItemDragOver(itemIndex);
                                  setItemDragSectionId(section.id);
                                }}
                                onDrop={(e) => {
                                  e.stopPropagation();
                                  onItemDrop(section.id, itemIndex);
                                }}
                                onDragEnd={() => {
                                  setItemDragIndex(null);
                                  setItemDragOver(null);
                                  setItemDragSectionId(null);
                                }}
                                className={`flex items-center gap-1.5 rounded border bg-gray-50 px-1.5 py-1 ${
                                  itemDragSectionId === section.id &&
                                  itemDragOver === itemIndex
                                    ? "border-brand ring-1 ring-brand/30"
                                    : "border-gray-200"
                                } ${
                                  itemDragSectionId === section.id &&
                                  itemDragIndex === itemIndex
                                    ? "opacity-50"
                                    : ""
                                }`}
                              >
                                <span className="cursor-grab px-0.5 text-gray-400">
                                  <i className="ri-draggable text-sm" />
                                </span>
                                <span className="w-4 shrink-0 text-center text-[10px] text-gray-400">
                                  {itemIndex + 1}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => openEditItem(section.id, item)}
                                  className="min-w-0 flex-1 truncate text-left text-xs font-medium text-gray-800 hover:text-brand"
                                  title="Click to edit"
                                >
                                  {item.isStatic
                                    ? item.name || "Static content"
                                    : item.name || "Untitled"}
                                  {item.isStatic ? (
                                    <span className="ml-1 text-[10px] font-normal text-gray-400">
                                      (static)
                                    </span>
                                  ) : null}
                                </button>
                                {!item.isStatic && item.pdfUrl ? (
                                  <i className="ri-file-pdf-line shrink-0 text-sm text-red-500" />
                                ) : null}
                                <button
                                  type="button"
                                  onClick={() => openEditItem(section.id, item)}
                                  className="flex h-6 w-6 items-center justify-center rounded text-gray-500 hover:bg-white hover:text-gray-800"
                                  title="Edit"
                                  aria-label="Edit item"
                                >
                                  <i className="ri-pencil-line text-sm" />
                                </button>
                                <button
                                  type="button"
                                  onClick={(e) => deleteItem(section.id, item.id, e)}
                                  className="flex h-6 w-6 items-center justify-center rounded text-red-500 hover:bg-red-50"
                                  title="Delete"
                                  aria-label="Delete item"
                                >
                                  <i className="ri-delete-bin-line text-sm" />
                                </button>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          )}
        </div>

      </div>

      {/* Item create/edit popup — full fields */}
      {itemFormOpen && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/50"
          onClick={closeItemForm}
          role="presentation"
        >
          <div className="flex min-h-full items-start justify-center px-4 py-8">
            <div
              role="dialog"
              aria-modal="true"
              className="relative w-full max-w-2xl rounded-xl bg-white shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {itemForm.id != null ? "Edit Item" : "Add Item"}
                </h3>
                <button
                  type="button"
                  onClick={closeItemForm}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
                  aria-label="Close"
                >
                  <i className="ri-close-line text-xl" />
                </button>
              </div>

              <div className="max-h-[min(80vh,720px)] space-y-4 overflow-y-auto px-6 py-5">
                <label className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={itemForm.isStatic}
                    onChange={(e) =>
                      setItemForm((p) => ({ ...p, isStatic: e.target.checked }))
                    }
                  />
                  Static Content (instead of PDF)
                </label>

                {itemForm.isStatic ? (
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">
                      Static Content (HTML)
                    </label>
                    <textarea
                      value={itemForm.staticContent}
                      onChange={(e) =>
                        setItemForm((p) => ({ ...p, staticContent: e.target.value }))
                      }
                      rows={10}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 font-mono text-sm focus:ring-2 focus:ring-green-500"
                      placeholder="Enter HTML content…"
                    />
                    <p className="mt-1 text-xs text-gray-500">
                      Supports HTML tags like &lt;p&gt;, &lt;strong&gt;, &lt;a&gt;, &lt;ol&gt;,
                      &lt;li&gt;, etc.
                    </p>
                    <div className="mt-3">
                      <label className="mb-1.5 block text-sm font-medium text-gray-700">
                        Display Name (optional)
                      </label>
                      <input
                        type="text"
                        value={itemForm.name}
                        onChange={(e) =>
                          setItemForm((p) => ({ ...p, name: e.target.value }))
                        }
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-green-500"
                        placeholder="Label shown in CMS list"
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-gray-700">
                        Name *
                      </label>
                      <input
                        type="text"
                        value={itemForm.name}
                        onChange={(e) =>
                          setItemForm((p) => ({ ...p, name: e.target.value }))
                        }
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-green-500"
                        placeholder="Item name"
                      />
                    </div>

                    <div>
                      <div className="mb-1.5 flex items-center justify-between">
                        <label className="block text-sm font-medium text-gray-700">
                          Published Date{" "}
                          <span className="font-normal text-gray-400">(optional)</span>
                        </label>
                        {itemForm.publishDate ? (
                          <button
                            type="button"
                            onClick={() =>
                              setItemForm((p) => ({ ...p, publishDate: "" }))
                            }
                            className="text-xs text-red-600 hover:underline"
                          >
                            Clear
                          </button>
                        ) : null}
                      </div>
                      <input
                        type="date"
                        value={itemForm.publishDate}
                        onChange={(e) =>
                          setItemForm((p) => ({ ...p, publishDate: e.target.value }))
                        }
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-green-500"
                      />
                    </div>

                    <div>
                      <div className="mb-1.5 flex items-center justify-between">
                        <label className="block text-sm font-medium text-gray-700">
                          Preview Image{" "}
                          <span className="font-normal text-gray-400">(optional)</span>
                        </label>
                        {itemForm.imageUrl ? (
                          <button
                            type="button"
                            onClick={() =>
                              setItemForm((p) => ({ ...p, imageUrl: "" }))
                            }
                            className="text-xs text-red-600 hover:underline"
                          >
                            Remove
                          </button>
                        ) : null}
                      </div>
                      <input
                        type="text"
                        value={itemForm.imageUrl}
                        onChange={(e) =>
                          setItemForm((p) => ({ ...p, imageUrl: e.target.value }))
                        }
                        className="mb-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-green-500"
                        placeholder="Image URL or upload below"
                      />
                      <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200">
                        <i className="ri-image-add-line" />
                        {uploadingImage ? "Uploading…" : "Upload Image"}
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleItemImageUpload}
                          disabled={uploadingImage}
                        />
                      </label>
                      {itemForm.imageUrl && !itemForm.imageUrl.startsWith("data:") ? (
                        <div className="mt-3 h-32 w-40 overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
                          <img
                            src={resolveImageUrl(itemForm.imageUrl)}
                            alt="Preview"
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ) : null}
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-gray-700">
                        PDF URL
                      </label>
                      <div className="flex flex-wrap items-center gap-2">
                        <input
                          type="text"
                          value={itemForm.pdfUrl}
                          onChange={(e) =>
                            setItemForm((p) => ({ ...p, pdfUrl: e.target.value }))
                          }
                          className="min-w-0 flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-green-500"
                          placeholder="PDF URL or path…"
                        />
                        <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-brand px-3 py-2 text-sm font-medium text-white hover:bg-brand-hover">
                          <i className="ri-upload-cloud-line" />
                          {uploadingPdf ? "Uploading…" : "Upload PDF"}
                          <input
                            type="file"
                            accept=".pdf,application/pdf"
                            className="hidden"
                            onChange={handleItemPdfUpload}
                            disabled={uploadingPdf}
                          />
                        </label>
                        {itemForm.pdfUrl ? (
                          <button
                            type="button"
                            onClick={() =>
                              window.open(
                                resolveImageUrl(itemForm.pdfUrl),
                                "_blank",
                                "noopener,noreferrer"
                              )
                            }
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-red-500 hover:bg-gray-50"
                            title="Preview PDF"
                          >
                            <i className="ri-file-pdf-line text-xl" />
                          </button>
                        ) : null}
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="flex justify-end gap-2 border-t border-gray-200 px-6 py-4">
                <button
                  type="button"
                  onClick={closeItemForm}
                  className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={saveItemForm}
                  className="rounded-lg bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand-hover"
                >
                  {itemForm.id != null ? "Update Item" : "Add Item"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
