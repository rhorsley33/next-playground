import React from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <div className='w-3/4'>
      <input
        type='text'
        placeholder='Search for user by first name, last name, or email'
        className='w-3/4 px-4 py-2 ml-3 border border-slate-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent text-slate-900'
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
