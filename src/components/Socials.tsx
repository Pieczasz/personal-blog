"use client";

// Functions
import { usePathname } from "next/navigation";

// Framer motion
import { motion } from "framer-motion";

// Components
import Link from "next/link";

// Icons
import { Instagram, Twitter, Linkedin } from "lucide-react";

interface SocialsLink {
  path: string;
  icon: JSX.Element;
}

//TODO: add my personal socials
const links: SocialsLink[] = [
  {
    path: "https://x.com/Pieczasz",
    icon: <Twitter className="h-6 w-6" />,
  },
  {
    path: "https://www.instagram.com/bartek__piekarz/",
    icon: <Instagram className="h-6 w-6" />,
  },
  {
    path: "https://www.linkedin.com/in/bart%C5%82omiej-piekarz-274b49304/",
    icon: <Linkedin className="h-6 w-6" />,
  },
];

interface SocialsProps {
  containerStyles?: string;
  linkStyles?: string;
  underlineStyles?: string;
}

const Socials: React.FC<SocialsProps> = ({
  containerStyles,
  linkStyles,
  underlineStyles,
}) => {
  const path = usePathname();
  return (
    <div className={containerStyles}>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`capitalize ${linkStyles} transition-colors hover:text-primary`}
          target="_blank" // This will open the link in a new tab
          rel="noopener noreferrer" // This is a security measure
        >
          {link.path === path && <motion.span className={underlineStyles} />}
          {link.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
