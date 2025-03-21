import React from 'react';
import { Play } from 'lucide-react';

const BrandVideosPage = () => {
  const videos = [
    { id: 1, title: 'Reel 01', url: '/src/assets/Pro Photos for Brand/Reels for Brand\'s Social Media/Reel 01.mp4' },
    { id: 2, title: 'Reel 02', url: '/src/assets/Pro Photos for Brand/Reels for Brand\'s Social Media/Reel 02.mp4' },
    { id: 3, title: 'Reel 03', url: '/src/assets/Pro Photos for Brand/Reels for Brand\'s Social Media/Reel 03.mp4' },
    { id: 4, title: 'Reel 04', url: '/src/assets/Pro Photos for Brand/Reels for Brand\'s Social Media/Reel 04.mp4' },
    { id: 7, title: 'Reel 07', url: '/src/assets/Pro Photos for Brand/Reels for Brand\'s Social Media/reel 07.mp4' },
    { id: 9, title: 'Reel 09', url: '/src/assets/Pro Photos for Brand/Reels for Brand\'s Social Media/Reel 09.mp4' },
    { id: 10, title: 'Reel 10', url: '/src/assets/Pro Photos for Brand/Reels for Brand\'s Social Media/reel 10.MP4' },
    { id: 11, title: 'Reel 11', url: '/src/assets/Pro Photos for Brand/Reels for Brand\'s Social Media/Reel 11.mp4' },
    { id: 12, title: 'Reel 12', url: '/src/assets/Pro Photos for Brand/Reels for Brand\'s Social Media/Reel 12.mp4' },
    { id: 13, title: 'Reel 13', url: '/src/assets/Pro Photos for Brand/Reels for Brand\'s Social Media/reel 13.MP4' },
    { id: 23, title: 'Reel 23.1', url: '/src/assets/Pro Photos for Brand/Reels for Brand\'s Social Media/reel 23.1.MP4' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-stone-50">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-light text-stone-800 mb-12 text-center">
          Brand Video Edits
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="relative aspect-video">
                <video
                  src={video.url}
                  className="w-full h-full object-cover"
                  controls
                  poster="/src/assets/images/video-thumbnail.jpg"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity">
                  <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-stone-800">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandVideosPage; 