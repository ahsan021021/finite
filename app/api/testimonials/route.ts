import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Testimonial from "@/models/Testimonial";

connectDB();

// GET handler for fetching all testimonials
export async function GET() {
  try {
    const testimonials = await Testimonial.find({ approved: true }).sort({ createdAt: -1 });
    return NextResponse.json(testimonials);
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return NextResponse.json({ error: "Error fetching testimonials" }, { status: 500 });
  }
}

// POST handler for creating a new testimonial
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const newTestimonial = await Testimonial.create(body);
    return NextResponse.json(newTestimonial, { status: 201 });
  } catch (error) {
    console.error("Error creating testimonial:", error);
    return NextResponse.json({ error: "Error creating testimonial" }, { status: 500 });
  }
}

// PATCH handler for updating a testimonial
export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    const updatedTestimonial = await Testimonial.findByIdAndUpdate(params.id, body, { new: true });

    if (!updatedTestimonial) {
      return NextResponse.json({ error: "Testimonial not found" }, { status: 404 });
    }

    return NextResponse.json(updatedTestimonial);
  } catch (error) {
    console.error("Error updating testimonial:", error);
    return NextResponse.json({ error: "Error updating testimonial" }, { status: 500 });
  }
}

// DELETE handler for deleting a testimonial
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const deletedTestimonial = await Testimonial.findByIdAndDelete(params.id);

    if (!deletedTestimonial) {
      return NextResponse.json({ error: "Testimonial not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting testimonial:", error);
    return NextResponse.json({ error: "Error deleting testimonial" }, { status: 500 });
  }
}