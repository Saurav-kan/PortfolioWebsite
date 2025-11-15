"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
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
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-sm md:max-w-md transition-transform duration-300 ease-in-out ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="neu-flat rounded-full transition-all duration-300">
          <div className="container mx-auto px-6 py-3 flex justify-center items-center gap-4">
            <div className="space-x-6 md:space-x-8">
              <Link
                href="#about"
                className="text-neu-text hover:text-neu-accent transition-colors font-medium"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="text-neu-text hover:text-neu-accent transition-colors font-medium"
              >
                Projects
              </Link>
              <Link
                href="#skills"
                className="text-neu-text hover:text-neu-accent transition-colors font-medium"
              >
                Skills
              </Link>
              <Link
                href="#contact"
                className="text-neu-text hover:text-neu-accent transition-colors font-medium"
              >
                Contact
              </Link>
            </div>
            <DarkModeToggle />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
