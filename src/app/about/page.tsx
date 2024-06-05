// Components

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import AboutHero from "@/components/AboutHero";
import AboutMeDescription from "@/components/AboutMeDescription";
import OtherInterests from "@/components/OtherInterests";

export default async function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex w-full items-center justify-center bg-[#FFF8EA] py-20">
        <MaxWidthWrapper className=" space-y-3 text-center">
          <AboutHero />
        </MaxWidthWrapper>
      </div>
      <AboutMeDescription />
      <OtherInterests />
    </main>
  );
}
