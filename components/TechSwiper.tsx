"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiSupabase,
  SiPrisma,
  SiMongodb,
} from "react-icons/si";
import { Server } from "lucide-react";

const technologies = [
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <FaReact />, name: "React" },
  { icon: <SiTailwindcss />, name: "TailwindCSS" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiSupabase />, name: "Supabase" },
  { icon: <Server />, name: "Hono" },
  { icon: <SiPrisma />, name: "Prisma" },
  { icon: <SiMongodb />, name: "MongoDB" },
];

export default function TechSwiper() {
  return (
    <section className="font-sans space-y-6 mt-10">
      <Swiper
        loop
        speed={2000}
        spaceBetween={20}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          320: { slidesPerView: 2 },
          480: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        className="py-3"
      >
        {technologies.map((tech, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center gap-2 justify-center px-2 py-2 min-h-[44px] text-sm font-medium text-gray-200">
              {React.cloneElement(tech.icon, {
                size: 22,
                className: "text-white shrink-0",
              })}
              <span className="text-gray-300">{tech.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

