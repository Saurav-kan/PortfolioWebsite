"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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
            <div className="flex items-center space-x-6 md:space-x-8">
              {[
                { href: "#about", label: "About" },
                { href: "#projects", label: "Projects" },
                { href: "#skills", label: "Skills" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <motion.div
                  key={link.href}
                  className="relative"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="text-neu-text hover:text-neu-accent transition-colors font-medium relative inline-block group"
                  >
                    {link.label}
                    <motion.span
                      className="absolute bottom-0 left-0 h-0.5 bg-neu-accent"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
            <DarkModeToggle />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
