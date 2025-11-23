"use client";
import Reveal from "./Reveal";

const skills = {
  languages: [
    { name: "Java", separator: "///" },
    { name: "Python", separator: "///" },
    { name: "C/C#", separator: "///" },
    { name: "JavaScript", separator: "///" },
    { name: "SQL", separator: "///" },
    { name: "HTML/CSS", separator: "" },
  ],
  frameworks: [
    { name: "PyTorch", domain: "(AI/ML)" },
    { name: "Django", domain: "(Backend)" },
    { name: "React", domain: "(Frontend)" },
    { name: "Next.js", domain: "(Fullstack)" },
    { name: "Node.js", domain: "(Runtime)" },
    { name: "Pandas", domain: "(Data)" },
  ],
  devTools: [
    { name: "Git", function: "(Ver Ctrl)" },
    { name: "Docker", function: "(Container)" },
    { name: "AWS", function: "(Cloud)" },
    { name: "REST APIs", function: "(Integration)" },
    { name: "CI/CD", function: "(Pipeline)" },
    { name: "Adobe Suite", function: "(Creative)" },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-scrapbook-bg dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-scrapbook-dark dark:text-white mb-2">
            Tech Stack
          </h2>
          <p className="text-scrapbook-gray dark:text-gray-400 text-lg italic">
            What I Work With
          </p>
          <p className="text-scrapbook-gray dark:text-gray-500 text-sm mt-1">
            Languages, frameworks, and tools I use daily
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Languages Column */}
          <Reveal>
            <div className="scrapbook-card p-6 bg-white dark:bg-gray-800 border-2 border-transparent dark:border-gray-700">
              <div className="h-1 bg-scrapbook-blue mb-4"></div>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl">📁</span>
                <h3 className="text-2xl font-bold text-scrapbook-dark dark:text-white">
                  Languages
                </h3>
              </div>
              <ul className="space-y-3">
                {skills.languages.map((item, index) => (
                  <li
                    key={index}
                    className="text-scrapbook-dark dark:text-gray-300 text-base font-medium"
                  >
                    {item.name} {item.separator}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Frameworks Column */}
          <Reveal>
            <div className="scrapbook-card p-6 bg-white dark:bg-gray-800 border-2 border-transparent dark:border-gray-700">
              <div className="h-1 bg-orange-500 mb-4"></div>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl">💎</span>
                <h3 className="text-2xl font-bold text-scrapbook-dark dark:text-white">
                  Frameworks
                </h3>
              </div>
              <ul className="space-y-3">
                {skills.frameworks.map((item, index) => (
                  <li
                    key={index}
                    className="text-scrapbook-dark dark:text-gray-300 text-base font-medium"
                  >
                    {item.name} <span className="text-scrapbook-gray dark:text-gray-500 text-sm">{item.domain}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Dev Tools Column */}
          <Reveal>
            <div className="scrapbook-card p-6 bg-white dark:bg-gray-800 border-2 border-transparent dark:border-gray-700">
              <div className="h-1 bg-green-500 mb-4"></div>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl">🔧</span>
                <h3 className="text-2xl font-bold text-scrapbook-dark dark:text-white">
                  Dev Tools
                </h3>
              </div>
              <ul className="space-y-3">
                {skills.devTools.map((item, index) => (
                  <li
                    key={index}
                    className="text-scrapbook-dark dark:text-gray-300 text-base font-medium"
                  >
                    {item.name} <span className="text-scrapbook-gray dark:text-gray-500 text-sm">{item.function}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Skills;
