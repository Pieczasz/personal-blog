import { Lora } from "@next/font/google";
import Link from "next/link";

const LoraFont = Lora({
  style: ["italic"],
  weight: ["500"],
  subsets: ["latin"],
});

function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex flex-col gap-y-10">
        <div className="m-auto flex max-w-screen-md flex-col gap-y-10 px-10 py-16 text-center">
          {/* //TODO:  Create my own quotes*/}
          <h3 className="text-2xl font-bold underline">JUST FU****G DO IT</h3>
          <h1 className={`font-weight-[500] text-5xl ${LoraFont.className}`}>
            &quot;You don’t have to live your life the way others expect.&quot;
          </h1>
          <h3 className="text-2xl">
            This statement is the cornerstone of The Art of Non-Conformity, the
            blog I&apos;ve been writing for more than a decade. In the battle
            against conventional beliefs, we focus on three broad areas:
          </h3>
        </div>
        <div className="m-auto flex max-w-screen-md flex-col gap-x-0 gap-y-2 px-10 text-center lg:flex-row">
          <Link href="/blog/life" className="flex w-1/2 flex-col">
            {/* Image */}
            <h3 className={`text-2xl font-bold ${LoraFont.className}`}>Life</h3>
          </Link>
          <Link href="/blog/productivity" className="flex w-1/2 flex-col">
            {/* Image */}
            <h3 className={`text-2xl font-bold ${LoraFont.className}`}>
              Productivity
            </h3>
            <p className="text-base">
              How to get more done when you&apos;re lazy
            </p>
          </Link>
        </div>
        <div className="m-auto flex max-w-screen-md flex-col gap-x-0 gap-y-2 px-10 text-center lg:flex-row">
          <Link href="/blog/coding" className="w-1/2">
            {/* Image */}
            <h3 className={`text-2xl font-bold ${LoraFont.className}`}>
              Coding
            </h3>
          </Link>
          <Link href="/blog/trading" className="w-1/2">
            {/* Image */}
            <h3 className={`text-2xl font-bold ${LoraFont.className}`}>
              Trading
            </h3>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Home;
