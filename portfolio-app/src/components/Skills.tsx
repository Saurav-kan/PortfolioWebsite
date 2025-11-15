"use client";
import Reveal from "./Reveal";

const skills = {
  languages: ["Java", "Python", "C/C#", "JavaScript", "SQL", "HTML"],
  frameworks_libraries: [
    "PyTorch",
    "Django",
    "React",
    "Node",
    "Next.js",
    "Pandas",
  ],
  developer_tools: ["Git", "AWS", "REST APIs", "Docker", "CI/CD"],
  certifications: [
    "Adobe Certified in Photoshop & Illustrator",
    "Intermediate Certification in Python",
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center font-serif text-neu-text">
          Skills
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal>
            <div className="neu-convex rounded-3xl p-8">
              <h3 className="text-3xl font-serif font-bold mb-6 text-center text-neu-text">
                Languages
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.languages.map((skill) => (
                  <span
                    key={skill}
                    className="neu-flat text-neu-text text-lg font-medium px-4 py-2 rounded-full neu-hover transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="neu-convex rounded-3xl p-8">
              <h3 className="text-3xl font-serif font-bold mb-6 text-center text-neu-text">
                Frameworks & Libraries
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.frameworks_libraries.map((skill) => (
                  <span
                    key={skill}
                    className="neu-flat text-neu-text text-lg font-medium px-4 py-2 rounded-full neu-hover transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="neu-convex rounded-3xl p-8">
              <h3 className="text-3xl font-serif font-bold mb-6 text-center text-neu-text">
                Developer Tools
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.developer_tools.map((skill) => (
                  <span
                    key={skill}
                    className="neu-flat text-neu-text text-lg font-medium px-4 py-2 rounded-full neu-hover transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="neu-convex rounded-3xl p-8">
              <h3 className="text-3xl font-serif font-bold mb-6 text-center text-neu-text">
                Certifications
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.certifications.map((skill) => (
                  <span
                    key={skill}
                    className="neu-flat text-neu-text text-lg font-medium px-4 py-2 rounded-full neu-hover transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Skills;