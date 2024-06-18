"use client";
import { notFound } from "next/navigation";
import { api } from "@/trpc/react";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

export default function PostPage({ params }: PostPageProps) {
  const slug = params?.slug?.join("");
  console.log(`Slug: ${slug}`);

  const { data, isLoading, error } = api.post.getPostBySlug.useQuery({ slug });

  console.log("Post Data:", data);

  // If the data is an array, access the first element
  const post = Array.isArray(data) ? data[0] : data;

  // Uncomment the line below to handle the case where post is not found
  // if (!post) notFound();

  return (
    <article className="min-h-screen w-full text-black">
      {isLoading ? (
        <div className=""></div>
      ) : error ? (
        <p>Error loading posts</p>
      ) : (
        post && (
          <div
            key={post.id}
            className="h-full w-full p-4 duration-200 hover:bg-slate-100"
          >
            <p>{post.title}</p>
          </div>
        )
      )}
    </article>
  );
}
