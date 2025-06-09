import React from 'react';

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  details: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: 'Team Leader, Engineering',
    company: 'Rocket',
    duration: 'August 2024 - Present',
    details: [
      'Developed user interfaces with React and TypeScript.',
      'Collaborated with cross-functional teams to define and design new features.'
    ]
  },
  {
    role: 'Team Leader, Agile Delivery',
    company: 'Rocket Homes',
    duration: 'August 2021 - August 2024',
    details: [
      'Assisted in the development of web applications.',
      'Maintained code repositories and performed code reviews.'
    ]
  },
  {
    role: 'Senior Business Consulstant',
    company: 'Rocket Homes',
    duration: 'August 2021 - August 2024',
    details: [
      'Assisted in the development of web applications.',
      'Maintained code repositories and performed code reviews.'
    ]
  },
  {
    role: 'Release Train Engineer',
    company: 'Quicken Loans',
    duration: 'March 2019 - August 2021',
    details: [
      'Assisted in the development of web applications.',
      'Maintained code repositories and performed code reviews.'
    ]
  },
  {
    role: 'Team Leader, Engineering',
    company: 'Quicken Loans',
    duration: 'November 2017 - March 2019',
    details: [
      'Assisted in the development of web applications.',
      'Maintained code repositories and performed code reviews.'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'Quicken Loans',
    duration: 'March 2017 - November 2017',
    details: [
      'Assisted in the development of web applications.',
      'Maintained code repositories and performed code reviews.'
    ]
  },
  {
    role: 'Software Developer',
    company: 'Quicken Loans',
    duration: 'February 2016 - March 2017',
    details: [
      'Assisted in the development of web applications.',
      'Maintained code repositories and performed code reviews.'
    ]
  },
  {
    role: 'Project Manager',
    company: 'Quicken Loans',
    duration: 'March 2015 - February 2016',
    details: [
      'Assisted in the development of web applications.',
      'Maintained code repositories and performed code reviews.'
    ]
  },
  {
    role: 'Project Coordinator',
    company: 'Quicken Loans',
    duration: 'October 2012 - March 2015',
    details: [
      'Assisted in the development of web applications.',
      'Maintained code repositories and performed code reviews.'
    ]
  },
  {
    role: 'Intern',
    company: 'Quicken Loans',
    duration: 'June 2012 - October 2015',
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
        <div
          key={exp.company}
          className="p-6 border rounded-lg shadow-sm hover:shadow-lg transform hover:scale-105 transition duration-300"
        >
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