import React from 'react';

const About: React.FC = () => (
  <section id="about" className="max-w-3xl mx-auto">
    <h2 className="text-3xl font-semibold mb-4">About Me</h2>
    <ul className="text-gray-700 leading-relaxed list-disc list-inside space-y-2">
      <li>I'm a technologist with 13 years of experience in roles such as Project Manager, Product Owner, Software Engineer, Agile Coach, Release Train Engineer, and leader of both Agile delivery and development teams.</li>
      <li>My expertise spans Lean Manufacturing, Property Tax, Banking Integrations, Mortgages, and Multiple Listing Services (MLS).</li>
      <li>I add value by building RESTful APIs, data pipelines, and web UIs using technologies like C#, Java, Python, Angular, React, and AWS (DynamoDB, S3, SNS, Postgres, ECS, and more).</li>
      <li>Lately, I've been leveraging both generative and agentic AI to boost productivity—including the creation of this website.</li>
    </ul>
  </section>
);

export default About;