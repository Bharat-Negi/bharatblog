import { connect } from "@/db/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import BlogPost from "@/models/blogPost";

connect();

// CREATE BLOG (POST)
export async function POST(request: NextRequest) {
  try {
    const { title, description } = await request.json();

    if (!title || !description) {
      return NextResponse.json(
        { error: "Title and description are required" },
        { status: 400 }
      );
    }

    await BlogPost.create({ title, description });

    return NextResponse.json(
      { message: "Blog created successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    console.log("POST ERROR:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// GET ALL BLOGS
export async function GET() {
  try {
    const blogs = await BlogPost.find().sort({ createdAt: -1 });

    return NextResponse.json(
      { message: "Blogs fetched successfully", blogs },
      { status: 200 }
    );
  } catch (error: any) {
    console.log("GET ERROR:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// P
export async function DELETE(request: NextRequest) {
    const id = request.nextUrl.searchParams.get("id");
    await BlogPost.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "Blogs successfully delete"},
      { status: 200 }
    );
}