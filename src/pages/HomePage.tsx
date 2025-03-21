import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import WorkSection from '../components/WorkSection';
import ContactSection from '../components/ContactSection';
import MarketingCampaignsPage from './MarketingCampaignsPage';
import PhotographyPage from './PhotographyPage';
import ProjectPage from './ProjectPage';

const HomePage = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-xl font-light text-stone-800 hover:text-stone-600"
            >
              Kevika Sharma
            </button>
            <div className="flex space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'about' ? 'text-stone-800' : 'text-stone-600 hover:text-stone-800'
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('work')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'work' ? 'text-stone-800' : 'text-stone-600 hover:text-stone-800'
                }`}
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'contact' ? 'text-stone-800' : 'text-stone-600 hover:text-stone-800'
                }`}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <section id="hero" className="pt-16">
          <HeroSection />
        </section>

        <section id="about" className="pt-16">
          <AboutSection />
        </section>

        <section id="work" className="pt-16">
          <WorkSection />
        </section>

        <section id="contact" className="pt-16">
          <ContactSection />
        </section>
      </main>
    </div>
  );
};

export default HomePage;