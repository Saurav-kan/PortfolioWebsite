import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import BackgroundTexture from "@/components/BackgroundTexture";

const Footer = () => {
  return (
    <footer className="text-center py-8 text-neu-text/60">
      <p>
        &copy; {new Date().getFullYear()} Saurav Kandel. All rights reserved.
      </p>
    </footer>
  );
};

export default function Home() {
  return (
    <main className="relative">
      <BackgroundTexture />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
