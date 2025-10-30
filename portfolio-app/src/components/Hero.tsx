"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import useReveal from "../hooks/useReveal";

const Hero = () => {
  const { ref, revealed } = useReveal({ rootMargin: "0px", threshold: 0.1 });

  return (
    <section
      id="hero"
      className="text-white h-screen flex items-center justify-center text-center"
    >
      <div
        ref={ref as any}
        className={`flex flex-col items-center transition-all duration-700 ease-out ${
          revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h1 className="text-7xl font-bold mb-4">Saurav Kandel</h1>
        <p className="text-2xl mb-8">Full-Stack Developer | AI/ML Enthusiast</p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/saurav-kan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://linkedin.com/in/saurav-kan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <FaLinkedin size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
