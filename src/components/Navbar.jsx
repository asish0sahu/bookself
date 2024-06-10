/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">Book Search</Link>
      <Link to="/bookshelf" className="text-lg bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded">My Bookshelf</Link>
    </nav>
  );
};

export default Navbar;
