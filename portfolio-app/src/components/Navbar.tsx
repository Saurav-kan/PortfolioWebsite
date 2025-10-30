import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-sm md:max-w-md">
      <nav className="bg-black bg-opacity-50 backdrop-blur-lg rounded-full border border-gray-700 shadow-lg">
        <div className="container mx-auto px-6 py-3 flex justify-center items-center">
          <div className="space-x-6 md:space-x-8">
            <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-gray-300 hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-gray-300 hover:text-white transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
