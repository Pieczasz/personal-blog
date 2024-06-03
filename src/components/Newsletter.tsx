import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const Newsletter = () => {
  return (
    <div className="m-auto flex w-full flex-col items-center px-10 py-[8rem]">
      <h2 className="text-center text-3xl font-bold">
        Stay updated and sign in
      </h2>
      <h2 className="pt-1 text-3xl  font-bold">for my newsletter</h2>
      <div className="flex w-full max-w-sm items-center justify-center pt-6">
        <Input
          type="email"
          placeholder="Email address"
          className="h-12 w-56 rounded-none"
        />
        <Button
          type="submit"
          className="h-12 w-32 rounded-none text-lg font-bold text-black"
        >
          Subscribe
        </Button>
      </div>
      <div>
        <p className="pt-10 text-left text-xl xl:text-center">
          My newsletter includes my recommendations
        </p>
        <p className="pt-1 text-left text-xl xl:text-center">
          about books, technologies, life, travelling,
        </p>
        <p className="pt-1 text-left text-xl xl:text-center">and more...</p>
      </div>
    </div>
  );
};

export default Newsletter;
