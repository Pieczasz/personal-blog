"use client";

// Functions
import { useState } from "react";
import { useRouter } from "next/navigation";

// TRPC
import { api } from "@/trpc/react";

export function CreatePost() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState<string[]>([]);

  const createPost = api.post.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setTitle("");
      setContent("");
      setImages([]);
    },
  });

  const handleImageChange = (e: { target: { value: string } }) => {
    const urls = e.target.value.split(",").map((url) => url.trim());
    setImages(urls);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createPost.mutate({ title, content, images });
      }}
      className="flex flex-col gap-2"
    >
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full rounded-full px-4 py-2 text-black"
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full rounded-full px-4 py-2 text-black"
        required
      />
      <input
        type="text"
        placeholder="Image URLs (comma-separated)"
        value={images.join(", ")}
        onChange={handleImageChange}
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <button
        type="submit"
        className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
        disabled={createPost.isPending}
      >
        {createPost.isPending ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
