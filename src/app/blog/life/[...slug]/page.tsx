"use client";
import { notFound } from "next/navigation";
import { api } from "@/trpc/react";
import HTMLReactParser from "html-react-parser";

// Framer motion
import { stagger, useAnimate, animate } from "framer-motion";

// Icons
import { FaLink } from "react-icons/fa";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

const randomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

type AnimationSequence = Parameters<typeof animate>[0];

export default function PostPage({ params }: PostPageProps) {
  const slug = params?.slug?.join("");
  console.log(`Slug: ${slug}`);

  const { data, isLoading, error } = api.post.getPostBySlug.useQuery({ slug });

  console.log("Post Data:", data);

  // If the data is an array, access the first element
  const post = Array.isArray(data) ? data[0] : data;

  // If the query has finished loading and no post is found, trigger notFound
  if (!isLoading && !post) {
    notFound();
  }

  // Share link animation button
  const [scope, animate] = useAnimate();

  const onButtonClick = () => {
    const sparkles = Array.from({ length: 10 }); // Reduced number of sparkles
    const sparklesAnimation: AnimationSequence = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      {
        x: randomNumberBetween(-100, 100),
        y: randomNumberBetween(-100, 100),
        scale: randomNumberBetween(1.5, 2.5),
        opacity: 1,
      },
      {
        duration: 1, // Increased duration
        at: "<",
      },
    ]);

    const sparklesFadeOut: AnimationSequence = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      {
        opacity: 0,
        scale: 0,
      },
      {
        duration: 1, // Increased duration
        at: "<",
      },
    ]);

    const sparklesReset: AnimationSequence = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      {
        x: 0,
        y: 0,
      },
      {
        duration: 0.000001,
      },
    ]);

    animate([
      ...sparklesReset,
      [".letter", { y: -32 }, { duration: 0.4, delay: stagger(0.1) }], // Increased duration and delay
      ["button", { scale: 0.8 }, { duration: 0.2, at: "<" }],
      ["button", { scale: 1 }, { duration: 0.2 }],
      ...sparklesAnimation,
      [".letter", { y: 0 }, { duration: 0.000001 }],
      ...sparklesFadeOut,
    ]);
  };

  return (
    <article className="min-h-screen w-full text-black">
      {isLoading ? (
        <div>Loading...</div> // Added loading text
      ) : error ? (
        <p>Error loading posts</p>
      ) : (
        post && (
          <div
            key={post.id}
            className="h-full w-full flex-col p-4 duration-200 hover:bg-slate-100 lg:flex-row"
          >
            <div className="my-5 w-full lg:w-1/5 lg:flex-col">
              <h5 className="font-bold">Share post:</h5>
              <div ref={scope} className="">
                <button
                  onClick={onButtonClick}
                  className="relative rounded-full border-2 border-blue-600 px-6 py-2 text-sm text-blue-600 transition-colors hover:bg-blue-100 "
                >
                  <span className="sr-only">Share link</span>
                  <span className="block h-8 overflow-hidden" aria-hidden>
                    {["S", "h", "a", "r", "e", " ", "l", "i", "n", "k"].map(
                      (letter, index) => (
                        <span
                          data-letter={letter}
                          className="letter relative inline-block h-8 leading-8 after:absolute after:left-0 after:top-full after:h-8 after:content-[attr(data-letter)]"
                          key={`${letter}-${index}`}
                        >
                          {letter}
                        </span>
                      ),
                    )}
                  </span>
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -z-10 block"
                  >
                    {Array.from({ length: 10 }).map(
                      (
                        _,
                        index, // Reduced number of sparkles
                      ) => (
                        <svg
                          className={`absolute left-1/2 top-1/2 opacity-0 sparkle-${index}`}
                          key={index}
                          viewBox="0 0 122 117"
                          width="10"
                          height="10"
                        >
                          <path
                            className="fill-blue-600"
                            d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z"
                          />
                        </svg>
                      ),
                    )}
                  </span>
                </button>
              </div>
            </div>
            <div
              className="
            mx-auto my-5 flex w-full flex-col px-10 lg:w-4/5"
            >
              <h1>{post.title}</h1>
              <p>{HTMLReactParser(post.content)}</p>
            </div>
          </div>
        )
      )}
    </article>
  );
}
