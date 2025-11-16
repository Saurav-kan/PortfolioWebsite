"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import useReveal from "../hooks/useReveal";
import TypingAnimation from "./TypingAnimation";

const Hero = () => {
  const { ref, revealed } = useReveal({ rootMargin: "0px", threshold: 0.1 });

  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center text-center"
    >
      <div
        ref={ref}
        className={`flex flex-col items-center transition-all duration-700 ease-out ${
          revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="neu-convex rounded-3xl px-12 py-8 mb-8">
          <h1 className="text-7xl font-bold mb-4 font-serif text-neu-text">
            Saurav Kandel
          </h1>
          <p className="text-2xl text-neu-accent min-h-[2rem]">
            {revealed && (
              <TypingAnimation
                text="Full-Stack Developer | AI/ML Enthusiast"
                speed={80}
                delay={3000}
              />
            )}
          </p>
        </div>
        <div className="flex space-x-6">
          <motion.a
            href="https://github.com/saurav-kan"
            target="_blank"
            rel="noopener noreferrer"
            className="neu-flat rounded-full p-4 neu-hover neu-active transition-all duration-200 text-neu-text hover:text-neu-accent"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <FaGithub size={32} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/saurav-kan"
            target="_blank"
            rel="noopener noreferrer"
            className="neu-flat rounded-full p-4 neu-hover neu-active transition-all duration-200 text-neu-text hover:text-neu-accent"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <FaLinkedin size={32} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
