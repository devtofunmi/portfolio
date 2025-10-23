"use client";

import { Mail, Send } from "lucide-react";

export default function Contact() {
  const geistSans = { className: "font-sans" };
  const geistMono = { className: "font-mono" }; 
  return (
    <section id="contact" className={`${geistSans.className} ${geistMono.className} font-sans space-y-4 mt-20`}>
      <h2 className="text-md flex items-center gap-2">
        Contact Me
      </h2>

      <p className="text-sm text-gray-400">
        Want to work together or have a question?<br /> Feel free to reach out.
      </p>

      <a
        href="mailto:olayiwolajesutofunmi@gmail.com"
        className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-medium transition hover:bg-gray-200"
      >
        <Send size={16} /> Send an Email
      </a>
    </section>
  );
}
