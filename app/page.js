"use client";

import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import CustomCursor from "./cursor.js";

const THEME_CLASSES = {
  light: "theme-light",
  dark: "theme-dark",
};

export default function Home() {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const currentTheme = isDarkMode ? THEME_CLASSES.dark : THEME_CLASSES.light;

  useEffect(() => {
    document.body.classList.toggle(THEME_CLASSES.dark, isDarkMode);
  }, [isDarkMode]);

  return (
    <>
      <CustomCursor />
      <div className={`${currentTheme} p-4`}>
        {/* Navigation Box */}
        <header className="w-[95%] mx-auto border border-gray-500 rounded-lg bg-black text-white fixed mt-2 left-8 z-50">
          <nav className="flex items-center justify-start gap-8 p-4">
            <span className="font-bold text-lg">Tomorrow</span>
            <a href="#about" className="text-gray-300 hover:text-white">
              About
            </a>
            <a href="#projects" className="text-gray-300 hover:text-white">
              Projects
            </a>
            <a href="#gallery" className="text-gray-300 hover:text-white">
              Gallery
            </a>
          </nav>
        </header>

        {/* Page Contents */}
        <section id="home" className="min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold animate-expand">Tomorrow</h1>
          <p className="mt-4 text-lg">
            The <span className="font-extrabold">Official</span> AI and Data Science Club of PSHS-MC
          </p>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex flex-col items-center justify-center gap-6 py-24 sm:gap-10">
          <h3 className="font-bold text-center">ABOUT</h3>
          <h2 className="text-4xl font-bold">What is Tomorrow?</h2>
          <p className="text-lg text-muted-foreground max-w-xl text-center leading-relaxed">
            Tomorrow aims to <strong>spark interest</strong> in the fields of <strong>statistics, data science, and artificial intelligence</strong>. 
            This club aims to develop projects and initiatives leveraging advancements in AI for social good.
          </p>
          <Button
            className="transition transform hover:scale-105 bg-slate-500 hover:bg-blue-600 hover:text-white py-3 px-6 rounded-lg"
            onClick={() => router.push("/samplePage")}
          >
            Learn more
          </Button>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex flex-col items-center justify-center gap-6 py-24 sm:gap-10">
          <h3 className="font-bold text-center">Projects and Activities</h3>
          <h2 className="text-4xl font-bold">What does Tomorrow do?</h2>
          <div className="w-4/5 flex flex-col md:flex-row justify-center gap-8 px-6">
            {[
              { title: "Talk Series", icon: "📢", desc: "Tomorrow invites speakers to talk in Pisay MC who specialize in various issues relevant to AI." },
              { title: "Club Lectures", icon: "☕", desc: "Lectures and workshops are held during club meetings for learning about Data Science and AI. Interactive and engaging club activities also happen during sessions." },
              { title: "Projects", icon: "💻", desc: "Tomorrow hosts member-proposed projects, approved by the scientific and management committees." },
            ].map((item, index) => (
              <div key={index} className="group relative w-full md:w-1/3 rounded-xl p-6 border border-gray-700 hover:bg-gray-500 transition-all duration-300">
                <div className="text-white flex flex-col gap-3">
                  <span className="text-3xl">{item.icon}</span>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Gallery Section */}
        <section id="gallery" className="min-h-screen flex flex-col items-center justify-center gap-6 py-24 sm:gap-10">
          <h3 className="font-bold text-center">Gallery</h3>
          <h2 className="text-4xl font-bold">Our Club</h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {[
              "/images/20250115130446.jpg",
              "/images/20241218100322.jpg",
              "/images/20241218095649.jpg",
              "/images/20241218100107.jpg",
              "/images/20250115124747.jpg",
              "/images/20250115130448.jpg",
              "/images/EAV05612.JPG",
              "/images/EAV05619.JPG",
              "/images/image9.jpg",
            ].map((src, index) => (
              <div key={index} className="relative overflow-hidden rounded-sm w-full h-64">
                <Image alt={`Gallery image ${index + 1}`} src={src} layout="fill" objectFit="cover" />
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="container mt-10 flex flex-wrap justify-between pb-16 pt-10">
          <div className="basis-full flex gap-8 md:basis-auto md:flex-col md:justify-start">
            <article className="text-xl font-semibold">Tomorrow</article>
          </div>
          <div className="mt-10 md:mt-0">
            <h3 className="text-lg font-semibold">Club</h3>
            {['adipiscing ipsum', 'amet', 'sed', 'adipiscing', 'sit'].map((item, index) => (
              <a key={index} href="#" className="text-muted_foreground hover:text-foreground block">
                {item}
              </a>
            ))}
          </div>
          <div className="mt-10 md:mt-0">
            <h3 className="font-semibold">Socials</h3>
            {['Facebook', 'Instagram'].map((social, index) => (
              <a key={index} href="#" className="hover:text-foreground block">
                {social}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </>
  );
}
