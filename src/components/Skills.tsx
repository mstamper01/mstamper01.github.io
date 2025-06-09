import React from 'react';

const skills = [
  'AWS',
  'OpenAI Codex',
  'Anthropic - Claude Code',
  'Github Co-Pilot',
  'JavaScript',
  'Node.js',
  'Git & GitHub',
  'Python',
  'C#',
  "Jira Administration",
  'Azure DevOps Administration',
  'REST APIs',
  'Data Pipelines',
  'Docker'
];

const Skills: React.FC = () => (
  <section id="skills">
    <h2 className="text-3xl font-semibold mb-6">Skills</h2>
    <ul className="flex flex-wrap gap-4">
      {skills.map((skill) => (
        <li
          key={skill}
          className="relative inline-block group px-4 py-2 bg-gray-100 rounded-full text-gray-800 transition-transform transform hover:scale-105 hover:bg-indigo-100 hover:text-indigo-600"
        >
          {skill}
          <span className="absolute left-4 right-4 bottom-1 h-0.5 bg-indigo-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
        </li>
      ))}
    </ul>
  </section>
);

export default Skills;