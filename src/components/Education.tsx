import React from 'react';

interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  details?: string;
}

const education: EducationItem[] = [
  {
    institution: 'Eastern Michigan University',
    degree: 'Bachelor of Art & Science in Computer Science',
    duration: '2008 - 2015',
    details: 'Dean\'s List every semester. Cleo Finlan Award for highest GPA for Computer Science Juniors.'
  },
    {
    institution: 'Eastern Michigan University',
    degree: 'Bachelor of Technology in Information Assurance',
    duration: '2008 - 2013',
    details: 'Dean\'s List every semester. Junior Achievers award.'
  }
];

const Education: React.FC = () => (
  <section id="education">
    <h2 className="text-3xl font-semibold mb-6">Education</h2>
    <div className="space-y-4">
      {education.map((edu) => (
        <div key={edu.institution}>
          <h3 className="text-xl font-bold">{edu.degree}, {edu.institution}</h3>
          <span className="text-sm text-gray-600">{edu.duration}</span>
          {edu.details && <p className="text-gray-700 mt-1">{edu.details}</p>}
        </div>
      ))}
    </div>
  </section>
);

export default Education;