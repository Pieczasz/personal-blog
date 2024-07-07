"use client";

// Functions
import Link from "next/link";
import { useRouter } from "next/navigation";

// Icons
import { FaSearch } from "react-icons/fa";
import { api } from "@/trpc/react";

// Framer motion
import { motion } from "framer-motion";

function Productivity({ children }: { children: React.ReactNode }) {
  const { data: posts, isLoading, error } = api.post.getProductivityPosts.useQuery();

  const router = useRouter();

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
          <FaSearch className="h-5 w-5 cursor-pointer hover:scale-[1.15]" />
        </div>
        <hr className="w-full border-primary/35" />
        <div className="my-5 flex w-full flex-col">
          <div className="mb-4 flex w-full max-w-md items-center justify-center gap-x-4 px-2">
            <div className="flex flex-col">
              <motion.div
                className="z-50 min-w-16 rounded-2xl bg-[#DAF7A6] text-center font-bold"
                whileHover={{ y: -3 }}
                whileTap={{ y: 7 }}
              >
                <Link href="/blog/life">
                  <h4 className="block p-2">Life</h4>
                </Link>
              </motion.div>
              <div className="mt-[-2rem] h-10 w-16 rounded-2xl bg-[#DAF7A6]/35 px-4 py-2" />
            </div>
            <div className="flex flex-col">
              <motion.div
                className="z-50 min-w-16 rounded-2xl bg-[#FFC300] text-center font-bold"
                whileHover={{ y: -3 }}
                whileTap={{ y: 7 }}
              >
                <Link href="/blog/productivity">
                  <h4 className="block p-2">Productivity</h4>
                </Link>
              </motion.div>
              <div className="mt-[-2rem] h-10 w-32 rounded-2xl bg-[#FFC300]/35 px-4 py-2" />
            </div>
            <div className="flex flex-col">
              <motion.div
                className="z-50 min-w-16 rounded-2xl bg-[#ADD8E6] text-center font-bold"
                whileHover={{ y: -3 }}
                whileTap={{ y: 7 }}
              >
                <Link href="/blog/coding">
                  <h4 className="block p-2">Coding</h4>
                </Link>
              </motion.div>
              <div className="mt-[-2rem] h-10 w-20 rounded-2xl bg-[#ADD8E6]/35 px-4 py-2" />
            </div>
            <div className="flex flex-col">
              <motion.div
                className="z-50 min-w-16 rounded-2xl bg-[#F6846A] text-center font-bold"
                whileHover={{ y: -3 }}
                whileTap={{ y: 7 }}
              >
                <Link href="/blog/trading">
                  <h4 className="block p-2">Trading</h4>
                </Link>
              </motion.div>
              <div className="mt-[-2rem] h-10 w-20 rounded-2xl bg-[#F6846A]/35 px-4 py-2" />
            </div>
          </div>
          <div className="w-full px-3">
            <p>
              Knowing what you want in{" "}
              <span className="rounded-xl bg-sky-100 p-1 font-bold">life</span>{" "}
              isn&apos;t normal. Modern society expects you to know what you
              want but in reality it is really hard, and only a few people know.
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
              <motion.div
                key={post.id}
                whileHover={{ height: "4.5rem" }}
                className="flex cursor-pointer items-center justify-start border-y border-y-primary/35 hover:bg-slate-100"
                onClick={() => router.push(`/blog/productivity/${post.slug}`)}
              >
                <div className="flex h-full w-full items-center p-4 duration-200">
                  <p>{post.title}</p>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}

export default Productivity;
