import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black py-16 dark:bg-transparent">
      <MaxWidthWrapper className="flex flex-col items-center justify-center space-y-3">
        <h2 className="text-lg font-bold text-white">Bartek Piekarz</h2>
        <Link href="/privacy-policy">
          <h3 className="text-sm text-gray-400">Privacy & Terms of Use</h3>
        </Link>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
