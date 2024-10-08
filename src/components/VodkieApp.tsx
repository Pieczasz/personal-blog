"use client";

// Components
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Framer motion
import { motion } from "framer-motion";

const VodkieApp = () => {
  return (
    <div className="flex w-full flex-col py-32 lg:flex-row">
      <div className="w-full items-center justify-center px-10 lg:w-1/2 lg:border-b-transparent">
        <div className="m-auto flex max-w-sm flex-col">
          <Link href="/vodkie" className="text-center lg:text-left">
            {/* Vodkie App Image */}
          </Link>
        </div>
      </div>
      <div className="w-full flex-col items-center justify-center px-10 lg:w-1/2 lg:flex-row">
        <div className="m-auto flex max-w-sm flex-col">
          <h2 className="mb-6  font-bold">Download Vodkie, my first app</h2>
          <p className="text-xl">
            Have you ever thought of which vodka you should try? Or maybe you
            just wanted to share your opinion about some drinks with someone?
            You can do this easily using the Vodkie app.
          </p>

          <div className="flex flex-col">
            <Link href="/vodkie" className="text-center lg:text-left">
              <motion.div whileHover={{ y: -3 }} whileTap={{ y: 7 }}>
                <Button className="z-50 mt-6 w-32 rounded-2xl text-lg font-bold text-black">
                  Learn more
                </Button>
              </motion.div>
            </Link>
            <div className="px-m-auto mx-auto mt-[-2rem] h-10 w-32 items-center rounded-2xl bg-primary/35 lg:mx-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VodkieApp;
