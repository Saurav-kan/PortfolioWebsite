"use client";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ProjectModal from "./ProjectModal";

type ProjectCategory = "Starred (Resume)" | "All Projects" | "AI & ML" | "Full Stack" | "Design" | "Mobile";

interface Project {
  name: string;
  tech_stack: string;
  summary: string;
  details: string[];
  live_demo_link: string;
  github_link: string;
  image: string;
  accent_color: string;
  categories: ProjectCategory[]; // Projects can have multiple categories
  starred?: boolean;
  // New fields
  preview_text?: string;
  images?: string[];
  video_url?: string; // Optional video for hover preview
  frontend_intent?: string;
  backend_intent?: string;
  technical_details?: string[];
  reflections?: string;
}

const projects: Project[] = [
  {
    name: "Iswarah",
    tech_stack: "React, Django, PostgreSQL",
    summary: "Humanitarian Relief Platform",
    preview_text: "Connecting volunteers with real-time needs.",
    details: [
      "Built a platform to connect volunteers with humanitarian relief efforts",
      "Integrated real-time communication and resource tracking",
    ],
    live_demo_link: "[[INSERT_LIVE_DEMO_URL]]",
    github_link: "[[INSERT_GITHUB_URL]]",
    image: "/images/projects/iswarah-blob.png",
    images: ["/images/projects/iswarah-1.png", "/images/projects/iswarah-2.png"], // Placeholders
    accent_color: "border-red-500",
    categories: ["Full Stack", "Design"],
    starred: true,
    frontend_intent: "Designed a clean, accessible interface for high-stress environments where clarity is paramount.",
    backend_intent: "Engineered a robust Django backend to handle real-time data synchronization and complex user roles.",
    technical_details: [
      "Implemented WebSocket connections for live updates.",
      "Optimized database queries for low-bandwidth areas.",
      "Secure authentication system for verified volunteers."
    ],
    reflections: "Building for humanitarian aid taught me the importance of reliability and simplicity in software design."
  },
  {
    name: "Asteria",
    tech_stack: "React, TypeScript, FastAPI, Pygame",
    summary: "Generative AI Game Dev",
    preview_text: "Text-to-Game generation engine.",
    details: [
      "Architected a full-stack application that generates fully playable 2D games from natural language prompts",
      "Developed a specialized &apos;Sequential Chain of Command&apos; prompting model",
    ],
    live_demo_link: "[[INSERT_LIVE_DEMO_URL]]",
    github_link: "[[INSERT_GITHUB_URL]]",
    image: "/images/projects/asteria-blob.png",
    images: ["/images/projects/asteria-1.png", "/images/projects/asteria-2.png"],
    accent_color: "border-purple-500",
    categories: ["AI & ML"],
    starred: true,
    frontend_intent: "Created an immersive, game-like UI that feels like a magic portal for creation.",
    backend_intent: "Orchestrated complex AI pipelines to generate code, assets, and logic in parallel.",
    technical_details: [
      "Custom LLM prompting strategy for consistent code generation.",
      "Sandboxed execution environment for generated Python games.",
      "Real-time preview rendering."
    ],
    reflections: "Pushing the boundaries of generative AI showed me that code can be creative partner, not just a tool."
  },
  {
    name: "DeepFake Detector",
    tech_stack: "Python, PyTorch, FastAPI, React",
    summary: "AI-Powered Deepfake Detection System",
    preview_text: "94% Accuracy in detecting synthetic media.",
    details: [
      "Trained and fine-tuned a lightweight EfficientNet-B0 model achieving 94% validation accuracy",
      "Engineered a scalable REST API with <500ms inference latency",
    ],
    live_demo_link: "[[INSERT_LIVE_DEMO_URL]]",
    github_link: "[[INSERT_GITHUB_URL]]",
    image: "/images/projects/deepfake-blob.png",
    images: ["/images/projects/deepfake-1.png", "/images/projects/deepfake-2.png"],
    accent_color: "border-blue-500",
    categories: ["AI & ML"],
    starred: true,
    frontend_intent: "Simple drag-and-drop interface for instant analysis results.",
    backend_intent: "High-performance inference engine optimized for speed and accuracy.",
    technical_details: [
      "EfficientNet-B0 architecture for mobile-ready performance.",
      "Custom dataset curation for diverse face generation methods.",
      "API rate limiting and caching for scalability."
    ],
    reflections: "Working on AI safety highlighted the ethical responsibilities we have as engineers in the age of synthesis."
  },
  {
    name: "NeuroFocus",
    tech_stack: "Next.js, TypeScript, Tailwind CSS, Vercel AI SDK, Tesseract.js",
    summary: "Neurodivergent Study Aid",
    preview_text: "Accessibility-first content transformation engine.",
    details: [
      "Built a 'Smart Router' mesh that dynamically balances load across multiple free-tier AI providers (Groq, Gemini, SiliconFlow) to ensure zero-cost uptime",
      "Implemented a Bionic Reading engine that algorithmically modifies text weight to guide eye movement and prevent line-skipping",
    ],
    live_demo_link: "[[INSERT_LIVE_DEMO_URL]]",
    github_link: "https://github.com/saurav-kan/neuroassistant",
    image: "/images/projects/neurofocus-blob.png",
    images: ["/images/projects/neurofocus-1.png", "/images/projects/neurofocus-2.png"],
    accent_color: "border-indigo-500",
    categories: ["AI & ML", "Full Stack", "Design"],
    starred: true,
    frontend_intent: "Designed a 'Panic Mode' interface that visually isolates individual sentences to immediately reduce cognitive overwhelm.",
    backend_intent: "Architected a fail-safe AI pipeline that automatically rotates API keys and providers based on rate limits and context window requirements.",
    technical_details: [
      "Client-side OCR processing with Tesseract.js workers.",
      "Local-first state persistence using Zustand.",
      "Custom token-saving strategies via prompt compression."
    ],
    reflections: "Building for neurodiversity taught me that true accessibility isn't just about compliance, but about creating tools that adapt to the user's cognitive state."
  },
  {
    name: "Clonable",
    tech_stack: "Next.js, TypeScript, Tailwind CSS, Google Gemini API",
    summary: "Generative AI Website Builder",
    preview_text: "Text-to-Website generation engine.",
    details: [
      "Developed a specialized two-stage 'Architect & Builder' prompting system that plans the site structure before generating code",
      "Built a secure, sandboxed live preview environment that renders AI-generated HTML/CSS/JS in real-time",
    ],
    live_demo_link: "[[INSERT_LIVE_DEMO_URL]]",
    github_link: "https://github.com/saurav-kan/cloneable",
    image: "/images/projects/clonable-blob.png",
    images: ["/images/projects/clonable-1.png", "/images/projects/clonable-2.png"],
    accent_color: "border-blue-600",
    categories: ["AI & ML", "Full Stack", "Design"],
    starred: true,
    frontend_intent: "Designed a split-screen interface that allows users to review and edit the AI's 'Architectural Plan' before committing to the final code generation.",
    backend_intent: "Implemented a client-side prompt chain that enforces strict JSON schemas, preventing the LLM from returning unparsable or incomplete code blocks.",
    technical_details: [
      "Chain-of-thought prompting strategy (Plan → Code).",
      "Iframe sandboxing with `allow-scripts` for secure previewing.",
      "Dynamic Blob URL generation for instant rendering."
    ],
    reflections: "This project proved that separating 'planning' from 'coding' in LLM workflows significantly reduces hallucinations and improves structural integrity."
  },
];

const categories: ProjectCategory[] = [
  "Starred (Resume)",
  "All Projects",
  "AI & ML",
  "Full Stack",
  "Design",
  "Mobile",
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(
    "Starred (Resume)"
  );
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4; // Show 4 projects per page

  // Filter by category first
  const categoryFiltered =
    activeCategory === "All Projects"
      ? projects
      : activeCategory === "Starred (Resume)"
      ? projects.filter((p) => p.starred)
      : projects.filter((project) => project.categories.includes(activeCategory));

  // Then filter by search query
  const filteredProjects = categoryFiltered.filter((project) => {
    if (!searchQuery.trim()) return true;
    
    const query = searchQuery.toLowerCase();
    const searchableFields = [
      project.name,
      project.tech_stack,
      project.summary,
      ...project.categories,
      ...(project.details || []),
      ...(project.technical_details || []),
      project.preview_text || "",
      project.frontend_intent || "",
      project.backend_intent || "",
      project.reflections || ""
    ].join(" ").toLowerCase();

    return searchableFields.includes(query);
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const paginatedProjects = filteredProjects.slice(startIndex, endIndex);

  const handleCategoryChange = (category: ProjectCategory) => {
    setActiveCategory(category);
    setCurrentPage(1); // Reset to first page when changing category
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Reset to page 1 when search query changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-scrapbook-dark dark:text-white mb-2">
            Projects
          </h2>
          <p className="text-scrapbook-gray dark:text-gray-400 text-lg">Things I&apos;ve built</p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects by name, tech stack, purpose..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-12 pr-6 py-4 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-nepali-blue dark:focus:border-nepali-red transition-colors shadow-md"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setCurrentPage(1);
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          {searchQuery && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
              Found {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category
                  ? "bg-scrapbook-blue text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 border-2 border-scrapbook-dark dark:border-gray-600 text-scrapbook-dark dark:text-gray-200 hover:bg-scrapbook-bg dark:hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {category === "Starred (Resume)" && (
                <FaStar className={activeCategory === category ? "text-yellow-300" : "text-scrapbook-gray dark:text-gray-400"} />
              )}
              {category === "AI & ML" && <span className="text-lg">🤖</span>}
              {category === "Full Stack" && <span className="text-lg">🌐</span>}
              {category}
            </motion.button>
          ))}
        </div>

        {/* Project Cards Grid */}
        {paginatedProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-scrapbook-gray dark:text-gray-400 text-lg">
              No projects found in this category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {paginatedProjects.map((project, index) => (
              <motion.div
                key={project.name}
                className="scrapbook-card overflow-hidden bg-white dark:bg-gray-800 border-2 border-transparent dark:border-gray-700 cursor-pointer group relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Image/Video Section */}
                <div className="relative w-full h-64 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 overflow-hidden">
                  {project.video_url ? (
                    <video
                      className="w-full h-full object-cover"
                      poster={project.image}
                      muted
                      loop
                      playsInline
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                    >
                      <source src={project.video_url} type="video/mp4" />
                      {/* Fallback to image if video fails to load */}
                      <Image 
                        src={project.image} 
                        alt={project.name} 
                        fill 
                        className="object-cover" 
                      />
                    </video>
                  ) : (
                    <Image 
                      src={project.image} 
                      alt={project.name} 
                      fill 
                      className="object-cover" 
                    />
                  )}
                  
                  {/* Hover Overlay Preview */}
                  <motion.div 
                    className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <p className="text-white font-bold text-lg mb-2">View Details</p>
                    <p className="text-gray-300 text-sm">{project.preview_text}</p>
                  </motion.div>

                  {/* Star icon in corner */}
                  <div className="absolute top-4 right-4 z-10">
                    <FaStar
                      className={`${
                        project.starred
                          ? "text-yellow-400 fill-current"
                          : "text-white opacity-50"
                      }`}
                      size={24}
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-scrapbook-dark dark:text-white mb-2 group-hover:text-nepali-blue transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-scrapbook-gray dark:text-gray-300 mb-4">{project.summary}</p>
                  <div className="flex justify-between items-center">
                     <span className="text-xs font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                        {project.tech_stack.split(',')[0]}...
                     </span>
                     <span className="text-nepali-red text-sm font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                        Read More &rarr;
                     </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Detailed Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          isOpen={!!selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;
