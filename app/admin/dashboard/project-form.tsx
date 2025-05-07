"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Project {
  id?: string;
  title: string;
  description: string;
  imageUrl: string | null;
  technologies: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  featured: boolean;
}

interface ProjectFormProps {
  initialData?: Project;
  onClose?: () => void;
}

export function ProjectForm({ initialData, onClose }: ProjectFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(initialData?.imageUrl || null);
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const isEdit = !!initialData;

  useEffect(() => {
    if (initialData?.imageUrl) setImagePreview(initialData.imageUrl);
  }, [initialData]);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const data = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      imageUrl: imageBase64 || (formData.get("imageUrl") as string) || initialData?.imageUrl || null,
      technologies: (formData.get("technologies") as string).split(",").map(t => t.trim()),
      liveUrl: formData.get("liveUrl") as string,
      githubUrl: formData.get("githubUrl") as string,
      featured: formData.get("featured") === "true",
    };

    try {
      let response;
      if (isEdit && initialData?.id) {
        response = await fetch(`/api/projects/${initialData.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      } else {
        response = await fetch("/api/projects", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      }

      if (!response.ok) {
        throw new Error(isEdit ? "Failed to update project" : "Failed to create project");
      }

      formRef.current?.reset();
      setImageFile(null);
      setImagePreview(null);
      setImageBase64(null);
      router.refresh();
      if (onClose) onClose();
    } catch (error) {
      console.error(isEdit ? "Error updating project:" : "Error creating project:", error);
    } finally {
      setLoading(false);
    }
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] || null;
    setImageFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageBase64(reader.result as string);
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImageBase64(null);
      setImagePreview(initialData?.imageUrl || null);
    }
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold">{isEdit ? "Edit Project" : "Add New Project"}</h2>
      <div className="grid gap-4">
        <div className="space-y-2">
          <label htmlFor="title" className="text-sm font-medium">
            Title
          </label>
          <input
            id="title"
            name="title"
            required
            defaultValue={initialData?.title || ""}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="description" className="text-sm font-medium">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            required
            defaultValue={initialData?.description || ""}
            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="imageUpload" className="text-sm font-medium">
            Upload Image
          </label>
          <input
            id="imageUpload"
            name="imageUpload"
            type="file"
            accept="image/*"
            className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
            onChange={handleFileChange}
          />
          {imagePreview && (
            <img src={imagePreview} alt="Preview" className="mt-2 w-20 h-20 object-cover rounded-full border" />
          )}
        </div>
        {!imageFile && (
          <div className="space-y-2">
            <label htmlFor="imageUrl" className="text-sm font-medium">
              Image URL
            </label>
            <input
              id="imageUrl"
              name="imageUrl"
              type="url"
              defaultValue={initialData?.imageUrl || ""}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
        )}
        <div className="space-y-2">
          <label htmlFor="technologies" className="text-sm font-medium">
            Technologies (comma-separated)
          </label>
          <input
            id="technologies"
            name="technologies"
            required
            defaultValue={initialData?.technologies?.join(", ") || ""}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="liveUrl" className="text-sm font-medium">
            Live URL
          </label>
          <input
            id="liveUrl"
            name="liveUrl"
            type="url"
            defaultValue={initialData?.liveUrl || ""}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="githubUrl" className="text-sm font-medium">
            GitHub URL
          </label>
          <input
            id="githubUrl"
            name="githubUrl"
            type="url"
            defaultValue={initialData?.githubUrl || ""}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <div className="flex items-center space-x-2">
          <input
            id="featured"
            name="featured"
            type="checkbox"
            value="true"
            defaultChecked={initialData?.featured || false}
            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
          />
          <label htmlFor="featured" className="text-sm font-medium">
            Featured Project
          </label>
        </div>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      >
        {loading ? (isEdit ? "Saving..." : "Adding...") : (isEdit ? "Save Changes" : "Add Project")}
      </button>
    </form>
  );
} 