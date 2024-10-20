"use client";

import { Switch } from "@nextui-org/switch";
import { FaSun, FaMoon } from "react-icons/fa";
import CustomCursor from './cursor.js';
import { useState, useEffect } from 'react';
import { Button } from "@nextui-org/react";

const THEME_CLASSES = {
  light: 'theme-light',
  dark: 'theme-dark',
};

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const currentTheme = isDarkMode ? THEME_CLASSES.dark : THEME_CLASSES.light;

  useEffect(() => {
    document.body.classList.toggle(THEME_CLASSES.dark, isDarkMode);
  }, [isDarkMode]);

  return (
    <>
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Dark Mode Toggle */}
      <div className={currentTheme} p-4>
        {/* Container for the switch */}
        <div className="fixed top-5 left-5 z-50 flex items-center space-x-2">
          <Switch
            isSelected={isDarkMode}
            onChange={() => setIsDarkMode(!isDarkMode)}
            size="lg"
            color="secondary"
            thumbIcon={isDarkMode == true ? <FaMoon /> : <FaSun />}
          >
            Dark mode
          </Switch>
        </div>

        {/* Navigation Box */}
        <nav className="fixed top-5 right-5 p-4 rounded-lg shadow-lg">
          <ul className="flex flex-col space-y-2">
            {[
              { href: '#home', label: 'Home' },
              { href: '#about', label: 'About' },
              { href: '#projects', label: 'Services' },
              { href: '#other', label: 'Contact' },
            ].map((item, index) => (
              <li key={index}>
                <a href={item.href}>
                  <p className="hover:underline hover:animate-link">{item.label}</p>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Page Contents */}
        <section id="home" className="min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold animate-expand">Tomorrow.</h1>
          <p className="mt-4 text-lg">The Official AI and Data Science Club of PSHS-MC</p>
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
            as="a"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          >
            Learn more</Button>
        </section>

        <section id="other" className="min-h-screen flex flex-col space-y-10 items-center justify-center">
          <h2 className="text-4xl font-bold">Contact us!</h2>
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