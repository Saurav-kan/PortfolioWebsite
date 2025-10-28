const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <p className="text-lg mb-4">Feel free to reach out to me via email or connect with me on social media.</p>
        <a href="mailto:youremail@example.com" className="text-blue-400 hover:underline text-xl">youremail@example.com</a>
        <div className="flex justify-center space-x-4 mt-8">
          <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
          <a href="#" className="text-gray-400 hover:text-white">GitHub</a>
          <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
