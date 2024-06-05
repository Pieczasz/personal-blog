import React from "react";

const AboutHero = () => {
  return (
    <div className="flex w-full flex-col lg:flex-row">
      <div className="w-full items-center justify-center px-10 py-20 ">
        <div className="m-auto flex max-w-5xl flex-col">
          <h2 className="mb-6 text-left text-4xl font-bold">
            Hi, I&apos;m Bartek Piekarz
          </h2>
          <div className="flex flex-col gap-y-6">
            {/* //TODO: make it the acual post from blog and read more... */}
            <p className="text-left text-xl">
              I&apos;m a full-stack developer from Poland. My history begin in
              may 2024. At that time I started learning react by creating
              website for my church parish (Yes I am catholic). After that I
              started creating Vodkie using React Native expo. Besides that at
              the same time I was creating blog that you are now able to read.
              Read more...
            </p>
          </div>
        </div>
      </div>
      <div className=" w-full flex-col items-center justify-center px-10 py-20 lg:flex-row ">
        <div className="m-auto  flex max-w-5xl flex-col gap-y-12">
          <div className="flex flex-col gap-y-12">
            {/* //TODO: add my image posts */}
            <p>image of me</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
