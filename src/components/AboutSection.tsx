import React from 'react';

const headshot = new URL('../assets/img/Kev2.JPG', import.meta.url).href;

const AboutSection = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light mb-12 text-center text-stone-800">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-stone-200 to-stone-100 rounded-lg transform -rotate-3"></div>
                <img
                  src={headshot}
                  alt="Kevika Sharma"
                  className="relative rounded-lg shadow-lg object-cover w-full aspect-[4/5] transition-all duration-500 hover:transform hover:scale-105"
                />
              </div>
            </div>
            <div className="md:w-1/2 space-y-6">
              <p className="text-lg text-stone-700 leading-relaxed">
              With a passion for storytelling and a strategic mindset, I've dedicated my career to crafting marketing and product strategies that don’t just reach audiences—they resonate with them. My journey across product marketing, data analytics, and brand strategy has reinforced that the most impactful campaigns are built at the intersection of empathy, creativity, and data-driven insights.
              </p>
              <blockquote className="border-l-4 border-stone-400 pl-4 italic text-stone-600">
              "Design is not just what it looks like and feels like. Design is how it works." - Steve Jobs
              </blockquote>
              <p className="text-lg text-stone-700 leading-relaxed">
              I believe in the power of authentic storytelling, strategic problem-solving, and analytical precision to create meaningful connections between brands and their audiences. Every project is an opportunity to craft a compelling narrative, optimize user experiences, and drive measurable business impact.
              </p>
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-stone-800 mb-3">Core Strengths</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-stone-50 p-3 rounded-lg">
                    <span className="text-stone-700">Strategic Planning</span>
                  </div>
                  <div className="bg-stone-50 p-3 rounded-lg">
                    <span className="text-stone-700">Content Strategy</span>
                  </div>
                  <div className="bg-stone-50 p-3 rounded-lg">
                    <span className="text-stone-700">Brand Storytelling</span>
                  </div>
                  <div className="bg-stone-50 p-3 rounded-lg">
                    <span className="text-stone-700">Market Analysis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;