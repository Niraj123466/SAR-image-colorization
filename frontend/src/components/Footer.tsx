import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-6 w-full">
      <div className="container mx-auto flex justify-between items-center px-4">
        
        {/* Logo */}
        <div className="text-white text-3xl flex items-center space-x-2">
          {/* Simulating the logospace logo */}
          <span className="font-bold tracking-wide">hello</span>
          <span className="text-blue-500 font-bold animate-pulse">Space</span>
        </div>
        
        {/* Contact Page Link */}
        <div>
          <a
            href="/contact"
            className="text-gray-400 hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-110"
          >
            Contact Us
          </a>
        </div>

        {/* Copyright Text */}
        <div className="text-gray-400">
          &copy; 2024 All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
