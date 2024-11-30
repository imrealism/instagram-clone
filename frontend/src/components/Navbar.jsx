import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, PlusCircleIcon, UserCircleIcon } from '@heroicons/react/24/outline';

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-xl font-semibold">Instagram Clone</h1>
          </Link>

          {/* Navigation Icons */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="p-2 hover:bg-gray-100 rounded-full">
              <HomeIcon className="h-6 w-6" />
            </Link>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <PlusCircleIcon className="h-6 w-6" />
            </button>
            <Link to="/profile" className="p-2 hover:bg-gray-100 rounded-full">
              <UserCircleIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;