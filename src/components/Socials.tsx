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
    path: "https://twitter.com/yourprofile",
    icon: <Twitter className="h-6 w-6" />,
  },
  {
    path: "https://instagram.com/yourprofile",
    icon: <Instagram className="h-6 w-6" />,
  },
  {
    path: "https://linkedin.com/in/yourprofile",
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
