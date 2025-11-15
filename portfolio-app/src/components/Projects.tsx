"use client";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

type ProjectCategory = "All" | "AI/ML" | "Web Dev" | "Mobile";

interface Project {
  name: string;
  tech_stack: string;
  summary: string;
  details: string[];
  live_demo_link: string;
  github_link: string;
  image: string;
  accent_color: string;
  category: ProjectCategory;
}

const projects: Project[] = [
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
    image: "https://placehold.co/600x400",
    accent_color: "border-accent-vibrant",
    category: "AI/ML",
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
    image: "https://placehold.co/600x400",
    accent_color: "border-secondary-earth",
    category: "Mobile",
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
    image: "https://placehold.co/600x400",
    accent_color: "border-primary-dark",
    category: "Web Dev",
  },
];

const categories: ProjectCategory[] = ["All", "AI/ML", "Web Dev", "Mobile"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [activeProject, setActiveProject] = useState(projects[0]);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // Update active project when filter changes
  const handleCategoryChange = (category: ProjectCategory) => {
    setActiveCategory(category);
    const filtered =
      category === "All"
        ? projects
        : projects.filter((project) => project.category === category);
    if (filtered.length > 0) {
      setActiveProject(filtered[0]);
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center font-serif text-neu-text">
          Projects
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "neu-pressed text-neu-accent"
                  : "neu-flat neu-hover text-neu-text"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-neu-text/60 text-lg">
              No projects found in this category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Left Column: Project List */}
            <div className="md:col-span-1">
              <ul className="space-y-4">
                {filteredProjects.map((project) => (
                  <li
                    key={project.name}
                    onMouseEnter={() => setActiveProject(project)}
                    onClick={() => setActiveProject(project)}
                    className={`cursor-pointer p-4 rounded-2xl transition-all duration-300 ${
                      activeProject.name === project.name
                        ? "neu-pressed"
                        : "neu-flat neu-hover"
                    }`}
                  >
                    <h3
                      className={`text-2xl font-serif font-bold ${
                        activeProject.name === project.name
                          ? "text-neu-accent"
                          : "text-neu-text"
                      }`}
                    >
                      {project.name}
                    </h3>
                    <p className="text-sm text-neu-text/70 mt-2">
                      {project.tech_stack}
                    </p>
                    <span className="inline-block mt-2 text-xs text-neu-text/50 px-2 py-1 rounded-full neu-concave">
                      {project.category}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Project Preview */}
            <div className="md:col-span-2">
              <div className="sticky top-28">
                <div className="neu-convex rounded-3xl p-8">
                  <h3 className="text-3xl font-bold font-serif mb-6 text-neu-text">
                    {activeProject.name}
                  </h3>
                  <div className="w-full h-96 mb-6 rounded-2xl neu-flat p-1">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                      <Image
                        src={activeProject.image}
                        alt={activeProject.name}
                        fill
                        className="object-cover rounded-2xl"
                        sizes="(max-width: 768px) 100vw, 66vw"
                      />
                    </div>
                  </div>
                  <p className="text-lg text-neu-text mb-6 leading-relaxed">
                    {activeProject.summary}
                  </p>
                  <div className="neu-concave rounded-2xl p-6 mb-6">
                    <ul className="list-disc list-inside text-neu-text space-y-2">
                      {activeProject.details.map(
                        (detail: string, i: number) => (
                          <li
                            key={i}
                            dangerouslySetInnerHTML={{ __html: detail }}
                          ></li>
                        )
                      )}
                    </ul>
                  </div>
                  <div className="flex justify-end space-x-4">
                    <a
                      href={activeProject.live_demo_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neu-flat rounded-full p-3 neu-hover neu-active transition-all duration-200 text-neu-text hover:text-neu-accent"
                    >
                      <FaExternalLinkAlt size={24} />
                    </a>
                    <a
                      href={activeProject.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neu-flat rounded-full p-3 neu-hover neu-active transition-all duration-200 text-neu-text hover:text-neu-accent"
                    >
                      <FaGithub size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
