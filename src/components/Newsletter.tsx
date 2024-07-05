"use client";

// Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Framer motion
import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <div className="m-auto flex w-full flex-col items-center px-10 py-[8rem]">
      <h2 className="text-center text-3xl font-bold">
        Stay updated and sign in
      </h2>
      <h2 className="pt-1 text-3xl  font-bold">for my newsletter</h2>
      <div className="flex w-full max-w-sm items-center justify-center gap-x-4 pt-6">
        <Input
          type="email"
          placeholder="Email address"
          className="h-12 w-56 rounded-2xl"
        />
        <div className="flex flex-col">
          <motion.div whileHover={{ y: -3 }} whileTap={{ y: 7 }}>
            <Button
              type="submit"
              className="h-12 w-32 rounded-2xl text-lg font-bold text-black"
            >
              Subscribe
            </Button>
          </motion.div>
          <div className="mt-[-2rem] h-10 w-32 rounded-2xl bg-primary/35 px-4 py-2" />
        </div>
      </div>
      <div>
        <p className="pt-10 text-left text-xl lg:text-center">
          My newsletter includes my recommendations
        </p>
        <p className="pt-1 text-left text-xl lg:text-center">
          about books, technologies, life, travelling,
        </p>
        <p className="pt-1 text-left text-xl lg:text-center">and more...</p>
      </div>
    </div>
  );
};

export default Newsletter;
