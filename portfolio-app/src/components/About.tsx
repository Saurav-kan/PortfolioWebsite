"use client";
import React from "react";
import Reveal from "./Reveal";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center font-serif text-neu-text">
          About Me
        </h2>
        <Reveal>
          <div className="max-w-4xl mx-auto neu-convex rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-8 md:mb-0 md:mr-8 text-center">
                <div className="neu-flat rounded-full p-2 inline-block">
                  <img
                    src="/assets/Headshot.jpg"
                    alt="Saurav Kandel"
                    className="w-48 h-48 rounded-full object-cover mx-auto"
                  />
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <p className="text-lg text-neu-text mb-8 leading-relaxed">
                  As a full-stack developer and AI/ML enthusiast, I am driven by a
                  passion for building innovative and impactful solutions. My journey
                  in computer science at The University of Texas at Austin has
                  equipped me with a strong foundation in software engineering
                  principles and a keen interest in the power of artificial
                  intelligence.
                </p>
                <div className="neu-concave rounded-2xl p-6">
                  <h3 className="text-2xl font-bold mb-4 font-serif text-neu-text">
                    Education
                  </h3>
                  <p className="text-lg font-semibold text-neu-accent">
                    The University of Texas at Austin
                  </p>
                  <p className="text-md text-neu-text/70 mt-2">
                    Expected Graduation: May 2027
                  </p>
                  <p className="text-md text-neu-text/70">GPA: 3.45</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
