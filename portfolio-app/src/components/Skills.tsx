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
    <section id="skills" className="py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-center">Languages</h3>
              <div className="flex flex-wrap justify-center">
                {skills.languages.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-800 text-white text-lg font-medium m-2 px-4 py-2 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-center">
                Frameworks & Libraries
              </h3>
              <div className="flex flex-wrap justify-center">
                {skills.frameworks_libraries.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-800 text-white text-lg font-medium m-2 px-4 py-2 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-center">
                Developer Tools
              </h3>
              <div className="flex flex-wrap justify-center">
                {skills.developer_tools.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-800 text-white text-lg font-medium m-2 px-4 py-2 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-center">
                Certifications
              </h3>
              <div className="flex flex-wrap justify-center">
                {skills.certifications.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-800 text-white text-lg font-medium m-2 px-4 py-2 rounded-full"
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
