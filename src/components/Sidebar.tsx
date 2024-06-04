"use client";

// Functions
import { usePathname } from "next/navigation";

// Framer motion
import { motion } from "framer-motion";

// Components
import Link from "next/link";

interface SidebarLink {
  path: string;
  name: string;
}

const links: SidebarLink[] = [
  { path: "/blog", name: "blog" },
  { path: "/projects", name: "my projects" },
  { path: "/vodkie", name: "vodkie" },
  { path: "/about", name: "about" },
];

interface SidebarProps {
  containerStyles?: string;
  linkStyles?: string;
  underlineStyles?: string;
  onLinkClick?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  containerStyles,
  linkStyles,
  underlineStyles,
  onLinkClick,
}) => {
  const path = usePathname();
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween", duration: 0.5 }}
      className="fixed inset-0 top-20 z-[1000] h-[calc(100%-5rem)] w-full bg-[#FFF8EA]"
    >
      <nav className={containerStyles}>
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className={`capitalize ${linkStyles}`}
            onClick={onLinkClick}
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
    </motion.div>
  );
};

export default Sidebar;
