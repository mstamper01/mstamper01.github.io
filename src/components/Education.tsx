import React from 'react';

interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  details?: string;
}

const education: EducationItem[] = [
  {
    institution: 'University X',
    degree: 'Bachelor of Science in Computer Science',
    duration: '2014 - 2018',
    details: 'Graduated with honors.'
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