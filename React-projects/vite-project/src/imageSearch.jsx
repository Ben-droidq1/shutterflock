import React, {useState} from 'react';
import search from './assets/search.png'

const ImageSearch = ({ onSearch, isLoading }) => {
  const [term, setTerm] = useState('');

  const handleSearch = () => {
    if (term.trim()) {
      onSearch(term.trim());
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">shutterflock</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Over 6 million+ high quality stock images, videos and music shared by our talented community.
        </p>
      </div>

      <div className="mb-8 flex justify-center">
        <form onSubmit={onSubmit} className="flex w-full max-w-2xl relative">
          <input
            type="text"
            placeholder="Search for images..."
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
            className="flex-1 px-6 py-4 pr-12 text-gray-900 bg-white border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 shadow-sm"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-400  transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
          <img src={search} className="w-6 h-6  to-black" alt="search" />
          </button>
        </form>
      </div>
    </div>
  );
};







export default ImageSearch;