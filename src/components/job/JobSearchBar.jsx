import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

const JobSearchBar = ({ onSearch, className = '' }) => {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(`${keyword} ${location}`.trim());
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`bg-white shadow-lg rounded-lg p-4 flex items-center space-x-2 ${className}`}
    >
      <div className="flex items-center flex-grow border-r pr-2">
        <Search className="text-gray-400 mr-2" />
        <input 
          type="text" 
          placeholder="Nhập từ khóa công việc" 
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="w-full focus:outline-none"
        />
      </div>

      <div className="flex items-center flex-grow pl-2">
        <MapPin className="text-gray-400 mr-2" />
        <input 
          type="text" 
          placeholder="Địa điểm" 
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full focus:outline-none"
        />
      </div>

      <button 
        type="submit" 
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      >
        Tìm Kiếm
      </button>
    </form>
  );
};

export default JobSearchBar;