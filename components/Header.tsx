"use client";

export default function Header() {
  return (
    <header className="space-y-2 mt-10">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
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
