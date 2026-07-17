import { useCallback, useEffect, useState } from "react";
import {
  resolveImageUrl,
  seniorManagementApi,
  uploadImage,
  type SeniorManagementMember,
} from "@/services/api";

type NotifyFn = (message: string, type?: "success" | "error" | "info") => void;

type FormState = {
  id?: number;
  name: string;
  position: string;
  company: string;
  image: string;
  bioText: string;
};

const EMPTY_FORM: FormState = {
  name: "",
  position: "",
  company: "",
  image: "",
  bioText: "",
};

function memberToForm(member: SeniorManagementMember): FormState {
  return {
    id: member.id,
    name: member.name,
    position: member.position,
    company: member.company,
    image: member.image,
    bioText: (member.bio || []).join("\n\n"),
  };
}

function formToMember(form: FormState, order: number, fallbackId: number): SeniorManagementMember {
  return {
    id: form.id ?? fallbackId,
    name: form.name.trim(),
    position: form.position.trim(),
    company: form.company.trim(),
    image: form.image.trim(),
    bio: form.bioText
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter(Boolean),
    order,
  };
}

type Props = {
  showNotification: NotifyFn;
};

export default function SeniorManagementCMS({ showNotification }: Props) {
  const [title, setTitle] = useState("Senior Management Personnel");
  const [description, setDescription] = useState(
    "Our leadership team brings decades of combined experience across various domains"
  );
  const [members, setMembers] = useState<SeniorManagementMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const load = useCallback(async () => {
    try {
      setLoading(true);
      const data = await seniorManagementApi.get();
      setTitle(data.title || "Senior Management Personnel");
      setDescription(data.description || "");
      setMembers(Array.isArray(data.members) ? data.members : []);
    } catch (error: any) {
      showNotification(error?.message || "Failed to load senior management", "error");
    } finally {
      setLoading(false);
    }
  }, [showNotification]);

  useEffect(() => {
    load();
  }, [load]);

  const openCreate = () => {
    setForm(EMPTY_FORM);
    setFormOpen(true);
  };

  const openEdit = (member: SeniorManagementMember) => {
    setForm(memberToForm(member));
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
    setForm(EMPTY_FORM);
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
      return [
        ...prev,
        formToMember(form, prev.length, nextId),
      ];
    });
    closeForm();
  };

  const handleDelete = (id: number) => {
    if (!window.confirm("Delete this personnel card?")) return;
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
      const saved = await seniorManagementApi.save({
        title: title.trim(),
        description: description.trim(),
        members: members.map((m, index) => ({ ...m, order: index })),
      });
      setTitle(saved.title);
      setDescription(saved.description);
      setMembers(saved.members);
      showNotification("Senior management saved successfully!", "success");
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
        Loading senior management…
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gray-600">
          Edit section title, description, and personnel cards. Drag cards to change display order.
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
            placeholder="Senior Management Personnel"
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
          Personnel Cards ({members.length})
        </h3>
        <button
          type="button"
          onClick={openCreate}
          className="flex items-center gap-2 rounded-lg bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
        >
          <i className="ri-add-line" />
          Add Personnel
        </button>
      </div>

      {members.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 py-12 text-center text-sm text-gray-500">
          No personnel cards yet. Click “Add Personnel” to create one.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                  <p className="text-xs text-white/70 mb-1">#{index + 1} · Drag to reorder</p>
                  <h4 className="font-bold leading-snug">{member.name}</h4>
                  <p className="mt-1 text-sm text-white/90">{member.position}</p>
                  {member.company ? (
                    <p className="mt-1 text-xs text-white/80">{member.company}</p>
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
                  {form.id != null ? "Edit Personnel" : "Add Personnel"}
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
                    placeholder="e.g. Chief Operating Officer"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Department or Company
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:ring-2 focus:ring-green-500"
                    placeholder="e.g. Corporate Finance"
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
                    rows={10}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:ring-2 focus:ring-green-500"
                    placeholder="Enter bio paragraphs. Separate paragraphs with a blank line."
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Separate paragraphs with a blank line. Shown in the detail popup on the website.
                  </p>
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
