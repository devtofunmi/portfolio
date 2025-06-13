import { FaReact } from "react-icons/fa";
import { Server } from "lucide-react";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiSupabase,
  SiPrisma,
  SiMongodb,
} from "react-icons/si";

export const statusStyles = {
  online: "bg-green-600 text-white",
  offline: "bg-red-600 text-white",
  progress: "bg-yellow-500 text-black",
};

export const tabs = ["all", "online", "offline", "progress"] as const;

export const technologies = [
  { icon: SiNextdotjs },
  { icon: FaReact },
  { icon: SiTailwindcss },
  { icon: SiTypescript },
  { icon: SiSupabase },
  { icon: Server },
  { icon: SiPrisma },
  { icon: SiMongodb },
];

export const projects = [
  {
    name: "LaunchHunt",
    description: "A platform helping indie developers discover inspiration and build better projects.",
    website: "https://launchhunt.netlify.app",
    github: "https://github.com/devtofunmi/hunt",
    status: "offline",
    reason: "Backend free tier exceeded",
  },
  {
    name: "PrettyBio",
    description: "A customizable link-in-bio platform to manage your online presence.",
    website: "https://prettybio.netlify.app",
    github: "https://github.com/devtofunmi/prettybio",
    status: "offline",
    reason: "Backend free tier exceeded",
  },
  {
    name: "FolioRank",
    description: "Submit your portfolio and get ranked by the community.",
    website: "https://foliorank.netlify.app",
    github: "https://github.com/devtofunmi/foliorank",
    status: "progress",
    reason: "Currently in development",
  },

  {
    name: "FlashPrompt",
    description: "Generate powerful AI prompts for coding, content, and startup ideas instantly",
    website: "https://flashprompt.netlify.app",
    github: "https://github.com/devtofunmi/flashprompt",
    status: "online",
  },
   {
    name: "EsseencebyTiti",
    description: "Discover luxury fragrances that define your essence. Premium scents, timeless elegance.",
    website: "https://essencebytiti.netlify.app/",
    github: "https://github.com/devtofunmi/essence_by_titi",
    status: "progress",
  },
  {
    name: "Lockit",
    description: "Lockit securely locks and shares private messages with trusted recipients only.",
    website: "https://lockitt.netlify.app",
    github: "https://github.com/devtofunmi/lockit",
    status: "offline",
    reason: "Backend free tier exceeded",
  },
  {
    name: "Admin",
    description: "Project management made for devs, by dev.",
    website: "https://admindasshboard.netlify.app/",
    github: "https://github.com/devtofunmi/dashboard",
    status: "progress",
  },
  {
    name: "MadewithChakra",
    description: "Showcase website made with Chakra UI.",
    website: "https://madewithchakra.netlify.app",
    github: "https://github.com/devtofunmi/madewithchakra",
    status: "online",
  },
  {
    name: "Nounite",
    description: "Making Open and Distance Learning Easier.",
    website: "https://nounite.netlify.app",
    github: "https://github.com/devtofunmi/devtofunmi",
    status: "online",
  },
  {
    name: "Coin",
    description: "Your Gateway to Real Time Coin Data",
    website: "https://coiinsearch.netlify.app",
    github: "https://github.com/devtofunmi/devtofunmi",
    status: "online",
  },
] as const;
