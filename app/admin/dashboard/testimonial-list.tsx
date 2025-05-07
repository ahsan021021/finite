"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { TestimonialForm } from "./testimonial-form";

interface Testimonial {
  _id: string;
  name: string;
  role: string | null;
  company: string | null;
  content: string;
  imageUrl: string | null;
  rating: number;
  approved: boolean;
  createdAt: string;
}

export function TestimonialList() {
  const router = useRouter();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [editTestimonial, setEditTestimonial] = useState<Testimonial | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  async function fetchTestimonials() {
    try {
      const response = await fetch("/api/testimonials");
      if (!response.ok) {
        throw new Error("Failed to fetch testimonials");
      }
      const data = await response.json();
      setTestimonials(data);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    } finally {
      setLoading(false);
    }
  }

  async function deleteTestimonial(id: string) {
    if (!confirm("Are you sure you want to delete this testimonial?")) {
      return;
    }

    try {
      const response = await fetch(`/api/testimonials/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete testimonial");
      }

      setTestimonials(testimonials.filter(testimonial => testimonial._id !== id));
    } catch (error) {
      console.error("Error deleting testimonial:", error);
    }
  }

  async function toggleApproval(id: string, currentApproval: boolean) {
    try {
      const response = await fetch(`/api/testimonials/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ approved: !currentApproval }),
      });

      if (!response.ok) {
        throw new Error("Failed to update testimonial");
      }

      setTestimonials(
        testimonials.map((testimonial) =>
          testimonial._id === id
            ? { ...testimonial, approved: !currentApproval }
            : testimonial
        )
      );
    } catch (error) {
      console.error("Error updating testimonial:", error);
    }
  }

  if (loading) {
    return <div>Loading testimonials...</div>;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Testimonials</h2>
      <div className="grid gap-4">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial._id}
            className="flex items-center justify-between rounded-lg border p-4"
          >
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <h3 className="font-medium">{testimonial.name}</h3>
                {testimonial.role && (
                  <span className="text-sm text-muted-foreground">
                    ({testimonial.role})
                  </span>
                )}
              </div>
              {testimonial.company && (
                <p className="text-sm text-muted-foreground">
                  {testimonial.company}
                </p>
              )}
              <p className="text-sm">{testimonial.content}</p>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-sm ${
                      i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => toggleApproval(testimonial._id, testimonial.approved)}
                className={`inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium ${
                  testimonial.approved
                    ? "bg-green-100 text-green-700 hover:bg-green-200"
                    : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                }`}
              >
                {testimonial.approved ? "Approved" : "Pending"}
              </button>
              <Dialog open={modalOpen && editTestimonial?._id === testimonial._id} onOpenChange={(open) => { setModalOpen(open); if (!open) setEditTestimonial(null); }}>
                <DialogTrigger asChild>
                  <button
                    onClick={() => { setEditTestimonial(testimonial); setModalOpen(true); }}
                    className="inline-flex items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    Edit
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit Testimonial</DialogTitle>
                  </DialogHeader>
                  {editTestimonial && (
                    <TestimonialForm initialData={editTestimonial} onClose={() => { setModalOpen(false); setEditTestimonial(null); }} />
                  )}
                  <DialogClose asChild>
                    <button className="mt-4 px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">Close</button>
                  </DialogClose>
                </DialogContent>
              </Dialog>
              <button
                onClick={() => deleteTestimonial(testimonial._id)}
                className="inline-flex items-center justify-center rounded-md bg-destructive px-3 py-2 text-sm font-medium text-destructive-foreground ring-offset-background transition-colors hover:bg-destructive/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}