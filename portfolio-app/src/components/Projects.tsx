"use client";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Reveal from "./Reveal";

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
    accent_color: "border-cyan-400",
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
    accent_color: "border-violet-400",
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
    accent_color: "border-pink-400",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Reveal
              key={project.name}
              className={`bg-gray-900 rounded-3xl shadow-lg p-6 flex flex-col justify-between border-t-4 ${project.accent_color}`}
            >
              <div>
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-sm text-gray-400 mb-4">
                  <strong>Tech Stack:</strong> {project.tech_stack}
                </p>
                <ul className="list-disc list-inside mb-4 text-gray-300 space-y-2">
                  {project.details.map((detail, i) => (
                    <li
                      key={i}
                      dangerouslySetInnerHTML={{ __html: detail }}
                    ></li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end space-x-4 mt-4">
                <a
                  href={project.live_demo_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <FaExternalLinkAlt size={24} />
                </a>
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <FaGithub size={24} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
