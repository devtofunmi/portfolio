"use client";

import { BsTwitterX } from "react-icons/bs";
import { Instagram, Download, Github } from "lucide-react";

export default function NavBar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md rounded-full p-3 flex gap-8 border border-white/20 shadow-lg">
      <a
        href="https://twitter.com/codebreak_er"
        target="_blank"
        className="hover:text-blue-400"
      >
        <BsTwitterX size={20} />
      </a>
      <a
        href="https://instagram.com/iamnattyjay"
        target="_blank"
        className="hover:text-pink-400"
      >
        <Instagram size={20} />
      </a>
      <a
        href="/Jesutofunmi Olayiwola.pdf"
        download
        className="hover:text-green-400"
      >
        <Download size={20} />
      </a>
      <a
        href="https://github.com/devtofunmi"
        target="_blank"
        className="hover:text-gray-400"
      >
        <Github size={20} />
      </a>
    </nav>
  );
}
