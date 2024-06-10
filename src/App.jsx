/* eslint-disable no-unused-vars */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import BookSearchPage from './Pages/BookSearchPage';
import BookshelfPage from './Pages/BookShelfPage';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes> 
            <Route path="/" element={<BookSearchPage />} /> 
            <Route path="/bookshelf" element={<BookshelfPage />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

