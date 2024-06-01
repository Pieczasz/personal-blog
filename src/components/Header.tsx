"use client";

// Components

import Nav from "@/components//Nav";
import MobileNav from "@/components/MobileNav";
import Link from "next/link";
import Socials from "@/components/Socials";

const Header: React.FC = () => {
  return (
    <header className="bg-[#FFF8EA] py-10 dark:bg-transparent">
      <div className="container max-w-screen-xl">
        <div className="flex items-center justify-between">
          <Link href="/" className="group relative">
            <h1 className="text-xl font-semibold">Bartek Piekarz</h1>
            <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-primary transition-all duration-500 group-hover:scale-x-100"></span>
          </Link>
          <div className="flex items-center">
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
          </div>
          <div className="flex items-center gap-x-6">
            <Socials containerStyles="flex gap-x-3" />
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
