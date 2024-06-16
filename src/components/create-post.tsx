"use client";

// Components

import JoditEditor from "jodit-react";

// Functions
import React, { useState, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";

// TRPC
import { api } from "@/trpc/react";

export function CreatePostForm() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [type, setType] = useState<
    "life" | "productivity" | "coding" | "trading"
  >("life");

  const editor = useRef(null);

  const createPost = api.post.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setTitle("");
      setContent("");
      setImages([]);
      setType("life");
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
        createPost.mutate({ title, content, images, type });
      }}
      className="my-5 flex w-full flex-col  items-center gap-2"
    >
      <div className="w-3/5">
        <h1 className="mb-5 text-center font-bold">Create a post</h1>
        <JoditEditor
          className="w-full"
          ref={editor}
          value={content}
          onBlur={(newContent) => setContent(newContent)}
          onChange={(newContent) => {}}
        />
      </div>
    </form>
  );
}
