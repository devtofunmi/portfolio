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
    name: "Prepkitty",
    description: "Engage with our AI-driven interview coach in a real-time, personalized practice environment. Receive actionable feedback to enhance your professional delivery.",
    website: "https://prepkitty.co/",
    github: "https://github.com/devtofunmi/inter-v",
    status: "online",
    // reason: "Currently in development",
  },
    {
    name: "Chat Flow",
    description: "A Natural Language Interface for Building Flowcharts",
    website: "https://chatt-flow.vercel.app/",
    github: "https://github.com/devtofunmi/chat-flow",
    status: "online",
    // reason: "Backend free tier exceeded",
  },
  {
    name: "LaunchHunt",
    description: "A platform helping indie developers discover inspiration and build better projects.",
    website: "https://launchhunt.netlify.app",
    github: "https://github.com/devtofunmi/hunt",
    status: "online",
    // reason: "Backend free tier exceeded",
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
    status: "online",
   // reason: "Currently in development",
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
    name: "Carevo",
    description: "Carevo works nonstop finding and applying to the right jobs for you until you’re hired.",
    website: "https://carevoo.vercel.app/",
    github: "https://github.com/devtofunmi/carevo",
    status: "progress",
  },
   {
    name: "Audio4Lab",
    description: " Generate Royalty-Free Music for Your Videos ",
    website: "https://audio4lab.vercel.app/",
    github: "https://github.com/devtofunmi/audio4lab",
    status: "progress",
  },
  // {

  //   name: "Dohris",
  //   description: "A vibrant birthday website I made for a friend to make her day extra special 💖🎉",
  //   website: "https://dohris.netlify.app/",
  //   github: "https://github.com/devtofunmi/dohris",
  //   status: "online",
  // },

  // {
  //   name: "Admin",
  //   description: "Project management made for devs, by dev.",
  //   website: "https://admindasshboard.netlify.app/",
  //   github: "https://github.com/devtofunmi/dashboard",
  //   status: "progress",
  // },
  {
    name: "MadewithChakra",
    description: "Showcase website made with Chakra UI.",
    website: "https://madewithchakra.netlify.app",
    github: "https://github.com/devtofunmi/madewithchakra",
    status: "online",
  },
  // {
  //   name: "Nounite",
  //   description: "Making Open and Distance Learning Easier.",
  //   website: "https://nounite.netlify.app",
  //   github: "https://github.com/devtofunmi/devtofunmi",
  //   status: "online",
  // },
  // {
  //   name: "Coin",
  //   description: "Your Gateway to Real Time Coin Data",
  //   website: "https://coiinsearch.netlify.app",
  //   github: "https://github.com/devtofunmi/devtofunmi",
  //   status: "online",
  // },
] as const;
