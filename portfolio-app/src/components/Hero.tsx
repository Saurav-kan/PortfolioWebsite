"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import useReveal from "../hooks/useReveal";

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
          <p className="text-2xl text-neu-accent">
            Full-Stack Developer | AI/ML Enthusiast
          </p>
        </div>
        <div className="flex space-x-6">
          <a
            href="https://github.com/saurav-kan"
            target="_blank"
            rel="noopener noreferrer"
            className="neu-flat rounded-full p-4 neu-hover neu-active transition-all duration-200 text-neu-text hover:text-neu-accent"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://linkedin.com/in/saurav-kan"
            target="_blank"
            rel="noopener noreferrer"
            className="neu-flat rounded-full p-4 neu-hover neu-active transition-all duration-200 text-neu-text hover:text-neu-accent"
          >
            <FaLinkedin size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
