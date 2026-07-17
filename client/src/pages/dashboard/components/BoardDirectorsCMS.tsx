import { useCallback, useEffect, useState } from "react";
import {
  boardOfDirectorsApi,
  resolveImageUrl,
  uploadImage,
  uploadPdf,
  type BoardDirectorMember,
  type BoardCeasedButton,
} from "@/services/api";

type NotifyFn = (message: string, type?: "success" | "error" | "info") => void;

type FormState = {
  id?: number;
  name: string;
  position: string;
  din: string;
  image: string;
  bioText: string;
  directorships: string[];
};

const EMPTY_FORM: FormState = {
  name: "",
  position: "",
  din: "",
  image: "",
  bioText: "",
  directorships: [],
};

function memberToForm(member: BoardDirectorMember): FormState {
  return {
    id: member.id,
    name: member.name,
    position: member.position,
    din: member.din,
    image: member.image,
    bioText: (member.bio || []).join("\n\n"),
    directorships: [...(member.directorships || [])],
  };
}

function formToMember(form: FormState, order: number, fallbackId: number): BoardDirectorMember {
  return {
    id: form.id ?? fallbackId,
    name: form.name.trim(),
    position: form.position.trim(),
    din: form.din.trim(),
    image: form.image.trim(),
    bio: form.bioText
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter(Boolean),
    directorships: form.directorships.map((d) => d.trim()).filter(Boolean),
    order,
  };
}

type Props = {
  showNotification: NotifyFn;
};

export default function BoardDirectorsCMS({ showNotification }: Props) {
  const [title, setTitle] = useState("Board of Directors");
  const [description, setDescription] = useState(
    "Our board comprises experienced professionals who provide strategic guidance and governance"
  );
  const [members, setMembers] = useState<BoardDirectorMember[]>([]);
  const [ceasedButton, setCeasedButton] = useState<BoardCeasedButton>({
    label: "RRIL - Directors Ceased",
    url: "/wp-content/uploads/2025/10/RRIL-Ceased-Directors.pdf",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadingPdf, setUploadingPdf] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const [dirDragIndex, setDirDragIndex] = useState<number | null>(null);
  const [dirDragOverIndex, setDirDragOverIndex] = useState<number | null>(null);
  const [newDirectorship, setNewDirectorship] = useState("");

  const load = useCallback(async () => {
    try {
      setLoading(true);
      const data = await boardOfDirectorsApi.get();
      setTitle(data.title || "Board of Directors");
      setDescription(data.description || "");
      setMembers(Array.isArray(data.members) ? data.members : []);
      setCeasedButton(
        data.ceasedButton || {
          label: "RRIL - Directors Ceased",
          url: "",
        }
      );
    } catch (error: any) {
      showNotification(error?.message || "Failed to load board of directors", "error");
    } finally {
      setLoading(false);
    }
  }, [showNotification]);

  useEffect(() => {
    load();
  }, [load]);

  const openCreate = () => {
    setForm(EMPTY_FORM);
    setNewDirectorship("");
    setFormOpen(true);
  };

  const openEdit = (member: BoardDirectorMember) => {
    setForm(memberToForm(member));
    setNewDirectorship("");
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
    setForm(EMPTY_FORM);
    setNewDirectorship("");
    setDirDragIndex(null);
    setDirDragOverIndex(null);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setUploading(true);
      const url = await uploadImage(file);
      setForm((prev) => ({ ...prev, image: url }));
      showNotification("Image uploaded", "success");
    } catch (error: any) {
      showNotification(error?.message || "Failed to upload image", "error");
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  };

  const handlePdfUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setUploadingPdf(true);
      const url = await uploadPdf(file);
      setCeasedButton((prev) => ({ ...prev, url }));
      showNotification("PDF uploaded", "success");
    } catch (error: any) {
      showNotification(error?.message || "Failed to upload PDF", "error");
    } finally {
      setUploadingPdf(false);
      e.target.value = "";
    }
  };

  const addDirectorship = () => {
    const value = newDirectorship.trim();
    if (!value) return;
    setForm((prev) => ({
      ...prev,
      directorships: [...prev.directorships, value],
    }));
    setNewDirectorship("");
  };

  const updateDirectorship = (index: number, value: string) => {
    setForm((prev) => ({
      ...prev,
      directorships: prev.directorships.map((d, i) => (i === index ? value : d)),
    }));
  };

  const removeDirectorship = (index: number) => {
    setForm((prev) => ({
      ...prev,
      directorships: prev.directorships.filter((_, i) => i !== index),
    }));
  };

  const reorderDirectorships = (from: number, to: number) => {
    if (from === to || from < 0 || to < 0) return;
    setForm((prev) => {
      const next = [...prev.directorships];
      const [item] = next.splice(from, 1);
      next.splice(to, 0, item);
      return { ...prev, directorships: next };
    });
  };

  const handleFormSave = () => {
    if (!form.name.trim()) {
      showNotification("Name is required", "error");
      return;
    }

    setMembers((prev) => {
      if (form.id != null) {
        return prev.map((m) =>
          m.id === form.id ? formToMember(form, m.order, m.id) : m
        );
      }
      const nextId = prev.reduce((max, m) => Math.max(max, m.id), 0) + 1;
      return [...prev, formToMember(form, prev.length, nextId)];
    });
    closeForm();
  };

  const handleDelete = (id: number) => {
    if (!window.confirm("Delete this director card?")) return;
    setMembers((prev) =>
      prev
        .filter((m) => m.id !== id)
        .map((m, index) => ({ ...m, order: index }))
    );
  };

  const reorder = (from: number, to: number) => {
    if (from === to || from < 0 || to < 0) return;
    setMembers((prev) => {
      const next = [...prev];
      const [item] = next.splice(from, 1);
      next.splice(to, 0, item);
      return next.map((m, index) => ({ ...m, order: index }));
    });
  };

  const handleDragStart = (index: number) => setDragIndex(index);
  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    setDragOverIndex(index);
  };
  const handleDrop = (index: number) => {
    if (dragIndex == null) return;
    reorder(dragIndex, index);
    setDragIndex(null);
    setDragOverIndex(null);
  };
  const handleDragEnd = () => {
    setDragIndex(null);
    setDragOverIndex(null);
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      const saved = await boardOfDirectorsApi.save({
        title: title.trim(),
        description: description.trim(),
        members: members.map((m, index) => ({ ...m, order: index })),
        ceasedButton: {
          label: ceasedButton.label.trim() || "RRIL - Directors Ceased",
          url: ceasedButton.url.trim(),
        },
      });
      setTitle(saved.title);
      setDescription(saved.description);
      setMembers(saved.members);
      setCeasedButton(saved.ceasedButton);
      showNotification("Board of directors saved successfully!", "success");
    } catch (error: any) {
      showNotification(error?.message || "Failed to save", "error");
    } finally {
      setSaving(false);
    }
  };

  const handleReset = async () => {
    if (!window.confirm("Reload content from the database? Unsaved changes will be lost.")) {
      return;
    }
    await load();
    showNotification("Content reloaded", "info");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16 text-gray-500">
        Loading board of directors…
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gray-600">
          Edit section title, description, director cards, and the ceased-directors button. Drag cards to change display order.
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
          >
            <i className="ri-refresh-line" />
            Reset
          </button>
          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 rounded-lg bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-hover disabled:opacity-50"
          >
            <i className="ri-save-line" />
            {saving ? "Saving…" : "Save"}
          </button>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-5 space-y-4">
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-900">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-transparent focus:ring-2 focus:ring-green-500"
            placeholder="Board of Directors"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-900">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-transparent focus:ring-2 focus:ring-green-500"
            placeholder="Section description…"
          />
        </div>
      </div>

      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-gray-900">
          Director Cards ({members.length})
        </h3>
        <button
          type="button"
          onClick={openCreate}
          className="flex items-center gap-2 rounded-lg bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
        >
          <i className="ri-add-line" />
          Add Director
        </button>
      </div>

      {members.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 py-12 text-center text-sm text-gray-500">
          No director cards yet. Click “Add Director” to create one.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member, index) => (
            <div
              key={member.id}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDrop={() => handleDrop(index)}
              onDragEnd={handleDragEnd}
              className={`overflow-hidden rounded-lg border bg-white shadow-sm transition-all ${
                dragOverIndex === index ? "border-brand ring-2 ring-brand/30" : "border-gray-200"
              } ${dragIndex === index ? "opacity-60" : ""}`}
            >
              <button
                type="button"
                onClick={() => openEdit(member)}
                className="block w-full text-left"
                title="Click to edit"
              >
                <div className="aspect-square overflow-hidden bg-gray-100">
                  {member.image ? (
                    <img
                      src={resolveImageUrl(member.image)}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-gray-400">
                      <i className="ri-user-line text-4xl" />
                    </div>
                  )}
                </div>
                <div className="bg-brand p-4 text-white">
                  <p className="mb-1 text-xs text-white/70">#{index + 1} · Drag to reorder</p>
                  <h4 className="font-bold leading-snug">{member.name}</h4>
                  <p className="mt-1 text-sm text-white/90">{member.position}</p>
                  {member.din ? (
                    <p className="mt-1 text-xs text-white/80">DIN: {member.din}</p>
                  ) : null}
                </div>
              </button>
              <div className="flex border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => openEdit(member)}
                  className="flex flex-1 items-center justify-center gap-1.5 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  title="Edit"
                  aria-label="Edit"
                >
                  <i className="ri-pencil-line" />
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(member.id)}
                  className="flex flex-1 items-center justify-center gap-1.5 border-l border-gray-100 px-3 py-2 text-sm text-red-600 hover:bg-red-50"
                  title="Delete"
                  aria-label="Delete"
                >
                  <i className="ri-delete-bin-line" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="rounded-xl border border-gray-200 bg-white p-5 space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Ceased Directors Button</h3>
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-900">Button Label</label>
          <input
            type="text"
            value={ceasedButton.label}
            onChange={(e) =>
              setCeasedButton((prev) => ({ ...prev, label: e.target.value }))
            }
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-transparent focus:ring-2 focus:ring-green-500"
            placeholder="RRIL - Directors Ceased"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-900">File URL</label>
          <input
            type="text"
            value={ceasedButton.url}
            onChange={(e) =>
              setCeasedButton((prev) => ({ ...prev, url: e.target.value }))
            }
            className="mb-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-transparent focus:ring-2 focus:ring-green-500"
            placeholder="/wp-content/uploads/.../file.pdf"
          />
          <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200">
            <i className="ri-upload-2-line" />
            {uploadingPdf ? "Uploading…" : "Upload PDF"}
            <input
              type="file"
              accept="application/pdf,.pdf"
              className="hidden"
              onChange={handlePdfUpload}
              disabled={uploadingPdf}
            />
          </label>
          {ceasedButton.url ? (
            <a
              href={resolveImageUrl(ceasedButton.url)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 ml-3 inline-flex items-center gap-1 text-sm text-brand hover:underline"
            >
              <i className="ri-external-link-line" />
              Preview file
            </a>
          ) : null}
        </div>
      </div>

      {formOpen && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/50"
          onClick={closeForm}
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
                  {form.id != null ? "Edit Director" : "Add Director"}
                </h3>
                <button
                  type="button"
                  onClick={closeForm}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
                  aria-label="Close"
                >
                  <i className="ri-close-line text-xl" />
                </button>
              </div>

              <div className="max-h-[min(80vh,720px)] space-y-4 overflow-y-auto px-6 py-5">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">Name *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:ring-2 focus:ring-green-500"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Designation
                  </label>
                  <input
                    type="text"
                    value={form.position}
                    onChange={(e) => setForm((p) => ({ ...p, position: e.target.value }))}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:ring-2 focus:ring-green-500"
                    placeholder="e.g. Managing Director"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">DIN</label>
                  <input
                    type="text"
                    value={form.din}
                    onChange={(e) => setForm((p) => ({ ...p, din: e.target.value }))}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:ring-2 focus:ring-green-500"
                    placeholder="e.g. 07966090"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">Photo</label>
                  <input
                    type="text"
                    value={form.image}
                    onChange={(e) => setForm((p) => ({ ...p, image: e.target.value }))}
                    className="mb-2 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:ring-2 focus:ring-green-500"
                    placeholder="Image URL or upload below"
                  />
                  <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200">
                    <i className="ri-upload-2-line" />
                    {uploading ? "Uploading…" : "Upload Image"}
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                      disabled={uploading}
                    />
                  </label>
                  {form.image ? (
                    <div className="mt-3 h-40 w-40 overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
                      <img
                        src={resolveImageUrl(form.image)}
                        alt="Preview"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : null}
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Bio Para
                  </label>
                  <textarea
                    value={form.bioText}
                    onChange={(e) => setForm((p) => ({ ...p, bioText: e.target.value }))}
                    rows={8}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:ring-2 focus:ring-green-500"
                    placeholder="Enter bio paragraphs. Separate paragraphs with a blank line."
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Separate paragraphs with a blank line. Shown in the detail popup on the website.
                  </p>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Directorship and Designated Partnership Details
                    </label>
                    <span className="text-xs text-gray-500">
                      {form.directorships.length} items · drag to reorder
                    </span>
                  </div>

                  <div className="mb-2 flex gap-2">
                    <input
                      type="text"
                      value={newDirectorship}
                      onChange={(e) => setNewDirectorship(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          addDirectorship();
                        }
                      }}
                      className="min-w-0 flex-1 rounded-md border border-gray-300 px-3 py-1.5 text-sm focus:ring-2 focus:ring-green-500"
                      placeholder="Add company / partnership…"
                    />
                    <button
                      type="button"
                      onClick={addDirectorship}
                      className="shrink-0 rounded-md bg-brand px-3 py-1.5 text-sm font-medium text-white hover:bg-brand-hover"
                    >
                      Add
                    </button>
                  </div>

                  {form.directorships.length === 0 ? (
                    <div className="rounded-md border border-dashed border-gray-300 bg-gray-50 px-3 py-4 text-center text-xs text-gray-500">
                      No directorships yet.
                    </div>
                  ) : (
                    <ul className="max-h-56 space-y-1 overflow-y-auto rounded-md border border-gray-200 bg-gray-50 p-1.5">
                      {form.directorships.map((item, index) => (
                        <li
                          key={`${index}-${item.slice(0, 12)}`}
                          draggable
                          onDragStart={() => setDirDragIndex(index)}
                          onDragOver={(e) => {
                            e.preventDefault();
                            setDirDragOverIndex(index);
                          }}
                          onDrop={() => {
                            if (dirDragIndex == null) return;
                            reorderDirectorships(dirDragIndex, index);
                            setDirDragIndex(null);
                            setDirDragOverIndex(null);
                          }}
                          onDragEnd={() => {
                            setDirDragIndex(null);
                            setDirDragOverIndex(null);
                          }}
                          className={`flex items-center gap-1.5 rounded border bg-white px-1.5 py-1 ${
                            dirDragOverIndex === index
                              ? "border-brand ring-1 ring-brand/40"
                              : "border-gray-200"
                          } ${dirDragIndex === index ? "opacity-50" : ""}`}
                        >
                          <span
                            className="cursor-grab px-0.5 text-gray-400"
                            title="Drag to reorder"
                          >
                            <i className="ri-draggable text-sm" />
                          </span>
                          <span className="w-5 shrink-0 text-center text-[10px] text-gray-400">
                            {index + 1}
                          </span>
                          <input
                            type="text"
                            value={item}
                            onChange={(e) => updateDirectorship(index, e.target.value)}
                            className="min-w-0 flex-1 border-0 bg-transparent px-1 py-0.5 text-xs text-gray-800 focus:outline-none focus:ring-0"
                          />
                          <button
                            type="button"
                            onClick={() => removeDirectorship(index)}
                            className="shrink-0 rounded p-0.5 text-red-500 hover:bg-red-50"
                            aria-label="Remove"
                          >
                            <i className="ri-close-line text-sm" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className="flex justify-end gap-2 border-t border-gray-200 px-6 py-4">
                <button
                  type="button"
                  onClick={closeForm}
                  className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleFormSave}
                  className="rounded-lg bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand-hover"
                >
                  {form.id != null ? "Update Card" : "Add Card"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
