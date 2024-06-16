"use client";

// Components

import JoditEditor from "jodit-react";

// Functions
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";

// TRPC
import { api } from "@/trpc/react";

export function CreatePostForm() {
  const router = useRouter();
  const [content, setContent] = useState("");
  const [type, setType] = useState<
    "life" | "productivity" | "coding" | "trading"
  >("life");

  const editor = useRef(null);

  const createPost = api.post.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setContent("");
      setType("life");
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createPost.mutate({ content, type });
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
          onChange={(newContent) => {
            setContent(newContent);
          }}
        />
      </div>
    </form>
  );
}
