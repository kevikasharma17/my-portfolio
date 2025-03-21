import React from 'react';
import { Download, Video, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import PDF files
import DisneyBrandPDF from '../assets/Purdue Projects Section/Purdue Projects/Disney Brand News.pptx.pdf';
import AmazonPrimePDF from '../assets/Purdue Projects Section/Purdue Projects/Amazon Prime Pricing.pdf';
import UnitedWayPDF from '../assets/Purdue Projects Section/Purdue Projects/A-Z Plan.pdf';
import UnitedWayRevampPDF from '../assets/Purdue Projects Section/Purdue Projects/Brand Revamp Plan_compressed_ilovpdf.pdf';
// import UnitedWayVideo from '../assets/Purdue Projects Section/Purdue Projects/AI generated Promotional Video for UnitedWay.mp4';
import RubeGoldbergPDF from '../assets/Purdue Projects Section/Purdue Projects/RubeGoldberg Chatbot Guidebook (2).pdf';
import HumanLibraryPDF from '../assets/Purdue Projects Section/Purdue Projects/Human Library at Chicago Airport Idea Proposal.pdf';

const AcademicProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-stone-50 py-20">
      <div className="container mx-auto px-4">
        <Link
          to="/#work"
          className="inline-flex items-center text-stone-600 hover:text-stone-800 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Projects
        </Link>
        
        <h1 className="text-4xl font-light text-stone-800 mb-12">
          Academic & Industrial Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Jio CloudXP Project */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video w-full overflow-hidden bg-white flex items-center justify-center">
              <div className="text-4xl font-bold text-stone-800 text-center px-4">
                Reliance Jio: Key Contributions & Achievements
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-medium text-stone-800 mb-4">Jio CloudXP Resources</h2>
              <p className="text-stone-600 mb-2">A comprehensive platform showcasing cloud computing resources, whitepapers, and digital transformation content for enterprise solutions.</p>
              <p className="text-sm text-stone-500 mb-6">It's Jio's official website, and during my time there, I contributed to building and refining various elements of it.</p>
              <a
                href="https://www.jio.com/jcms/cloudxp/resources/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-stone-600 hover:text-stone-800 transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                View Resources
              </a>
            </div>
          </div>

          {/* Disney Project */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video w-full overflow-hidden bg-white flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney%2B_logo.svg/1200px-Disney%2B_logo.svg.png"
                alt="Disney Logo"
                className="w-3/4 h-3/4 object-contain"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-medium text-stone-800 mb-4">Disney Brand Analysis</h2>
              <p className="text-stone-600 mb-6">Strategic analysis of Disney's brand positioning and news coverage, examining media impact and brand communication strategies in the entertainment industry.</p>
              <a
                href={DisneyBrandPDF}
                download="Disney Brand Analysis.pdf"
                className="inline-flex items-center text-stone-600 hover:text-stone-800 transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Brand Analysis
              </a>
            </div>
          </div>

          {/* Amazon Project */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video w-full overflow-hidden bg-white flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Amazon_Prime_Video_logo.svg/1200px-Amazon_Prime_Video_logo.svg.png"
                alt="Amazon Prime Logo"
                className="w-3/4 h-3/4 object-contain"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-medium text-stone-800 mb-4">Amazon Prime Pricing</h2>
              <p className="text-stone-600 mb-6">Detailed analysis of Amazon Prime's pricing model and its impact on consumer behavior, subscription services, and market dynamics.</p>
              <a
                href={AmazonPrimePDF}
                download="Amazon Prime Pricing Analysis.pdf"
                className="inline-flex items-center text-stone-600 hover:text-stone-800 transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Pricing Analysis
              </a>
            </div>
          </div>

          {/* United Way Project */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video w-full overflow-hidden bg-white flex items-center justify-center">
              <div className="text-4xl font-bold text-stone-800 text-center px-4">
                United Way
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-medium text-stone-800 mb-4">United Way Brand Plan & AI Promo</h2>
              <p className="text-stone-600 mb-6">A comprehensive brand strategy and AI-driven promotional campaign for United Way, focusing on community engagement and digital transformation.</p>
              <div className="flex flex-col space-y-3">
                <a
                  href={UnitedWayPDF}
                  download="United Way A-Z Plan.pdf"
                  className="inline-flex items-center text-stone-600 hover:text-stone-800 transition-colors"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download A-Z Plan
                </a>
                <a
                  href={UnitedWayRevampPDF}
                  download="United Way Brand Revamp Plan.pdf"
                  className="inline-flex items-center text-stone-600 hover:text-stone-800 transition-colors"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Brand Revamp Plan
                </a>
                {/* <a
                  href={UnitedWayVideo}
                  download="UnitedWay_Promo.mp4"
                  className="inline-flex items-center text-stone-600 hover:text-stone-800 transition-colors"
                >
                  <Video className="w-5 h-5 mr-2" />
                  Download Promo Video
                </a> */}
              </div>
            </div>
          </div>

          {/* RubeGoldberg Project */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video w-full overflow-hidden bg-white flex items-center justify-center">
              <div className="text-4xl font-bold text-stone-800 text-center px-4">
                Rube Goldberg
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-medium text-stone-800 mb-4">RubeGoldberg Chatbot</h2>
              <p className="text-stone-600 mb-6">An innovative chatbot implementation guide showcasing the integration of AI technology for enhanced user interactions and automated customer service.</p>
              <a
                href={RubeGoldbergPDF}
                download="RubeGoldberg Chatbot Guidebook.pdf"
                className="inline-flex items-center text-stone-600 hover:text-stone-800 transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Chatbot Guide
              </a>
            </div>
          </div>

          {/* Human Library Project */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video w-full overflow-hidden bg-white flex items-center justify-center">
              <div className="text-4xl font-bold text-stone-800 text-center px-4">
                Human Library
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-medium text-stone-800 mb-4">Human Library - Chicago Airport</h2>
              <p className="text-stone-600 mb-6">A creative proposal for implementing the Human Library concept at Chicago Airport, fostering cultural exchange and storytelling in transit spaces.</p>
              <a
                href={HumanLibraryPDF}
                download="Human Library Proposal.pdf"
                className="inline-flex items-center text-stone-600 hover:text-stone-800 transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Project Proposal
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicProjectsPage; 