"use client";

import ProjectCard from "./ProjectCard";
import { AnimatePresence } from "framer-motion";

type Project = {
  name: string;
  description: string;
  website: string;
  github: string;
  status: "online" | "offline" | "progress";
  reason?: string;
};

type ProjectListProps = {
  projects: Project[];
};

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="space-y-6">
      <AnimatePresence mode="wait">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </AnimatePresence>
      {projects.length === 0 && (
        <p className="text-gray-500 italic">No projects in this category.</p>
      )}
    </div>
  );
}
