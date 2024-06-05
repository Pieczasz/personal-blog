import { Lora } from "@next/font/google";
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

import { MoveRight } from "lucide-react";

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
    description: "My life",
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
    description: "All i have learned about and my coding journey",
    path: "/blog/coding",
  },
  {
    title: "Trading",
    description: "My trade setups and strategies",
    path: "/blog/trading",
  },
];
function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex-col gap-y-10 lg:flex">
        <div className="m-auto flex max-w-screen-md flex-col gap-y-10 px-10 py-16 text-center">
          {/* //TODO:  Create my own quotes*/}
          <h3 className="px-4 text-2xl font-bold underline">
            JUST FU****G DO IT
          </h3>
          <h1
            className={`font-weight-[500] px-4 text-5xl ${LoraFont.className}`}
          >
            &quot;You don’t have to live your life the way others expect.&quot;
          </h1>
          <h3 className="px-4 text-2xl">
            This statement is the cornerstone of The Art of Non-Conformity, the
            blog I&apos;ve been writing for more than a decade. In the battle
            against conventional beliefs, we focus on three broad areas:
          </h3>
        </div>
        <div className="flex flex-col gap-y-10">
          <div className="m-auto flex-col gap-x-0 gap-y-2 px-4 pb-28 text-center lg:flex-row">
            <Carousel className="w-full max-w-xs">
              <CarouselContent>
                {blogLinks.map((blogLink, index) => (
                  <CarouselItem key={index}>
                    <Link href={blogLink.path} className="p-1 ">
                      <Card>
                        <CardContent className="flex h-[480px] flex-col items-center justify-center gap-y-6 rounded-xl p-6 duration-150 ease-out hover:bg-gray-200 hover:bg-opacity-35">
                          <h2
                            className={`text-4xl font-semibold ${LoraFont.className}`}
                          >
                            {blogLink.title}
                          </h2>
                          <p>{blogLink.description}</p>
                          <p className="flex flex-row items-center justify-center gap-x-3 text-sm font-bold">
                            Read more <MoveRight />
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

export default Home;
