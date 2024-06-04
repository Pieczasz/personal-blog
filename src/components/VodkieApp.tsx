import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const VodkieApp = () => {
  return (
    <div className="flex w-full flex-col py-32 lg:flex-row">
      <div className="w-full items-center justify-center px-10  lg:w-1/2  lg:border-b-transparent">
        <div className="m-auto flex max-w-sm flex-col">
          <Link href="/vodkie" className="text-center lg:text-left">
            {/* Vodkie App Image */}
          </Link>
        </div>
      </div>
      <div className=" w-full flex-col items-center justify-center  px-10  lg:w-1/2 lg:flex-row ">
        <div className=" m-auto flex max-w-sm flex-col">
          <h1 className="mb-6 text-4xl font-bold">
            Download Vodkie, my first app
          </h1>
          <p className="text-xl">
            Have you ever thought of which vodka you should try? Or maybe you
            just wanted to share your opinion about some drinks with someone?
            You can do this easily using the Vodkie app.
          </p>
          <Link href="/vodkie" className="text-center lg:text-left">
            <Button className="mt-6 w-1/3 rounded-none text-lg font-bold text-black">
              Learn more
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VodkieApp;
