"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { ProjectForm } from "./project-form";

interface Project {
  _id: string; // Use _id instead of id
  title: string;
  description: string;
  imageUrl: string | null;
  technologies: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  featured: boolean;
  createdAt: string;
}

export function ProjectList() {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [editProject, setEditProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    try {
      const response = await fetch("/api/projects");
      if (!response.ok) {
        throw new Error("Failed to fetch projects");
      }
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  }

  async function deleteProject(id: string) {
    if (!confirm("Are you sure you want to delete this project?")) {
      return;
    }

    try {
      const response = await fetch(`/api/projects/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete project");
      }

      setProjects(projects.filter(project => project._id !== id));
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  }

  if (loading) {
    return <div>Loading projects...</div>;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Projects</h2>
      <div className="grid gap-4">
        {projects.map((project) => (
          <div
            key={project._id}
            className="flex items-center justify-between rounded-lg border p-4"
          >
            <div className="space-y-1">
              <h3 className="font-medium">{project.title}</h3>
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Dialog open={modalOpen && editProject?._id === project._id} onOpenChange={(open) => { setModalOpen(open); if (!open) setEditProject(null); }}>
                <DialogTrigger asChild>
                  <button
                    onClick={() => { setEditProject(project); setModalOpen(true); }}
                    className="inline-flex items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    Edit
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit Project</DialogTitle>
                  </DialogHeader>
                  {editProject && (
                    <ProjectForm initialData={editProject} onClose={() => { setModalOpen(false); setEditProject(null); }} />
                  )}
                  <DialogClose asChild>
                    <button className="mt-4 px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">Close</button>
                  </DialogClose>
                </DialogContent>
              </Dialog>
              <button
                onClick={() => deleteProject(project._id)}
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