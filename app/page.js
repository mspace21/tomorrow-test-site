"use client";

import { Switch } from "@nextui-org/switch";
import { FaSun, FaMoon } from "react-icons/fa";
import CustomCursor from './cursor.js';
import { useState, useEffect } from 'react';
import { Button } from "@nextui-org/react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CanvaEmbed from './canva.js';

const THEME_CLASSES = {
  light: 'theme-light',
  dark: 'theme-dark',
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
      {/* Custom Cursor */}
      <CustomCursor />


      <div className={currentTheme} p-4>


        {/* Navigation Box */}
        <nav className="fixed p-4 rounded-lg shadow-lg top-4 w-4/5 left-1/2 transform -translate-x-1/2 bg-slate-400 bg-opacity-15 text-white outline-2">
          <ul className="flex flex-row space-x-10 justify-around">
            {[
              { href: '#home', label: 'Home' },
              { href: '#about', label: 'About' },
              { href: '#projects', label: 'Projects' },
              { href: '#other', label: 'Contact' },
            ].map((item, index) => (
              <li key={index}>
                <a href={item.href}>
                  <p className="hover:underline hover:animate-link text-white">{item.label}</p>
                </a>
              </li>
            ))}
          </ul>
        </nav>


        {/* Page Contents */}
        <section id="home" className="min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold animate-expand">Tomorrow.</h1>
          <p className="mt-4 text-lg">The <span className="font-extrabold">Official</span> AI and Data Science Club of PSHS-MC</p>
        </section>

        <section id="about" className="min-h-screen flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold">What is Tomorrow?</h2>
          <p className="mt-4 text-lg">We aim to spark the interests of scholars in data science, statistics, and artificial intelligence.</p>
        </section>

        <section id="projects" className="min-h-screen flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold">Planned Projects</h2>
          <p className="mt-4 text-lg">We are planning projects!</p>
          <Button
            className="transition transform hover:scale-105 bg-slate-500 hover:bg-blue-600 hover:text-white py-3 px-6 rounded-lg"
            as="button"
            href="/samplePage"
          >
            Learn more
          </Button>
        </section>

        <section id="other" className="min-h-screen flex flex-col space-y-10 items-center justify-center">
          <h2 className="text-4xl font-bold">Contact us!</h2>
          <p>
            Stay up-to-date on Tomorrow&apos;s latest projects and events!
          </p>
          <p>
            Visit our{' '}
            <Button
              className=" bg-blue-700 hover:bg-blue-600 hover:text-white py-3 px-6 rounded-lg radius-full hover:expand 0.5s ease-in"
              as="a"      // Linkifying the button
              href="https://www.facebook.com/profile.php?id=61563288622007"
              color="default"
              radius="full"
            >
              Facebook page
            </Button>
          </p>
        </section>
      </div>
    </>
  );
}