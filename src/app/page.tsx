// Components
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Introduction from "@/components/Introduction";
import VodkieApp from "@/components/VodkieApp";
import Recommendations from "@/components/Newsletter";

function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex w-full items-center justify-center bg-[#FFF8EA] py-20">
        <MaxWidthWrapper className="space-y-3 text-center">
          <h1 className="px-4 text-5xl font-bold">Blog of Teen Developer</h1>
          <h2 className="px-4 text-2xl">
            My daily blog about coding, life and more
          </h2>
        </MaxWidthWrapper>
      </div>
      <Recommendations />
      <Introduction />
      <VodkieApp />
    </main>
  );
}

export default Home;
