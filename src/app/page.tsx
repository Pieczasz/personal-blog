import { CreatePost } from "@/components/create-post";
import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Introduction from "@/components/Introduction";
import VodkieApp from "@/components/VodkieApp";
import Recommendations from "@/components/Newsletter";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

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
      <CrudShowcase />
    </main>
  );
}

async function CrudShowcase() {
  const session = await getServerAuthSession();
  if (!session?.user)
    return (
      <div className="w-full max-w-xs">
        <p>a</p>
      </div>
    );

  return (
    <div className="w-full max-w-xs">
      <p>a</p>
      <p>Your email: {session.user.email}</p>
      <CreatePost />
    </div>
  );
}
