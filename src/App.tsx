import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="fixed top-0 w-full bg-white shadow z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-lg font-semibold">Micah Stamper</div>
          <div className="space-x-4">
            <a href="#about" className="relative inline-block px-1 py-1 group">
              About
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </a>
            <a href="#projects" className="relative inline-block px-1 py-1 group">
              Projects
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </a>
            <a href="#experience" className="relative inline-block px-1 py-1 group">
              Experience
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </a>
            <a href="#skills" className="relative inline-block px-1 py-1 group">
              Skills
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </a>
            <a href="#education" className="relative inline-block px-1 py-1 group">
              Education
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </a>
            <a href="#contact" className="relative inline-block px-1 py-1 group">
              Contact
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </a>
          </div>
        </div>
      </nav>
      <main className="pt-20 container mx-auto px-6 space-y-20">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;