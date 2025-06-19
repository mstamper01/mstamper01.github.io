import React from 'react';

const Contact: React.FC = () => (
  <section id="contact" className="max-w-md mx-auto pb-12">
    <h2 className="text-3xl font-semibold mb-4">Contact</h2>
    <p className="text-gray-700 mb-4">
      Feel free to reach out via email or connect on social platforms.
    </p>
      <ul className="text-gray-800">
      <li>
        Email:{' '}
        <a
          href="mailto:micah@micahstamper.com"
          className="text-blue-500 relative inline-block group"
        >
          micah@micahstamper.com
          <span
            className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500
                       scale-x-0 group-hover:scale-x-100 origin-left
                       transition-transform duration-300"
          />
        </a>
      </li>
      <li>
        LinkedIn:{' '}
        <a
          href="https://www.linkedin.com/in/micah-stamper-1aba0880/"
          className="text-blue-500 relative inline-block group"
        >
          Micah Stamper
          <span
            className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500
                       scale-x-0 group-hover:scale-x-100 origin-left
                       transition-transform duration-300"
          />
        </a>
      </li>
      <li>
        GitHub:{' '}
        <a
          href="https://github.com/mstamper01"
          className="text-blue-500 relative inline-block group"
        >
          mstamper01
          <span
            className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500
                       scale-x-0 group-hover:scale-x-100 origin-left
                       transition-transform duration-300"
          />
        </a>
      </li>
    </ul>
  </section>
);

export default Contact;