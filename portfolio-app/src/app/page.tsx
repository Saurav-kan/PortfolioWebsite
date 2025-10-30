import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

const Footer = () => {
  return (
    <footer className="text-center py-4 text-gray-500">
      <p>&copy; {new Date().getFullYear()} Saurav Kandel. All rights reserved.</p>
    </footer>
  );
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}