import React, { useState } from 'react';
import { Download, X } from 'lucide-react';

// Import documents using Vite's dynamic import
const documents = import.meta.glob('../assets/docs/Marketing Campaigns/*.{pdf,PDF,pptx,PPTX}', { eager: true });

interface Document {
  id: string;
  title: string;
  description: string;
  filePath: string;
  fileType: 'pdf' | 'pptx';
}

const documentList: Document[] = Object.entries(documents).map(([path, module]) => {
  const fileName = path.split('/').pop() || '';
  const fileType = fileName.toLowerCase().endsWith('.pdf') ? 'pdf' : 'pptx';
  const title = fileName.replace(/\.[^/.]+$/, ''); // Remove file extension
  
  return {
    id: path,
    title,
    description: `View the ${title} document`,
    filePath: (module as { default: string }).default,
    fileType
  };
});

const MarketingCampaignCard = () => {
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleDocumentClick = (doc: Document) => {
    setSelectedDoc(doc);
    setError(null);
  };

  const handleDownload = async (doc: Document) => {
    try {
      const response = await fetch(doc.filePath);
      if (!response.ok) throw new Error('Failed to fetch document');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${doc.title}.${doc.fileType}`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading file:', error);
      setError('Failed to download document. Please try again.');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-medium text-stone-800 mb-4">Marketing Campaigns</h3>
        <p className="text-stone-600 mb-6">
          A collection of marketing campaigns and brand development projects showcasing strategic thinking and creative execution.
        </p>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {/* Document List */}
        <div className="space-y-4">
          {documentList.map((doc) => (
            <div
              key={doc.id}
              className="flex items-center justify-between p-4 bg-stone-50 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
              onClick={() => handleDocumentClick(doc)}
            >
              <div className="flex items-center gap-3">
                <div className="text-stone-400 text-2xl">
                  {doc.fileType === 'pdf' ? '📄' : '📑'}
                </div>
                <div>
                  <h4 className="text-stone-800 font-medium">{doc.title}</h4>
                  <p className="text-sm text-stone-600">{doc.description}</p>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDownload(doc);
                }}
                className="p-2 text-stone-600 hover:text-stone-800 transition-colors"
                title="Download document"
              >
                <Download className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Document Preview Modal */}
      {selectedDoc && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedDoc(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-stone-300 transition-colors"
            onClick={() => setSelectedDoc(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative w-full h-full max-w-7xl bg-white rounded-lg overflow-hidden">
            <iframe
              src={selectedDoc.filePath}
              className="w-full h-full"
              title={selectedDoc.title}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MarketingCampaignCard; 