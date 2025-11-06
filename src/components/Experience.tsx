import React from 'react';

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  details: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: 'Director, Product Management and Delivery',
    company: 'Belle Tire',
    duration: 'September 2025 - Present',
    details: [
      'Own Delivery Management of the Entireprise',
      'Helping to build a strong Product Management team for all technology products',
      'Helping to move work through entire Portfolio Lifecycle (Intake, Discovery, Prioritization, Execution, Monitoring)'
    ]
  },
  {
    role: 'Team Leader, Engineering',
    company: 'Rocket',
    duration: 'August 2024 - Present',
    details: [
      'Led MLS Data team to increase U.S. listing coverage by 11% ahead of national Super Bowl campaign',
      'Architected scalable data pipelines using Python, Kafka, Postgres, and AWS services',
      'Managed cross-functional engineering teams to deliver high-impact real estate data solutions'
    ]
  },
  {
    role: 'Team Leader, Agile Delivery',
    company: 'Rocket Homes',
    duration: 'August 2021 - August 2024',
    details: [
      'Assessed delivery maturity and launched new Agile Delivery team for Rocket Homes Technology',
      'Partnered with executives to improve delivery predictability, achieving 80%+ commitment accuracy per quarter',
      'Implemented Jira workflows and JavaScript automation tools to streamline development processes'
    ]
  },
  {
    role: 'Senior Business Consultant',
    company: 'Rocket Homes',
    duration: 'August 2021 - August 2024',
    details: [
      'Consulted on strategic technology initiatives to optimize real estate platform performance',
      'Facilitated stakeholder alignment across product, engineering, and business units'
    ]
  },
  {
    role: 'Release Train Engineer',
    company: 'Quicken Loans',
    duration: 'March 2019 - August 2021',
    details: [
      'Served as process architect and coach across 13+ development teams, recognized with Special Achievement Award',
      'Facilitated Agile planning ceremonies and improved delivery velocity through cross-team coordination',
      'Implemented TFS workflows and Python automation scripts to enhance development processes'
    ]
  },
  {
    role: 'Team Leader, Engineering',
    company: 'Quicken Loans',
    duration: 'November 2017 - March 2019',
    details: [
      'Led engineering team to redesign credit pulling process, saving millions by deferring unnecessary credit reports',
      'Developed real-time vendor visualization dashboards using C#, InfluxDB, and Grafana',
      'Drove system transparency initiatives that influenced enterprise-wide adoption of operational dashboards'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'Quicken Loans',
    duration: 'March 2017 - November 2017',
    details: [
      'Designed and implemented automated asset import system using C#, DynamoDB, and AWS SQS',
      'Integrated third-party banking APIs to enable secure, read-only account access for mortgage clients',
      'Eliminated manual document uploads, significantly improving client experience and operational efficiency'
    ]
  },
  {
    role: 'Software Developer',
    company: 'Quicken Loans',
    duration: 'February 2016 - March 2017',
    details: [
      'Developed Do Not Call compliance system integrating third-party phone metadata providers',
      'Built scalable microservices using C#, DynamoDB, and Mulesoft API Gateway',
    ]
  },
  {
    role: 'Project Manager',
    company: 'Quicken Loans',
    duration: 'March 2015 - February 2016',
    details: [
      'Led Rocket Fuel project migration of Rocket Mortgage components to cloud infrastructure',
      'Coordinated cross-functional teams to scale services for high-traffic Super Bowl marketing campaign',
      'Managed project timelines and deliverables using Microsoft Project and Team Foundation Server'
    ]
  },
  {
    role: 'Project Coordinator',
    company: 'Quicken Loans',
    duration: 'October 2012 - March 2015',
    details: [
      'Coordinated multiple software development projects across engineering and product teams',
      'Facilitated project planning sessions and tracked deliverables using project management tools',
      'Supported development teams with process improvements and stakeholder communication'
    ]
  },
  {
    role: 'Intern',
    company: 'Quicken Loans',
    duration: 'June 2012 - October 2012',
    details: [
      'Supported software development initiatives as part of technology internship program',
      'Gained hands-on experience with enterprise software development practices and methodologies',
      'Contributed to various projects while learning industry best practices and company culture'
    ]
  }
];

const Experience: React.FC = () => (
  <section id="experience">
    <h2 className="text-2xl font-semibold mb-4">Experience</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {experiences.map((exp) => (
        <div
          key={exp.company}
          className="p-4 border rounded-lg shadow-sm hover:shadow-lg transform hover:scale-105 transition duration-300"
        >
          <h3 className="text-xl font-bold">{exp.role} @ {exp.company}</h3>
          <span className="text-sm text-gray-600">{exp.duration}</span>
          <ul className="list-disc list-inside mt-1 text-sm text-gray-700">
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
