/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

// Functions
import { motion } from "framer-motion";
import Link from "next/link"; // Import Link from Next.js

// Components
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

// Icons
import { FaSearch } from "react-icons/fa";
import { api } from "@/trpc/react";

function Life() {
  const { data: posts, isLoading, error } = api.post.getLifePosts.useQuery();

  // TODO: Create here life landing page
  return <main className="flex min-h-screen flex-col"></main>;
}

export default Life;
