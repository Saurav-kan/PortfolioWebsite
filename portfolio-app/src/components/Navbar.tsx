"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  console.log("Navbar rendering with visible:", visible);

  useEffect(() => {
    console.log("Setting up event listeners");
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      console.log(
        `Scroll event: currentY=${currentScrollY}, lastY=${lastScrollY.current}`
      );
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        console.log("Decision: HIDE (scrolling down)");
        setVisible(false);
      } else {
        console.log("Decision: SHOW (scrolling up or at top)");
        setVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      console.log("Cleaning up event listeners");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    console.log("Mouse entered top area, setting visible: true");
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
        <nav className="bg-primary-dark/70 backdrop-blur-lg rounded-full border border-secondary-earth/30 shadow-lg shadow-primary-dark/20">
          <div className="container mx-auto px-6 py-3 flex justify-center items-center">
            <div className="space-x-6 md:space-x-8">
              <Link
                href="#about"
                className="text-base-background hover:text-accent-vibrant transition-colors"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="text-base-background hover:text-accent-vibrant transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#skills"
                className="text-base-background hover:text-accent-vibrant transition-colors"
              >
                Skills
              </Link>
              <Link
                href="#contact"
                className="text-base-background hover:text-accent-vibrant transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
