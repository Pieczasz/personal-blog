"use client";

// Functions
import Link from "next/link";
import { useRouter } from "next/navigation";

// Icons
import { api } from "@/trpc/react";

// Framer motion
import { motion } from "framer-motion";

const Introduction = () => {
  const { data: posts, isLoading, error } = api.post.getLatestPosts.useQuery();

  const router = useRouter();

  return (
    <div className="flex w-full flex-col border-b-[1.5px] border-t-[1.5px] border-primary/35 lg:flex-row">
      <div className="w-full items-center justify-center border-b-[1.5px] border-primary/35 px-10 py-20 lg:w-1/2 lg:border-r-[1.5px] lg:border-b-transparent">
        <div className="m-auto flex max-w-sm flex-col">
          <h2 className="mb-6 text-4xl font-bold">
            Hi, I&apos;m Bartek Piekarz
          </h2>
          <div className="flex flex-col gap-y-6">
            {/* //TODO: make it the acual post from blog and read more... */}
            <p className="text-xl">
              I&apos;m a full-stack developer from Poland. My history began in
              May 2024. At that time, I started learning to react by creating a
              website for my church parish (yes, I am Catholic).
            </p>
            <p className="text-xl">
              After that, I started creating Vodkie using React Native Expo.
              Besides that, at the same time, I was creating a blog that you are
              now able to read. Read more...
            </p>
          </div>
        </div>
      </div>
      <div className=" w-full flex-col items-center justify-center border-primary/35 px-10 py-20 lg:w-1/2 lg:flex-row lg:border-r-[1.5px]">
        <div className="m-auto  flex max-w-sm flex-col items-center justify-center lg:items-start lg:justify-start">
          <h4 className="justify-center pb-9 text-2xl font-bold">
            Browse my latest posts:
          </h4>
          <div className="flex w-full flex-col gap-y-8">
            {/* //TODO: add latest posts */}
            {isLoading ? (
              <div></div>
            ) : error ? (
              <p className="px-2">Error loading posts</p>
            ) : (
              posts!.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.type}/${post.slug}`}
                  className="group relative flex w-full items-center justify-center overflow-hidden rounded-2xl border-2 border-primary px-6 py-7 text-primary shadow-md duration-300 ease-in-out"
                >
                  <span className="absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-primary text-white duration-300 ease-in-out group-hover:translate-x-0">
                    <svg className="h-6 w-6" stroke="white" viewBox="0 0 24 24">
                      <path
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="absolute ml-10 flex h-full w-full transform items-center text-lg text-black transition-all duration-300 ease-in-out group-hover:translate-x-full">
                    {post.title}
                  </span>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
