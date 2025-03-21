import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects, personalProjects } from '../data/projects';

const ProjectPage = () => {
  const { id } = useParams();
  const allProjects = [...projects, ...personalProjects];
  const project = allProjects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-stone-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-stone-800 mb-6">Project not found</h1>
          <Link to="/" className="text-stone-600 hover:text-stone-800 flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" />
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-stone-50">
      <div className="container mx-auto px-4 py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-800 mb-12">
          <ArrowLeft className="w-5 h-5" />
          Back to home
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-light text-stone-800 mb-6">{project.title}</h1>
          
          <div className="aspect-video w-full mb-12 overflow-hidden rounded-lg shadow-xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="prose prose-stone max-w-none">
            <p className="text-xl text-stone-600 mb-8">{project.description}</p>
            
            <h2 className="text-2xl font-light text-stone-800 mb-4">Overview</h2>
            <p className="text-stone-600 mb-8">{project.overview}</p>
            
            <h2 className="text-2xl font-light text-stone-800 mb-4">Challenge</h2>
            <p className="text-stone-600 mb-8">{project.challenge}</p>
            
            <h2 className="text-2xl font-light text-stone-800 mb-4">Solution</h2>
            <p className="text-stone-600 mb-8">{project.solution}</p>
            
            <h2 className="text-2xl font-light text-stone-800 mb-4">Results</h2>
            <ul className="list-disc list-inside space-y-2 text-stone-600">
              {project.results.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;