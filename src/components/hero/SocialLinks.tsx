import { Github, Linkedin, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si"; // ✅ Import SiLeetcode from react-icons

const links = [
  {
    href: "https://github.com/KHUSHITYAGII",
    icon: <Github className="w-6 h-6 text-gray-900 dark:text-white" />, // ✅ Corrected icon from lucide-react
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/khushityagi0208/",
    icon: <Linkedin className="w-6 h-6 text-[#0077B5]" />, // ✅ Corrected icon from lucide-react
    label: "LinkedIn",
  },
  {
    href: "https://instagram.com/khushityagi0208", // ✅ Updated Instagram username
    icon: <Instagram className="w-6 h-6 text-[#E1306C]" />, // ✅ Corrected icon from lucide-react
    label: "Instagram",
  },
  {
    href: "https://wa.me/917082344109",
    icon: <FaWhatsapp className="w-6 h-6 text-[#25D366]" />, // ✅ No changes needed
    label: "WhatsApp",
  },
  {
    href: "https://leetcode.com/u/khushityagi0208/",
    icon: <SiLeetcode className="w-6 h-6 text-gray-900 dark:text-white" />, // ✅ Corrected import
    label: "Leetcode",
  },
];

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
      {links.map(({ href, icon, label }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="group relative p-3 bg-gray-200 dark:bg-gray-800 rounded-lg hover:scale-110 transform transition-transform duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          <div>{icon}</div>
        </a>
      ))}
    </div>
  );
}
