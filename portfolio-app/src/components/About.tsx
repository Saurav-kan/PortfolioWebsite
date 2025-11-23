"use client";
import React from "react";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

const aboutCards = [
  {
    title: "Roots",
    image: "/images/about/roots-blob.png",
    description:
      "Born from the resilience of Nepal. My heritage teaches me patience and community—values I bring to every team I join.",
    highlight: "Nepal",
    tilt: "scrapbook-tilt",
  },
  {
    title: "Discipline",
    image: "/images/about/discipline-blob.png",
    description:
      "I believe in showing up consistently. Whether it&apos;s training, coding, or learning something new—progress comes from putting in the work.",
    highlight: "",
    tilt: "scrapbook-tilt-alt",
  },
  {
    title: "Inspiration",
    image: "/images/about/inspiration-blob.png",
    description:
      "I&apos;m inspired by everything from anime storytelling to classic design. Good ideas come from everywhere.",
    highlight: "",
    tilt: "scrapbook-tilt-reverse",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-scrapbook-bg dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutCards.map((card, index) => (
              <Reveal key={card.title}>
                <motion.div
                  className={`scrapbook-card overflow-hidden ${card.tilt} bg-white dark:bg-gray-800 border-2 border-transparent dark:border-gray-700`}
                  initial={{ opacity: 0, y: 30, rotate: index % 2 === 0 ? -2 : 2 }}
                  whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    rotate: 0,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Image Section */}
                  <div className="relative w-full h-48 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900">
                    {/* Blob placeholder - replace with actual image */}
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-scrapbook-gray dark:text-gray-300 text-sm">
                        {card.title} Image
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-scrapbook-dark dark:text-white mb-4">
                      {card.title}
                    </h3>
                    <p className="text-scrapbook-gray dark:text-gray-300 leading-relaxed">
                      {card.description.split(card.highlight).map((part, i) => (
                        <React.Fragment key={i}>
                          {part}
                          {i < card.description.split(card.highlight).length - 1 && (
                            <span className="font-semibold text-scrapbook-dark dark:text-white">
                              {card.highlight}
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
