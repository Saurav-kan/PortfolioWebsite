"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Reveal from "./Reveal";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 font-serif">Get In Touch</h2>
        <Reveal className="max-w-lg mx-auto">
          <div className="bg-transparent p-8 rounded-3xl shadow-lg border border-secondary-earth/20">
            <p className="text-lg text-primary-dark/80 mb-8">
              I&aposm currently seeking Summer 2026 internship opportunities. If you have an exciting role or project in mind, I&apos;d love to hear from you.
            </p>
            <div className="flex justify-center space-x-8">
              <a
                href="mailto:sauravk0633@gmail.com"
                className="text-primary-dark hover:text-accent-vibrant transition-colors"
              >
                <FaEnvelope size={32} />
              </a>
              <a
                href="https://github.com/saurav-kan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-dark hover:text-accent-vibrant transition-colors"
              >
                <FaGithub size={32} />
              </a>
              <a
                href="https://linkedin.com/in/saurav-kan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-dark hover:text-accent-vibrant transition-colors"
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