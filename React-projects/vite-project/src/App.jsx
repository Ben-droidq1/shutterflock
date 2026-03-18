import Image from './image.jsx'
import ImageSearch from './imageSearch.jsx';
import React, {useState, useEffect, useCallback} from 'react';

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('nature');
  const [error, setError] = useState(null);

  const fetchImages = useCallback(async (query) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    if (!apiKey || apiKey === 'your_api_key_here') {
      setError('API key is not configured. Please check your .env file.');
      setIsloading(false);
      return;
    }
    
    setIsloading(true);
    setError(null);
    
    try {
      const response = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo&pretty=true`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log(data);
      setImages(data.hits || []);
    } catch (err) {
      console.log(err);
      setError('Failed to fetch images. Please try again.');
    } finally {
      setIsloading(false);
    }
  }, []);

  useEffect(() => {
    fetchImages(searchTerm);
  }, [searchTerm, fetchImages]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      {/* Full-screen loading overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-4 border-blue-500"></div>
            <p className="mt-4 text-gray-700 text-lg font-medium">Loading images...</p>
          </div>
        </div>
      )}

      <ImageSearch onSearch={handleSearch} isLoading={isLoading} />

      <div className="w-full max-w-7xl mx-auto px-4 grow flex flex-col">
        {error && (
          <div className="text-center grow flex items-center justify-center">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg max-w-md mx-auto">
              <p>{error}</p>
            </div>
          </div>
        )}

        {!isLoading && !error && images.length === 0 && (
          <div className="text-center grow flex items-center justify-center">
            <p className="text-gray-600">No images found. Try a different search term.</p>
          </div>
        )}

        {!isLoading && !error && images.length > 0 && (
          <div className="grow">
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center'>
              {images.map(image =>
                <Image key={image.id} image={image} />
              )}
            </div>
            <div className="text-center mt-8 mb-4">
              <p className="text-gray-600">Showing {images.length} images for "{searchTerm}"</p>
            </div>
          </div>
        )}

        <footer className="text-center py-8 border-t border-gray-200 mt-auto">
          <p className="text-gray-500 text-sm">
            Image Gallery powered by{' '}
            <a
              href="https://pixabay.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 underline"
            >
              Pixabay API
            </a>
          </p>
          <p className='text-gray-500'>Made with ❤️ by <a href='https://benjamin-mazi.vercel.app/'>Benjamin</a></p>
        </footer>
      </div>
   </>      
    
    
) }