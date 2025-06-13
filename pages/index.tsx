"use client";

import Head from "next/head";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { tabs, statusStyles, projects, technologies } from "@/lib/constants";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import TechSwiper from "@/components/TechSwiper";
// import { Contact } from "lucide-react";
import Tabs from "@/components/Tabs";
import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/Contact";


export default function HomePage() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("all");
  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.status === activeTab);

  return (
    <>
      <Head>
        <title>Jesutofunmi | Frontend Developer Portfolio</title>
        <meta
          name="description"
          content="Jesutofunmi is a frontend developer passionate about building responsive, user-friendly websites using React, Next.js, and Tailwind CSS."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0d0d0d" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-[#0d0d0d] text-gray-200 px-6 py-12 font-sans relative">
        <NavBar />
        <section className="max-w-3xl mx-auto space-y-10">
          <Header />

          <section className="space-y-5 mt-15">
            <TechSwiper />
          </section>

          <section className="space-y-8 mt-12">
            <h2 className="text-xl font-semibold underline">Projects</h2>
            <div className="flex justify-center mb-6">
            <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            <div className="space-y-6">
              <AnimatePresence mode="wait">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.name} project={project} index={index} />
                ))}
              </AnimatePresence>
              {filteredProjects.length === 0 && (
                <p className="text-gray-500 italic">No projects in this category.</p>
              )}
            </div>
          </section>

          <Contact />

          <footer className="border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Jesutofunmi
          </footer>
        </section>
      </main>
    </>
  );
}
