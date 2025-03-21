import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, X, ChevronLeft, ChevronRight, Plus, Trash2, Loader2 } from 'lucide-react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// Use Vite's dynamic import for images
const images = import.meta.glob('../assets/Photos/*.{jpg,JPG}', { eager: true });

// Define the initial media items with imported images
const initialPhotos = Object.entries(images).map(([path, module]) => {
  console.log('Processing image:', path);
  return {
    src: (module as { default: string }).default,
    type: 'jpg' as const
  };
});

// Log the initial photos for debugging
console.log('Initial photos:', initialPhotos);

const ITEMS_PER_PAGE = 12;

interface MediaItem {
  id: string;
  src: string;
  type: 'image';
  caption: string;
}

const PhotographyPage = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
  const fileInputRef = useRef<HTMLInputElement>(null);

  const initializeDefaultMedia = () => {
    console.log('Initializing default media...');
    const initialMedia: MediaItem[] = initialPhotos.map((photo, index) => {
      console.log(`Processing photo ${index}:`, photo.src);
      return {
        id: `item-${index}`,
        src: photo.src,
        type: 'image' as const,
        caption: ''
      };
    });

    console.log('Initial media created:', initialMedia);
    setMediaItems(initialMedia);
    localStorage.setItem('photographyMedia', JSON.stringify(initialMedia));
  };

  // Initialize media items from localStorage or default mediaGroups
  useEffect(() => {
    const savedMedia = localStorage.getItem('photographyMedia');
    if (savedMedia) {
      try {
        const parsedMedia = JSON.parse(savedMedia);
        // Validate the loaded data has the correct structure
        if (Array.isArray(parsedMedia) && parsedMedia.every(item => 
          item.id && item.src && item.type === 'image' && 'caption' in item
        )) {
          setMediaItems(parsedMedia);
        } else {
          initializeDefaultMedia();
        }
      } catch (error) {
        console.error('Error parsing saved media:', error);
        initializeDefaultMedia();
      }
    } else {
      initializeDefaultMedia();
    }
  }, []);

  // Save to localStorage whenever mediaItems changes
  useEffect(() => {
    if (mediaItems.length > 0) {
      localStorage.setItem('photographyMedia', JSON.stringify(mediaItems));
    }
  }, [mediaItems]);

  // Calculate current items based on page
  const currentItems = mediaItems.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(mediaItems.length / ITEMS_PER_PAGE);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const newMediaItems = Array.from(mediaItems);
    const sourceIndex = currentPage * ITEMS_PER_PAGE + result.source.index;
    const destinationIndex = currentPage * ITEMS_PER_PAGE + result.destination.index;
    
    const [reorderedItem] = newMediaItems.splice(sourceIndex, 1);
    newMediaItems.splice(destinationIndex, 0, reorderedItem);

    setMediaItems(newMediaItems);
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    setIsUploading(true);

    try {
      const newItems: MediaItem[] = [];

      for (const file of Array.from(files)) {
        try {
          // Create a data URL from the file
          const dataUrl = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
              if (typeof reader.result === 'string') {
                resolve(reader.result);
              } else {
                reject(new Error('Failed to read file'));
              }
            };
            reader.onerror = () => reject(reader.error);
            reader.readAsDataURL(file);
          });

          newItems.push({
            id: `item-${Date.now()}-${file.name}`,
            src: dataUrl,
            type: 'image',
            caption: ''
          });
        } catch (error) {
          console.error(`Error processing file ${file.name}:`, error);
          continue;
        }
      }

      // Update state with all new items at once
      setMediaItems(prev => {
        const updatedItems = [...prev, ...newItems];
        localStorage.setItem('photographyMedia', JSON.stringify(updatedItems));
        return updatedItems;
      });

      // Navigate to the last page to show newly uploaded images
      const newTotalPages = Math.ceil((mediaItems.length + newItems.length) / ITEMS_PER_PAGE);
      setCurrentPage(newTotalPages - 1);

    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleDeleteImage = (itemId: string) => {
    setMediaItems(prev => {
      const newItems = prev.filter(item => item.id !== itemId);
      
      // Save immediately after deletion
      localStorage.setItem('photographyMedia', JSON.stringify(newItems));
      
      // Adjust current page if necessary
      const newTotalPages = Math.ceil(newItems.length / ITEMS_PER_PAGE);
      if (currentPage >= newTotalPages) {
        setCurrentPage(Math.max(0, newTotalPages - 1));
      }
      
      return newItems;
    });
  };

  const handleCaptionChange = (itemId: string, newCaption: string) => {
    setMediaItems(prev =>
      prev.map(item =>
        item.id === itemId
          ? { ...item, caption: newCaption }
          : item
      )
    );
  };

  // Add a reset function to restore original images
  const handleResetGallery = () => {
    initializeDefaultMedia();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-stone-50">
      <div className="max-w-7xl mx-auto p-8">
        <Link to="/" className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-800 mb-12">
          <ArrowLeft className="w-5 h-5" />
          Back to home
        </Link>
        
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-light text-stone-800">Photography Portfolio</h1>
          <div className="flex gap-4">
            <button
              onClick={handleResetGallery}
              className="px-4 py-2 bg-stone-600 text-white rounded-lg hover:bg-stone-700 transition-colors"
            >
              Reset Gallery
            </button>
            <div className="relative">
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                multiple
                onChange={handleFileUpload}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-2 px-4 py-2 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition-colors"
                disabled={isUploading}
              >
                {isUploading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Uploading...
                  </>
                ) : (
                  <>
                    <Plus className="w-5 h-5" />
                    Upload Images
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
        
        <p className="text-xl text-stone-600 mb-12">A collection of my photography work exploring visual storytelling and brand narratives.</p>
        
        {/* Draggable Grid Layout */}
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="grid">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 ${
                  snapshot.isDraggingOver ? 'bg-stone-100 rounded-lg' : ''
                }`}
                style={{
                  minHeight: '200px',
                  transition: 'background-color 0.2s ease'
                }}
              >
                {currentItems.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
                      >
                        {/* Image Container */}
                        <div
                          {...provided.dragHandleProps}
                          className={`group relative aspect-square cursor-move overflow-hidden ${
                            snapshot.isDragging ? 'z-50 shadow-2xl scale-105 rotate-2' : ''
                          }`}
                        >
                          <img
                            src={item.src}
                            alt={`Photography piece ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            onError={(e) => {
                              console.error(`Failed to load image: ${item.src}`);
                              setImageErrors(prev => new Set([...prev, item.src]));
                              e.currentTarget.src = '/images/placeholder.jpg';
                            }}
                            onLoad={() => {
                              console.log(`Successfully loaded image: ${item.src}`);
                              setImageErrors(prev => {
                                const newErrors = new Set(prev);
                                newErrors.delete(item.src);
                                return newErrors;
                              });
                            }}
                            onClick={(e) => {
                              if (!snapshot.isDragging) {
                                setSelectedMedia(item);
                              }
                            }}
                          />
                          <div className={`absolute inset-0 bg-black transition-all duration-300 ${
                            snapshot.isDragging ? 'bg-opacity-10' : 'bg-opacity-0 group-hover:bg-opacity-20'
                          }`} />
                          
                          {/* Controls Overlay */}
                          <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteImage(item.id);
                              }}
                              className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                              title="Delete image"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                            <div className="p-2 bg-white bg-opacity-75 rounded-full" title="Drag to reorder">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Caption Input */}
                        <div className="p-3">
                          <textarea
                            value={item.caption}
                            onChange={(e) => handleCaptionChange(item.id, e.target.value)}
                            placeholder="Add a caption..."
                            className="w-full px-2 py-1 text-sm text-stone-600 bg-stone-50 rounded border border-stone-200 focus:border-stone-400 focus:ring-1 focus:ring-stone-400 resize-none transition-colors"
                            rows={2}
                            onClick={(e) => e.stopPropagation()}
                          />
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-8 mt-8">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 0}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              currentPage === 0
                ? 'text-stone-400 cursor-not-allowed'
                : 'text-stone-600 hover:text-stone-800'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>
          <span className="text-stone-600">
            Page {currentPage + 1} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages - 1}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              currentPage === totalPages - 1
                ? 'text-stone-400 cursor-not-allowed'
                : 'text-stone-600 hover:text-stone-800'
            }`}
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Full Media Modal */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-stone-300 transition-colors"
            onClick={() => setSelectedMedia(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative max-w-7xl w-full max-h-[90vh] flex flex-col items-center justify-center">
            <img
              src={selectedMedia.src}
              alt="Selected photograph"
              className="max-w-full max-h-[80vh] object-contain"
              onError={(e) => {
                console.error(`Failed to load image: ${selectedMedia.src}`);
                e.currentTarget.src = '/images/placeholder.jpg';
              }}
            />
            {selectedMedia.caption && (
              <p className="mt-4 text-white text-center max-w-2xl">
                {selectedMedia.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotographyPage; 