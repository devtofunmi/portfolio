"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="space-y-2 mt-10">
      <div className="w-20 h-20">
        <motion.img
          src="/jaydp.png"
          alt="Jesutofunmi Olayiwola"
          className="rounded-full w-full h-full object-cover shadow-lg transition-shadow"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 20px rgba(255, 105, 180, 0.6)",
          }}
        />
      </div>

      <h1 className="text-4xl mt-2 font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
        Jesutofunmi
      </h1>

      <p className="text-gray-400">Frontend Developer</p>

      <section className="space-y-6">
        <p className="leading-relaxed text-gray-300">
          I'm a frontend developer passionate about building clean,
          responsive, and user friendly websites.
        </p>
        <p className="leading-relaxed text-gray-300">
          I'm always learning new technologies and improving my skills to
          deliver the best results for any project I work on.
        </p>
      </section>
    </header>
  );
}