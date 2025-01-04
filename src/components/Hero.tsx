import React from 'react';

export default function Hero() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-cyan-400 mb-4">
          Jai Shree Ram Welcome to my portfolio
        </p>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent mb-6">
          Namaskar, I'm Sivam Mohapatra
        </h1>
        <p className="text-xl text-gray-300 mb-12">
          Problem Solver | Web Developer | Mathematics Enthusiast
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="text-pink-400 text-3xl mb-4">⌨️</div>
            <h3 className="font-semibold mb-2">Clean Code</h3>
            <p className="text-gray-400">
              Writing elegant, maintainable solutions
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="text-pink-400 text-3xl mb-4">⚡</div>
            <h3 className="font-semibold mb-2">Modern Stack</h3>
            <p className="text-gray-400">Using cutting-edge technologies</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="text-pink-400 text-3xl mb-4">⚙️</div>
            <h3 className="font-semibold mb-2">Optimization</h3>
            <p className="text-gray-400">Building performant applications</p>
          </div>
        </div>

        <div className="flex gap-4">
          <a
            href="#work"
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full hover:opacity-90"
          >
            View My Work
          </a>
          <a
            href="https://drive.google.com"
            class="border border-gray-600 text-white px-6 py-3 rounded-full hover:bg-gray-800"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
