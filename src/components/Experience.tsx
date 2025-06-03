import React from 'react';

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  details: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: 'Software Engineer',
    company: 'Company A',
    duration: 'Jan 2020 - Present',
    details: [
      'Developed user interfaces with React and TypeScript.',
      'Collaborated with cross-functional teams to define and design new features.'
    ]
  },
  {
    role: 'Junior Developer',
    company: 'Company B',
    duration: 'Jun 2018 - Dec 2019',
    details: [
      'Assisted in the development of web applications.',
      'Maintained code repositories and performed code reviews.'
    ]
  }
];

const Experience: React.FC = () => (
  <section id="experience">
    <h2 className="text-3xl font-semibold mb-6">Experience</h2>
    <div className="space-y-8">
      {experiences.map((exp) => (
        <div key={exp.company}>
          <h3 className="text-xl font-bold">{exp.role} @ {exp.company}</h3>
          <span className="text-sm text-gray-600">{exp.duration}</span>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            {exp.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;