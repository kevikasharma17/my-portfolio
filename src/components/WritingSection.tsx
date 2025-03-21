import React from 'react';

const writings = [
  {
    title: 'The Art of Strategic Marketing',
    excerpt: 'Exploring the intersection of creativity and data-driven decision making.',
    category: 'Whitepaper',
  },
  {
    title: 'Building Brand Stories',
    excerpt: 'How narrative structures can elevate your marketing campaigns.',
    category: 'Article',
  },
  {
    title: 'Marketing Philosophy',
    excerpt: 'A personal perspective on modern marketing principles.',
    category: 'Blog',
  },
];

const WritingSection = () => {
  return (
    <section className="py-20 bg-white" id="writing">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-light mb-12 text-center text-stone-800">
          Writing
        </h2>
        <div className="space-y-12 max-w-4xl mx-auto">
          {writings.map((writing, index) => (
            <div
              key={index}
              className="border-l-2 border-stone-200 pl-8 hover:border-stone-400 transition-colors duration-300"
            >
              <span className="text-sm text-stone-600">{writing.category}</span>
              <h3 className="text-2xl font-medium text-stone-800 mt-2 mb-3">
                {writing.title}
              </h3>
              <p className="text-stone-600">{writing.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WritingSection;