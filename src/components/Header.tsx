"use client";

// Components

import ThemeToggler from "@/components//ThemeToggler";
import Nav from "@/components//Nav";
import MobileNav from "@/components/MobileNav";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-[#f9f8f4] py-7 dark:bg-transparent">
      <div className="container w-[70%]">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1 className="text-xl font-semibold">Bartek Piekarz</h1>
          </Link>
          <div className="flex items-center">
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
          </div>
          <div className="flex items-center gap-x-6">
            <ThemeToggler />
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
