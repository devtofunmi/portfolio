"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Globe } from "lucide-react";

const statusStyles = {
  online: "bg-green-600 text-white",
  offline: "bg-red-600 text-white",
  progress: "bg-yellow-500 text-black",
};

type Project = {
  name: string;
  description: string;
  website: string;
  github: string;
  status: keyof typeof statusStyles;
  reason?: string;
};

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      key={project.name}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold group-hover:text-white transition">
          {project.name}
        </h3>
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[project.status]}`}
        >
          {project.status === "offline"
            ? `Offline - ${project.reason}`
            : project.status === "progress"
            ? `In Progress`
            : "Online"}
        </span>
      </div>
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
    </motion.div>
  );
}
