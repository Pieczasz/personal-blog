"use client";

// Font for quotes
import { Lora } from "@next/font/google";

// Components
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "@/components/ui/carousel";

// Framer motion
import { motion } from "framer-motion";

// Icons
import { MoveRight } from "lucide-react";
import { useEffect, useState } from "react";

const LoraFont = Lora({
  style: ["italic"],
  weight: ["500"],
  subsets: ["latin"],
});

interface BlogLink {
  title: string;
  path: string;
  description: string;
  image?: string;
}

const blogLinks: BlogLink[] = [
  {
    title: "Life",
    description: "My journey, family, and mostly books that I read.",
    path: "/blog/life",
  },
  {
    title: "Productivity",
    description:
      "Ultimate lifehacks for productivity. Make more done with less time spent.",
    path: "/blog/productivity",
  },
  {
    title: "Coding",
    description: "All I have learned about and my coding journey",
    path: "/blog/coding",
  },
  {
    title: "Trading",
    description: "My trade setups and strategies",
    path: "/blog/trading",
  },
];

function Blog() {
  const [isLargeScreen, setIsLargeScreen] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : true,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const largeDeviceOptions = {
    containScroll: "trimSnaps",
    slidesToScroll: 2, // Large devices option
  };

  const smallDeviceOptions = {
    containScroll: "trimSnaps",
    slidesToScroll: 1, // Small devices option
  };

  const carouselOptions = isLargeScreen
    ? largeDeviceOptions
    : smallDeviceOptions;

  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex-col gap-y-10 lg:flex">
        <div className="m-auto flex max-w-screen-lg flex-col gap-y-10 px-10 py-24 text-center">
          <h3 className="px-4 font-bold underline">JUST FU****G DO IT</h3>
          <h1 className={`font-weight-[500] px-4 ${LoraFont.className}`}>
            “Waste no more time arguing about what a good man should be. Be
            one.”
          </h1>
          <h2 className="font-weight-[500]">― Marcus Aurelius , Meditations</h2>
          <h3 className="px-4">
            This quote wrote by Marcus Aurelius should led you to think that You
            don&apos;t need to be as other would like you. What You should
            understand is that you should try to be better version of yourself.
          </h3>
        </div>
        <div className="flex flex-col gap-y-10">
          <div className="m-auto flex-col gap-x-0 gap-y-2 px-4 pb-28 text-center lg:flex-row">
            <Carousel
              className="w-full max-w-xs lg:max-w-screen-sm"
              // @ts-expect-error we expect error, because type of opts isn't importable
              opts={carouselOptions}
            >
              <CarouselContent>
                {blogLinks.map((blogLink, index) => (
                  <CarouselItem key={index} className="basis-full lg:basis-1/2">
                    <Link href={blogLink.path} className="p-1">
                      <Card>
                        <CardContent className="flex h-[480px] flex-col items-center justify-center gap-y-6 rounded-xl p-6 duration-150 ease-out hover:bg-gray-200 hover:bg-opacity-35">
                          <h2
                            className={` font-semibold ${LoraFont.className}`}
                          >
                            {blogLink.title}
                          </h2>
                          <p>{blogLink.description}</p>
                          <p className="flex flex-row items-center justify-center gap-x-3 text-sm font-bold">
                            <motion.span
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex w-full gap-x-2"
                            >
                              Read more <MoveRight />
                            </motion.span>
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden lg:flex" />
              <CarouselNext className="hidden lg:flex" />
              <CarouselDots className="flex lg:hidden" />
            </Carousel>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Blog;
