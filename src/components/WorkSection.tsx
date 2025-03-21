import React from 'react';
import { projects, personalProjects } from '../data/projects';
import { Project } from '../types/project';
import { Download, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectGrid = ({ items }: { items: Project[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {items.map((project) => (
      <div
        key={project.id}
        className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div 
          className="aspect-video w-full overflow-hidden bg-white flex flex-col items-center justify-center relative"
          style={{
            backgroundImage: `url(${project.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-white/80"></div>
          <div className="relative z-10">
            <div className="text-4xl font-bold text-stone-800 text-center px-4">
              {project.title}
            </div>
            <p className="text-sm text-stone-600 mt-4 px-6 text-center">
              {project.id === 'photography-series' 
                ? "Pictures from photowalks captured using iPhone and edited with iPhone Pro app"
                : project.id === 'photography' 
                  ? "A curated collection of captivating moments, with an exclusive series of premium photographs coming soon"
                  : project.description}
            </p>
            {project.id === 'photography-series' && (
              <div className="mt-4 flex justify-center">
                <a
                  href="/assets/iphone-edits/Iphone edits 2.pdf"
                  download="iPhone Pro Edits Portfolio.pdf"
                  className="inline-flex items-center text-stone-600 hover:text-stone-800 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download iPhone Edits
                </a>
              </div>
            )}
            {project.id === 'digital-art' && (
              <div className="mt-4 flex justify-center">
                <a
                  href="public/assets/iphone-edits/NYSID Accepted Portfolio copy.pdf"
                  download="Digital Art Portfolio.pdf"
                  className="inline-flex items-center text-stone-600 hover:text-stone-800 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Art Portfolio
                </a>
              </div>
            )}
            {project.id === 'marketing-blog' && (
              <div className="mt-4 flex justify-center">
                <a
                  href="public/assets/iphone-edits/10 Effective Ways to Support and Boost Visibility for Local Small Businesses (3).pdf"
                  download="Marketing Insights.pdf"
                  className="inline-flex items-center text-stone-600 hover:text-stone-800 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Marketing Insights
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
);

const WorkSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-stone-50 via-white to-stone-50" id="work">
      <div className="container mx-auto px-4">
        <div className="space-y-20">
          <div>
            <h2 className="text-4xl font-light text-stone-800 mb-12 text-center">
              My Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {project.id === 'brand-evolution' ? (
                    <Link to="/brand-content" className="block">
                      <div 
                        className="aspect-video w-full overflow-hidden bg-white flex flex-col items-center justify-center relative"
                        style={{
                          backgroundImage: `url(${project.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      >
                        <div className="absolute inset-0 bg-white/80"></div>
                        <div className="relative z-10">
                          <div className="text-4xl font-bold text-stone-800 text-center px-4">
                            Brand Evolution
                          </div>
                          <p className="text-sm text-stone-600 mt-4 px-6 text-center">
                            Professional photo editing and video content creation showcasing brand transformations
                          </p>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 backdrop-blur-sm group-hover:backdrop-blur-md transition-all duration-300 flex flex-col items-center justify-end pb-8">
                        <span className="text-white text-sm font-medium px-4 py-2 border border-white rounded-md hover:bg-white hover:text-black transition-colors shadow-md transform group-hover:translate-y-0 opacity-0 group-hover:opacity-100">View Contents</span>
                      </div>
                    </Link>
                  ) : project.id === 'content-marketing' ? (
                    <Link to="/academic-projects" className="block">
                      <div 
                        className="aspect-video w-full overflow-hidden bg-white flex flex-col items-center justify-center relative"
                        style={{
                          backgroundImage: `url(${project.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      >
                        <div className="absolute inset-0 bg-white/80"></div>
                        <div className="relative z-10">
                          <div className="text-4xl font-bold text-stone-800 text-center px-4">
                            Academic & Industrial Projects
                          </div>
                          <p className="text-sm text-stone-600 mt-4 px-6 text-center">
                            Strategic brand analyses and innovative solutions for industry leaders
                          </p>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 backdrop-blur-sm group-hover:backdrop-blur-md transition-all duration-300 flex flex-col items-center justify-end pb-8">
                        <span className="text-white text-sm font-medium px-4 py-2 border border-white rounded-md hover:bg-white hover:text-black transition-colors shadow-md transform group-hover:translate-y-0 opacity-0 group-hover:opacity-100">View Contents</span>
                      </div>
                    </Link>
                  ) : project.id === 'purdue-marketing' ? (
                    <Link to="/marketing-campaigns" className="block">
                      <div 
                        className="aspect-video w-full overflow-hidden bg-white flex flex-col items-center justify-center relative"
                        style={{
                          backgroundImage: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop")',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      >
                        <div className="absolute inset-0 bg-white/80"></div>
                        <div className="relative z-10">
                          <div className="text-4xl font-bold text-stone-800 text-center px-4">
                            Marketing Campaigns
                          </div>
                          <p className="text-sm text-stone-600 mt-4 px-6 text-center">
                            Innovative marketing strategies crafted for emerging businesses that have gained significant market traction
                          </p>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 backdrop-blur-sm group-hover:backdrop-blur-md transition-all duration-300 flex flex-col items-center justify-end pb-8">
                        <span className="text-white text-sm font-medium px-4 py-2 border border-white rounded-md hover:bg-white hover:text-black transition-colors shadow-md transform group-hover:translate-y-0 opacity-0 group-hover:opacity-100">View Contents</span>
                      </div>
                    </Link>
                  ) : (
                    <>
                      <div className="aspect-video w-full overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 p-6 text-white">
                          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                          {project.id === 'content-marketing' && (
                            <div className="mt-4 space-y-2">
                              {/* United Way Project */}
                              <div className="mb-4">
                                <h4 className="text-lg font-medium mb-2">United Way Brand Plan & AI Promo</h4>
                                <div className="flex items-center gap-4">
                                  <a
                                    href="/src/assets/Purdue Projects Section/Purdue Projects/United Way Brand Plan.pdf"
                                    download="United Way Brand Plan.pdf"
                                    className="flex items-center text-sm hover:text-stone-200 transition-colors"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <Download className="w-4 h-4 mr-2" />
                                    Brand Plan
                                  </a>
                                  <a
                                    href="/src/assets/Purdue Projects Section/Purdue Projects/AI generated Promotional Video for UnitedWay.mp4"
                                    download="UnitedWay_Promo.mp4"
                                    className="flex items-center text-sm hover:text-stone-200 transition-colors"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <Video className="w-4 h-4 mr-2" />
                                    Promo Video
                                  </a>
                                </div>
                              </div>

                              {/* RubeGoldberg Project */}
                              <div className="mb-4">
                                <h4 className="text-lg font-medium mb-2">RubeGoldberg Chatbot</h4>
                                <a
                                  href="/src/assets/Purdue Projects Section/Purdue Projects/RubeGoldberg Chatbot Guidebook (2).pdf"
                                  download="RubeGoldberg Chatbot Guidebook.pdf"
                                  className="flex items-center text-sm hover:text-stone-200 transition-colors"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <Download className="w-4 h-4 mr-2" />
                                  Chatbot Guide
                                </a>
                              </div>

                              {/* Human Library Project */}
                              <div className="mb-4">
                                <h4 className="text-lg font-medium mb-2">Human Library - Chicago Airport</h4>
                                <a
                                  href="/src/assets/Purdue Projects Section/Purdue Projects/Human Library at Chicago Airport Idea Proposal.pdf"
                                  download="Human Library Proposal.pdf"
                                  className="flex items-center text-sm hover:text-stone-200 transition-colors"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <Download className="w-4 h-4 mr-2" />
                                  Project Proposal
                                </a>
                              </div>

                              {/* Disney Project */}
                              <div className="mb-4">
                                <h4 className="text-lg font-medium mb-2">Disney Brand Analysis</h4>
                                <a
                                  href="/src/assets/Purdue Projects Section/Purdue Projects/Disney Brand News.pptx.pdf"
                                  download="Disney Brand Analysis.pdf"
                                  className="flex items-center text-sm hover:text-stone-200 transition-colors"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <Download className="w-4 h-4 mr-2" />
                                  Brand Analysis
                                </a>
                              </div>

                              {/* Amazon Project */}
                              <div className="mb-4">
                                <h4 className="text-lg font-medium mb-2">Amazon Prime Pricing</h4>
                                <a
                                  href="/src/assets/Purdue Projects Section/Purdue Projects/Amazon Prime Pricing.pdf"
                                  download="Amazon Prime Pricing Analysis.pdf"
                                  className="flex items-center text-sm hover:text-stone-200 transition-colors"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <Download className="w-4 h-4 mr-2" />
                                  Pricing Analysis
                                </a>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 backdrop-blur-sm group-hover:backdrop-blur-md transition-all duration-300 flex flex-col items-center justify-end pb-8">
                        <span className="text-white text-sm font-medium px-4 py-2 border border-white rounded-md hover:bg-white hover:text-black transition-colors shadow-md transform group-hover:translate-y-0 opacity-0 group-hover:opacity-100">View Contents</span>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl font-light text-stone-800 mb-12 text-center">
              Personal Projects
            </h2>
            <ProjectGrid items={personalProjects} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;