import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-stone-50 via-white to-stone-50" id="contact">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-light mb-6 text-stone-800">
          Let's create something amazing together
        </h2>
        <p className="text-xl text-stone-600 mb-12">
          I'm always open to discussing new projects and opportunities.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:skevika@purdue.edu"
            onClick={(e) => {
              window.location.href = "mailto:skevika@purdue.edu";
            }}
            className="flex items-center gap-2 px-6 py-3 bg-stone-800 text-white rounded-lg hover:bg-stone-900 transition-colors duration-300"
          >
            <Mail className="w-5 h-5" />
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/kevika-sharma/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-[#0077B5] text-white rounded-lg hover:bg-[#006396] transition-colors duration-300"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;