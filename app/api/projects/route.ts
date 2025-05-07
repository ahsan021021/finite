import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Project from "@/models/Project";

connectDB();

// GET handler for fetching all projects
export async function GET() {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json({ error: "Error fetching projects" }, { status: 500 });
  }
}

// POST handler for creating a new project
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const newProject = await Project.create(body);
    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json({ error: "Error creating project" }, { status: 500 });
  }
}

// PATCH handler for updating a project
export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    const updatedProject = await Project.findByIdAndUpdate(params.id, body, { new: true });

    if (!updatedProject) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(updatedProject);
  } catch (error) {
    console.error("Error updating project:", error);
    return NextResponse.json({ error: "Error updating project" }, { status: 500 });
  }
}

// DELETE handler for deleting a project
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const deletedProject = await Project.findByIdAndDelete(params.id);

    if (!deletedProject) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json({ error: "Error deleting project" }, { status: 500 });
  }
}