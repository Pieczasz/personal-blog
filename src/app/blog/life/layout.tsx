"use client";

// Functions
import Link from "next/link";

// Icons
import { FaSearch } from "react-icons/fa";
import { api } from "@/trpc/react";

// Framer motion
import { motion } from "framer-motion";

function Life({ children }: { children: React.ReactNode }) {
  const { data: posts, isLoading, error } = api.post.getLifePosts.useQuery();

  return (
    <main className="flex min-h-screen flex-col items-end lg:flex-row">
      <div className="flex w-full">{children}</div>
      <div className="h-full min-h-screen border-l border-primary/35 lg:w-[39%] xl:w-[30%]">
        <hr className="w-full border-primary/35" />
        <div className="my-3 flex w-full max-w-md items-center justify-center gap-x-2 px-2">
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
          <div className="mb-4 flex w-full max-w-md items-center justify-center gap-x-4 px-2">
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
          <div className="w-full px-3">
            <p>
              Knowing what you want in{" "}
              <span className="rounded-xl bg-sky-100 p-1 font-bold">life</span>{" "}
              isn&apos;t normal. Modern society expect you to know what you want
              but in reality it is really hard, and only a few people know.
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col">
          {isLoading ? (
            <div></div>
          ) : error ? (
            <p className="px-2">Error loading posts</p>
          ) : (
            posts!.map((post) => (
              <Link
                href={`/blog/life/${post.slug}`}
                key={post.id}
                className="border-y border-y-primary/35"
              >
                <motion.div
                  key={post.id}
                  className="h-full w-full p-4 duration-200 hover:bg-slate-100"
                  whileTap={{ scale: 0.95 }}
                >
                  <p>{post.title}</p>
                </motion.div>
              </Link>
            ))
          )}
        </div>
      </div>
    </main>
  );
}

export default Life;
