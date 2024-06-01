"use client";

// Functions
import { usePathname } from "next/navigation";

// Framer motion
import { motion } from "framer-motion";

// Components
import Link from "next/link";

interface NavLink {
  path: string;
  name: string;
}

const links: NavLink[] = [
  { path: "/projects", name: "my projects" },
  { path: "/blog", name: "blog" },
  { path: "/about", name: "about" },
  { path: "/vodkie", name: "vodkie" },
];

interface NavProps {
  containerStyles?: string;
  linkStyles?: string;
  underlineStyles?: string;
}

const Nav: React.FC<NavProps> = ({
  containerStyles,
  linkStyles,
  underlineStyles,
}) => {
  const path = usePathname();
  return (
    <nav className={containerStyles}>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`capitalize ${linkStyles}`}
        >
          {link.path === path && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              layoutId="underline"
              className={underlineStyles}
            />
          )}
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
