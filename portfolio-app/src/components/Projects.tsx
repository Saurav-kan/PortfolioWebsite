"use client";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const projects = [
  {
    name: "DeepFake Detector",
    tech_stack:
      "Python, PyTorch, FastAPI, React, Docker, AWS S3, Hugging Face Spaces",
    summary:
      "Developed and deployed an end-to-end deepfake detection web application.",
    details: [
      "Trained and fine-tuned a lightweight EfficientNet-B0 model for binary classification, achieving <strong>94% validation accuracy</strong>.",
      "Engineered a scalable REST API using FastAPI and Docker, achieving an average inference latency of <strong>&lt;500 ms</strong> per image.",
      "Built a responsive user interface with React on Vercel, leading to a <strong>25% faster task completion time</strong> in user testing.",
    ],
    live_demo_link: "[[INSERT_LIVE_DEMO_URL]]",
    github_link: "[[INSERT_GITHUB_URL]]",
    image: 'https://placehold.co/600x400',
    accent_color: "border-accent-vibrant",
  },
  {
    name: "Remi - AI-Powered ADHD Management App",
    tech_stack: "React Native, SupaBase, FastAPi",
    summary:
      "Collaborated in a team to develop a full-stack, AI-powered mobile application to help users manage ADHD symptoms.",
    details: [
      "Designed an adaptive AI core with the <strong>Google Gemini API</strong> that learns user behaviors to provide personalized scheduling, focus timers, and task-management interventions.",
      "Integrated a backend system to track user progress and dynamically adjust AI-generated suggestions.",
    ],
    live_demo_link: "[[INSERT_LIVE_DEMO_URL]]",
    github_link: "[[INSERT_GITHUB_URL]]",
    image: 'https://placehold.co/600x400',
    accent_color: "border-secondary-earth",
  },
  {
    name: "Asteria - AI 2D Game Generator",
    tech_stack: "React, TypeScript, FastAPI, Pygame, Docker",
    summary:
      "Architected a full-stack application that generates fully playable 2D games from natural language prompts (NLP) in a 24-hour hackathon.",
    details: [
      "Developed a specialized <strong>'Sequential Chain of Command'</strong> prompting model that achieved a <strong>92% success rate</strong> in parsing complex user prompts into valid JSON.",
      "Engineered critical FastAPI endpoints to connect the React/TypeScript frontend to the Pygame game engine, enabling a seamless 'prompt-to-game' user pipeline.",
    ],
    live_demo_link: "[[INSERT_LIVE_DEMO_URL]]",
    github_link: "[[INSERT_GITHUB_URL]]",
    image: 'https://placehold.co/600x400',
    accent_color: "border-primary-dark",
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center font-serif">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column: Project List */}
          <div className="md:col-span-1">
            <ul className="space-y-4">
              {projects.map((project) => (
                <li
                  key={project.name}
                  onMouseEnter={() => setActiveProject(project)}
                  className={`cursor-pointer p-4 rounded-lg transition-all duration-300 ${
                    activeProject.name === project.name
                      ? "bg-secondary-earth/10"
                      : "hover:bg-secondary-earth/5"
                  }`}
                >
                  <h3 className={`text-2xl font-serif font-bold ${
                      activeProject.name === project.name
                        ? "text-secondary-earth"
                        : "text-primary-dark"
                    }`}>{project.name}</h3>
                  <p className="text-sm text-primary-dark/60">
                    {project.tech_stack}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Project Preview */}
          <div className="md:col-span-2">
            <div className="sticky top-28">
              <h3 className="text-3xl font-bold font-serif mb-4 text-primary-dark">{activeProject.name}</h3>
              <div className="relative w-full h-96 mb-6 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={activeProject.image}
                  alt={activeProject.name}
                  layout="fill"
                  objectFit="cover"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
              </div>
              <p className="text-lg text-primary-dark/80 mb-4">{activeProject.summary}</p>
              <ul className="list-disc list-inside mb-4 text-primary-dark/80 space-y-2">
                {activeProject.details.map((detail, i) => (
                  <li
                    key={i}
                    dangerouslySetInnerHTML={{ __html: detail }}
                  ></li>
                ))}
              </ul>
              <div className="flex justify-end space-x-4 mt-4">
                <a
                  href={activeProject.live_demo_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-dark hover:text-accent-vibrant transition-colors"
                >
                  <FaExternalLinkAlt size={24} />
                </a>
                <a
                  href={activeProject.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-dark hover:text-accent-vibrant transition-colors"
                >
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;