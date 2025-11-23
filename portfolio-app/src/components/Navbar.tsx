"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    setVisible(true);
  };

  return (
    <>
      {/* Show hover area only when navbar is hidden */}
      {!visible && (
        <div
          className="fixed top-0 left-0 right-0 h-20 z-40"
          onMouseEnter={handleMouseEnter}
        />
      )}
      <header
        className={`fixed top-6 left-0 right-0 z-50 flex justify-center transition-transform duration-300 ease-in-out ${
          visible ? "translate-y-0" : "-translate-y-32"
        }`}
      >
        <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-6 py-3 rounded-sm shadow-[4px_4px_0px_rgba(0,0,0,0.1)] border-2 border-gray-900 dark:border-gray-100 flex items-center gap-6 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
          <div className="flex items-center space-x-1 md:space-x-2">
            {[
              { href: "#hero", label: "Home" },
              { href: "#skills", label: "Skills" },
              { href: "#projects", label: "Projects" },
              { href: "#about", label: "About" },
              { href: "#contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-sm text-sm font-bold text-gray-700 dark:text-gray-200 hover:bg-nepali-red hover:text-white transition-all hover:shadow-[2px_2px_0px_rgba(0,0,0,0.2)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <div className="w-0.5 h-6 bg-gray-300 dark:bg-gray-600 mx-2 rotate-12" />
          
          <DarkModeToggle />
        </nav>
      </header>
    </>
  );
};

export default Navbar;
