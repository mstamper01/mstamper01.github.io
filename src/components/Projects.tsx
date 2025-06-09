import React from 'react';

interface Project {
  title: string;
  description: string;
  role: string;
  technologyUsed: string;
}

const projects: Project[] = [
  {
    'title': 'Rocket Fuel',
    'description': 'Led the migration of Rocket Mortgage components to the cloud, scaling services to support a high-traffic Super Bowl marketing campaign.',
    'role': 'Project Manager',
    'technologyUsed': 'Microsoft Project, Team Foundation Server (TFS)'
  },
  {
    'title': 'Do Not Call',
    'description': 'Integrated with a third-party provider to standardize phone metadata, ensuring compliance with Do Not Call regulations and improving client communication workflows.',
    'role': 'Software Developer',
    'technologyUsed': 'C#, DynamoDB, Mulesoft API Gateway'
  },
  {
    'title': 'Automated Asset Import',
    'description': 'Simplified the asset verification process for mortgage clients by enabling secure, read-only access to bank accounts via third-party integrations — eliminating manual uploads.',
    'role': 'Software Engineer',
    'technologyUsed': 'C#, DynamoDB, Mulesoft API Gateway, SQS'
  },
  {
    'title': 'Single Bureau Credit',
    'description': 'Redesigned the credit pulling process to defer two of three credit reports, saving millions by avoiding unnecessary pulls on low-probability applicants.',
    'role': 'Team Leader, Engineering',
    'technologyUsed': 'C#, Hadoop, SQS'
  },
  {
    'title': 'Credit Vendor Visualization & Savings',
    'description': 'Drove system transparency through real-time visualizations of vendor response times and credit report costs — uncovering vendor mischarges and influencing enterprise-wide adoption of operational dashboards.',
    'role': 'Team Leader, Engineering',
    'technologyUsed': 'C#, InfluxDB, Grafana'
  },
  {
    'title': 'Data Services',
    'description': 'Served as process architect and coach across 13 dev teams — facilitating planning, improving delivery velocity, and enabling cross-team coordination. Recognized with a Special Achievement Award.',
    'role': 'Release Train Engineer',
    'technologyUsed': 'Team Foundation Server (TFS), Python'
  },
  {
    'title': 'Rocket Homes Agile Delivery',
    'description': 'Assessed delivery maturity for Rocket Homes, launched a new Agile Delivery team, and partnered with executives to improve delivery predictability — boosting commitment accuracy to 80%+ per quarter.',
    'role': 'Senior Business Consultant / Agile Delivery Team Leader',
    'technologyUsed': 'Jira, JavaScript'
  },
  {
    'title': 'Rocket.com',
    'description': 'Led the MLS Data team to increase U.S. listing coverage by 11% — hitting critical targets ahead of a national Super Bowl campaign launch.',
    'role': 'Team Leader, Engineering',
    'technologyUsed': 'Python, Confluent Kafka, Postgres, ElasticSearch, AWS Lambda, AWS Athena'
  }];

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
          <p className="text-gray-700 mb-4"><b>Role:</b> {project.role}</p>
          <p className="text-gray-700 mb-4"><b>Technology Used:</b> {project.technologyUsed}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;