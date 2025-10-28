const Hero = () => {
  return (
    <section id="hero" className="bg-gray-900 text-white h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="text-5xl font-bold mb-4">Hello, I'm [Your Name]</h1>
        <p className="text-xl mb-8">I'm a Computer Science student and a passionate frontend developer.</p>
        <a href="#projects" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
