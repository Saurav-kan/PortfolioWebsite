"use client";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaBriefcase } from "react-icons/fa";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <section id="contact" className="py-20 bg-scrapbook-blue dark:bg-blue-900">
        <div className="container mx-auto px-4 text-center">
          <Reveal className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Let&apos;s build something cool together
            </h2>
            <p className="text-gray-300 dark:text-gray-200 text-lg mb-12">
              Austin, TX • Open to Opportunities
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <motion.a
                href="mailto:sauravk0633@gmail.com"
                className="flex items-center gap-3 text-white hover:text-scrapbook-yellow transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope size={24} />
                <span>sauravk0633@gmail.com</span>
              </motion.a>
              <motion.a
                href="tel:9458994236"
                className="flex items-center gap-3 text-white hover:text-scrapbook-yellow transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhone size={24} />
                <span>945-899-4236</span>
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/saurav-kan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white hover:text-scrapbook-yellow transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin size={24} />
                <span>LinkedIn</span>
              </motion.a>
            </div>
          </Reveal>
        </div>
      </section>
      <footer className="bg-scrapbook-blue dark:bg-blue-950 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-300 dark:text-gray-400">
            © 2025 Saurav Kandel. Built with care.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
