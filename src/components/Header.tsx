import React from 'react';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="text-pink-400 text-2xl font-bold">Sivam :-)</div>
        <nav className="flex space-x-6">
          <a href="#home" className="hover:text-pink-400">Home</a>
          <a href="#about" className="hover:text-pink-400">About</a>
          <a href="#education" className="hover:text-pink-400">Education</a>
          <a href="#projects" className="hover:text-pink-400">Projects</a>
          <a href="#contact" className="hover:text-pink-400">Contact</a>
        </nav>
      </div>
    </header>
  );
}