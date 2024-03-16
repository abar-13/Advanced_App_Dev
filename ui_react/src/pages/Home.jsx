import React from 'react';

function Home() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">My Website</span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-gray-300 border-gray-400 hover:text-white hover:border-white">
            <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h12M4 10h12M4 14h12"></path></svg>
          </button>
        </div>
        <div className="hidden lg:block">
          <div className="flex items-center">
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
              Home
            </a>
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
              About
            </a>
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Home;
