import React, { useEffect, useRef, useState } from 'react';
import { Download, Video, ArrowLeft, Play, X } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import brand photos PDF using Vite's asset handling
const brandPhotosPdf = new URL('../assets/Professional Brand Photos Edits.pdf', import.meta.url).href;

// Import video assets using Vite's asset handling
const videoAssets = [
  { id: 1, title: 'Reel 01', url: new URL('../assets/Pro Photos for Brand/Reels for Brand\'s Social Media/Reel 01.mp4', import.meta.url).href },
  { id: 2, title: 'Reel 02', url: new URL('../assets/Pro Photos for Brand/Reels for Brand\'s Social Media/Reel 02.mp4', import.meta.url).href },
  { id: 3, title: 'Reel 03', url: new URL('../assets/Pro Photos for Brand/Reels for Brand\'s Social Media/Reel 03.mp4', import.meta.url).href },
  { id: 4, title: 'Reel 04', url: new URL('../assets/Pro Photos for Brand/Reels for Brand\'s Social Media/Reel 04.mp4', import.meta.url).href },
  { id: 7, title: 'Reel 07', url: new URL('../assets/Pro Photos for Brand/Reels for Brand\'s Social Media/reel 07.mp4', import.meta.url).href },
  { id: 9, title: 'Reel 09', url: new URL('../assets/Pro Photos for Brand/Reels for Brand\'s Social Media/Reel 09.mp4', import.meta.url).href },
  { id: 10, title: 'Reel 10', url: new URL('../assets/Pro Photos for Brand/Reels for Brand\'s Social Media/reel 10.MP4', import.meta.url).href },
  { id: 11, title: 'Reel 11', url: new URL('../assets/Pro Photos for Brand/Reels for Brand\'s Social Media/Reel 11.mp4', import.meta.url).href },
  { id: 12, title: 'Reel 12', url: new URL('../assets/Pro Photos for Brand/Reels for Brand\'s Social Media/Reel 12.mp4', import.meta.url).href },
  { id: 13, title: 'Reel 13', url: new URL('../assets/Pro Photos for Brand/Reels for Brand\'s Social Media/reel 13.MP4', import.meta.url).href },
  { id: 23, title: 'Reel 23.1', url: new URL('../assets/Pro Photos for Brand/Reels for Brand\'s Social Media/reel 23.1.MP4', import.meta.url).href },
];

const BrandContentPage = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<{ id: number; title: string; url: string } | null>(null);
  const [loadedPreviews, setLoadedPreviews] = useState<boolean[]>(new Array(videoAssets.length).fill(false));

  useEffect(() => {
    // Initialize video refs array
    videoRefs.current = videoRefs.current.slice(0, videoAssets.length);

    // Load first frame for first 4 videos
    videoAssets.slice(0, 4).forEach((_, index) => {
      const video = videoRefs.current[index];
      if (video) {
        video.currentTime = 0.1;
        const handleLoaded = () => {
          setLoadedPreviews(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        };
        video.addEventListener('loadeddata', handleLoaded);
        return () => video.removeEventListener('loadeddata', handleLoaded);
      }
    });

    // Add keyboard event listener for ESC key
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && modalOpen) {
        handleCloseModal();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [videoAssets.length, modalOpen]);

  const handleVideoClick = (index: number) => {
    setSelectedVideo(videoAssets[index]);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
    setModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-stone-50">
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-800 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-light text-stone-800 mb-12 text-center">
          Brand Content
        </h1>

        {/* PDF Section */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-medium text-stone-800 mb-6">Professional Brand Photos Edits</h2>
              <div className="w-full max-w-4xl mx-auto bg-stone-50 rounded-lg overflow-hidden" style={{ height: '800px' }}>
                <iframe
                  src={brandPhotosPdf}
                  className="w-full h-full"
                  title="Professional Brand Photos Edits"
                />
              </div>
              <div className="mt-6 flex justify-center">
                <a
                  href={brandPhotosPdf}
                  download="Professional Brand Photos Edits.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Videos Section */}
        <div>
          <h2 className="text-2xl font-medium text-stone-800 mb-8 text-center">Brand's Reels for Social Media</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoAssets.map((video, index) => (
              <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                <div className="relative aspect-video cursor-pointer" onClick={() => handleVideoClick(index)}>
                  <video
                    ref={el => videoRefs.current[index] = el}
                    className="w-full h-full object-cover"
                    playsInline
                    preload={index < 4 ? "auto" : "metadata"}
                    muted
                  >
                    <source src={video.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity">
                    {!loadedPreviews[index] && index < 4 ? (
                      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Modal */}
        {modalOpen && selectedVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl">
              <div className="absolute -top-16 right-0 flex items-center gap-4 z-50">
                <span className="text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full">Press ESC to exit</span>
                <button
                  onClick={handleCloseModal}
                  className="text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 p-2 rounded-full"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>
              <div className="relative">
                <video
                  ref={modalVideoRef}
                  className="w-full rounded-lg"
                  controls
                  autoPlay
                  playsInline
                >
                  <source src={selectedVideo.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 px-4 py-2 rounded-full flex items-center gap-2">
                  <span className="text-white text-sm">ESC</span>
                  <span className="text-white text-sm">to exit</span>
                </div>
              </div>
              <h3 className="text-white text-xl mt-4">{selectedVideo.title}</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandContentPage; 