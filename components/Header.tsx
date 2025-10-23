"use client";

import { motion } from "framer-motion";

export default function Header() {
  const geistSans = { className: "font-sans" };
  const geistMono = { className: "font-mono" }; 
  return (
    <header className={`${geistSans.className} ${geistMono.className} font-sans space-y-2 mt-10`}>
      <div className="flex gap-5">
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
      <div>
      <h1 className="text-3xl font-semibold mt-2">
        Jesutofunmi
      </h1>
      <p className="text-gray-400">Frontend Developer</p>
      </div>
      </div>

      <section className="space-y-6">
        <p className="leading-relaxed mt-5 text-gray-300">
          I'm a frontend developer passionate about building clean,
          responsive, and user friendly websites.
        </p>
        <p className="leading-relaxed text-gray-300">
         I'm always learning new technologies and improving my skills to deliver
         the best results for every project I work on. Currently, I'm building real-world,
         problem-solving projects and sharing my journey in public on <span className="text-2xl text-bold">X</span>.
        </p>
      </section>
    </header>
  );
}