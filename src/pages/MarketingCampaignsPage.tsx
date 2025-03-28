import React from 'react';
import { Download, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import all PDF assets using Vite's asset handling
const tesuCampaignPdf = new URL('../assets/marketing-campaigns/Tesu Marketing Campaign.pdf', import.meta.url).href;
const tesuConceptPdf = new URL('../assets/marketing-campaigns/Tesu_X_SMC_Concept_Note_new.pdf', import.meta.url).href;
const tesuNewsletterPdf = new URL('../assets/marketing-campaigns/Newsletter_TESU.pdf', import.meta.url).href;
const taruvaBrandPdf = new URL('../assets/marketing-campaigns/Deciding Color Palate and Fonts.pdf', import.meta.url).href;

const MarketingCampaignsPage = () => {
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
          Marketing Campaign Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tesu Marketing Campaign */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video w-full overflow-hidden bg-white flex flex-col items-center justify-center p-6">
              <div className="h-32 w-full mb-4 flex items-center justify-center">
                {/* Temporarily show text while image loads */}
                <div className="text-2xl font-bold text-stone-600">
                  TESU
                </div>
              </div>
              <div className="text-4xl font-bold text-stone-800 text-center">
                Tesu Marketing Campaign
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-medium text-stone-800 mb-4">Brand Strategy</h2>
              <p className="text-stone-600 mb-6">Comprehensive marketing campaign strategy for Tesu, including brand positioning, logo design, target audience analysis, and promotional planning.</p>
              <div className="flex flex-col space-y-3">
                <a
                  href={tesuCampaignPdf}
                  download="Tesu Marketing Campaign.pdf"
                  className="inline-flex items-center text-stone-600 hover:text-stone-800 transition-colors"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Campaign Strategy
                </a>
                <a
                  href={tesuConceptPdf}
                  download="Tesu X SMC - Concept Note.pdf"
                  className="inline-flex items-center text-stone-600 hover:text-stone-800 transition-colors"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Concept Note
                </a>
                <a
                  href={tesuNewsletterPdf}
                  download="Newsletter_TESU.pdf"
                  className="inline-flex items-center text-stone-600 hover:text-stone-800 transition-colors"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Newsletter
                </a>
              </div>
            </div>
          </div>

          {/* Taruvaa Brand Identity */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video w-full overflow-hidden bg-white flex flex-col items-center justify-center p-6">
              <div className="h-32 w-full mb-4 flex items-center justify-center">
                {/* Temporarily show text while image loads */}
                <div className="text-2xl font-bold text-stone-600">
                  TARUVAA
                </div>
              </div>
              <div className="text-4xl font-bold text-stone-800 text-center">
                Taruvaa Brand Identity
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-medium text-stone-800 mb-4">Brand Identity Guidelines</h2>
              <p className="text-stone-600 mb-6">Comprehensive brand identity guide for Taruvaa, encompassing color palette selection, typography hierarchy, and visual design elements to establish a cohesive and professional brand presence.</p>
              <a
                href={taruvaBrandPdf}
                download="Taruvaa Brand Identity Guide.pdf"
                className="inline-flex items-center text-stone-600 hover:text-stone-800 transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Brand Guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingCampaignsPage; 