"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectForm } from "./project-form";
import { TestimonialForm } from "./testimonial-form";
import { ProjectList } from "./project-list";
import { TestimonialList } from "./testimonial-list";

export function DashboardTabs() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
      <TabsList>
        <TabsTrigger value="projects">Projects</TabsTrigger>
        <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
      </TabsList>
      <TabsContent value="projects" className="space-y-6">
        <ProjectForm />
        <ProjectList />
      </TabsContent>
      <TabsContent value="testimonials" className="space-y-6">
        <TestimonialForm />
        <TestimonialList />
      </TabsContent>
    </Tabs>
  );
} 