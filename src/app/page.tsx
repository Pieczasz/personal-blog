// Components
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Introduction from "@/components/Introduction";
import VodkieApp from "@/components/VodkieApp";
import Newsletter from "@/components/Newsletter";

function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex w-full items-center justify-center bg-[#FFF8EA] py-20">
        <MaxWidthWrapper className="space-y-3 text-center">
          <h1 className="px-4 font-bold">Blog of the Teen Developer</h1>
          <h3 className="px-4">My daily blog about coding, life and more</h3>
        </MaxWidthWrapper>
      </div>
      <Newsletter />
      <Introduction />
      <VodkieApp />
    </main>
  );
}

export default Home;
