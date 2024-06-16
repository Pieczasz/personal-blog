"use client";

// Functions
import { motion } from "framer-motion";
import Link from "next/link"; // Import Link from Next.js

// Components
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { CreatePostForm } from "@/components/create-post";

// Icons
import { FaSearch } from "react-icons/fa";

function CreatePost() {
  return (
    <main className="flex min-h-screen flex-col">
      <MaxWidthWrapper>
        <CreatePostForm />
      </MaxWidthWrapper>
    </main>
  );
}

export default CreatePost;
