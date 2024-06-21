// Components
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import AboutHero from "@/components/AboutHero";
import AboutMeDescription from "@/components/AboutMeDescription";
import OtherInterests from "@/components/OtherInterests";

function About() {
  return (
    <main className="min-h-screen">
      <div className="flex w-full items-center justify-center bg-[#FFF8EA] py-20">
        <MaxWidthWrapper className=" space-y-3 text-center">
          <AboutHero />
        </MaxWidthWrapper>
      </div>
      <div className="m-auto flex max-w-screen-md flex-col items-center justify-center text-left">
        <AboutMeDescription />
      </div>
      <hr className="border-primary/35" />
      <OtherInterests />
    </main>
  );
}

export default About;
