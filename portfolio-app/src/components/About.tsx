"use client";
import React from "react";
import Reveal from "./Reveal";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center font-serif">About Me</h2>
        <Reveal>
          <div className="max-w-4xl mx-auto bg-transparent rounded-3xl shadow-lg p-8 border-2 border-secondary-earth/30">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-8 md:mb-0 md:mr-8 text-center">
                <img src="/assets/Headshot.jpg" alt="Saurav Kandel" className="w-48 h-48 rounded-full object-cover mx-auto" />
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <p className="text-lg text-primary-dark/80 mb-8">
                  As a full-stack developer and AI/ML enthusiast, I am driven by a
                  passion for building innovative and impactful solutions. My journey
                  in computer science at The University of Texas at Austin has
                  equipped me with a strong foundation in software engineering
                  principles and a keen interest in the power of artificial
                  intelligence.
                </p>
                <div>
                  <h3 className="text-2xl font-bold mb-4 font-serif">Education</h3>
                  <p className="text-lg font-semibold">
                    The University of Texas at Austin
                  </p>
                  <p className="text-md text-primary-dark/60">Expected Graduation: May 2027</p>
                  <p className="text-md text-primary-dark/60">GPA: 3.45</p>
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
