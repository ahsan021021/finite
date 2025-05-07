"use client";

import { useState, useEffect } from "react";
import { ProjectForm } from "./project-form";
import { TestimonialForm } from "./testimonial-form";
import { ProjectList } from "./project-list";
import { TestimonialList } from "./testimonial-list";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [projects, setProjects] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function checkSessionAndFetchData() {
      try {
        const sessionRes = await fetch("/api/auth/session");
        const session = await sessionRes.json();

        if (!session || !session.user) {
          router.push("/admin/login"); // Redirect to login if no session
          return;
        }

        const [projectsRes, testimonialsRes] = await Promise.all([
          fetch("/api/projects"),
          fetch("/api/testimonials"),
        ]);

        if (projectsRes.ok && testimonialsRes.ok) {
          const projectsData = await projectsRes.json();
          const testimonialsData = await testimonialsRes.json();
          setProjects(projectsData);
          setTestimonials(testimonialsData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    checkSessionAndFetchData();
  }, [router]);

  if (loading) {
    return <div className="container mx-auto py-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <ProjectList />
          <div className="mt-8">
            <ProjectForm />
          </div>
        </div>

        <div>
          <TestimonialList />
          <div className="mt-8">
            <TestimonialForm />
          </div>
        </div>
      </div>
    </div>
  );
}