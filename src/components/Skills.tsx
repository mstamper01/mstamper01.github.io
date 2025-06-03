import React from 'react';

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'CSS / Tailwind CSS',
  'Git & GitHub'
];

const Skills: React.FC = () => (
  <section id="skills">
    <h2 className="text-3xl font-semibold mb-6">Skills</h2>
    <ul className="flex flex-wrap gap-4">
      {skills.map((skill) => (
        <li key={skill} className="px-4 py-2 bg-gray-100 rounded-full text-gray-800">
          {skill}
        </li>
      ))}
    </ul>
  </section>
);

export default Skills;