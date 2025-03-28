import React from 'react';
import { ChevronDown, Download } from 'lucide-react';
const heroImage = new URL('../assets/img/Headshot.jpeg', import.meta.url).href;
const resumePdf = new URL('../assets/docs/resumes/Resume_Kevika_S_PMM.pdf', import.meta.url).href;

const HeroSection = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-stone-50 via-white to-stone-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-light leading-tight">
            <span className="text-stone-800">
              Hey there! I'm Kevika. 
            </span>
            <span className="block mt-2 text-stone-700">
I blend technology, design, and strategy to shape compelling narratives and products.
            </span>
          </h1>
          <p className="text-xl text-stone-600">
            Product Marketing and Management Professional passionate about creating impactful campaigns that resonate and inspire.
          </p>
          <div className="pt-4">
            <a
              href={resumePdf}
              download="Kevika_Sharma_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-stone-800 text-white rounded-lg hover:bg-stone-900 transition-colors duration-300"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-stone-200 to-stone-100 rounded-lg transform rotate-6"></div>
            <img
              src={heroImage}
              alt="Kevika Sharma"
              className="relative rounded-lg shadow-2xl object-cover transition-all duration-500 hover:transform hover:scale-105"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-stone-400" />
      </div>
    </section>
  );
};

export default HeroSection;