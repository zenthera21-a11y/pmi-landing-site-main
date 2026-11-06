import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useMutation } from "convex/react";
import { api } from "@pmi-south-asia/backend/convex/_generated/api";
import type { Id } from "@pmi-south-asia/backend/convex/_generated/dataModel";
import { useState } from "react";

export const Route = createFileRoute("/dashboard/certifications")({
  component: CertificationsComponent,
});

type Certification = {
  _id: Id<"certifications">;
  name: string;
  isActive: boolean;
  createdAt: number;
};

function CreateForm({
  onSubmit,
  onCancel,
}: {
  onSubmit: (name: string, isActive: boolean) => Promise<void>;
  onCancel: () => void;
}) {
  const [name, setName] = useState("");
  const [isActive, setIsActive] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() === "") {
      return;
    }
    await onSubmit(name, isActive);
    setName("");
    setIsActive(true);
  };

  return (
    <div className="border-b border-gray-100 bg-purple-50/50 p-6 transition-all">
      <form onSubmit={handleSubmit} className="flex items-end gap-4">
        <div className="flex-1 space-y-2">
          <label
            htmlFor="name"
            className="text-xs font-semibold uppercase tracking-wider text-[#5621b4]"
          >
            Certification Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. PMP® Certification"
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-[#5621b4] focus:outline-none focus:ring-1 focus:ring-[#5621b4]"
            autoFocus
          />
        </div>
        <div className="space-y-2 pb-2">
          <label className="flex cursor-pointer items-center gap-2 text-sm font-medium text-slate-700">
            <input
              type="checkbox"
              checked={isActive}
              onChange={(e) => setIsActive(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-[#5621b4] focus:ring-[#5621b4]"
            />
            Active
          </label>
        </div>
        <div className="flex gap-2 pb-[1px]">
          <button
            type="submit"
            className="rounded-md bg-[#5621b4] px-4 py-2 text-sm font-medium text-white hover:bg-[#451a94]"
          >
            Save
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-gray-50"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

function CertificationRow({
  cert,
  isEditing,
  deleteConfirm,
  onStartEdit,
  onCancelEdit,
  onUpdate,
  onRequestDelete,
  onCancelDelete,
  onConfirmDelete,
}: {
  cert: Certification;
  isEditing: boolean;
  deleteConfirm: boolean;
  onStartEdit: (cert: Certification) => void;
  onCancelEdit: () => void;
  onUpdate: (
    id: Id<"certifications">,
    name: string,
    active: boolean
  ) => Promise<void>;
  onRequestDelete: (id: Id<"certifications">) => void;
  onCancelDelete: () => void;
  onConfirmDelete: (id: Id<"certifications">) => Promise<void>;
}) {
  const [editName, setEditName] = useState(cert.name);
  const [editActive, setEditActive] = useState(cert.isActive);

  if (isEditing) {
    return (
      <tr className="group hover:bg-gray-50/50">
        <td className="px-6 py-4">
          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            className="w-full max-w-sm rounded border border-gray-300 px-3 py-1.5 text-sm focus:border-[#5621b4] focus:outline-none focus:ring-1 focus:ring-[#5621b4]"
          />
        </td>
        <td className="px-6 py-4">
          <label className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1">
            <input
              type="checkbox"
              checked={editActive}
              onChange={(e) => setEditActive(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-[#5621b4] focus:ring-[#5621b4]"
            />
            <span className="text-xs font-medium text-slate-600">
              {editActive ? "Active" : "Inactive"}
            </span>
          </label>
        </td>
        <td className="px-6 py-4 text-slate-500">
          {new Date(cert.createdAt).toLocaleDateString()}
        </td>
        <td className="px-6 py-4 text-right">
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => onUpdate(cert._id, editName, editActive)}
              className="rounded px-3 py-1 text-xs font-medium text-[#5621b4] hover:bg-purple-50 hover:underline"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => {
                setEditName(cert.name);
                setEditActive(cert.isActive);
                onCancelEdit();
              }}
              className="rounded px-3 py-1 text-xs font-medium text-slate-500 hover:bg-gray-100 hover:text-slate-700"
            >
              Cancel
            </button>
          </div>
        </td>
      </tr>
    );
  }

  return (
    <tr className="group hover:bg-gray-50/50">
      <td className="px-6 py-4 font-medium text-slate-800">{cert.name}</td>
      <td className="px-6 py-4">
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
            cert.isActive
              ? "bg-green-100 text-green-700"
              : "bg-slate-100 text-slate-600"
          }`}
        >
          <span
            className={`mr-1.5 h-1.5 w-1.5 rounded-full ${
              cert.isActive ? "bg-green-600" : "bg-slate-500"
            }`}
          />
          {cert.isActive ? "Active" : "Inactive"}
        </span>
      </td>
      <td className="px-6 py-4 text-slate-500">
        {new Date(cert.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </td>
      <td className="px-6 py-4 text-right">
        {deleteConfirm ? (
          <div className="flex items-center justify-end gap-2 animate-in fade-in slide-in-from-right-4 duration-300">
            <span className="text-xs font-medium text-red-600">Delete?</span>
            <button
              type="button"
              onClick={() => onConfirmDelete(cert._id)}
              className="rounded bg-red-600 px-3 py-1 text-xs font-medium text-white hover:bg-red-700"
            >
              Yes
            </button>
            <button
              type="button"
              onClick={onCancelDelete}
              className="rounded border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 hover:bg-gray-50"
            >
              No
            </button>
          </div>
        ) : (
          <div className="flex justify-end gap-3 opacity-0 transition-opacity group-hover:opacity-100">
            <button
              type="button"
              onClick={() => {
                setEditName(cert.name);
                setEditActive(cert.isActive);
                onStartEdit(cert);
              }}
              className="text-sm font-medium text-slate-500 hover:text-[#5621b4]"
            >
              Edit
            </button>
            <button
              type="button"
              onClick={() => onRequestDelete(cert._id)}
              className="text-sm font-medium text-red-400 hover:text-red-600"
            >
              Delete
            </button>
          </div>
        )}
      </td>
    </tr>
  );
}

function CertificationsComponent() {
  const certifications = useQuery(api.certifications.list);
  const createCert = useMutation(api.certifications.create);
  const updateCert = useMutation(api.certifications.update);
  const removeCert = useMutation(api.certifications.remove);

  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<Id<"certifications"> | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] =
    useState<Id<"certifications"> | null>(null);

  const handleCreate = async (name: string, isActive: boolean) => {
    await createCert({ name, isActive });
    setIsAdding(false);
  };

  const handleUpdate = async (
    id: Id<"certifications">,
    name: string,
    isActive: boolean
  ) => {
    if (name.trim() === "") {
      return;
    }
    await updateCert({ id, name, isActive });
    setEditingId(null);
  };

  if (certifications === undefined) {
    return (
      <div className="flex h-96 w-full items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#5621b4] border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans text-slate-800">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-[#1e0a45]">
              Manage Certifications
            </h1>
            <p className="mt-2 text-slate-500">
              Create and manage professional certifications available to users.
            </p>
          </div>
          {!isAdding && (
            <button
              type="button"
              onClick={() => setIsAdding(true)}
              className="rounded-lg bg-[#5621b4] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#451a94] hover:shadow-lg active:scale-95"
            >
              + Add New
            </button>
          )}
        </header>

        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          {isAdding && (
            <CreateForm
              onSubmit={handleCreate}
              onCancel={() => setIsAdding(false)}
            />
          )}

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-xs uppercase text-slate-500">
                <tr>
                  <th className="px-6 py-4 font-semibold tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-4 font-semibold tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 font-semibold tracking-wider">
                    Created Date
                  </th>
                  <th className="px-6 py-4 text-right font-semibold tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {certifications.length === 0 ? (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-6 py-12 text-center text-slate-400"
                    >
                      No certifications found. Click "Add New" to create one.
                    </td>
                  </tr>
                ) : (
                  certifications.map((cert) => (
                    <CertificationRow
                      key={cert._id}
                      cert={cert}
                      isEditing={editingId === cert._id}
                      deleteConfirm={deleteConfirmId === cert._id}
                      onStartEdit={(c) => {
                        setEditingId(c._id);
                        setDeleteConfirmId(null);
                      }}
                      onCancelEdit={() => setEditingId(null)}
                      onUpdate={handleUpdate}
                      onRequestDelete={(id) => {
                        setDeleteConfirmId(id);
                        setEditingId(null);
                      }}
                      onCancelDelete={() => setDeleteConfirmId(null)}
                      onConfirmDelete={async (id) => {
                        await removeCert({ id });
                        setDeleteConfirmId(null);
                      }}
                    />
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
