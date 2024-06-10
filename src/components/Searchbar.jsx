/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const SearchBars = ({ query, setQuery }) => {
  return (
    <div className="my-4">
      <label className="block text-center text-xl font-bold mb-2">Search by book name:</label>
      <input
        type="text"
        className="w-full p-2 border rounded"
        placeholder="Type book name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBars;
