import React from "react";

const Introduction = () => {
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
              I&apos;m a full-stack developer from Poland. My history begin in
              may 2024. At that time I started learning react by creating
              website for my church parish (Yes I am catholic).
            </p>
            <p className="text-xl">
              After that I started creating Vodkie using React Native expo.
              Besides that at the same time I was creating blog that you are now
              able to read. Read more...
            </p>
          </div>
        </div>
      </div>
      <div className=" w-full flex-col items-center justify-center border-primary/35 px-10 py-20 lg:w-1/2 lg:flex-row lg:border-r-[1.5px]">
        <div className="m-auto  flex max-w-sm flex-col gap-y-12">
          <h4 className="text-2xl font-bold">Browse my latest posts:</h4>
          <div className="flex flex-col gap-y-12">
            {/* //TODO: add latest posts */}
            <p className="text-xl">Post 1</p>
            <p className="text-xl">Post 2</p>
            <p className="text-xl">Post 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
