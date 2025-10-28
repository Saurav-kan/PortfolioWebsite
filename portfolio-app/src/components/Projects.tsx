const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">Project One</h3>
            <p className="mb-4">A brief description of the project.</p>
            <a href="#" className="text-blue-400 hover:underline">View Project</a>
          </div>
          {/* Project 2 */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">Project Two</h3>
            <p className="mb-4">A brief description of the project.</p>
            <a href="#" className="text-blue-400 hover:underline">View Project</a>
          </div>
          {/* Project 3 */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">Project Three</h3>
            <p className="mb-4">A brief description of the project.</p>
            <a href="#" className="text-blue-400 hover:underline">View Project</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
