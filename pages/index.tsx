"use client";

import Link from "next/link";
import { Github, Globe, Twitter, Instagram, Download,  Server, Database } from "lucide-react";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiSupabase, SiPrisma, SiMongodb } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaReact } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function Home() {
  const projects = [
    {
      name: "PrettyBio",
      description: "A customizable link-in-bio platform to manage your online presence.",
      website: "https://prettybio.netlify.app",
      github: "https://github.com/devtofunmi/prettybio",
    },
    {
      name: "LaunchHunt",
      description: "A platform helping indie developers discover inspiration and build better projects.",
      website: "https://launchhunt.netlify.app",
      github: "https://github.com/devtofunmi/hunt",
    },
    {
      name: "FlashPrompt",
      description: "Generate powerful AI prompts for coding, content, and startup ideas — instantly",
      website: "https://flashprompt.netlify.app",
      github: "https://github.com/devtofunmi/flashprompt",
    },
    {
      name: "Lockit",
      description: "Lockit securely locks and shares private messages with trusted recipients only.",
      website: "https://lockitt.netlify.app",
      github: "https://github.com/devtofunmi/lockit",
    },
    {
      name: "MadewithChakra",
      description: "Showcase website made with Chakra UI.",
      website: "https://madewithchakra.netlify.app",
      github: "https://github.com/devtofunmi/madewithchakra",
    },
    {
      name: "Nounite",
      description: "Making Open and Distance Learning Easier.",
      website: "https://nounite.netlify.app",
      github: "https://github.com/devtofunmi/devtofunmi",
    },
    {
      name: "Coin",
      description: "Your Gateway to Real Time Coin Data",
      website: "https://coiinsearch.netlify.app",
      github: "https://github.com/devtofunmi/devtofunmi",
    },
  ];

  const technologies = [
    {  icon: <SiNextdotjs size={20} /> },
    {  icon: <FaReact size={20} /> },
    {  icon: <SiTailwindcss size={20} /> },
    {  icon: <SiTypescript size={20} /> },
    {  icon: <SiSupabase size={20} /> },
    {  icon: <Server size={20} /> },
    {  icon: <SiPrisma size={20} /> },
    {  icon: <SiMongodb size={20} /> },
  ];

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-gray-200 px-6 py-12 font-sans relative">
      {/*Navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md rounded-full p-3 flex gap-8 border border-white/20 shadow-lg">
        <a href="https://twitter.com/codebreak_er" target="_blank" className="hover:text-blue-400">
          <BsTwitterX size={20} />
        </a>
        <a href="https://instagram.com/iamnattyjay" target="_blank" className="hover:text-pink-400">
          <Instagram size={20} />
        </a>
        <a href="/Olayiwola_jesutofunmi_CV.pdf" download className="hover:text-green-400">
          <Download size={20} />
        </a>
        <a href="https://github.com/devtofunmi" target="_blank" className="hover:text-gray-400">
          <Github size={20} />
        </a>
      </nav>

      <section className="max-w-3xl mx-auto space-y-10">
        {/* Hero */}
        <header className="space-y-2 mt-10">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
            Jesutofunmi
          </h1>
          <p className="text-gray-400">Frontend Developer</p>
        </header>

        {/* About Me */}
        <section id="about" className="space-y-6">
          <p className="leading-relaxed text-gray-300">
            I'm a frontend developer passionate about building clean, responsive, and user friendly websites.
          </p>
          <p className="leading-relaxed text-gray-300">
            I'm always learning new technologies and improving my skills to deliver the best results for any project I work on.
          </p>
        </section>

        {/* Services */}
        {/* <section id="services" className="space-y-6">
          <h2 className="text-xl font-bold underline">Services</h2>
          <ul className="space-y-4">
            {[
              {
                title: "Frontend Development",
                description: "Building responsive, modern websites with React, Next.js, Tailwind CSS, and TypeScript.",
              },
              {
                title: "UI Implementation",
                description: "Transforming Figma designs or ideas into pixel perfect user interfaces.",
              },
              {
                title: "Fullstack Collaboration",
                description: "Working with backend teams to create seamless fullstack applications.",
              },
            ].map((service, index) => (
              <li
                key={index}
                className="border border-gray-800 p-4 rounded-md hover:bg-gray-900 transition"
              >
                <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </li>
            ))}
          </ul>
        </section> */}

        {/* Technologies */}
        <section id="technologies" className="space-y-6 mt-15">
          <Swiper
            spaceBetween={20}
            slidesPerView={5}
            loop
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="py-4"
          >
            {technologies.map((tech, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center justify-center text-sm font-semibold hover:bg-gray-900 transition">
                  {tech.icon}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Projects */}
        <section id="projects" className="space-y-8 mt-12">
          <h2 className="text-xl font-semibold underline">Projects</h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <h3 className="text-lg font-bold group-hover:text-white transition">
                  {project.name}
                </h3>
                <p className="text-gray-400 mt-1">{project.description}</p>
                <div className="flex gap-4 mt-3">
                  <Link
                    href={project.website}
                    target="_blank"
                    className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 transition px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <Globe size={16} />
                    Website
                  </Link>
                  <Link
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 transition px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <Github size={16} />
                    GitHub
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="space-y-6 mt-12">
          <h2 className="text-xl font-bold underline">Contact</h2>
          <p className="leading-relaxed text-gray-300">
            Have a project in mind or want to work together?<br />
            Feel free to reach out!
          </p>
          <div className="space-y-2">
            <p className="text-gray-400">Email:</p>
            <a
              href="mailto:olayiwolajesutofunmi@gmail.com"
              className="text-purple-400 hover:underline"
            >
              olayiwolajesutofunmi@gmail.com
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Jesutofunmi
        </footer>
      </section>
    </main>
  );
}

