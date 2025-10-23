"use client";

import { motion } from "framer-motion";
import { tabs } from "@/lib/constants";

type TabsProps = {
  tabs: typeof tabs;
  activeTab: typeof tabs[number];
  setActiveTab: (tab: typeof tabs[number]) => void;
}

export default function Tabs({ tabs, activeTab, setActiveTab }: TabsProps) {
  const geistSans = { className: "font-sans" };
  const geistMono = { className: "font-mono" }; 
  return (
    <div className={`${geistSans.className} ${geistMono.className} font-sans relative flex  gap-4 border border-white/10 p-1 rounded-full bg-white/5 w-fit`}>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`capitalize cursor-pointer px-4 py-1 text-sm font-medium rounded-full relative z-10 transition ${
            activeTab === tab ? "text-black" : "text-white/70"
          }`}
        >
          {tab}
          {activeTab === tab && (
            <motion.div
              layoutId="activeTab"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute inset-0 bg-white rounded-full -z-10"
            />
          )}
        </button>
      ))}
    </div>
  );
}
