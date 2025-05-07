"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Testimonial {
  id?: string;
  name: string;
  role?: string | null;
  company?: string | null;
  content: string;
  imageUrl?: string | null;
  rating: number;
  approved?: boolean;
}

interface TestimonialFormProps {
  initialData?: Testimonial;
  onClose?: () => void;
}

export function TestimonialForm({ initialData, onClose }: TestimonialFormProps) {
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
      name: formData.get("name") as string,
      role: formData.get("role") as string,
      company: formData.get("company") as string,
      content: formData.get("content") as string,
      imageUrl: imageBase64 || (formData.get("imageUrl") as string) || initialData?.imageUrl || null,
      rating: parseInt(formData.get("rating") as string),
      approved: formData.get("approved") === "true",
    };

    try {
      let response;
      if (isEdit && initialData?.id) {
        response = await fetch(`/api/testimonials/${initialData.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      } else {
        response = await fetch("/api/testimonials", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      }

      if (!response.ok) {
        throw new Error(isEdit ? "Failed to update testimonial" : "Failed to create testimonial");
      }

      formRef.current?.reset();
      setImageFile(null);
      setImagePreview(null);
      setImageBase64(null);
      router.refresh();
      if (onClose) onClose();
    } catch (error) {
      console.error(isEdit ? "Error updating testimonial:" : "Error creating testimonial:", error);
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
      <h2 className="text-xl font-semibold">{isEdit ? "Edit Testimonial" : "Add New Testimonial"}</h2>
      <div className="grid gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            defaultValue={initialData?.name || ""}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="role" className="text-sm font-medium">
            Role
          </label>
          <input
            id="role"
            name="role"
            defaultValue={initialData?.role || ""}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium">
            Company
          </label>
          <input
            id="company"
            name="company"
            defaultValue={initialData?.company || ""}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="content" className="text-sm font-medium">
            Testimonial
          </label>
          <textarea
            id="content"
            name="content"
            required
            defaultValue={initialData?.content || ""}
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
          <label htmlFor="rating" className="text-sm font-medium">
            Rating (1-5)
          </label>
          <input
            id="rating"
            name="rating"
            type="number"
            min="1"
            max="5"
            required
            defaultValue={initialData?.rating?.toString() || "5"}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <div className="flex items-center space-x-2">
          <input
            id="approved"
            name="approved"
            type="checkbox"
            value="true"
            defaultChecked={initialData?.approved ?? true}
            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
          />
          <label htmlFor="approved" className="text-sm font-medium">
            Approved
          </label>
        </div>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      >
        {loading ? (isEdit ? "Saving..." : "Adding...") : (isEdit ? "Save Changes" : "Add Testimonial")}
      </button>
    </form>
  );
} 