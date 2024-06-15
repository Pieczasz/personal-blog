"use client";

// Functions
import { motion } from "framer-motion";
import Link from "next/link"; // Import Link from Next.js

// Components
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

// Icons
import { FaSearch } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <MaxWidthWrapper>
        <hr className="w-full border-primary/35" />
        <div className="my-3 flex w-full max-w-md items-center justify-center gap-x-2 px-10">
          <input
            type="text"
            name="search"
            id="search"
            className="w-full p-1 focus:outline-none focus:ring-transparent"
            placeholder="Search through posts"
          />
          <FaSearch />
        </div>
        <hr className="w-full border-primary/35" />
        <div className="my-5 flex w-full flex-col">
          <div className="mb-4 flex w-full max-w-md items-center justify-center gap-x-2 px-10">
            <motion.div
              className="min-w-16 rounded-2xl bg-[#DAF7A6] text-center font-bold"
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/blog/life">
                <h4 className="block p-2">Life</h4>
              </Link>
            </motion.div>
            <motion.div
              className="min-w-16 rounded-2xl bg-[#FFC300] text-center font-bold"
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/blog/productivity">
                <h4 className="block p-2">Productivity</h4>
              </Link>
            </motion.div>
            <motion.div
              className="min-w-16 rounded-2xl bg-[#ADD8E6] text-center font-bold"
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/blog/coding">
                <h4 className="block p-2">Coding</h4>
              </Link>
            </motion.div>
            <motion.div
              className="min-w-16 rounded-2xl bg-[#f6846a] text-center font-bold"
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/blog/trading">
                <h4 className="block p-2">Trading</h4>
              </Link>
            </motion.div>
          </div>
          <div className="w-full px-10">
            <p>
              “Amateurs sit and wait for inspiration, the rest of us just get up
              and go to{" "}
              <span className="rounded-xl bg-sky-100 p-1 font-bold">work</span>
              .” – Stephen King
            </p>
          </div>
        </div>
        <hr className="w-full border-primary/35" />
      </MaxWidthWrapper>
    </main>
  );
}
