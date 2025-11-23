"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

interface Project {
  name: string;
  tech_stack: string;
  summary: string;
  details: string[];
  live_demo_link: string;
  github_link: string;
  image: string;
  accent_color: string;
  categories: string[]; // Projects can have multiple categories
  starred?: boolean;
  // New fields
  preview_text?: string;
  images?: string[];
  frontend_intent?: string;
  backend_intent?: string;
  technical_details?: string[];
  reflections?: string;
}

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content - Scrapbook Folder Style */}
          <motion.div
            className="relative w-full max-w-5xl max-h-[90vh] bg-[#fdfbf7] dark:bg-gray-800 rounded-lg shadow-2xl overflow-y-auto overflow-x-hidden border-4 border-white dark:border-gray-700"
            initial={{ scale: 0.9, opacity: 0, y: 20, rotateX: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-md"
            >
              <FaTimes size={20} />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Side: Visuals (Cascading Images) */}
              <div className="bg-gray-100 dark:bg-gray-900 p-8 lg:p-12 flex flex-col items-center justify-center relative overflow-hidden min-h-[400px]">
                {/* Decorative Background Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
                
                <div className="relative w-full max-w-md space-y-[-100px] perspective-1000">
                  {project.images && project.images.length > 0 ? (
                    project.images.map((img, index) => (
                      <motion.div
                        key={index}
                        className="relative w-full h-64 bg-white rounded-lg shadow-xl border-4 border-white transform"
                        style={{ 
                          zIndex: project.images!.length - index,
                        }}
                        initial={{ y: 50, opacity: 0, rotate: index % 2 === 0 ? -5 : 5 }}
                        animate={{ y: 0, opacity: 1, rotate: index % 2 === 0 ? -3 : 3 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        whileHover={{ y: -20, rotate: 0, zIndex: 50 }}
                      >
                         <div className="w-full h-full bg-gray-200 flex items-center justify-center overflow-hidden">
                            {/* Placeholder for actual image if not available */}
                            <Image src={img} alt={`${project.name} screenshot ${index + 1}`} fill className="object-cover" />
                         </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">No images available</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Side: Details (Folder Content) */}
              <div className="p-8 lg:p-12 space-y-8 bg-[#fdfbf7] dark:bg-gray-800">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 font-handwritten">{project.name}</h2>
                  <p className="text-nepali-blue font-bold text-lg">{project.tech_stack}</p>
                </div>

                <div className="space-y-6">
                  {/* Intentions */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold border-b-2 border-gray-200 dark:border-gray-700 pb-2 flex items-center gap-2">
                      <span>🎯</span> Intentions
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-600">
                        <h4 className="font-bold text-sm text-gray-500 dark:text-gray-400 uppercase mb-2">Frontend</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">{project.frontend_intent || "Focus on user experience and responsiveness."}</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-600">
                        <h4 className="font-bold text-sm text-gray-500 dark:text-gray-400 uppercase mb-2">Backend</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">{project.backend_intent || "Robust API design and data management."}</p>
                      </div>
                    </div>
                  </div>

                  {/* Technical Details */}
                  <div>
                    <h3 className="text-xl font-bold border-b-2 border-gray-200 dark:border-gray-700 pb-2 flex items-center gap-2 mb-4">
                      <span>⚙️</span> Under the Hood
                    </h3>
                    <ul className="space-y-2">
                      {project.technical_details?.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm">
                          <span className="text-nepali-red mt-1">▹</span>
                          {detail}
                        </li>
                      )) || (
                        project.details.map((detail, idx) => (
                           <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm">
                            <span className="text-nepali-red mt-1">▹</span>
                            {detail}
                          </li>
                        ))
                      )}
                    </ul>
                  </div>

                  {/* Reflections */}
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-400 relative">
                     <span className="absolute -top-3 -left-3 text-2xl transform -rotate-12">📌</span>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">What I Learned</h3>
                    <p className="text-gray-700 dark:text-gray-300 italic text-sm">
                      &quot;{project.reflections || "This project was a journey of discovery and technical growth."}&quot;
                    </p>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href={project.live_demo_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-nepali-blue text-white py-3 rounded-lg font-bold text-center hover:bg-opacity-90 transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 text-white py-3 rounded-lg font-bold text-center hover:bg-gray-900 transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <FaGithub /> View Code
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
