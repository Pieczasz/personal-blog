"use client";
// Functions
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

// Components
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { CreatePostForm } from "@/components/create-post";

function CreatePost() {
  const session = useSession();
  const router = useRouter();

  if (session.status === "unauthenticated") {
    router.replace("/api/auth/signin");
  }
  if (session.data?.user?.email !== "bartekp854@gmail.com") return false;

  return (
    <main className="flex min-h-screen flex-col">
      <MaxWidthWrapper>
        <CreatePostForm />
      </MaxWidthWrapper>
    </main>
  );
}

export default CreatePost;
