import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black py-16">
      <MaxWidthWrapper className="flex flex-col items-center justify-center space-y-3">
        <Link href="/" className="group relative">
          <h2 className="text-lg font-bold text-white transition-all duration-300">
            Bartek Piekarz
          </h2>
          <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-gray-500 transition-all duration-500 group-hover:scale-x-100"></span>
        </Link>

        <Link href="/privacy-policy" className="group relative py-1">
          <h3 className="relative text-sm text-gray-400 transition-all duration-300 group-hover:text-white">
            Privacy & Terms of Use
          </h3>
          <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-gray-500 transition-all duration-500 group-hover:scale-x-100"></span>
        </Link>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
