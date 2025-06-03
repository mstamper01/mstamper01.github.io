import React from 'react';

const Contact: React.FC = () => (
  <section id="contact" className="max-w-md mx-auto">
    <h2 className="text-3xl font-semibold mb-4">Contact</h2>
    <p className="text-gray-700 mb-4">
      Feel free to reach out via email or connect on social platforms.
    </p>
    <ul className="text-gray-800">
      <li>
        Email:{' '}
        <a href="micah@micahstamper.com" className="text-blue-500 hover:underline">
          micah@micahstamper.com
        </a>
      </li>
      <li>
        LinkedIn:{' '}
        <a href="https://www.linkedin.com/in/micah-stamper-1aba0880/" className="text-blue-500 hover:underline">
          Micah Stamper
        </a>
      </li>
      <li>
        GitHub:{' '}
        <a href="https://github.com/mstamper01" className="text-blue-500 hover:underline">
          mstamper01
        </a>
      </li>
    </ul>
  </section>
);

export default Contact;