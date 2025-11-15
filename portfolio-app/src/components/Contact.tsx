"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Reveal from "./Reveal";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 font-serif text-neu-text">
          Get In Touch
        </h2>
        <Reveal className="max-w-lg mx-auto">
          <div className="neu-convex rounded-3xl p-8 md:p-12">
            <p className="text-lg text-neu-text mb-8 leading-relaxed">
              I&apos;m currently seeking Summer 2026 internship opportunities. If
              you have an exciting role or project in mind, I&apos;d love to hear
              from you.
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:sauravk0633@gmail.com"
                className="neu-flat rounded-full p-4 neu-hover neu-active transition-all duration-200 text-neu-text hover:text-neu-accent"
              >
                <FaEnvelope size={32} />
              </a>
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
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;