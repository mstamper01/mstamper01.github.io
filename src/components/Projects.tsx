import React from 'react';

interface Project {
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    title: 'Project One',
    description: 'A brief description of project one.',
    link: '#'
  },
  {
    title: 'Project Two',
    description: 'A brief description of project two.',
    link: '#'
  },
  {
    title: 'Project Three',
    description: 'A brief description of project three.',
    link: '#'
  }
];

const Projects: React.FC = () => (
  <section id="projects">
    <h2 className="text-3xl font-semibold mb-6">Projects</h2>
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <div
          key={project.title}
          className="p-6 border rounded-lg shadow-sm hover:shadow-lg transform hover:scale-105 transition duration-300"
        >
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-700 mb-4">{project.description}</p>
          <a href={project.link} className="text-blue-500 hover:underline">
            View Project
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;