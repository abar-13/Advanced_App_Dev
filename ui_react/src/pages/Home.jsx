import React from 'react';
import Footer from './Footer';

function Home() {
  return (
    <div className="relative h-screen">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://www.shutterstock.com/shutterstock/photos/639656425/display_1500/stock-vector-amazing-cartoon-girl-in-yoga-lotus-pose-practicing-yoga-vector-illustration-young-and-happy-639656425.jpg)',
          backgroundSize: '60%'  
        }}
      ></div>

      <nav className="bg-gray-800 p-4 absolute top-0 w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">Yoga Academy</span>
          </div>
          
          <div className="hidden lg:block">
            <div className="flex items-center">
              <a href="/register" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
                Register
              </a>
              <a href="/login" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
                Login
              </a>
              <a href="/Messaging" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>

   
      <div className="flex justify-end items-center h-full relative z-2 pr-20">
  <a href="/about" className="bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out hover:from-pink-600 hover:to-pink-700 transform hover:-translate-y-1 hover:scale-110">
    More Info
  </a>
</div>

    
      <div>
      <Footer/></div>
    </div>
  );
}

export default Home;
