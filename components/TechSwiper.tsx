"use client";

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
  { icon: <SiNextdotjs size={20} /> },
  { icon: <FaReact size={20} /> },
  { icon: <SiTailwindcss size={20} /> },
  { icon: <SiTypescript size={20} /> },
  { icon: <SiSupabase size={20} /> },
  { icon: <Server size={20} /> },
  { icon: <SiPrisma size={20} /> },
  { icon: <SiMongodb size={20} /> },
];

export default function TechSwiper() {
  return (
    <section className="space-y-5 mt-15">
      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        loop
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="py-2"
      >
        {technologies.map((tech, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col p-2 items-center justify-center text-sm font-semibold hover:bg-gray-900 transition">
              {tech.icon}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
