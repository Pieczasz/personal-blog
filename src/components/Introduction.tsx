import React from "react";

const Introduction = () => {
  return (
    <div className="flex w-full flex-col border-b-[1.5px] border-t-[1.5px] border-primary/35 xl:flex-row">
      <div className="w-full items-center justify-center border-b-[1.5px] border-primary/35 px-10 py-20 xl:w-1/2 xl:border-r-[1.5px] xl:border-b-transparent">
        <div className="m-auto flex max-w-sm flex-col">
          <h1 className=" mb-6 text-4xl font-bold">
            Hi, I&apos;m Bartek Piekarz
          </h1>
          <p className="text-xl">
            I&apos;m a full-stack developer from Poland. My history begin in may
            2024.
          </p>
        </div>
      </div>
      <div className=" w-full flex-col items-center justify-center border-primary/35 px-10 py-20 xl:w-1/2 xl:flex-row xl:border-r-[1.5px]">
        <div className=" m-auto flex max-w-sm flex-col">
          <h1 className="mb-6 text-4xl font-bold">
            Hi, I&apos;m Bartek Piekarz
          </h1>
          <p className="text-xl">
            I&apos;m a full-stack developer from Poland. My history begin in may
            2024.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
