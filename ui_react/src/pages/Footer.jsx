import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 fixed bottom-0 w-full">
      <div className="flex justify-center space-x-4">
        <p><Link to="/privacy-policy">Privacy Policy</Link></p>
        <p><Link to="/terms-and-conditions">Terms & Conditions</Link></p>
      </div>
      <p>&copy; 2024 Your Website</p>
      <div className="icon-container cursor-pointer absolute bottom-4 right-4">
        <Link to="/Messaging">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-chat-dots-fill animate-bounce"
            viewBox="0 0 16 16"
          >
            <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
          </svg>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
