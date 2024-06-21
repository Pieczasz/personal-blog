"use client";

// Functions
import { motion } from "framer-motion";
import Link from "next/link";

// Components
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

// Icons
import { FaSearch } from "react-icons/fa";

function Coding() {
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
          <div className="mb-4 flex w-full max-w-md items-center justify-center gap-x-4 px-10">
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
            “
            <span className="rounded-xl bg-sky-100 p-1 font-bold">
              Programming
            </span>{" "}
            isn&apos;t about what you know; it&apos;s about what you can figure
            out.” – Chris Pine
          </div>
        </div>
        <hr className="w-full border-primary/35" />
      </MaxWidthWrapper>
    </main>
  );
}

export default Coding;
