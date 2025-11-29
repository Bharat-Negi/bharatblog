import { connect } from "@/db/dbConfig";
import BlogPost from "@/models/blogPost";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function PUT(request:NextRequest, context: { params: Promise<{ id: string }> }){
    const {id} = await context.params;

    try {
    const { title, description } = await request.json();

    const updated = await BlogPost.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );

    if (!updated) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Blog updated", blog: updated }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid blog ID" }, { status: 400 });
  }
}

// GET SINGLE BLOG BY ID
export async function GET(_: any, context: any) {
  try {
    const { id } = await context.params;

    const blog = await BlogPost.findById(id);

    if (!blog)
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });

    return NextResponse.json({ blog });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}