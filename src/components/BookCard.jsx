/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const BookCard = ({ book, addToBookshelf }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md border border-gray-200 flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-bold">Book Title: <span className="font-normal">{book.title}</span></h2>
        <p className="text-gray-700">Edition Count: <span className="font-bold">{book.edition_count}</span></p>
      </div>
      <button 
        className="mt-2 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
        onClick={() => addToBookshelf(book)}
      >
        Add to Bookshelf
      </button>
    </div>
  );
};

export default BookCard;
