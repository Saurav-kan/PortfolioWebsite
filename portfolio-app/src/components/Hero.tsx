"use client";

import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import useReveal from "../hooks/useReveal";

const Hero = () => {
  const { ref, revealed } = useReveal({ rootMargin: "0px", threshold: 0.1 });

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 py-20 pt-32
      relative overflow-hidden"
    >
      {/* Background Elements - Modern Scrapbook Theme */}
      <div className="absolute inset-0 pointer-events-none opacity-10 dark:opacity-5">
         {/* Geometric Shapes instead of blurry blobs */}
         <div className="absolute top-20 left-10 w-32 h-32 border-4 border-nepali-red rounded-full opacity-20" />
         <div className="absolute bottom-40 right-20 w-48 h-48 border-4 border-nepali-blue transform rotate-12 opacity-20" />
         <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-nepali-red rounded-sm transform -rotate-12 opacity-10" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Main Content */}
          <div ref={ref} className="space-y-8">
            {/* Logo */}
            <motion.div
              className="w-16 h-16 bg-white dark:bg-gray-800 flex items-center justify-center shadow-[4px_4px_0px_rgba(0,0,0,0.1)] border-2 border-gray-900 dark:border-gray-100 transform -rotate-3"
              initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
              animate={revealed ? { opacity: 1, scale: 1, rotate: -3 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="text-nepali-red text-3xl font-bold font-mono">S</span>
            </motion.div>

            {/* Main Card */}
            <motion.div
              className="scrapbook-card p-8 md:p-12 space-y-6 relative bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 20, rotate: 1 }}
              animate={revealed ? { opacity: 1, y: 0, rotate: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Tape effect */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-yellow-100/80 dark:bg-yellow-500/20 rotate-1 shadow-sm backdrop-blur-sm"></div>

              <div className="text-nepali-red font-mono text-sm md:text-base mb-2 tracking-wider font-bold">
                <span>{'<>'}</span> Software Engineer // UT Austin &apos;27
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                <span className="text-nepali-blue">Hi I&apos;m </span>
                <span className="text-nepali-red relative inline-block">
                  Saurav.
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-300 -z-10 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                Driven by a passion for building <span className="text-nepali-blue font-bold">innovative</span> and <span className="text-nepali-red font-bold">impactful</span> solutions.
              </p>
              
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Full-stack developer and AI/ML enthusiast studying CS at UT Austin, with a keen interest in the power of artificial intelligence.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <motion.a
                  href="https://github.com/saurav-kan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#24292e] text-white px-6 py-3 rounded-sm hover:bg-opacity-90 transition-all font-bold shadow-[4px_4px_0px_rgba(0,0,0,0.2)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,0.2)]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaGithub size={20} />
                  GitHub
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/saurav-kan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#0077b5] text-white px-6 py-3 rounded-sm hover:bg-opacity-90 transition-all font-bold shadow-[4px_4px_0px_rgba(0,0,0,0.2)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,0.2)]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaLinkedin size={20} />
                  LinkedIn
                </motion.a>
                <motion.a
                  href="#projects"
                  className="flex items-center gap-2 bg-transparent border-2 border-gray-800 dark:border-white text-gray-800 dark:text-white px-6 py-3 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-all font-bold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View My Work
                  <FaArrowDown size={16} />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right Section - Photo Frame with Nepali Pattern */}
          <motion.div
            className="flex justify-center relative"
            initial={{ opacity: 0, x: 40, rotate: 2 }}
            animate={revealed ? { opacity: 1, x: 60, rotate: 2 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative group">
              {/* Decorative Pattern Border (Dhaka Fabric inspired CSS pattern) */}
              <div className="absolute -inset-3 bg-gradient-to-br from-nepali-red via-nepali-blue to-nepali-red rounded-sm opacity-100 shadow-lg transform -rotate-2"></div>
              
              <div className="relative w-64 h-80 md:w-80 md:h-96 bg-white dark:bg-gray-800 rounded-sm overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700 transform rotate-1 transition-transform duration-300 group-hover:rotate-0">
                {/* Image */}
                <div className="w-full h-full bg-gray-100 dark:bg-gray-700 relative">
                  <Image 
                    src="/assets/Headshot.jpg" 
                    alt="Saurav Kandel" 
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Floating Badge - Sticker style */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-yellow-300 text-gray-900 p-4 shadow-[4px_4px_0px_rgba(0,0,0,0.15)] transform -rotate-3 border-2 border-gray-900"
                initial={{ y: 20, opacity: 0, rotate: -10 }}
                animate={revealed ? { y: 0, opacity: 1, rotate: -3 } : {}}
                transition={{ delay: 0.8 }}
              >
                <p className="text-xs font-bold uppercase tracking-widest">Based in</p>
                <p className="text-nepali-red font-bold text-xl">Austin, TX</p>
              </motion.div>

              {/* USA Flag - Top Left */}
              <motion.div
                className="absolute -top-8 -left-8 z-20"
                initial={{ opacity: 0, scale: 0, rotate: -15 }}
                animate={{ opacity: 1, scale: 1, rotate: -12 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                <div className="rounded-sm transform hover:scale-110 hover:rotate-0 transition-all cursor-help relative w-20 h-14 overflow-hidden" title="USA">
                  <Image src="/assets/AmericanFlag.png" alt="USA Flag" fill className="object-cover" />
                </div>
              </motion.div>

              {/* Nepal Flag - Bottom Right */}
              <motion.div
                className="absolute -bottom-12 -right-8 z-20"
                initial={{ opacity: 0, scale: 0, rotate: 15 }}
                animate={{ opacity: 1, scale: 1, rotate: 8 }}
                transition={{ delay: 0.6, type: "spring" }}
              >
                <div className="rounded-sm transform hover:scale-110 hover:rotate-0 transition-all cursor-help relative w-20 h-28" title="Nepal">
                  <Image src="/assets/NeplaiFlag.png" alt="Nepal Flag" fill className="object-cover" />
                </div>
              </motion.div>

            </div> {/* close relative group */}
          </motion.div> {/* close right section */}
        </div> {/* close grid */}
      </div> {/* close container */}
    </section>
  );
};

export default Hero;
