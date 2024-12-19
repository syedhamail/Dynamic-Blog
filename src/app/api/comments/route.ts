import { NextRequest, NextResponse } from "next/server";

let comments: { id: number; name: string; text: string }[] = []; // Temporary in-memory storage

// Handle GET: Fetch all comments
export async function GET() {
  return NextResponse.json(comments); // Return all comments
}

// Handle POST: Add a new comment
export async function POST(req: NextRequest) {
  try {
    const { name, text } = await req.json();
    if (!name || !text) {
      return NextResponse.json({ error: "Name and text are required" }, { status: 400 });
    }
    const newComment = { id: Date.now(), name, text };
    comments.push(newComment);
    return NextResponse.json(newComment, { status: 201 });
  } catch {
    // Removed the `error` variable since it wasn't being used
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }
}

// Handle DELETE: Remove a comment
export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Comment ID is required" }, { status: 400 });
  }

  comments = comments.filter((comment) => comment.id.toString() !== id);
  return NextResponse.json({ message: "Comment deleted successfully" });
}
