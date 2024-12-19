"use client";
import { useEffect, useState } from "react";

type Comment = {
  id: number;
  name: string;
  text: string;
};

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch comments on component load
  useEffect(() => {
    fetch("/api/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  // Handle submitting a new comment
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, text }),
    });
    const newComment = await res.json();
    setComments((prev) => [...prev, newComment]);
    setName("");
    setText("");
    setLoading(false);
  };

  // Handle deleting a comment
  const handleDelete = async (id: number) => {
    const res = await fetch(`/api/comments?id=${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      setComments((prev) => prev.filter((comment) => comment.id !== id));
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border p-2 w-full mb-2"
        />
        <textarea
          placeholder="Your comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          className="border p-2 w-full mb-2"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white p-2 rounded"
        >
          {loading ? "Submitting..." : "Post Comment"}
        </button>
      </form>

      {/* Display Comments */}
      <div>
        {comments.map((comment) => (
          <div key={comment.id} className="p-2 border-b flex justify-between">
            <div>
              <p className="font-bold">{comment.name}</p>
              <p>{comment.text}</p>
            </div>
            <button
              onClick={() => handleDelete(comment.id)}
              className="text-red-500"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
